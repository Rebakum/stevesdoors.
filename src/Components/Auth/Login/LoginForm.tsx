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
import { zodResolver } from "@hookform/resolvers/zod";

import { FieldValues, useForm } from "react-hook-form";

import LoginUser from "@/services/AuthService";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { loginSchema } from "./LoginValidation";

const LoginForm = () => {
  const form = useForm({ resolver: zodResolver(loginSchema) });
  const {
    formState: { isSubmitting },
  } = form;
  const router = useRouter();

  const onSubmit = async (data: FieldValues) => {
    console.log("Login form data:", data);

    try {
      const result = await LoginUser(data);
      console.log("Login response:", result);

      const role = result?.data?.user?.role;
      console.log("Role:", role);

      if (result?.success && role?.toLowerCase() === "admin") {
        toast.success(result?.message);
        console.log("Redirecting to dashboard...");
        router.push("/dashboard");
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

            <Button
              type="submit"
              className="w-full bg-blue-900 hover:bg-blue-800 mt-2"
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
