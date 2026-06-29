import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  message?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;
  const requiredFields: (keyof ContactPayload)[] = [
    "name",
    "company",
    "email",
    "projectType",
    "message",
  ];

  const missingField = requiredFields.find((field) => !payload[field]);

  if (missingField) {
    return Response.json({ error: `Missing ${missingField}` }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    return Response.json(
      { error: "Email provider is not configured." },
      { status: 503 },
    );
  }

  const resend = new Resend(resendApiKey);
  const to = process.env.CONTACT_TO_EMAIL || "md@oglasglobal.com";
  const from = process.env.CONTACT_FROM_EMAIL || "Oglas AI <onboarding@resend.dev>";

  await resend.emails.send({
    from,
    to,
    replyTo: payload.email,
    subject: `New Oglas AI consultation: ${payload.projectType}`,
    text: [
      `Name: ${payload.name}`,
      `Company: ${payload.company}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone || "Not provided"}`,
      `Project type: ${payload.projectType}`,
      "",
      payload.message,
    ].join("\n"),
  });

  return Response.json({ ok: true });
}
