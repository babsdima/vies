import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Search, Settings, Zap, Eye, Wrench } from "lucide-react";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Услуги",
  description: "Полный цикл работ по системам бесперебойного питания: энергоаудит, проектирование, монтаж, сервис",
};

const iconMap: Record<string, React.ElementType> = {
  search: Search,
  settings: Settings,
  zap: Zap,
  eye: Eye,
  wrench: Wrench,
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold tracking-tight">Наши услуги</h1>
      <p className="mt-2 text-muted-foreground">
        Полный цикл работ — от обследования объекта до долгосрочного сервисного обслуживания
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = iconMap[service.icon] ?? Settings;
          return (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group rounded-xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <p className="font-semibold">{service.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{service.shortDescription}</p>
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                Подробнее <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
