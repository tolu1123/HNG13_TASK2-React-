"use client"

import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { login } from "@/actions/auth/auth";
import { loginSchema, LoginSchemaType } from "@/lib/validations/auth";
import { toastError, toastSuccess } from "@/lib/toasts";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";

type ValidationErrors = {
  username?: string[];
  email?: string[];
  password?: string[];
};

type AuthError = {
  message: string;
};

type LoginError = string | boolean | ValidationErrors | AuthError;

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  const router = useRouter()

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: LoginSchemaType) {
    try {
      const { error, success } = await login(data);

      if (error) {
        // SignUp failed
        const isValidationError = (
          err: LoginError
        ): err is ValidationErrors => {
          return typeof err === "object" && err !== null && !("message" in err);
        };

        const isAuthError = (err: LoginError): err is AuthError => {
          return typeof err === "object" && err !== null && "message" in err;
        };

        // If error was due to validation
        if (isValidationError(error)) {
          // Handle validation errors (username, email, password fields)
          Object.entries(error).forEach(([field, messages]) => {
            if (Array.isArray(messages)) {
              form.setError(field as keyof LoginSchemaType, {
                message: messages[0], // Show first error message
              });
            }
          });
        }
        // Handling specific implied errors: like non-unique username or failure with server
        else if (typeof error === "string") {
          toastError(error);
        }
        // Error from Auth service
        else if (isAuthError(error)) {
          toastError(
            error?.message || "An unexpected error occurred during sign up"
          );
        }
      }

      if (success) {
        toastSuccess("Login successful");

        router.push("/dashboard")
      }

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      toastError("An unexpected error occurred. Please try again.");
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className='overflow-hidden p-0'>
        <CardContent className='grid p-0 md:grid-cols-2'>
          <form
            id='form-login'
            className='p-6 md:p-8'
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FieldGroup>
              <div className='flex flex-col items-center gap-2 text-center'>
                <h1 className='text-2xl font-bold'>Welcome back</h1>
                <p className='text-muted-foreground text-balance'>
                  Login to your TicketFlow account
                </p>
              </div>
              <Controller
                name='email'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='email'>Email</FieldLabel>
                    <Input
                      {...field}
                      id='email'
                      aria-invalid={fieldState.invalid}
                      type='email'
                      placeholder='m@example.com'
                      autoComplete='off'
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name='password'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <div className='flex items-center'>
                      <FieldLabel htmlFor='password'>Password</FieldLabel>
                    </div>
                    <Input
                      {...field}
                      id='password'
                      aria-invalid={fieldState.invalid}
                      type='password'
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Field>
                <Button form='form-login' type='submit'>
                  Login
                </Button>
              </Field>

              <FieldDescription className='text-center'>
                Don&apos;t have an account? <Link href='/sign-up'>Sign up</Link>
              </FieldDescription>
            </FieldGroup>
          </form>
          <div className='bg-muted relative hidden md:block'>
            <Image
              fill
              src='/placeholder.svg'
              alt='Image'
              className='absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale'
            />
          </div>
        </CardContent>
      </Card>
      <FieldDescription className='px-6 text-center'>
        By clicking continue, you agree to our unseen (oopy, me playing around){" "}
        <a href='#'>Terms of Service</a> and <a href='#'>Privacy Policy</a>.
      </FieldDescription>
    </div>
  );
}
