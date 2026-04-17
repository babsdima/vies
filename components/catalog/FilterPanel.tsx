"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback } from "react";
import type { FilterDefinition } from "@/types/catalog";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface FilterPanelProps {
  filters: FilterDefinition[];
}

export default function FilterPanel({ filters }: FilterPanelProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      router.push(`${pathname}?${params.toString()}`);
    },
    [router, pathname, searchParams]
  );

  const clearAll = () => {
    router.push(pathname);
  };

  if (filters.length === 0) return null;

  const hasActive = filters.some((f) => searchParams.has(f.key) || searchParams.has(`${f.key}_min`) || searchParams.has(`${f.key}_max`));

  return (
    <aside className="space-y-5">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold uppercase tracking-wide">Фильтры</p>
        {hasActive && (
          <Button variant="ghost" size="sm" onClick={clearAll} className="h-auto px-0 py-0 text-xs text-muted-foreground hover:text-foreground">
            Сбросить
          </Button>
        )}
      </div>

      {filters.map((filter) => (
        <div key={filter.key} className="space-y-2">
          <Label className="text-sm">
            {filter.label}
            {filter.unit && <span className="text-muted-foreground">, {filter.unit}</span>}
          </Label>

          {filter.type === "select" && filter.options && (
            <div className="flex flex-wrap gap-1.5">
              {filter.options.map((opt) => {
                const active = searchParams.get(filter.key) === opt;
                return (
                  <button
                    key={opt}
                    onClick={() => setParam(filter.key, active ? "" : opt)}
                    className={`rounded-md border px-2.5 py-1 text-xs transition-colors ${
                      active
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background hover:bg-muted"
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          )}

          {filter.type === "range" && (
            <div className="flex items-center gap-2">
              <input
                type="number"
                placeholder={String(filter.min ?? "")}
                defaultValue={searchParams.get(`${filter.key}_min`) ?? ""}
                className="w-full rounded-md border bg-background px-2.5 py-1 text-sm"
                onChange={(e) => setParam(`${filter.key}_min`, e.target.value)}
              />
              <span className="text-muted-foreground">—</span>
              <input
                type="number"
                placeholder={String(filter.max ?? "")}
                defaultValue={searchParams.get(`${filter.key}_max`) ?? ""}
                className="w-full rounded-md border bg-background px-2.5 py-1 text-sm"
                onChange={(e) => setParam(`${filter.key}_max`, e.target.value)}
              />
            </div>
          )}
        </div>
      ))}
    </aside>
  );
}
