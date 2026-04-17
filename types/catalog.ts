export type ProductCategory =
  | "ups-rack-1ph"
  | "ups-rack-3ph"
  | "ups-modular"
  | "ups-monobloc"
  | "ups-monobloc-transformer"
  | "ups-industrial"
  | "battery-lifepo4"
  | "battery-lead"
  | "battery-sodium"
  | "supercapacitors"
  | "energy-storage-cabinet"
  | "energy-storage-container"
  | "fire-suppression"
  | "battery-monitoring";

export interface ProductSpec {
  label: string;
  value: string;
  unit?: string;
}

export interface Product {
  id: string;
  slug: string;
  category: ProductCategory;
  name: string;
  shortDescription: string;
  image: string;
  specs: ProductSpec[];
  documents?: { name: string; url: string }[];
  // UPS filters
  powerKva?: number;
  upsType?: "rack" | "modular" | "monobloc" | "monobloc-transformer" | "industrial";
  phases?: "1-1" | "3-3" | "1-1-single" | "3-1" | "multi";
  // Battery filters
  batteryType?: "lifepo4" | "lead-acid" | "sodium";
  capacityAh?: number;
  voltageV?: number;
  cycleCount?: number;
  serviceYears?: number;
  // Supercapacitor filters
  capacitanceFarad?: number;
  workingVoltage?: number;
  application?: string;
  // Energy storage filters
  storageCapacityKwh?: number;
  storagePowerKw?: number;
  systemType?: "cabinet" | "container";
}

export interface CategoryMeta {
  id: ProductCategory;
  title: string;
  description: string;
  slug: string;
  group: CategoryGroup;
  filters: FilterDefinition[];
}

export type CategoryGroup = "ups" | "batteries" | "storage" | "accessories";

export interface FilterDefinition {
  key: string;
  label: string;
  type: "range" | "select";
  options?: string[];
  min?: number;
  max?: number;
  unit?: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  description: string;
  solution: string;
  image: string;
}
