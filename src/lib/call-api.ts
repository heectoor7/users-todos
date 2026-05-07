import { RequestInit } from "next/dist/server/web/spec-extension/request";

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type ResultCode =
  | "200"
  | "201"
  | "204"
  | "400"
  | "401"
  | "403"
  | "404"
  | "500";
export interface ApiResponseT<T = unknown> {
  result: ResultCode;
  message: string;
  data: T;
  Message?: string;
}

//! NO FUNCIONA EN EDGE RUNTIME
// // Función auxiliar para escribir en el archivo de log
// function logToFile(filePath: string, message: string) {
//   const logFilePath = path.resolve(__dirname, filePath);
//   console.log({logFilePath})
//   const logMessage = `${new Date().toISOString()} - ${message}\n`;

//   fs.appendFileSync(logFilePath, logMessage, 'utf8');
// }

export async function callApi<T = any>(
  url: string,
  method: HttpMethod,
  init?: RequestInit & {
    authToken?: string;
    data?: any;
    cacheTags?: string[];
  },
): Promise<ApiResponseT<T>> {
  const { authToken, data, cacheTags, headers, body, ...initRest } = init ?? {};

  const requestHeaders = {
    Authorization: authToken ? "Bearer " + authToken : "",
    "Content-Type": "application/json",
    ...headers,
  };
  console.log("requestHeaders", requestHeaders);

  const requestInit: RequestInit = {
    method,
    headers: requestHeaders,
    body: JSON.stringify(data) ?? body ?? undefined,
    next: cacheTags ? { tags: cacheTags } : undefined,
    ...initRest,
  };
  console.log("requestInit", requestInit);
  console.log("apiUrl:", url);

  data && !requestInit.body && console.log("apiCallData", data);

  try {
    // console.time(`fetchTime - ${method}_${url}`);
    const response = await fetch(url, requestInit);

    // console.timeEnd(`fetchTime - ${method}_${url}`);
    if (!response.ok) {
      console.log({ httpResponse: response });
      throw new Error(
        `Error en la llamada a la API: ${response.status} - ${response.statusText}`,
      );
    }

    const rawData = await response.json();

    // Normalizamos la respuesta ANTES de validar el result
    const json: ApiResponseT<T> = {
      result: rawData.result ?? "200", // Si no hay result (como en JSONPlaceholder), ponemos "200"
      message: rawData.message || rawData.Message || "OK",
      data: (rawData.data ?? rawData) as T, // Si no hay .data, el cuerpo entero es la data
    };

    // Ahora esta validación ya no fallará con JSONPlaceholder
    if (!json.result || (json.result !== "200" && json.result !== "201")) {
      throw new Error(json.message || "Error desconocido");
    }

    console.log("apiUrl:", url);
    console.log("apiResponse", {
      result: json.result,
      message: json.message,
    });
    json.data && console.log("apiResponseData", json.data);

    //! NO FUNCIONA EN EDGE RUNTIME
    // const logFilePath = 'logs/api-calls.txt'
    // const logMessage = `URL: ${url}, Options: ${JSON.stringify(options)}, Response: ${JSON.stringify(json)}\n`;
    // logToFile(logFilePath, logMessage);

    return json;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    if (typeof error === "string") {
      throw new Error(error);
    }
    throw new Error("Error desconocido");
  }
}
