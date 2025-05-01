
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
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  PieChart, 
  Pie, 
  Cell 
} from "recharts";

export default function Statistics() {
  // Данные для графиков
  const viewsData = [
    { name: "Янв", views: 400 },
    { name: "Фев", views: 300 },
    { name: "Мар", views: 500 },
    { name: "Апр", views: 280 },
    { name: "Май", views: 590 },
    { name: "Июн", views: 800 },
    { name: "Июл", views: 890 },
  ];

  const likesData = [
    { name: "Янв", likes: 40 },
    { name: "Фев", likes: 30 },
    { name: "Мар", likes: 45 },
    { name: "Апр", likes: 28 },
    { name: "Май", likes: 59 },
    { name: "Июн", likes: 80 },
    { name: "Июл", likes: 99 },
  ];

  const commentsData = [
    { name: "Янв", comments: 20 },
    { name: "Фев", comments: 15 },
    { name: "Мар", comments: 25 },
    { name: "Апр", comments: 14 },
    { name: "Май", comments: 30 },
    { name: "Июн", comments: 40 },
    { name: "Июл", comments: 60 },
  ];

  const categoryData = [
    { name: "Фантастика", value: 35 },
    { name: "Романтика", value: 25 },
    { name: "Приключения", value: 20 },
    { name: "Драма", value: 15 },
    { name: "Другие", value: 5 },
  ];

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#a4de6c"];

  return (
    <MainLayout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">Статистика</h1>
        
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid grid-cols-4 w-full max-w-md">
            <TabsTrigger value="overview">Обзор</TabsTrigger>
            <TabsTrigger value="stories">Истории</TabsTrigger>
            <TabsTrigger value="readers">Читатели</TabsTrigger>
            <TabsTrigger value="engagement">Вовлеченность</TabsTrigger>
          </TabsList>
          
          {/* Обзор */}
          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Всего просмотров</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">12,548</div>
                  <p className="text-xs text-muted-foreground mt-1">+14% с прошлого месяца</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Лайки</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">2,357</div>
                  <p className="text-xs text-muted-foreground mt-1">+9.3% с прошлого месяца</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Комментарии</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">865</div>
                  <p className="text-xs text-muted-foreground mt-1">+5.1% с прошлого месяца</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Подписчики</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">478</div>
                  <p className="text-xs text-muted-foreground mt-1">+12.4% с прошлого месяца</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Просмотры по месяцам</CardTitle>
                  <CardDescription>
                    Динамика просмотров ваших историй
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={viewsData}
                        margin={{
                          top: 5,
                          right: 10,
                          left: 10,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="views"
                          stroke="#8884d8"
                          activeDot={{ r: 8 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Распределение по категориям</CardTitle>
                  <CardDescription>
                    Соотношение категорий ваших историй
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={categoryData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {categoryData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Вовлеченность аудитории</CardTitle>
                  <CardDescription>
                    Лайки и комментарии по месяцам
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={[...likesData.map(item => ({
                          name: item.name,
                          Лайки: item.likes,
                          Комментарии: commentsData.find(d => d.name === item.name)?.comments || 0
                        }))]}
                        margin={{
                          top: 5,
                          right: 10,
                          left: 10,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Лайки" fill="#8884d8" />
                        <Bar dataKey="Комментарии" fill="#82ca9d" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Заглушки для других вкладок */}
          <TabsContent value="stories">
            <Card>
              <CardHeader>
                <CardTitle>Статистика по историям</CardTitle>
                <CardDescription>
                  Детальная информация о каждой истории
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Здесь будет отображаться детальная статистика по каждой истории.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="readers">
            <Card>
              <CardHeader>
                <CardTitle>Анализ аудитории</CardTitle>
                <CardDescription>
                  Демографические данные и предпочтения читателей
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Здесь будет отображаться информация о вашей аудитории и их предпочтениях.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="engagement">
            <Card>
              <CardHeader>
                <CardTitle>Показатели вовлеченности</CardTitle>
                <CardDescription>
                  Детальный анализ вовлеченности читателей
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Здесь будет отображаться подробная информация о вовлеченности читателей.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}
