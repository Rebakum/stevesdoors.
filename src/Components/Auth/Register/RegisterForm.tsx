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
import { registerUser } from "@/services/AuthService";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { registrationSchema } from "./RegisterValidation";

const RegisterForm = () => {
  const form = useForm({ resolver: zodResolver(registrationSchema) });

  const {
    formState: { isSubmitting },
  } = form;
  const password = form.watch("password");
  const passwordConfirm = form.watch("passwordConfirm");
  const router = useRouter();
  // console.log("password", password, " passwordConfirm", passwordConfirm);
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // console.log(data);
    try {
      const res = await registerUser(data);

      console.log("user", res);
      if (res.success) {
        toast.success(res?.message);
        router.push("/login");
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };
  return (
    <div className="mx-auto container min-h-screen flex flex-col items-center justify-center bg-gray-800 ">
      <div className="w-full max-w-md bg-white space-y-6  p-6 rounded shadow-md">
        <h1 className="text-2xl font-bold text-center ">Register</h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="py-2">Name</FormLabel>
                  <FormControl>
                    <input
                      type="text"
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
                      type="pssword"
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
              name="passwordConfirm"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="py-2"> Confirm Password</FormLabel>
                  <FormControl>
                    <input
                      type="password"
                      {...field}
                      value={field.value || ""}
                      className="py-2  px-2 border border-gray-400 rounded-sm "
                    />
                  </FormControl>
                  {passwordConfirm && password !== passwordConfirm ? (
                    <FormMessage className="text-red-600 text-sm">
                      Passwords do not match
                    </FormMessage>
                  ) : (
                    <FormMessage />
                  )}
                </FormItem>
              )}
            />

            <Button
              disabled={!!passwordConfirm && password !== passwordConfirm}
              type="submit"
              className="w-full bg-blue-900 hover:bg-blue-800 mt-2"
            >
              {" "}
              {isSubmitting ? "Registering..." : "Register"}
            </Button>

            <p className="mt-4 text-sm text-center">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-800 hover:underline">
                Login here
              </Link>
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default RegisterForm;
