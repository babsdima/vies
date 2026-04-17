"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface RequestFormProps {
  productName?: string;
  productSlug?: string;
  compact?: boolean;
}

export default function RequestForm({ productName, compact }: RequestFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: интеграция с CRM / email
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-lg border bg-muted/30 p-6 text-center">
        <p className="text-lg font-semibold">Заявка отправлена!</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Наш менеджер свяжется с вами в течение рабочего дня.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {productName && (
        <div className="rounded-md bg-muted/50 px-3 py-2 text-sm">
          Запрос по: <span className="font-medium">{productName}</span>
        </div>
      )}

      <div className={compact ? "grid gap-4 sm:grid-cols-2" : "space-y-4"}>
        <div className="space-y-1.5">
          <Label htmlFor="name">Имя *</Label>
          <Input id="name" name="name" placeholder="Иван Иванов" required />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="company">Компания</Label>
          <Input id="company" name="company" placeholder="ООО «Ваша компания»" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Телефон *</Label>
          <Input id="phone" name="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="ivan@company.ru" />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="comment">Комментарий</Label>
        <Textarea
          id="comment"
          name="comment"
          placeholder="Опишите вашу задачу, требования к оборудованию..."
          rows={compact ? 3 : 5}
        />
      </div>

      <Button type="submit" className="w-full">
        Запросить коммерческое предложение
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        Нажимая кнопку, вы соглашаетесь с{" "}
        <a href="/privacy" className="underline hover:text-foreground">
          политикой конфиденциальности
        </a>
      </p>
    </form>
  );
}
