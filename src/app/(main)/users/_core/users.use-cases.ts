import { UsersT } from "./users.definitions";
import { createUserService, getUsersServices } from "./users.services";

export const getUsersUseCase = async () => {
  const { data } = await getUsersServices();
  return data;
};

export const createUserUseCase = async (userData: Partial<UsersT>) => {
  const { data } = await createUserService(userData);
  return data;
};
