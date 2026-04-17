import type { Metadata } from "next";
import { Phone, Mail, Send, MapPin } from "lucide-react";
import RequestForm from "@/components/shared/RequestForm";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Контакты компании ESOLT (ВИЭС) — телефон, email, Telegram",
};

export default function ContactsPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold tracking-tight">Контакты</h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          <a
            href="tel:+74951234567"
            className="flex items-center gap-4 rounded-xl border bg-card p-5 shadow-sm transition-colors hover:bg-muted/50"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Телефон</p>
              <p className="text-lg font-semibold">+7 (495) 123-45-67</p>
            </div>
          </a>

          <a
            href="mailto:info@esolt.ru"
            className="flex items-center gap-4 rounded-xl border bg-card p-5 shadow-sm transition-colors hover:bg-muted/50"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-lg font-semibold">info@esolt.ru</p>
            </div>
          </a>

          <a
            href="https://t.me/esolt_support"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-xl border bg-card p-5 shadow-sm transition-colors hover:bg-muted/50"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Send className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Telegram</p>
              <p className="text-lg font-semibold">@esolt_support</p>
            </div>
          </a>

          <div className="flex items-center gap-4 rounded-xl border bg-card p-5 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Адрес</p>
              <p className="text-lg font-semibold">Москва, Россия</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-5 text-xl font-semibold">Написать нам</h2>
          <RequestForm compact />
        </div>
      </div>
    </div>
  );
}
