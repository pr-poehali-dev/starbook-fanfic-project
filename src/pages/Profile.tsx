
import { useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layouts/MainLayout";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
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
import { fanfics } from "@/data/fanfics";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("overview");
  
  // Имитируем данные пользователя
  const user = {
    name: "Иван Писатель",
    username: "ivan_writer",
    avatar: "https://source.unsplash.com/random/300x300/?portrait,11",
    bio: "Автор фантастических рассказов и фанфиков. Люблю создавать новые миры и персонажей.",
    joined: "Март 2023",
    stories: fanfics.slice(0, 3), // Первые 3 фанфика для примера
    followers: 128,
    following: 45,
  };

  return (
    <MainLayout>
      <div className="container py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Профиль слева */}
          <div className="w-full md:w-1/3">
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
                
                <div className="flex justify-between mb-6">
                  <div className="text-center">
                    <p className="font-semibold">{user.stories.length}</p>
                    <p className="text-xs text-muted-foreground">Историй</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold">{user.followers}</p>
                    <p className="text-xs text-muted-foreground">Подписчиков</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold">{user.following}</p>
                    <p className="text-xs text-muted-foreground">Подписок</p>
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground flex items-center gap-2 mb-4">
                  <Icon name="Calendar" size={14} />
                  Присоединился: {user.joined}
                </p>
                
                <div className="grid gap-2">
                  <Link to="/my-stories">
                    <Button variant="outline" className="w-full">
                      <Icon name="BookOpen" className="mr-2" size={16} />
                      Мои истории
                    </Button>
                  </Link>
                  <Link to="/settings">
                    <Button variant="outline" className="w-full">
                      <Icon name="Settings" className="mr-2" size={16} />
                      Настройки
                    </Button>
                  </Link>
                  <Link to="/statistics">
                    <Button variant="outline" className="w-full">
                      <Icon name="BarChart2" className="mr-2" size={16} />
                      Статистика
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Основной контент справа */}
          <div className="w-full md:w-2/3">
            <Tabs defaultValue="overview" onValueChange={setActiveTab}>
              <TabsList className="w-full mb-6">
                <TabsTrigger value="overview" className="flex-1">Обзор</TabsTrigger>
                <TabsTrigger value="stories" className="flex-1">Истории</TabsTrigger>
                <TabsTrigger value="favorites" className="flex-1">Избранное</TabsTrigger>
                <TabsTrigger value="comments" className="flex-1">Комментарии</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview">
                <Card>
                  <CardHeader>
                    <CardTitle>Добро пожаловать, {user.name}</CardTitle>
                    <CardDescription>
                      Здесь вы можете управлять своим профилем и контентом
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Последняя активность</h3>
                        <div className="rounded-md border p-4">
                          <div className="flex items-center gap-4 mb-3">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <p className="text-sm">Вы опубликовали новую историю</p>
                            <p className="text-xs text-muted-foreground ml-auto">Сегодня</p>
                          </div>
                          <div className="flex items-center gap-4 mb-3">
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            <p className="text-sm">Вы получили 5 новых лайков</p>
                            <p className="text-xs text-muted-foreground ml-auto">Вчера</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                            <p className="text-sm">Вы подписались на новый фандом</p>
                            <p className="text-xs text-muted-foreground ml-auto">2 дня назад</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium flex items-center justify-between">
                          Недавние истории
                          <Link to="/my-stories" className="text-sm text-primary hover:underline">
                            Смотреть все
                          </Link>
                        </h3>
                        <div className="space-y-3">
                          {user.stories.map((story) => (
                            <div key={story.id} className="flex items-center gap-3 p-3 border rounded-md">
                              <div className="w-12 h-12 rounded-md overflow-hidden">
                                <img 
                                  src={story.imageUrl || "https://source.unsplash.com/random/300x300/?abstract"} 
                                  alt={story.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium truncate">{story.title}</h4>
                                <p className="text-xs text-muted-foreground">{new Date(story.publishedAt).toLocaleDateString('ru')}</p>
                              </div>
                              <Link to={`/edit/${story.id}`} className="text-muted-foreground hover:text-foreground">
                                <Icon name="Edit" size={18} />
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="stories">
                <Card>
                  <CardHeader>
                    <CardTitle>Ваши истории</CardTitle>
                    <CardDescription>
                      Управляйте своими публикациями
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground py-8">
                      Для полного списка историй перейдите в раздел "Мои истории"
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="favorites">
                <Card>
                  <CardHeader>
                    <CardTitle>Избранное</CardTitle>
                    <CardDescription>
                      Истории, которые вам понравились
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground py-8">
                      У вас пока нет историй в избранном
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="comments">
                <Card>
                  <CardHeader>
                    <CardTitle>Комментарии</CardTitle>
                    <CardDescription>
                      Ваши комментарии к историям
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground py-8">
                      У вас пока нет комментариев
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
