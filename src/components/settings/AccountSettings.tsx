
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AccountSettingsProps {
  onSave?: () => void;
  onCancel?: () => void;
}

export default function AccountSettings({ onSave, onCancel }: AccountSettingsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Настройки аккаунта</CardTitle>
        <CardDescription>
          Изменение учетных данных и параметров безопасности
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <EmailSection />
        
        <Separator />
        
        <PasswordSection />
        
        <Separator />
        
        <LanguageSection />
        
        <Separator />
        
        <DangerZoneSection />
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline" onClick={onCancel}>Отмена</Button>
        <Button onClick={onSave}>Сохранить</Button>
      </CardFooter>
    </Card>
  );
}

function EmailSection() {
  return (
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" defaultValue="ivan@example.com" />
    </div>
  );
}

function PasswordSection() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Изменение пароля</h3>
      <div className="space-y-2">
        <Label htmlFor="currentPassword">Текущий пароль</Label>
        <Input id="currentPassword" type="password" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="newPassword">Новый пароль</Label>
        <Input id="newPassword" type="password" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Подтвердите пароль</Label>
        <Input id="confirmPassword" type="password" />
      </div>
    </div>
  );
}

function LanguageSection() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Языковые настройки</h3>
      <div className="space-y-2">
        <Label htmlFor="language">Язык интерфейса</Label>
        <Select defaultValue="ru">
          <SelectTrigger>
            <SelectValue placeholder="Выберите язык" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ru">Русский</SelectItem>
            <SelectItem value="en">English</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

function DangerZoneSection() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-red-600">Опасная зона</h3>
      <p className="text-sm text-muted-foreground">
        После удаления вашего аккаунта, все ваши данные будут безвозвратно удалены.
      </p>
      <Button variant="destructive">Удалить аккаунт</Button>
    </div>
  );
}
