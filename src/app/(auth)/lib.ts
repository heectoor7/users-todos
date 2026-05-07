import { SessionOptions } from "iron-session";

export type SessionData = {
  userId?: string;
  username?: string;
  img?: string;
  isLoggedIn: boolean;
}

export const defaultSessionData: SessionData = {
 isLoggedIn: false,
}

export const sessionOptions: SessionOptions = {
  password: process.env.SESSION_PASSWORD!,
  cookieName: "myapp_session",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  },
}