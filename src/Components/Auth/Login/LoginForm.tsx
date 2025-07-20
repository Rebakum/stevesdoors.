"use client";

import { Button } from "@/Components/Ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/Components/Ui/form";

import { LoginUser } from "@/services/AuthService";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FieldValues, Form, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { loginSchema } from "./LoginValidation";

const LoginForm = () => {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    try {
      const res = await LoginUser(data);
      console.log("user", res);
      if (res?.success) {
        toast.success(res.message || "Login successful!");
        // TODO: Redirect or store token if needed
      } else {
        toast.error(res.message || "Login failed.");
      }
    } catch (err: any) {
      console.error(err);
      toast.error(err.message || "Something went wrong.");
    }
  };

  return (
    <div className="mx-auto container min-h-screen flex flex-col items-center justify-center bg-gray-800">
      <div className="w-full max-w-md bg-white space-y-6 p-6 rounded shadow-md">
        <h1 className="text-2xl font-bold text-center">Login Here</h1>
        <p className="text-center">Welcome back</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                      className="w-full py-2 px-3 border border-gray-400 rounded"
                      placeholder="Enter your email"
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
                      className="w-full py-2 px-3 border border-gray-400 rounded"
                      placeholder="Enter your password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-blue-900 hover:bg-blue-800 mt-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging ..." : "Login"}
            </Button>
            <p className="mt-4 text-sm text-center">
              Don&apos;t have an account?{" "}
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
