"use client";

import { Button } from "@/Components/Ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/Components/Ui/form";
import LoginUser, { ReCaptchTokenVaryfication } from "@/services/AuthService";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
import { loginSchema } from "./LoginValidation";

const LoginForm = () => {
  const form = useForm({ resolver: zodResolver(loginSchema) });
  const {
    formState: { isSubmitting },
  } = form;
  const router = useRouter();
  const [reCaptchStatus, setReCaptchStatus] = useState(false);
  const handleRecaptchaChange = async (value: string | null) => {
    try {
      const res = await ReCaptchTokenVaryfication(value!);
      if (res?.success) {
        setReCaptchStatus(true);
        toast.success("ReCAPTCHA verified successfully.");
      }
    } catch (error) {
      console.error("ReCAPTCHA verification failed:", error);
      toast.error("ReCAPTCHA verification failed. Please try again.");
    }
  };

  const onSubmit = async (data: FieldValues) => {
    try {
      const result = await LoginUser(data);
      const role = result?.data?.user?.role;
      // console.log("Role:", role);

      if (result?.status && role?.toLowerCase() === "admin") {
        toast.success(result?.message);
        console.log("Redirecting to dashboard...");
        router.push("/profile");
      } else {
        toast.error("Only admins are allowed to access the dashboard.");
        router.push("/");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Something went wrong during login.");
    }
  };

  return (
    <div className="mx-auto container min-h-screen flex flex-col items-center justify-center bg-gray-800 ">
      <div className="w-full max-w-md bg-white space-y-6  p-6 rounded shadow-md">
        <h1 className="text-2xl font-bold text-center ">Login</h1>
        <p>Wellcome back</p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="py-2">Email</FormLabel>
                  <FormControl>
                    <input
                      type="email"
                      {...field}
                      value={field.value || ""}
                      className="py-2 px-2 border border-gray-400 rounded-sm"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="py-2">Password</FormLabel>
                  <FormControl>
                    <input
                      type="password"
                      {...field}
                      value={field.value || ""}
                      className="py-2 px-2 border border-gray-400 rounded-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center justify-center my-4">
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_ReCAPTCHA_CLIENT_KEY || ""}
                onChange={handleRecaptchaChange}
              />
            </div>

            <Button
              disabled={reCaptchStatus ? false : true}
              type="submit"
              className="w-full bg-blue-900 hover:bg-blue-800 "
            >
              {" "}
              {isSubmitting ? "logning..." : "login"}
            </Button>

            <p className="mt-4 text-sm text-center">
              Do not have an account?{" "}
              <Link href="/register" className="text-blue-800 hover:underline">
                Register
              </Link>
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
