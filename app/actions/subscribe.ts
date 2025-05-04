"use server";

import { z } from "zod";
import mysql from "mysql2/promise";

// Email validation schema
const emailSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

export type SubscribeResult = {
  success: boolean;
  message: string;
};

export async function subscribeToUpdates(formData: FormData): Promise<SubscribeResult> {
  try {
    // Get email from form data
    const email = formData.get("email") as string;

    // Validate email
    const result = emailSchema.safeParse({ email });

    if (!result.success) {
      return {
        success: false,
        message: result.error.errors[0].message,
      };
    }

    // Connect to the database
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    // Insert the email into the subscriptions table
    const query = `
      INSERT INTO subscriptions (email, subscribed_at)
      VALUES (?, NOW())
    `;
    await connection.execute(query, [email]);

    // Close the database connection
    await connection.end();

    console.log(`Email saved to database: ${email}`);

    return {
      success: true,
      message: "Thank you for subscribing to fellowship updates!",
    };
  } catch (error) {
    console.error("Error subscribing:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
