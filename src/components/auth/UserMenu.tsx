
import { useAuth } from "@/context/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function UserMenu() {
  const { user, logout } = useAuth();

  if (!user) {
    return null;
  }

  // Получаем первые буквы имени пользователя для аватара (если нет изображения)
  const initials = user.username
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .substring(0, 2);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative h-10 w-10 rounded-full"
          aria-label="Меню пользователя"
        >
          <Avatar>
            <AvatarImage
              src={user.avatar}
              alt={user.username}
              className="h-10 w-10"
            />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-background"></span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.username}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link to="/profile">
          <DropdownMenuItem>
            <Icon name="User" className="mr-2 h-4 w-4" />
            <span>Профиль</span>
          </DropdownMenuItem>
        </Link>
        <Link to="/my-stories">
          <DropdownMenuItem>
            <Icon name="BookOpen" className="mr-2 h-4 w-4" />
            <span>Мои истории</span>
          </DropdownMenuItem>
        </Link>
        <Link to="/settings">
          <DropdownMenuItem>
            <Icon name="Settings" className="mr-2 h-4 w-4" />
            <span>Настройки</span>
          </DropdownMenuItem>
        </Link>
        <Link to="/statistics">
          <DropdownMenuItem>
            <Icon name="BarChart" className="mr-2 h-4 w-4" />
            <span>Статистика</span>
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout}>
          <Icon name="LogOut" className="mr-2 h-4 w-4" />
          <span>Выйти</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
