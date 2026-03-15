import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import * as LucideIcons from "lucide-react";

const MENU_ITEMS = [
  { icon: "LayoutDashboard", label: "Обзор", to: "/profile", badge: null },
  { icon: "BookOpen", label: "Мои истории", to: "/my-stories", badge: "3" },
  { icon: "Heart", label: "Избранное", to: "/profile?tab=favorites", badge: null },
  { icon: "MessageCircle", label: "Комментарии", to: "/profile?tab=comments", badge: "5" },
  { icon: "BarChart2", label: "Статистика", to: "/statistics", badge: null },
  { icon: "Settings", label: "Настройки", to: "/settings", badge: null },
];

interface ProfileSidebarProps {
  trigger: React.ReactNode;
}

export default function ProfileSidebar({ trigger }: ProfileSidebarProps) {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  if (!user) return null;

  const initials = user.username
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .substring(0, 2);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[340px] flex flex-col p-0">
        <SheetHeader className="p-6 pb-4">
          <SheetTitle className="sr-only">Личный кабинет</SheetTitle>
          <div className="flex items-center gap-4">
            <Avatar className="h-14 w-14">
              <AvatarImage src={user.avatar} alt={user.username} />
              <AvatarFallback className="text-lg">{initials}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-base truncate">{user.username}</p>
              <p className="text-sm text-muted-foreground truncate">{user.email}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 mt-4 text-center">
            {[
              { label: "Историй", value: "12" },
              { label: "Читателей", value: "847" },
              { label: "Лайков", value: "2.3K" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-lg bg-muted/50 p-2">
                <div className="font-bold text-sm">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </SheetHeader>

        <Separator />

        <nav className="flex-1 overflow-y-auto py-2">
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-6 py-3 text-sm hover:bg-accent transition-colors rounded-none"
            >
              <Icon name={item.icon as keyof typeof LucideIcons} size={18} className="text-muted-foreground" />
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <Badge variant="secondary" className="text-xs h-5 px-1.5">
                  {item.badge}
                </Badge>
              )}
            </Link>
          ))}
        </nav>

        <Separator />

        <div className="p-4 space-y-2">
          <Link to="/create" onClick={() => setOpen(false)}>
            <Button className="w-full gap-2" size="sm">
              <Icon name="PenLine" size={16} />
              Написать историю
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="sm"
            className="w-full gap-2 text-muted-foreground hover:text-destructive"
            onClick={() => {
              logout();
              setOpen(false);
            }}
          >
            <Icon name="LogOut" size={16} />
            Выйти
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}