import { ApiUsersT, usersAdapter } from '@/app/(main)/users/_core/users.definitions';
import { callApi } from '@/lib/call-api';
import { delay } from '@/lib/utils.lib';

const API_BASE_URL = process.env.API_URL_JSONPLACEHOLDER;

export const searchUserServices = async (query: string) => {
  await delay(1500)
  const urlSufix = `/users/${query}`;
  const apiUrl = API_BASE_URL + urlSufix;
  console.log({ apiUrl });

  const response = await callApi<ApiUsersT>(apiUrl, "GET");

  const userAdapted = usersAdapter(response.data);

  return {
    ...response,
    data: userAdapted,
  };
};