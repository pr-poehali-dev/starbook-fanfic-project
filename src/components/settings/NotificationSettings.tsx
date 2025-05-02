
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

interface NotificationSettingsProps {
  onSave?: () => void;
  onCancel?: () => void;
}

export default function NotificationSettings({ onSave, onCancel }: NotificationSettingsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Настройки уведомлений</CardTitle>
        <CardDescription>
          Настройте, какие уведомления вы хотите получать
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <EmailNotificationSection />
        
        <Separator />
        
        <SiteNotificationSection />
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline" onClick={onCancel}>Отмена</Button>
        <Button onClick={onSave}>Сохранить</Button>
      </CardFooter>
    </Card>
  );
}

function EmailNotificationSection() {
  const notifications = [
    {
      id: "comments",
      label: "Комментарии к вашим историям",
      description: "Получайте уведомления, когда кто-то комментирует ваши истории",
      defaultChecked: true
    },
    {
      id: "likes",
      label: "Лайки к вашим историям",
      description: "Получайте уведомления, когда кто-то лайкает ваши истории",
      defaultChecked: true
    },
    {
      id: "followers",
      label: "Новые подписчики",
      description: "Получайте уведомления, когда кто-то подписывается на вас",
      defaultChecked: true
    },
    {
      id: "newsletter",
      label: "Новости и обновления",
      description: "Получайте информацию о новых функциях и обновлениях сайта",
      defaultChecked: false
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Email уведомления</h3>
      
      <div className="space-y-3">
        {notifications.map(notification => (
          <NotificationItem
            key={notification.id}
            id={notification.id}
            label={notification.label}
            description={notification.description}
            defaultChecked={notification.defaultChecked}
          />
        ))}
      </div>
    </div>
  );
}

function SiteNotificationSection() {
  const notifications = [
    {
      id: "site-comments",
      label: "Комментарии",
      description: "Показывать уведомления о новых комментариях на сайте",
      defaultChecked: true
    },
    {
      id: "site-likes",
      label: "Лайки",
      description: "Показывать уведомления о новых лайках на сайте",
      defaultChecked: true
    },
    {
      id: "site-followers",
      label: "Подписчики",
      description: "Показывать уведомления о новых подписчиках на сайте",
      defaultChecked: true
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Уведомления на сайте</h3>
      
      <div className="space-y-3">
        {notifications.map(notification => (
          <NotificationItem
            key={notification.id}
            id={notification.id}
            label={notification.label}
            description={notification.description}
            defaultChecked={notification.defaultChecked}
          />
        ))}
      </div>
    </div>
  );
}

interface NotificationItemProps {
  id: string;
  label: string;
  description: string;
  defaultChecked: boolean;
}

function NotificationItem({ id, label, description, defaultChecked }: NotificationItemProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-0.5">
        <Label htmlFor={id}>{label}</Label>
        <p className="text-xs text-muted-foreground">
          {description}
        </p>
      </div>
      <Switch id={id} defaultChecked={defaultChecked} />
    </div>
  );
}
