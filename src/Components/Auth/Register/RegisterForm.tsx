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
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(registrationSchema),
    mode: "onChange",

    // 🔥 MUST: prevents uncontrolled → controlled error
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const {
    handleSubmit,
    control,
    watch,
    formState: { isSubmitting },
  } = form;

  // 🔥 SAFE WATCH (never undefined)
  const password = watch("password") || "";
  const passwordConfirm = watch("passwordConfirm") || "";

  const isMismatch =
    passwordConfirm.length > 0 && password !== passwordConfirm;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await registerUser(data);

      if (res?.status) {
        toast.success(res?.message || "Registered successfully");
        router.push("/login");
      } else {
        toast.error(res?.message || "Registration failed");
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error?.message || "Something went wrong");
    }
  };

  return (
    <div className="container mx-auto min-h-screen flex items-center justify-center bg-gray-800">
      <div className="w-full max-w-md bg-white p-6 rounded shadow space-y-4">

        <h1 className="text-2xl font-bold text-center">Register</h1>

        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            {/* NAME */}
            <FormField
              control={control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <input
                      type="text"
                      {...field}
                      className="w-full border p-2 rounded"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* EMAIL */}
            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <input
                      type="email"
                      {...field}
                      className="w-full border p-2 rounded"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* PASSWORD */}
            <FormField
              control={control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <input
                      type="password"
                      {...field}
                      className="w-full border p-2 rounded"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* CONFIRM PASSWORD */}
            <FormField
              control={control}
              name="passwordConfirm"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <input
                      type="password"
                      {...field}
                      className="w-full border p-2 rounded"
                    />
                  </FormControl>

                  {/* custom mismatch message */}
                  {isMismatch && (
                    <p className="text-red-500 text-sm">
                      Passwords do not match
                    </p>
                  )}

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* SUBMIT BUTTON */}
             
            <Button
              type="submit"
              disabled={isSubmitting || isMismatch}
              className="w-full bg-blue-900 hover:bg-blue-800"
            >
              {isSubmitting ? "Registering..." : "Register"}
            </Button>
            

            <p className="text-sm text-center">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-700 hover:underline">
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