import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { firstName, lastName, email, company, service, message } =
    await request.json();

  if (!firstName || !lastName || !email) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const name = `${firstName} ${lastName}`.trim();
  const timestamp = new Date().toLocaleString("en-GB", {
    timeZone: "Asia/Tashkent",
    day: "2-digit", month: "short", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  });

  const errors: string[] = [];

  // ── Telegram ──────────────────────────────────────────────────────
  const tgToken = process.env.TELEGRAM_BOT_TOKEN;
  const tgChat  = process.env.TELEGRAM_CHAT_ID;

  if (tgToken && tgChat) {
    const lines = [
      `🔔 <b>New Contact Request</b>`,
      ``,
      `👤 <b>Name:</b> ${escapeHtml(name)}`,
      `📧 <b>Email:</b> ${escapeHtml(email)}`,
      company ? `🏢 <b>Company:</b> ${escapeHtml(company)}` : null,
      service ? `📋 <b>Service:</b> ${escapeHtml(service)}` : null,
      message ? `\n💬 <b>Message:</b>\n${escapeHtml(message)}` : null,
      ``,
      `🕐 <i>${timestamp} (Tashkent)</i>`,
    ].filter(Boolean).join("\n");

    const tgRes = await fetch(
      `https://api.telegram.org/bot${tgToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: tgChat, text: lines, parse_mode: "HTML" }),
      }
    ).catch(() => null);

    if (!tgRes?.ok) errors.push("telegram");
  }

  // ── Resend email ──────────────────────────────────────────────────
  const resendKey  = process.env.RESEND_API_KEY;
  const toEmail    = process.env.RESEND_TO_EMAIL    ?? "info@advizenco.com";
  const fromEmail  = process.env.RESEND_FROM_EMAIL  ?? "Advizen Contact <noreply@advizenco.com>";

  if (resendKey) {
    const html = `
      <div style="font-family:sans-serif;max-width:560px;color:#1a1a1a;line-height:1.6">
        <h2 style="margin:0 0 24px;font-size:20px">New Contact Request</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:6px 0;color:#555;width:110px">Name</td><td style="padding:6px 0;font-weight:600">${escapeHtml(name)}</td></tr>
          <tr><td style="padding:6px 0;color:#555">Email</td><td style="padding:6px 0"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
          ${company ? `<tr><td style="padding:6px 0;color:#555">Company</td><td style="padding:6px 0">${escapeHtml(company)}</td></tr>` : ""}
          ${service ? `<tr><td style="padding:6px 0;color:#555">Service</td><td style="padding:6px 0">${escapeHtml(service)}</td></tr>` : ""}
        </table>
        ${message ? `<div style="margin-top:20px"><p style="color:#555;margin:0 0 8px">Message</p><p style="background:#f5f5f5;padding:16px;border-radius:6px;margin:0;white-space:pre-wrap">${escapeHtml(message)}</p></div>` : ""}
        <p style="margin-top:28px;color:#999;font-size:12px">${timestamp} (Tashkent)</p>
      </div>`;

    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `Contact: ${name}${service ? ` — ${service}` : ""}`,
        html,
      }),
    }).catch(() => null);

    if (!emailRes?.ok) errors.push("email");
  }

  // Return ok even if one channel failed — we never want to show an error to
  // the user just because Telegram is temporarily down.
  return NextResponse.json({ ok: true, errors: errors.length ? errors : undefined });
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
