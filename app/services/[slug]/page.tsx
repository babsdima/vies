import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Search, Settings, Zap, Eye, Wrench } from "lucide-react";
import { getServiceBySlug, services } from "@/data/services";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return { title: service.title, description: service.shortDescription };
}

const iconMap: Record<string, React.ElementType> = {
  search: Search,
  settings: Settings,
  zap: Zap,
  eye: Eye,
  wrench: Wrench,
};

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon] ?? Settings;

  const otherServices = services.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-10">
      <nav className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/services" className="hover:text-foreground">Услуги</Link>
        <span>/</span>
        <span className="text-foreground">{service.title}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
            <Icon className="h-7 w-7 text-primary" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">{service.title}</h1>
          <p className="mt-3 text-lg text-muted-foreground">{service.shortDescription}</p>

          <div className="mt-6 text-muted-foreground">{service.description}</div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold">Что входит в услугу:</h2>
            <ul className="mt-4 space-y-3">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button render={<Link href="/request" />} size="lg" className="mt-8">
            Запросить услугу
          </Button>
        </div>

        <div>
          <div className="rounded-xl border bg-card p-5 shadow-sm">
            <p className="text-sm font-semibold">Другие услуги</p>
            <div className="mt-3 space-y-3">
              {otherServices.map((s) => {
                const OtherIcon = iconMap[s.icon] ?? Settings;
                return (
                  <Link
                    key={s.id}
                    href={`/services/${s.slug}`}
                    className="group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-muted/50"
                  >
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10">
                      <OtherIcon className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <p className="text-sm group-hover:text-primary">{s.title}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
