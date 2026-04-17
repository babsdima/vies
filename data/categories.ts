import type { CategoryMeta } from "@/types/catalog";

export const categories: CategoryMeta[] = [
  {
    id: "ups-rack-1ph",
    title: "Стоечные ИБП 1ф (1–10 кВА)",
    description: "Однофазные стоечные источники бесперебойного питания мощностью от 1 до 10 кВА",
    slug: "ups-rack-1ph",
    group: "ups",
    filters: [
      { key: "powerKva", label: "Мощность (кВА)", type: "range", min: 1, max: 10, unit: "кВА" },
      { key: "phases", label: "Фазность", type: "select", options: ["1-1"] },
    ],
  },
  {
    id: "ups-rack-3ph",
    title: "Стоечные ИБП 3ф (10–40 кВА)",
    description: "Трёхфазные стоечные источники бесперебойного питания мощностью от 10 до 40 кВА",
    slug: "ups-rack-3ph",
    group: "ups",
    filters: [
      { key: "powerKva", label: "Мощность (кВА)", type: "range", min: 10, max: 40, unit: "кВА" },
    ],
  },
  {
    id: "ups-modular",
    title: "Модульные ИБП (10 кВА – 1 МВА)",
    description: "Масштабируемые модульные ИБП для критически важной инфраструктуры",
    slug: "ups-modular",
    group: "ups",
    filters: [
      { key: "powerKva", label: "Мощность (кВА)", type: "range", min: 10, max: 1000, unit: "кВА" },
    ],
  },
  {
    id: "ups-monobloc",
    title: "Моноблочные ИБП (10–500 кВА)",
    description: "Моноблочные ИБП без трансформатора мощностью до 500 кВА",
    slug: "ups-monobloc",
    group: "ups",
    filters: [
      { key: "powerKva", label: "Мощность (кВА)", type: "range", min: 10, max: 500, unit: "кВА" },
    ],
  },
  {
    id: "ups-monobloc-transformer",
    title: "Моноблочные трансформаторные ИБП (30–600 кВА)",
    description: "Моноблочные ИБП с трансформатором для надёжной изоляции нагрузки",
    slug: "ups-monobloc-transformer",
    group: "ups",
    filters: [
      { key: "powerKva", label: "Мощность (кВА)", type: "range", min: 30, max: 600, unit: "кВА" },
    ],
  },
  {
    id: "ups-industrial",
    title: "Промышленные ИБП агрегатного типа (10 кВА – 1 МВА)",
    description: "ИБП для промышленных объектов в агрегатном исполнении",
    slug: "ups-industrial",
    group: "ups",
    filters: [
      { key: "powerKva", label: "Мощность (кВА)", type: "range", min: 10, max: 1000, unit: "кВА" },
    ],
  },
  {
    id: "battery-lifepo4",
    title: "Литий-железо-фосфатные АКБ (LiFePO4)",
    description: "Литий-ионные аккумуляторные батареи повышенной безопасности и долговечности",
    slug: "battery-lifepo4",
    group: "batteries",
    filters: [
      { key: "capacityAh", label: "Ёмкость (А·ч)", type: "range", min: 10, max: 1000, unit: "А·ч" },
      { key: "voltageV", label: "Напряжение (В)", type: "range", min: 12, max: 800, unit: "В" },
      { key: "cycleCount", label: "Количество циклов", type: "range", min: 2000, max: 8000 },
      { key: "serviceYears", label: "Срок службы (лет)", type: "range", min: 5, max: 20, unit: "лет" },
    ],
  },
  {
    id: "battery-lead",
    title: "Свинцово-кислотные АКБ и батарейные шкафы",
    description: "Свинцово-кислотные аккумуляторы, батарейные шкафы и стоечные модули",
    slug: "battery-lead",
    group: "batteries",
    filters: [
      { key: "capacityAh", label: "Ёмкость (А·ч)", type: "range", min: 7, max: 500, unit: "А·ч" },
      { key: "voltageV", label: "Напряжение (В)", type: "range", min: 6, max: 240, unit: "В" },
    ],
  },
  {
    id: "battery-sodium",
    title: "Натриевые АКБ",
    description: "Аккумуляторные батареи на основе натрия — безопасная альтернатива лития",
    slug: "battery-sodium",
    group: "batteries",
    filters: [
      { key: "capacityAh", label: "Ёмкость (А·ч)", type: "range", min: 50, max: 2000, unit: "А·ч" },
      { key: "voltageV", label: "Напряжение (В)", type: "range", min: 48, max: 800, unit: "В" },
    ],
  },
  {
    id: "supercapacitors",
    title: "Суперконденсаторы",
    description: "Ультраконденсаторы для буферизации пиковых нагрузок и быстрого заряда",
    slug: "supercapacitors",
    group: "storage",
    filters: [
      { key: "capacitanceFarad", label: "Ёмкость (Ф)", type: "range", min: 100, max: 10000, unit: "Ф" },
      { key: "workingVoltage", label: "Рабочее напряжение (В)", type: "range", min: 2.5, max: 1000, unit: "В" },
      {
        key: "application",
        label: "Область применения",
        type: "select",
        options: ["Транспорт", "Энергетика", "Промышленность", "Телекоммуникации"],
      },
    ],
  },
  {
    id: "energy-storage-cabinet",
    title: "СНЭ шкафного типа",
    description: "Системы накопления электроэнергии в шкафном исполнении",
    slug: "energy-storage-cabinet",
    group: "storage",
    filters: [
      { key: "storageCapacityKwh", label: "Ёмкость (кВт·ч)", type: "range", min: 10, max: 500, unit: "кВт·ч" },
      { key: "storagePowerKw", label: "Мощность (кВт)", type: "range", min: 5, max: 250, unit: "кВт" },
    ],
  },
  {
    id: "energy-storage-container",
    title: "СНЭ контейнерного типа",
    description: "Крупные контейнерные системы накопления электроэнергии",
    slug: "energy-storage-container",
    group: "storage",
    filters: [
      { key: "storageCapacityKwh", label: "Ёмкость (кВт·ч)", type: "range", min: 200, max: 5000, unit: "кВт·ч" },
      { key: "storagePowerKw", label: "Мощность (кВт)", type: "range", min: 100, max: 2500, unit: "кВт" },
    ],
  },
  {
    id: "fire-suppression",
    title: "Системы пожаротушения лития",
    description: "Специализированные системы пожаротушения для литий-ионных аккумуляторов",
    slug: "fire-suppression",
    group: "accessories",
    filters: [],
  },
  {
    id: "battery-monitoring",
    title: "Системы мониторинга АКБ",
    description: "Интеллектуальные системы контроля состояния и диагностики аккумуляторных батарей",
    slug: "battery-monitoring",
    group: "accessories",
    filters: [],
  },
];

export const categoryGroups = {
  ups: "ИБП",
  batteries: "Аккумуляторные батареи",
  storage: "Системы накопления энергии",
  accessories: "Дополнительное оборудование",
} as const;

export function getCategoryBySlug(slug: string): CategoryMeta | undefined {
  return categories.find((c) => c.slug === slug);
}
