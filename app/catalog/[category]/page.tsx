import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import { getCategoryBySlug } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/catalog/ProductCard";
import FilterPanel from "@/components/catalog/FilterPanel";
import type { Product } from "@/types/catalog";

interface PageProps {
  params: Promise<{ category: string }>;
  searchParams: Promise<Record<string, string>>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return {};
  return { title: cat.title, description: cat.description };
}

function filterProducts(products: Product[], searchParams: Record<string, string>): Product[] {
  return products.filter((p) => {
    for (const [key, value] of Object.entries(searchParams)) {
      if (!value) continue;

      if (key.endsWith("_min")) {
        const field = key.replace("_min", "") as keyof Product;
        const pv = p[field] as number | undefined;
        if (pv !== undefined && pv < Number(value)) return false;
      } else if (key.endsWith("_max")) {
        const field = key.replace("_max", "") as keyof Product;
        const pv = p[field] as number | undefined;
        if (pv !== undefined && pv > Number(value)) return false;
      } else {
        const field = key as keyof Product;
        const pv = p[field];
        if (pv !== undefined && String(pv) !== value) return false;
      }
    }
    return true;
  });
}

export default async function CategoryPage({ params, searchParams }: PageProps) {
  const { category } = await params;
  const sp = await searchParams;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const all = getProductsByCategory(category);
  const filtered = filterProducts(all, sp);

  return (
    <div className="container mx-auto px-4 py-10">
      <nav className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/catalog" className="hover:text-foreground">Каталог</Link>
        <span>/</span>
        <span className="text-foreground">{cat.title}</span>
      </nav>

      <h1 className="text-2xl font-bold tracking-tight">{cat.title}</h1>
      <p className="mt-1.5 text-muted-foreground">{cat.description}</p>

      <div className="mt-8 flex gap-8">
        {cat.filters.length > 0 && (
          <div className="hidden w-56 shrink-0 lg:block">
            <Suspense>
              <FilterPanel filters={cat.filters} />
            </Suspense>
          </div>
        )}

        <div className="flex-1">
          {filtered.length === 0 ? (
            <div className="rounded-xl border bg-muted/30 p-10 text-center text-muted-foreground">
              По заданным фильтрам ничего не найдено
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
