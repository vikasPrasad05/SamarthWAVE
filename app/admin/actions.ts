"use server";

export async function verifyAdminPassword(password: string) {
  const envPassword = process.env.ADMIN_PASSWORD;
  
  if (!envPassword) {
    console.error("ADMIN_PASSWORD is not set in the environment variables.");
    return false;
  }
  
  return password === envPassword;
}
