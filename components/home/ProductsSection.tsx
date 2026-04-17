import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const groups = [
  {
    title: "ИБП",
    items: [
      { label: "Стоечные 1ф (1–10 кВА)", href: "/catalog/ups-rack-1ph" },
      { label: "Стоечные 3ф (10–40 кВА)", href: "/catalog/ups-rack-3ph" },
      { label: "Модульные (10 кВА – 1 МВА)", href: "/catalog/ups-modular" },
      { label: "Моноблочные (10–500 кВА)", href: "/catalog/ups-monobloc" },
      { label: "Трансформаторные (30–600 кВА)", href: "/catalog/ups-monobloc-transformer" },
      { label: "Промышленные агрегатные", href: "/catalog/ups-industrial" },
    ],
  },
  {
    title: "Аккумуляторные батареи",
    items: [
      { label: "Литий-железо-фосфатные (LiFePO4)", href: "/catalog/battery-lifepo4" },
      { label: "Свинцово-кислотные и батарейные шкафы", href: "/catalog/battery-lead" },
      { label: "Натриевые АКБ", href: "/catalog/battery-sodium" },
    ],
  },
  {
    title: "Системы накопления энергии",
    items: [
      { label: "Суперконденсаторы", href: "/catalog/supercapacitors" },
      { label: "СНЭ шкафного типа", href: "/catalog/energy-storage-cabinet" },
      { label: "СНЭ контейнерного типа", href: "/catalog/energy-storage-container" },
    ],
  },
  {
    title: "Дополнительное оборудование",
    items: [
      { label: "Системы пожаротушения лития", href: "/catalog/fire-suppression" },
      { label: "Системы мониторинга АКБ", href: "/catalog/battery-monitoring" },
    ],
  },
];

export default function ProductsSection() {
  return (
    <section className="bg-muted/30 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Продукция ESOLT</h2>
            <p className="mt-2 text-muted-foreground">Полный спектр оборудования для систем бесперебойного питания</p>
          </div>
          <Button render={<Link href="/catalog" />} variant="outline" className="hidden sm:flex">
            Весь каталог <ArrowRight className="ml-1.5 h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => (
            <div key={group.title} className="rounded-xl border bg-card p-5 shadow-sm">
              <p className="mb-3 text-sm font-bold uppercase tracking-wide text-primary">{group.title}</p>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
                    >
                      <span className="h-1 w-1 shrink-0 rounded-full bg-primary/40 group-hover:bg-primary" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <Button render={<Link href="/catalog" />} variant="outline" className="w-full">
            Весь каталог <ArrowRight className="ml-1.5 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
