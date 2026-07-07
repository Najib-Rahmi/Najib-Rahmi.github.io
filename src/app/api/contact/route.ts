import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  const errors: Record<string, string> = {};
  if (!name || name.length < 2) {
    errors.name = "Please enter your name (at least 2 characters).";
  }
  if (!email || !EMAIL_RE.test(email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!message || message.length < 10) {
    errors.message = "Please share a bit more (at least 10 characters).";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { ok: false, errors, error: "Please fix the highlighted fields." },
      { status: 422 }
    );
  }

  // In a real app you would persist this, send an email, or push to a queue.
  // Here we simulate a successful submission and echo a confirmation.
  const ticket = `MSG-${Date.now().toString(36).toUpperCase()}`;

  return NextResponse.json(
    {
      ok: true,
      message: `Thanks, ${name}! Your message was received. I will get back to you soon.`,
      ticket,
    },
    { status: 200 }
  );
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    endpoint: "/api/contact",
    method: "POST",
    description: "Send a contact form submission with name, email, and message.",
  });
}
