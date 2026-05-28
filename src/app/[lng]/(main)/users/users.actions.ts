"use server";
import { createUserUseCase } from "./_core/users.use-cases";

export const createUserAction = async (prevState: any, formData: FormData) => {
  const rawData = {
    nombre: formData.get("name") as string,
    username: formData.get("username") as string,
    email: formData.get("email") as string,
    telefono: formData.get("phone") as string,
    website: formData.get("website") as string,
    calle: formData.get("street") as string,
    casa: formData.get("suite") as string,
    ciudad: formData.get("city") as string,
    nombreEmpresa: formData.get("companyName") as string,
    catchPhrase: formData.get("catchPhrase") as string,
    bs: formData.get("bs") as string,
  };

  return await createUserUseCase(rawData);
};
