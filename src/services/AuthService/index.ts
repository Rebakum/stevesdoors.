"use server";

import { FieldValues } from "react-hook-form";

export const registerUser = async (userData: FieldValues) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(userData),
      }
    );
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const LoginUser = async (userData: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(userData),
    });
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// export const loginUser = async (data: { email: string; password: string }) => {
//   const res = await fetch("http://localhost:5000/api/auth/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//     credentials: "include",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to login");
//   }

//   return res.json();
// };
