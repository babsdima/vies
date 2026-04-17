import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 text-white md:py-28">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-blue-500 blur-3xl" />
        <div className="absolute right-1/4 top-1/2 h-64 w-64 rounded-full bg-indigo-500 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm backdrop-blur">
            Производитель и поставщик СБП с 2010 года
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Системы бесперебойного питания{" "}
            <span className="text-blue-400">«под ключ»</span>
          </h1>

          <p className="mb-8 text-lg leading-relaxed text-slate-300 md:text-xl">
            Рассчитываем, проектируем, анализируем ТЗ заказчика, собираем из лучших комплектующих
            и интегрируем системы бесперебойного питания марки{" "}
            <span className="font-semibold text-white">ESOLT</span> для критически важной инфраструктуры.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button render={<Link href="/request" />} size="lg" className="bg-blue-500 hover:bg-blue-600">
              Получить консультацию
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button render={<Link href="/catalog" />} size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
              Подобрать оборудование
            </Button>
            <Button render={<a href="https://t.me/esolt_support" target="_blank" rel="noopener noreferrer" />} size="lg" variant="ghost" className="text-white hover:bg-white/10">
              <MessageCircle className="mr-2 h-4 w-4" />
              Чат с инженером
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { value: "15+", label: "лет на рынке" },
            { value: "500+", label: "проектов завершено" },
            { value: "1 МВА", label: "максимальная мощность" },
            { value: "24/7", label: "техподдержка" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-lg border border-white/10 bg-white/5 p-4 text-center backdrop-blur">
              <p className="text-2xl font-bold text-blue-400">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
