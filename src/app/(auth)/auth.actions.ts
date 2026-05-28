"use server"

import { getIronSession } from "iron-session";
import { sessionOptions, SessionData } from "./lib";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const username = "admin";

export type FormState = {
  error: string | null;
};

const getSession = async () => {

  const cookieStore = await cookies();
  const session = await getIronSession<SessionData>(cookieStore, sessionOptions);
  return session;
};

export const login = async (prevState: FormState | null, formData: FormData): Promise<FormState> => {
  const session = await getSession();

  const formUsername = formData.get("username")?.toString()
  // const formPassword = formData.get("password")?.toString()

  if(formUsername !== username) {
    return {error: "Usuario no encontrado"}
  }

  session.userId = "123";
  session.username = formUsername;
  session.isLoggedIn = true;

  await session.save();
  redirect("/")

};

export const logout = async () => {
  const session = await getSession();

  session.destroy();
  redirect("/")
};
