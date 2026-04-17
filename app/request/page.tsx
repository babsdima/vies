import type { Metadata } from "next";
import RequestForm from "@/components/shared/RequestForm";

export const metadata: Metadata = {
  title: "Оставить заявку",
  description: "Оставьте заявку на оборудование или услуги ВИЭС — ответим в течение рабочего дня",
};

export default function RequestPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mx-auto max-w-lg">
        <h1 className="text-3xl font-bold tracking-tight">Оставить заявку</h1>
        <p className="mt-2 text-muted-foreground">
          Заполните форму — наш инженер свяжется с вами в течение рабочего дня
        </p>
        <div className="mt-8">
          <RequestForm />
        </div>
      </div>
    </div>
  );
}
