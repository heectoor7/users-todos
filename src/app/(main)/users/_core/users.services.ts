import { ApiUsersT, usersAdapter, UsersT } from './users.definitions';
import { callApi } from '@/lib/call-api';

const API_BASE_URL = process.env.API_URL_JSONPLACEHOLDER;

export const getUsersServices = async () => {
  const urlSufix = `/users`;
  const apiUrl = API_BASE_URL + urlSufix;
  console.log({ apiUrl });

  const response = await callApi<ApiUsersT[]>(apiUrl, "GET");

  const usersAdapted: UsersT[] = response.data.map(usersAdapter);

  return {
    ...response,
    data: usersAdapted,
  };
};

export const createUserService = async (userData: Partial<UsersT>) => {
  const urlSufix = `/users`;
  const apiUrl = API_BASE_URL + urlSufix;
  console.log({ apiUrl });

  const apiUserData = {
    ...userData,
    id: undefined,
  };

  const response = await callApi<ApiUsersT>(apiUrl, "POST", {
    data: apiUserData,
  });
  
  return {
    ...response,
    data: usersAdapter(response.data),
  };
};