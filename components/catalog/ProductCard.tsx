import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/types/catalog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const mainSpecs = product.specs.slice(0, 4);

  return (
    <div className="group flex flex-col rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-md">
      <Link href={`/catalog/${product.category}/${product.slug}`} className="flex-1">
        <div className="relative h-44 overflow-hidden rounded-t-xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <span className="text-4xl text-slate-400">⚡</span>
            </div>
          )}
        </div>
        <div className="p-4">
          <p className="font-semibold leading-snug group-hover:text-primary">{product.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{product.shortDescription}</p>
          <div className="mt-3 space-y-1">
            {mainSpecs.map((spec) => (
              <div key={spec.label} className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">{spec.label}</span>
                <Badge variant="secondary" className="text-xs">
                  {spec.value}{spec.unit && ` ${spec.unit}`}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </Link>
      <div className="border-t p-4">
        <Button render={<Link href={`/catalog/${product.category}/${product.slug}#request`} />} size="sm" className="w-full">
          Отправить заявку
        </Button>
      </div>
    </div>
  );
}
