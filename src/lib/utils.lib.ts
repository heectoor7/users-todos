export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Agrupa un arreglo de objetos por el valor de una propiedad específica.
 *
 * @template T - Tipo de los objetos en el arreglo.
 * @param array - Arreglo de objetos a agrupar.
 * @param key - Clave del objeto por la cual se agruparán los elementos.
 * @returns Un objeto donde las claves son los valores únicos de la propiedad especificada y los valores son arreglos de objetos que comparten esa propiedad.
 *
 * @example
 * ```typescript
 * const data = [
 *   { id: 1, category: 'A' },
 *   { id: 2, category: 'B' },
 *   { id: 3, category: 'A' }
 * ];
 * const grouped = groupObjectArrayBy(data, 'category');
 * // grouped = {
 * //   A: [{ id: 1, category: 'A' }, { id: 3, category: 'A' }],
 * //   B: [{ id: 2, category: 'B' }]
 * // }
 * ```
 */
export const groupObjectArrayBy = <T>(array: T[], key: keyof T) => {
  const grouped = Object.groupBy(array, (item) => {
    if (typeof item[key] === "string" || typeof item[key] === "number") {
      return item[key];
    }
    return "";
  });

  return grouped;
};

/**
 * Splits a string by a separator and maps the resulting parts to an object with specified keys.
 * @param string string to get data from
 * @param separator separator to split the string
 * @param keys keys to map the data to
 * @returns data object with keys mapped to values from the string
 */
export const getDataFromString = (
  string: string,
  separator: string,
  keys: string[],
) => {
  const data = string.split(separator);
  const result: Record<string, string> = {};

  keys.forEach((key, index) => {
    result[key] = data[index] || "";
  });

  return result;
};

/**
 * Extrae todos los valores de tipo string de un objeto, incluyendo objetos anidados.
 *
 * @param obj - Objeto del cual extraer los strings.
 * @returns Un arreglo con todos los valores string encontrados en el objeto.
 *
 * @example
 * ```typescript
 * const obj = { a: "hola", b: { c: "mundo", d: 123 }, e: ["no", "si"] };
 * const result = extractStringsFromObject(obj);
 * // result = ["hola", "mundo", "no", "si"]
 * ```
 */
export const extractStringsFromObject = (obj: object): string[] => {
  let strings: string[] = [];
  for (const value of Object.values(obj)) {
    if (typeof value === "string") {
      strings.push(value);
    } else if (typeof value === "object" && value !== null) {
      strings = strings.concat(extractStringsFromObject(value));
    }
  }
  return strings;
};