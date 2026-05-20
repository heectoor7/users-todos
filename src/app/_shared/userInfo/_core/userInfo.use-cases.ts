import { searchUserServices } from "./userInfo.services";

export async function searchUserUseCase(query: string) {
  if (!query) {
    throw new Error("La búsqueda está vacia");
  }

  const result = await searchUserServices(query);
  
  return result.data; 
}