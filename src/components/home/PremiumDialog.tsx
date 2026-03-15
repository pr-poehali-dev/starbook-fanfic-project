import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";
import * as LucideIcons from "lucide-react";

const PERKS = [
  { icon: "Zap", label: "Без рекламы", desc: "Читай и пиши без отвлечений" },
  { icon: "Palette", label: "Эксклюзивные темы", desc: "Уникальные цветовые схемы" },
  { icon: "BookMarked", label: "Безлимитные закладки", desc: "Сохраняй сколько угодно" },
  { icon: "BadgeCheck", label: "Значок автора", desc: "Премиум-метка на профиле" },
  { icon: "Bell", label: "Приоритетные уведомления", desc: "Первым узнавай о новинках" },
  { icon: "BarChart2", label: "Расширенная статистика", desc: "Детальная аналитика историй" },
  { icon: "Download", label: "Скачивание историй", desc: "Читай офлайн где угодно" },
  { icon: "MessageCircleHeart", label: "Особые реакции", desc: "Эксклюзивные эмодзи и стикеры" },
];

function getRandomPerks(count = 4) {
  const shuffled = [...PERKS].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export default function PremiumDialog() {
  const [open, setOpen] = useState(false);
  const [perks] = useState(() => getRandomPerks(4));

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        className="hidden sm:flex gap-1.5 border-amber-400 text-amber-600 hover:bg-amber-50 hover:text-amber-700 dark:border-amber-500 dark:text-amber-400 dark:hover:bg-amber-950"
        onClick={() => setOpen(true)}
      >
        <Icon name="Crown" size={16} className="text-amber-500" />
        Премиум
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl">
              <Icon name="Crown" size={22} className="text-amber-500" />
              Starbook Премиум
            </DialogTitle>
            <DialogDescription>
              Открой лучший опыт чтения и написания историй
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-2 gap-3 my-2">
            {perks.map((perk) => (
              <div
                key={perk.icon}
                className="flex flex-col gap-1 rounded-xl border border-amber-200 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-800 p-3"
              >
                <div className="flex items-center gap-2">
                  <Icon name={perk.icon as keyof typeof LucideIcons} size={18} className="text-amber-500" />
                  <span className="text-sm font-semibold">{perk.label}</span>
                </div>
                <p className="text-xs text-muted-foreground">{perk.desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl bg-gradient-to-r from-amber-400 to-orange-400 p-4 text-white text-center">
            <div className="text-2xl font-bold">299 ₽ / мес</div>
            <div className="text-sm opacity-90">или 2490 ₽ / год — экономия 40%</div>
          </div>

          <Button
            className="w-full bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white font-semibold"
            size="lg"
          >
            <Icon name="Crown" size={18} className="mr-2" />
            Получить Премиум
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}