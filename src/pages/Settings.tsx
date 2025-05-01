
import { useState } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function Settings() {
  const [profileImage, setProfileImage] = useState("https://source.unsplash.com/random/300x300/?portrait,11");
  
  return (
    <MainLayout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">Настройки</h1>
        
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid grid-cols-3 w-full max-w-md">
            <TabsTrigger value="profile">Профиль</TabsTrigger>
            <TabsTrigger value="account">Аккаунт</TabsTrigger>
            <TabsTrigger value="notifications">Уведомления</TabsTrigger>
          </TabsList>
          
          {/* Настройки профиля */}
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Настройки профиля</CardTitle>
                <CardDescription>
                  Изменение личной информации и фотографии
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col items-center space-y-4">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src={profileImage} alt="Фото профиля" />
                    <AvatarFallback>ИП</AvatarFallback>
                  </Avatar>
                  <Button variant="outline">Изменить фото</Button>
                </div>
                
                <Separator />
                
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
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline">Отмена</Button>
                <Button>Сохранить</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          {/* Настройки аккаунта */}
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Настройки аккаунта</CardTitle>
                <CardDescription>
                  Изменение учетных данных и параметров безопасности
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="ivan@example.com" />
                  </div>
                  
                  <Separator />
                  
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
                  
                  <Separator />
                  
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
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-red-600">Опасная зона</h3>
                    <p className="text-sm text-muted-foreground">
                      После удаления вашего аккаунта, все ваши данные будут безвозвратно удалены.
                    </p>
                    <Button variant="destructive">Удалить аккаунт</Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline">Отмена</Button>
                <Button>Сохранить</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          {/* Настройки уведомлений */}
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Настройки уведомлений</CardTitle>
                <CardDescription>
                  Настройте, какие уведомления вы хотите получать
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Email уведомления</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="comments">Комментарии к вашим историям</Label>
                        <p className="text-xs text-muted-foreground">
                          Получайте уведомления, когда кто-то комментирует ваши истории
                        </p>
                      </div>
                      <Switch id="comments" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="likes">Лайки к вашим историям</Label>
                        <p className="text-xs text-muted-foreground">
                          Получайте уведомления, когда кто-то лайкает ваши истории
                        </p>
                      </div>
                      <Switch id="likes" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="followers">Новые подписчики</Label>
                        <p className="text-xs text-muted-foreground">
                          Получайте уведомления, когда кто-то подписывается на вас
                        </p>
                      </div>
                      <Switch id="followers" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="newsletter">Новости и обновления</Label>
                        <p className="text-xs text-muted-foreground">
                          Получайте информацию о новых функциях и обновлениях сайта
                        </p>
                      </div>
                      <Switch id="newsletter" />
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Уведомления на сайте</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="site-comments">Комментарии</Label>
                        <p className="text-xs text-muted-foreground">
                          Показывать уведомления о новых комментариях на сайте
                        </p>
                      </div>
                      <Switch id="site-comments" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="site-likes">Лайки</Label>
                        <p className="text-xs text-muted-foreground">
                          Показывать уведомления о новых лайках на сайте
                        </p>
                      </div>
                      <Switch id="site-likes" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="site-followers">Подписчики</Label>
                        <p className="text-xs text-muted-foreground">
                          Показывать уведомления о новых подписчиках на сайте
                        </p>
                      </div>
                      <Switch id="site-followers" defaultChecked />
                    </div>
                  </div>
                </div>
                
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline">Отмена</Button>
                <Button>Сохранить</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}
