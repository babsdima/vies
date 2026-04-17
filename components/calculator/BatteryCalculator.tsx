"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import RequestForm from "@/components/shared/RequestForm";

interface CalcResult {
  capacityKwh: number;
  capacityAh: number;
  cabinets: number;
  config: string;
}

const UPS_EFFICIENCY = 0.95;
const BATTERY_EFFICIENCY = 0.9;
const DOD = 0.8; // depth of discharge

const voltageOptions = [
  { value: "48", label: "48 В (стоечные ИБП)" },
  { value: "96", label: "96 В (компактные ИБП)" },
  { value: "192", label: "192 В (ИБП до 10 кВА)" },
  { value: "240", label: "240 В (ИБП 10–40 кВА)" },
  { value: "384", label: "384 В (ИБП 40–200 кВА)" },
  { value: "480", label: "480 В (крупные ИБП)" },
];

const upsTypeOptions = [
  { value: "rack-1ph", label: "Стоечный 1ф" },
  { value: "rack-3ph", label: "Стоечный 3ф" },
  { value: "modular", label: "Модульный" },
  { value: "monobloc", label: "Моноблочный" },
  { value: "industrial", label: "Промышленный" },
];

export default function BatteryCalculator() {
  const [power, setPower] = useState("");
  const [time, setTime] = useState("");
  const [voltage, setVoltage] = useState("192");
  const [upsType, setUpsType] = useState("rack-1ph");
  const [result, setResult] = useState<CalcResult | null>(null);
  const [showForm, setShowForm] = useState(false);

  function calculate() {
    const kw = parseFloat(power);
    const min = parseFloat(time);
    const v = parseFloat(voltage);
    if (!kw || !min || !v) return;

    const hours = min / 60;
    const kwh = (kw / UPS_EFFICIENCY / BATTERY_EFFICIENCY) * hours;
    const ah = (kwh * 1000) / v / DOD;

    const cabinetAh = 100;
    const cabinets = Math.ceil(ah / cabinetAh);

    const config = `${cabinets} × ВИЭС LBM-${cabinetAh} (${ah.toFixed(0)} А·ч при ${v} В)`;

    setResult({ capacityKwh: kwh, capacityAh: ah, cabinets, config });
    setShowForm(false);
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="rounded-xl border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Исходные данные</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Введите параметры вашей нагрузки для расчёта конфигурации АКБ
        </p>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="power">Мощность нагрузки, кВт *</Label>
            <Input
              id="power"
              type="number"
              min="0.1"
              step="0.1"
              placeholder="Например: 5"
              value={power}
              onChange={(e) => setPower(e.target.value)}
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="time">Время автономной работы, мин *</Label>
            <Input
              id="time"
              type="number"
              min="1"
              placeholder="Например: 30"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          <div className="space-y-1.5">
            <Label>Напряжение АКБ системы *</Label>
            <Select value={voltage} onValueChange={(v) => setVoltage(v ?? "192")}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {voltageOptions.map((o) => (
                  <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label>Тип ИБП</Label>
            <Select value={upsType} onValueChange={(v) => setUpsType(v ?? "rack-1ph")}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {upsTypeOptions.map((o) => (
                  <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button
          className="mt-6 w-full"
          onClick={calculate}
          disabled={!power || !time}
        >
          Рассчитать конфигурацию
        </Button>
      </div>

      {result && (
        <div className="mt-6 rounded-xl border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Результат расчёта</h2>
          <Separator className="my-4" />

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-primary/5 p-4 text-center">
              <p className="text-2xl font-bold text-primary">
                {result.capacityKwh.toFixed(1)}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">кВт·ч — требуемая ёмкость</p>
            </div>
            <div className="rounded-lg bg-primary/5 p-4 text-center">
              <p className="text-2xl font-bold text-primary">
                {Math.ceil(result.capacityAh)}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">А·ч — расчётная ёмкость</p>
            </div>
            <div className="rounded-lg bg-primary/5 p-4 text-center">
              <p className="text-2xl font-bold text-primary">{result.cabinets}</p>
              <p className="mt-1 text-xs text-muted-foreground">шкаф(а) АКБ</p>
            </div>
          </div>

          <div className="mt-4 rounded-lg border bg-muted/30 p-4">
            <p className="text-sm font-medium">Рекомендуемая конфигурация:</p>
            <p className="mt-1 text-sm text-muted-foreground">{result.config}</p>
            <p className="mt-2 text-xs text-muted-foreground">
              * Расчёт ориентировочный. КПД ИБП: {UPS_EFFICIENCY * 100}%, КПД АКБ: {BATTERY_EFFICIENCY * 100}%, глубина разряда: {DOD * 100}%
            </p>
          </div>

          {!showForm ? (
            <Button className="mt-4 w-full" variant="default" onClick={() => setShowForm(true)}>
              Получить коммерческое предложение
            </Button>
          ) : (
            <div className="mt-6">
              <h3 className="mb-4 font-semibold">Отправить запрос</h3>
              <RequestForm
                productName={`Конфигурация АКБ: ${result.config}`}
                compact
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
