
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";
import { UserProfile } from "@/types/user";

interface ProfileCardProps {
  user: UserProfile;
}

export default function ProfileCard({ user }: ProfileCardProps) {
  return (
    <Card>
      <CardHeader className="text-center">
        <Avatar className="w-24 h-24 mx-auto mb-4">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
        </Avatar>
        <CardTitle>{user.name}</CardTitle>
        <CardDescription>@{user.username}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{user.bio}</p>
        
        <ProfileStats user={user} />
        
        <p className="text-xs text-muted-foreground flex items-center gap-2 mb-4">
          <Icon name="Calendar" size={14} />
          Присоединился: {user.joined}
        </p>
        
        <ProfileNavigation />
      </CardContent>
    </Card>
  );
}

function ProfileStats({ user }: { user: UserProfile }) {
  return (
    <div className="flex justify-between mb-6">
      <StatItem label="Историй" value={user.stories.length} />
      <StatItem label="Подписчиков" value={user.followers} />
      <StatItem label="Подписок" value={user.following} />
    </div>
  );
}

function StatItem({ label, value }: { label: string; value: number }) {
  return (
    <div className="text-center">
      <p className="font-semibold">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

function ProfileNavigation() {
  const navItems = [
    { to: "/my-stories", icon: "BookOpen", label: "Мои истории" },
    { to: "/settings", icon: "Settings", label: "Настройки" },
    { to: "/statistics", icon: "BarChart2", label: "Статистика" },
  ];

  return (
    <div className="grid gap-2">
      {navItems.map((item) => (
        <Link key={item.to} to={item.to}>
          <Button variant="outline" className="w-full">
            <Icon name={item.icon} className="mr-2" size={16} />
            {item.label}
          </Button>
        </Link>
      ))}
    </div>
  );
}
