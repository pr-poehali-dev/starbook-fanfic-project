
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { UserProfile } from "@/types/user";

interface OverviewTabProps {
  user: UserProfile;
}

export default function OverviewTab({ user }: OverviewTabProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Добро пожаловать, {user.name}</CardTitle>
        <CardDescription>
          Здесь вы можете управлять своим профилем и контентом
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <ActivitySection />
          <RecentStoriesSection user={user} />
        </div>
      </CardContent>
    </Card>
  );
}

function ActivitySection() {
  const activities = [
    { id: "1", message: "Вы опубликовали новую историю", date: "Сегодня", color: "bg-green-500" },
    { id: "2", message: "Вы получили 5 новых лайков", date: "Вчера", color: "bg-blue-500" },
    { id: "3", message: "Вы подписались на новый фандом", date: "2 дня назад", color: "bg-purple-500" }
  ];

  return (
    <div className="space-y-2">
      <h3 className="text-lg font-medium">Последняя активность</h3>
      <div className="rounded-md border p-4">
        {activities.map((activity, index) => (
          <ActivityItem 
            key={activity.id}
            message={activity.message}
            date={activity.date}
            color={activity.color}
            isLast={index === activities.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

interface ActivityItemProps {
  message: string;
  date: string;
  color: string;
  isLast: boolean;
}

function ActivityItem({ message, date, color, isLast }: ActivityItemProps) {
  return (
    <div className={`flex items-center gap-4 ${!isLast ? "mb-3" : ""}`}>
      <div className={`w-2 h-2 rounded-full ${color}`}></div>
      <p className="text-sm">{message}</p>
      <p className="text-xs text-muted-foreground ml-auto">{date}</p>
    </div>
  );
}

function RecentStoriesSection({ user }: { user: UserProfile }) {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-medium flex items-center justify-between">
        Недавние истории
        <Link to="/my-stories" className="text-sm text-primary hover:underline">
          Смотреть все
        </Link>
      </h3>
      <div className="space-y-3">
        {user.stories.map((story) => (
          <StoryItem key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
}

function StoryItem({ story }: { story: any }) {
  return (
    <div className="flex items-center gap-3 p-3 border rounded-md">
      <div className="w-12 h-12 rounded-md overflow-hidden">
        <img 
          src={story.imageUrl || "https://source.unsplash.com/random/300x300/?abstract"} 
          alt={story.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-medium truncate">{story.title}</h4>
        <p className="text-xs text-muted-foreground">
          {new Date(story.publishedAt).toLocaleDateString('ru')}
        </p>
      </div>
      <Link to={`/edit/${story.id}`} className="text-muted-foreground hover:text-foreground">
        <Icon name="Edit" size={18} />
      </Link>
    </div>
  );
}
