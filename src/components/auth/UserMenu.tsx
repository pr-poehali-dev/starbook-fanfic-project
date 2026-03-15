import { useAuth } from "@/context/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import ProfileSidebar from "@/components/profile/ProfileSidebar";

export default function UserMenu() {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  const initials = user.username
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .substring(0, 2);

  const trigger = (
    <Button
      variant="ghost"
      className="relative h-10 w-10 rounded-full"
      aria-label="Личный кабинет"
    >
      <Avatar>
        <AvatarImage src={user.avatar} alt={user.username} className="h-10 w-10" />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-background"></span>
    </Button>
  );

  return <ProfileSidebar trigger={trigger} />;
}
