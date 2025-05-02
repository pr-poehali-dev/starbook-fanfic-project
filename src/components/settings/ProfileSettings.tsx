
import { useState } from "react";
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
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

interface ProfileSettingsProps {
  onSave?: () => void;
  onCancel?: () => void;
}

export default function ProfileSettings({ onSave, onCancel }: ProfileSettingsProps) {
  const [profileImage, setProfileImage] = useState("https://source.unsplash.com/random/300x300/?portrait,11");
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Настройки профиля</CardTitle>
        <CardDescription>
          Изменение личной информации и фотографии
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <ProfilePhotoSection profileImage={profileImage} onImageChange={setProfileImage} />
        
        <Separator />
        
        <ProfileInfoForm />
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline" onClick={onCancel}>Отмена</Button>
        <Button onClick={onSave}>Сохранить</Button>
      </CardFooter>
    </Card>
  );
}

interface ProfilePhotoSectionProps {
  profileImage: string;
  onImageChange: (url: string) => void;
}

function ProfilePhotoSection({ profileImage, onImageChange }: ProfilePhotoSectionProps) {
  const handleImageChange = () => {
    // В реальном приложении здесь была бы загрузка изображения
    // Для примера используем случайное изображение с другим ID
    const randomId = Math.floor(Math.random() * 100);
    onImageChange(`https://source.unsplash.com/random/300x300/?portrait,${randomId}`);
  };
  
  return (
    <div className="flex flex-col items-center space-y-4">
      <Avatar className="w-24 h-24">
        <AvatarImage src={profileImage} alt="Фото профиля" />
        <AvatarFallback>ИП</AvatarFallback>
      </Avatar>
      <Button variant="outline" onClick={handleImageChange}>Изменить фото</Button>
    </div>
  );
}

function ProfileInfoForm() {
  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="displayName">Отображаемое имя</Label>
          <Input id="displayName" defaultValue="Иван Писатель" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="username">Имя пользователя</Label>
          <Input id="username" defaultValue="ivan_writer" />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="bio">Биография</Label>
        <Textarea 
          id="bio" 
          placeholder="Расскажите немного о себе..."
          defaultValue="Автор фантастических рассказов и фанфиков. Люблю создавать новые миры и персонажей."
          className="min-h-24"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="website">Веб-сайт</Label>
        <Input id="website" placeholder="https://yourwebsite.com" />
      </div>
      
      <SocialMediaSection />
    </div>
  );
}

function SocialMediaSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="space-y-2">
        <Label htmlFor="twitter">Twitter</Label>
        <Input id="twitter" placeholder="@username" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="instagram">Instagram</Label>
        <Input id="instagram" placeholder="username" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="facebook">Facebook</Label>
        <Input id="facebook" placeholder="username" />
      </div>
    </div>
  );
}
