import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Download } from "lucide-react";
import { getProductBySlug } from "@/data/products";
import { getCategoryBySlug } from "@/data/categories";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import RequestForm from "@/components/shared/RequestForm";

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return { title: product.name, description: product.shortDescription };
}

export default async function ProductPage({ params }: PageProps) {
  const { category, slug } = await params;
  const product = getProductBySlug(slug);
  if (!product || product.category !== category) notFound();

  const cat = getCategoryBySlug(category);

  return (
    <div className="container mx-auto px-4 py-10">
      <nav className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/catalog" className="hover:text-foreground">Каталог</Link>
        <span>/</span>
        <Link href={`/catalog/${category}`} className="hover:text-foreground">{cat?.title}</Link>
        <span>/</span>
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Фото и характеристики */}
        <div>
          <div className="flex h-72 items-center justify-center rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700">
            <span className="text-7xl text-slate-400">⚡</span>
          </div>

          <div className="mt-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Технические характеристики
            </h2>
            <Separator className="my-3" />
            <div className="space-y-2">
              {product.specs.map((spec) => (
                <div key={spec.label} className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{spec.label}</span>
                  <Badge variant="outline">
                    {spec.value}{spec.unit ? ` ${spec.unit}` : ""}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          {product.documents && product.documents.length > 0 && (
            <div className="mt-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Документация</h2>
              <Separator className="my-3" />
              <div className="space-y-2">
                {product.documents.map((doc) => (
                  <a
                    key={doc.url}
                    href={doc.url}
                    download
                    className="flex items-center gap-2 rounded-lg border p-3 text-sm transition-colors hover:bg-muted/50"
                  >
                    <Download className="h-4 w-4 shrink-0 text-primary" />
                    {doc.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Описание и форма */}
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{product.name}</h1>
          <p className="mt-2 text-muted-foreground">{product.shortDescription}</p>

          <Separator className="my-6" />

          <div id="request">
            <h2 className="mb-4 text-lg font-semibold">Запросить коммерческое предложение</h2>
            <RequestForm productName={product.name} productSlug={product.slug} />
          </div>
        </div>
      </div>
    </div>
  );
}
