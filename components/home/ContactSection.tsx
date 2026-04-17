import { Phone, Mail, Send } from "lucide-react";
import RequestForm from "@/components/shared/RequestForm";

export default function ContactSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Свяжитесь с нами</h2>
            <p className="mt-3 text-muted-foreground">
              Оставьте заявку — наш инженер свяжется с вами для уточнения задачи
              и подготовки коммерческого предложения.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="tel:+74951234567"
                className="flex items-center gap-3 rounded-lg border p-4 transition-colors hover:bg-muted/50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Телефон</p>
                  <p className="font-semibold">+7 (495) 123-45-67</p>
                </div>
              </a>

              <a
                href="mailto:info@esolt.ru"
                className="flex items-center gap-3 rounded-lg border p-4 transition-colors hover:bg-muted/50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="font-semibold">info@esolt.ru</p>
                </div>
              </a>

              <a
                href="https://t.me/esolt_support"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border p-4 transition-colors hover:bg-muted/50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Send className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Telegram</p>
                  <p className="font-semibold">@esolt_support</p>
                </div>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-semibold">Запросить консультацию</h3>
            <RequestForm compact />
          </div>
        </div>
      </div>
    </section>
  );
}
