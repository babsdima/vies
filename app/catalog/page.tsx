import Link from "next/link";
import type { Metadata } from "next";
import { categories, categoryGroups } from "@/data/categories";
import type { CategoryGroup } from "@/types/catalog";

export const metadata: Metadata = {
  title: "Каталог оборудования",
  description: "ИБП, аккумуляторные батареи, системы накопления энергии и дополнительное оборудование ESOLT",
};

export default function CatalogPage() {
  const groups = Object.entries(categoryGroups) as [CategoryGroup, string][];

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold tracking-tight">Каталог оборудования</h1>
      <p className="mt-2 text-muted-foreground">
        Полный спектр оборудования для систем бесперебойного питания марки ESOLT
      </p>

      <div className="mt-10 space-y-10">
        {groups.map(([groupId, groupLabel]) => {
          const groupCats = categories.filter((c) => c.group === groupId);
          return (
            <div key={groupId}>
              <h2 className="mb-4 text-xl font-semibold">{groupLabel}</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {groupCats.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/catalog/${cat.slug}`}
                    className="group rounded-xl border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <p className="font-semibold leading-snug group-hover:text-primary">
                      {cat.title}
                    </p>
                    <p className="mt-1.5 text-sm text-muted-foreground">{cat.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
