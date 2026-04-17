import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 text-white md:py-28">
      {/* Фоновое фото оборудования */}
      <div className="absolute inset-0">
        <Image
          src="/images/products/ups-industrial-row.png"
          alt="Оборудование ESOLT"
          fill
          className="object-cover opacity-15"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />

      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Текст */}
          <div>
            <div className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm backdrop-blur">
              Производитель и поставщик СБП с 2010 года
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Системы бесперебойного питания{" "}
              <span className="text-blue-400">«под ключ»</span>
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-slate-300">
              Рассчитываем, проектируем, анализируем ТЗ заказчика, собираем из лучших комплектующих
              и интегрируем системы бесперебойного питания марки{" "}
              <span className="font-semibold text-white">ESOLT</span> для критически важной инфраструктуры.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button render={<Link href="/request" />} size="lg" className="bg-blue-500 hover:bg-blue-600">
                Получить консультацию
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button render={<Link href="/catalog" />} size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
                Подобрать оборудование
              </Button>
              <Button render={<a href="https://t.me/esolt_info" target="_blank" rel="noopener noreferrer" />} size="lg" variant="ghost" className="text-white hover:bg-white/10">
                <MessageCircle className="mr-2 h-4 w-4" />
                Чат с инженером
              </Button>
            </div>
          </div>

          {/* Фото стоечного ИБП */}
          <div className="hidden lg:block">
            <div className="relative mx-auto w-72">
              <div className="absolute -inset-4 rounded-2xl bg-blue-500/20 blur-2xl" />
              <Image
                src="/images/products/ups-rack-viies-logo.png"
                alt="Стоечный ИБП ВИЭС"
                width={500}
                height={120}
                className="relative rounded-xl shadow-2xl"
              />
              <Image
                src="/images/products/ups-rack-3d.png"
                alt="ИБП ВИЭС 3D"
                width={400}
                height={300}
                className="relative mt-4 rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
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
