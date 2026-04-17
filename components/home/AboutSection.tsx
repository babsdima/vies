import { Search, Settings, Zap, Wrench, Package } from "lucide-react";

const competencies = [
  { icon: Search, title: "Энергоаудит и обследование", desc: "Анализируем объект, оцениваем нагрузки, выявляем риски" },
  { icon: Settings, title: "Комплексные инженерные решения", desc: "Проектируем системы СБП под конкретный объект" },
  { icon: Package, title: "Поставщик ИБП", desc: "Поставка широкого спектра ИБП любой мощности" },
  { icon: Package, title: "Поставщик аккумуляторных систем", desc: "Литий, свинец, натрий, суперконденсаторы" },
  { icon: Zap, title: "Пусконаладка и сервис", desc: "Ввод в эксплуатацию и долгосрочное обслуживание" },
];

export default function AboutSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">О компании ВИЭС</h2>
          <p className="mt-3 text-muted-foreground">
            Мы — производитель и системный интегратор в сфере бесперебойного питания.
            Ведём проект от первого запроса до сдачи конечному заказчику.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {competencies.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm font-semibold leading-snug">{title}</p>
              <p className="mt-1.5 text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
