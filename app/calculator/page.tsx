import type { Metadata } from "next";
import BatteryCalculator from "@/components/calculator/BatteryCalculator";

export const metadata: Metadata = {
  title: "Калькулятор АКБ",
  description: "Онлайн-калькулятор для подбора конфигурации литий-ионных аккумуляторных батарей",
};

export default function CalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight">Калькулятор расчёта АКБ</h1>
        <p className="mt-2 text-muted-foreground">
          Введите параметры нагрузки — калькулятор подберёт оптимальную конфигурацию
          литий-железо-фосфатных аккумуляторных батарей
        </p>
      </div>
      <div className="mt-10">
        <BatteryCalculator />
      </div>
    </div>
  );
}
