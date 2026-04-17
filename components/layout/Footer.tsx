import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="mb-3 text-xl font-bold text-primary">ESOLT</p>
            <p className="text-sm text-muted-foreground">
              Сборщик и поставщик комплексных систем бесперебойного питания «под ключ»
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide">Продукция</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/catalog/ups-rack-1ph" className="hover:text-foreground">ИБП стоечные 1ф</Link></li>
              <li><Link href="/catalog/ups-modular" className="hover:text-foreground">Модульные ИБП</Link></li>
              <li><Link href="/catalog/battery-lifepo4" className="hover:text-foreground">Литий-ионные АКБ</Link></li>
              <li><Link href="/catalog/energy-storage-cabinet" className="hover:text-foreground">Системы накопления энергии</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide">Услуги</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/services/energy-audit" className="hover:text-foreground">Энергоаудит</Link></li>
              <li><Link href="/services/engineering-design" className="hover:text-foreground">Проектирование</Link></li>
              <li><Link href="/services/commissioning" className="hover:text-foreground">Пусконаладка</Link></li>
              <li><Link href="/services/service" className="hover:text-foreground">Сервисное обслуживание</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide">Контакты</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+74951234567" className="hover:text-foreground">+7 (495) 123-45-67</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:info@esolt.ru" className="hover:text-foreground">info@esolt.ru</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Москва, Россия</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} ESOLT (ООО ВИЭС). Все права защищены.
        </div>
      </div>
    </footer>
  );
}
