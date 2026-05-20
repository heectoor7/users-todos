import { ApiTodoT, todoAdapter } from './todo.definitions';

// import { callApi } from '@/lib/call-api';
// import { TodoT } from './todo.definitions';
// import { handleResponseError } from '@/lib/errors';

const API_BASE_URL = process.env.API_URL_JSONPLACEHOLDER;

export const getTodosServices = async () => {
  const urlSufix = `/todos?_limit=30`;
  const apiUrl = API_BASE_URL + urlSufix;
  console.log({ apiUrl });


  const response = await fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Error en la petición: ${response.status} ${response.statusText}`);
  }

  const data: ApiTodoT[] = await response.json();
  
  return data.map(todoAdapter);

  // =====================================================

  // const response = await callApi<ApiTodoT[]>(apiUrl, "GET", {
  // });
  // console.log({ response });

  // handleResponseError(response);

  // const todos = response.data.map(todoAdapter);

  // return {
  //   ...response,
  //   data: todos,
  // };
};