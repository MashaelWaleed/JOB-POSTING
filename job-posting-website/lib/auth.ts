
"use server"//"use server" does not mean "this is a server component."
// It marks Server Actions: functions that run on the server but can be
//  called from a form or a button, including from a Client Component.
import { signIn, signOut } from "../auth";

export const login = async () => {
  await signIn("github", { redirectTo: "/" });
};

export const logout = async () => {
  await signOut({ redirectTo: "/auth/signin" });
};