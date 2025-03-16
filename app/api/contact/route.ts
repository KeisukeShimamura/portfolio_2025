import { createTransport } from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const transporter = createTransport({
    port: 465,
    host: "smtp.gmail.com",
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_MAIL_USER,
      pass: process.env.NEXT_PUBLIC_MAIL_PASS,
    },
  });

  const { name, email, message } = await request.json();

  await transporter.sendMail({
    from: process.env.NEXT_PUBLIC_MAIL_USER,
    to: process.env.NEXT_PUBLIC_MAIL_USER,
    subject: "【ポートフォリオ】以下の内容でお問い合わせを受け付けました",
    text: `名前: ${name}\nメールアドレス: ${email}\nメッセージ: ${message}`,
  });

  return NextResponse.json({ message: "メッセージを送信しました" });
}
