import { NextRequest, NextResponse } from "next/server";

type Locale = "en" | "ru" | "uz";

const autoreply: Record<Locale, {
  subject: string; heading: string; body: string;
  summaryLabel: string; nameLabel: string; emailLabel: string;
  companyLabel: string; serviceLabel: string; messageLabel: string;
  urgent: string; signature: string;
}> = {
  en: {
    subject: "Thank you for contacting Advizen",
    heading: "Thank you for reaching out",
    body: "We've received your message and will get back to you within one business day.",
    summaryLabel: "Your submission",
    nameLabel: "Name", emailLabel: "Email", companyLabel: "Company",
    serviceLabel: "Service", messageLabel: "Message",
    urgent: "If your matter is urgent, you can reach us on Telegram or WhatsApp.",
    signature: "— Advizen Team",
  },
  ru: {
    subject: "Спасибо за обращение в Advizen",
    heading: "Спасибо за обращение",
    body: "Мы получили ваше сообщение и свяжемся с вами в течение одного рабочего дня.",
    summaryLabel: "Ваша заявка",
    nameLabel: "Имя", emailLabel: "Email", companyLabel: "Компания",
    serviceLabel: "Услуга", messageLabel: "Сообщение",
    urgent: "Если вопрос срочный, напишите нам в Telegram или WhatsApp.",
    signature: "— Команда Advizen",
  },
  uz: {
    subject: "Advizen bilan bog'langaningiz uchun rahmat",
    heading: "Murojaatingiz uchun rahmat",
    body: "Xabaringizni qabul qildik va bir ish kuni ichida siz bilan bog'lanamiz.",
    summaryLabel: "Sizning so'rovingiz",
    nameLabel: "Ism", emailLabel: "Email", companyLabel: "Kompaniya",
    serviceLabel: "Xizmat", messageLabel: "Xabar",
    urgent: "Agar masala shoshilinch bo'lsa, bizga Telegram yoki WhatsApp orqali yozing.",
    signature: "— Advizen jamoasi",
  },
};

export async function POST(request: NextRequest) {
  const { firstName, lastName, email, company, service, message, locale } =
    await request.json();

  if (!firstName || !lastName || !email) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const name = `${firstName} ${lastName}`.trim();
  const lang: Locale = locale === "ru" || locale === "uz" ? locale : "en";
  const t = autoreply[lang];
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

    // ── Autoreply to the submitter ────────────────────────────────
    const autoHtml = `
      <div style="font-family:sans-serif;max-width:560px;color:#1a1a1a;line-height:1.6">
        <h2 style="margin:0 0 16px;font-size:22px">${escapeHtml(t.heading)}, ${escapeHtml(firstName)}</h2>
        <p style="margin:0 0 24px;font-size:15px;color:#333">${escapeHtml(t.body)}</p>
        <div style="background:#f5f5f5;border-radius:8px;padding:20px;margin:0 0 20px">
          <p style="margin:0 0 12px;font-size:12px;color:#888;text-transform:uppercase;letter-spacing:0.08em">${escapeHtml(t.summaryLabel)}</p>
          <table style="border-collapse:collapse;width:100%;font-size:14px">
            <tr><td style="padding:4px 0;color:#666;width:110px">${escapeHtml(t.nameLabel)}</td><td style="padding:4px 0">${escapeHtml(name)}</td></tr>
            <tr><td style="padding:4px 0;color:#666">${escapeHtml(t.emailLabel)}</td><td style="padding:4px 0">${escapeHtml(email)}</td></tr>
            ${company ? `<tr><td style="padding:4px 0;color:#666">${escapeHtml(t.companyLabel)}</td><td style="padding:4px 0">${escapeHtml(company)}</td></tr>` : ""}
            ${service ? `<tr><td style="padding:4px 0;color:#666">${escapeHtml(t.serviceLabel)}</td><td style="padding:4px 0">${escapeHtml(service)}</td></tr>` : ""}
          </table>
          ${message ? `<div style="margin-top:14px"><p style="margin:0 0 6px;font-size:12px;color:#888;text-transform:uppercase;letter-spacing:0.08em">${escapeHtml(t.messageLabel)}</p><p style="margin:0;white-space:pre-wrap;color:#333">${escapeHtml(message)}</p></div>` : ""}
        </div>
        <p style="margin:0 0 20px;font-size:14px;color:#555">${escapeHtml(t.urgent)}</p>
        <p style="margin:0;font-size:14px;color:#333">${escapeHtml(t.signature)}</p>
        <p style="margin:24px 0 0;font-size:12px;color:#aaa">advizenco.com</p>
      </div>`;

    const autoRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [email],
        subject: t.subject,
        html: autoHtml,
      }),
    }).catch(() => null);

    if (!autoRes?.ok) errors.push("autoreply");
  }

  // Return ok even if one channel failed — we never want to show an error to
  // the user just because Telegram is temporarily down.
  return NextResponse.json({ ok: true, errors: errors.length ? errors : undefined });
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
