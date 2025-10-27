"use server";

import { createClient } from "@/utils/supabase/server";
import z from "zod/v4";
import {
  loginSchema,
  LoginSchemaType,
  signUpSchema,
  SignUpSchemaType,
} from "@/lib/validations/auth";

export async function login(formData: LoginSchemaType) {
  const supabase = await createClient();

  const validatedFields = loginSchema.safeParse(formData);

  if (!validatedFields.success) {
    return {
      error: z.flattenError(validatedFields.error).fieldErrors,
    };
  }

  const { email, password } = formData;

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    // If an error happened while signing up
    return {
      error: error || null,
    };
  }

  return {
    success: true,
  };
}

export async function signup(formData: SignUpSchemaType) {
  const supabase = await createClient();

  const validatedFields = signUpSchema.safeParse(formData);

  if (!validatedFields.success) {
    return {
      error: z.flattenError(validatedFields.error).fieldErrors,
    };
  }

  const { username, email, password } = formData;

  // Verify that username is unique
  const { data, error } = await supabase
    .from("profiles")
    .select("id")
    .eq("username", username)
    .maybeSingle();

  if (error) {
    //If there was an issue querying username
    return {
      error: "An error happened, Please retry!",
    };
  }

  // If data exist and is returned, it means username is being used
  // and they should use another one.
  if (data || data !== null) {
    return {
      error: "Username has been taken",
    };
  }

  const { data: authData, error: error1 } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error1) {
    // An error happened while signning up
    return {
      error: error1 || null,
    };
  }

  // Insert username into profile
  const user = authData.user;
  if (!user)
    return {
      error: "Failed to create user",
    };

  // Create profile
  const { error: profileError } = await supabase.from("profiles").insert({
    id: user.id,
    username,
  });

  if (profileError) {
    return {
      error: "Failed to create profile",
    };
  }

  return {
    success: true,
  };
}
