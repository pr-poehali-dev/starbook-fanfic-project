
import MainLayout from "@/components/layouts/MainLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { fanfics } from "@/data/fanfics";

export default function Statistics() {
  // Псевдо-данные для примера
  const stats = {
    totalViews: 3826,
    totalLikes: 549,
    totalComments: 87,
    totalStories: fanfics.length,
    viewsPerDay: [65, 72, 120, 93, 54, 87, 105],
    likesPerDay: [12, 8, 25, 18, 9, 11, 16],
    topStories: [
      { title: "Возвращение Звёздного Капитана", views: 856, likes: 112 },
      { title: "Тайна Зачарованного Леса", views: 724, likes: 98 },
      { title: "Последний Рыцарь Королевства", views: 612, likes: 84 },
    ],
    demographics: {
      age: [
        { group: "13-17", percent: 10 },
        { group: "18-24", percent: 35 },
        { group: "25-34", percent: 40 },
        { group: "35-44", percent: 10 },
        { group: "45+", percent: 5 },
      ],
      gender: [
        { group: "Женский", percent: 60 },
        { group: "Мужской", percent: 35 },
        { group: "Другой", percent: 5 },
      ],
    },
  };

  return (
    <MainLayout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">Статистика</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* Общее количество просмотров */}
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Всего просмотров</CardDescription>
              <CardTitle className="text-3xl">{stats.totalViews}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground flex items-center">
                <Icon name="TrendingUp" className="mr-1 text-green-500" size={16} />
                <span className="text-green-500 font-medium">+12%</span> за последнюю неделю
              </div>
            </CardContent>
          </Card>
          
          {/* Общее количество лайков */}
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Всего лайков</CardDescription>
              <CardTitle className="text-3xl">{stats.totalLikes}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground flex items-center">
                <Icon name="TrendingUp" className="mr-1 text-green-500" size={16} />
                <span className="text-green-500 font-medium">+8%</span> за последнюю неделю
              </div>
            </CardContent>
          </Card>
          
          {/* Общее количество комментариев */}
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Всего комментариев</CardDescription>
              <CardTitle className="text-3xl">{stats.totalComments}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground flex items-center">
                <Icon name="TrendingDown" className="mr-1 text-red-500" size={16} />
                <span className="text-red-500 font-medium">-3%</span> за последнюю неделю
              </div>
            </CardContent>
          </Card>
          
          {/* Общее количество историй */}
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Всего историй</CardDescription>
              <CardTitle className="text-3xl">{stats.totalStories}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground flex items-center">
                <Icon name="Plus" className="mr-1 text-blue-500" size={16} />
                <span className="text-blue-500 font-medium">2</span> новых за месяц
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Обзор</TabsTrigger>
            <TabsTrigger value="audience">Аудитория</TabsTrigger>
            <TabsTrigger value="stories">Истории</TabsTrigger>
          </TabsList>
          
          {/* Вкладка "Обзор" */}
          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* График просмотров */}
              <Card>
                <CardHeader>
                  <CardTitle>Просмотры за неделю</CardTitle>
                  <CardDescription>Ежедневное количество просмотров ваших историй</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80 flex items-end justify-between gap-2">
                    {stats.viewsPerDay.map((views, index) => (
                      <div key={index} className="relative flex flex-col items-center">
                        <div 
                          className="w-12 bg-primary/90 rounded-t-sm hover:bg-primary transition-colors" 
                          style={{ height: `${(views / Math.max(...stats.viewsPerDay)) * 200}px` }}
                        ></div>
                        <span className="text-xs mt-2">{["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"][index]}</span>
                        <span className="absolute -top-6 text-xs font-medium">{views}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* График лайков */}
              <Card>
                <CardHeader>
                  <CardTitle>Лайки за неделю</CardTitle>
                  <CardDescription>Ежедневное количество лайков ваших историй</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80 flex items-end justify-between gap-2">
                    {stats.likesPerDay.map((likes, index) => (
                      <div key={index} className="relative flex flex-col items-center">
                        <div 
                          className="w-12 bg-red-500/90 rounded-t-sm hover:bg-red-500 transition-colors" 
                          style={{ height: `${(likes / Math.max(...stats.likesPerDay)) * 200}px` }}
                        ></div>
                        <span className="text-xs mt-2">{["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"][index]}</span>
                        <span className="absolute -top-6 text-xs font-medium">{likes}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Популярные истории */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Самые популярные истории</CardTitle>
                  <CardDescription>Истории с наибольшим количеством просмотров</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {stats.topStories.map((story, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-md">
                        <div className="flex items-center gap-3">
                          <div className="bg-primary/10 text-primary flex items-center justify-center w-8 h-8 rounded-full font-bold">
                            {index + 1}
                          </div>
                          <span className="font-medium">{story.title}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Icon name="Eye" size={16} />
                            <span>{story.views}</span>
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Icon name="Heart" size={16} />
                            <span>{story.likes}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Вкладка "Аудитория" */}
          <TabsContent value="audience">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Возрастные группы */}
              <Card>
                <CardHeader>
                  <CardTitle>Возрастные группы</CardTitle>
                  <CardDescription>Распределение ваших читателей по возрасту</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {stats.demographics.age.map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">{item.group}</span>
                          <span className="text-sm">{item.percent}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-primary rounded-full h-2"
                            style={{ width: `${item.percent}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Гендерное распределение */}
              <Card>
                <CardHeader>
                  <CardTitle>Гендерное распределение</CardTitle>
                  <CardDescription>Распределение ваших читателей по полу</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {stats.demographics.gender.map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">{item.group}</span>
                          <span className="text-sm">{item.percent}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className={`rounded-full h-2 ${
                              index === 0 ? "bg-purple-500" : 
                              index === 1 ? "bg-blue-500" : 
                              "bg-green-500"
                            }`}
                            style={{ width: `${item.percent}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Географическое распределение */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Географическое распределение</CardTitle>
                  <CardDescription>Откуда читают ваши истории</CardDescription>
                </CardHeader>
                <CardContent className="min-h-80 flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="Map" size={64} className="mx-auto text-muted-foreground opacity-50 mb-4" />
                    <p className="text-muted-foreground">Недостаточно данных для отображения карты</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Вкладка "Истории" */}
          <TabsContent value="stories">
            <Card>
              <CardHeader>
                <CardTitle>Статистика по историям</CardTitle>
                <CardDescription>Подробная статистика по каждой истории</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs uppercase bg-muted/50">
                      <tr>
                        <th className="px-6 py-3">История</th>
                        <th className="px-6 py-3">Просмотры</th>
                        <th className="px-6 py-3">Лайки</th>
                        <th className="px-6 py-3">Комментарии</th>
                        <th className="px-6 py-3">Коэф. конверсии</th>
                        <th className="px-6 py-3">Ср. время чтения</th>
                      </tr>
                    </thead>
                    <tbody>
                      {fanfics.map((fanfic, index) => (
                        <tr key={fanfic.id} className="border-b">
                          <td className="px-6 py-4 font-medium">{fanfic.title}</td>
                          <td className="px-6 py-4">{Math.floor(Math.random() * 1000)}</td>
                          <td className="px-6 py-4">{fanfic.likes}</td>
                          <td className="px-6 py-4">{Math.floor(Math.random() * 30)}</td>
                          <td className="px-6 py-4">{(Math.random() * 15).toFixed(2)}%</td>
                          <td className="px-6 py-4">{Math.floor(Math.random() * 10) + 2} мин</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}
