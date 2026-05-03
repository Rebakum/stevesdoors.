"use server";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
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
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || "Registration failed");
    }
    return data;
  } catch (error: any) {
    console.error("Registration error:", error);
    throw error;
  }
};

export const LoginUser = async (userData: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(userData),
    });
    const result = await res.json();
    console.log("login user", result);
    if (!res.ok) {
      throw new Error(result.message || "Login failed");
    }
    if (result?.status) {
      (await cookies()).set("token", result?.data?.token);
    }
    return result;
  } catch (error: any) {
    console.error("Login error:", error);
    throw error;
  }
};


export const getCurrentUser = async () => {
  const token = (await cookies()).get("token")?.value;
  let decodedData = null;

  if (token) {
    decodedData = await jwtDecode(token);
    return decodedData;
  } else {
    return null;
  }
};

export default LoginUser;

export const ReCaptchTokenVaryfication = async (token: string) => {
  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret: process.env.NEXT_PUBLIC_ReCAPTCHA_SERVER_KEY!,
        response: token,
      }),
    });
    const result = await res.json();
    if (!res.ok) {
      throw new Error(`ReCAPTCHA verification failed: ${result.error || 'Unknown error'}`);
    }
    return result;
  } catch (error: any) {
    console.error("ReCAPTCHA error:", error);
    throw error;
  }
};
export const logout = async () => {
  try {
    (await cookies()).delete("token");
    console.log("User logged out successfully.");
  } catch (error: any) {
    console.error("Logout error:", error);
    throw error;
  }
};
