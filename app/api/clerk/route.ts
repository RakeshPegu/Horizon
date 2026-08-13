import { prisma } from "@/prisma/seed";
import { WebhookEvent } from "@clerk/nextjs/server";
import type { UserJSON } from "@clerk/backend";

export async function POST(request: Request) {
  const payload: WebhookEvent = await request.json();

  if (payload.type === "user.created") {
    const data = payload.data as UserJSON;

    const primaryEmail = data.email_addresses.find(
      (email) => email.id === data.primary_email_address_id
    )?.email_address;

    await prisma.user.create({
      data: {
        clerk_userId: data.id,
        email: primaryEmail!,
      },
    });
  }

  return Response.json({ message: "Success" });
}