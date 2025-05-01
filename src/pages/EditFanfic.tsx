
import { useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "@/components/layouts/MainLayout";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import CoverUploader from "@/components/upload/CoverUploader";

export default function EditFanfic() {
  const { fanficId } = useParams();
  const isEditing = fanficId !== "new";
  
  const [coverImage, setCoverImage] = useState("https://source.unsplash.com/random/600x800/?book");
  
  return (
    <MainLayout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">
          {isEditing ? "Редактирование истории" : "Новая история"}
        </h1>
        
        <Tabs defaultValue="info" className="space-y-6">
          <TabsList className="grid grid-cols-3 w-full max-w-md">
            <TabsTrigger value="info">Информация</TabsTrigger>
            <TabsTrigger value="chapters">Главы</TabsTrigger>
            <TabsTrigger value="publish">Публикация</TabsTrigger>
          </TabsList>
          
          {/* Информация о фанфике */}
          <TabsContent value="info">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Основная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Название</Label>
                    <Input id="title" placeholder="Введите название вашей истории..." defaultValue={isEditing ? "Тайны космических пиратов" : ""} />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="summary">Краткое описание</Label>
                    <Textarea 
                      id="summary" 
                      placeholder="Кратко опишите вашу историю..."
                      defaultValue={isEditing ? "Захватывающая история о космических пиратах, бороздящих просторы вселенной в поисках приключений и сокровищ." : ""}
                      className="min-h-24"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fandom">Фэндом</Label>
                      <Select defaultValue={isEditing ? "original" : ""}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите фэндом" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="original">Ориджинал</SelectItem>
                          <SelectItem value="harry-potter">Гарри Поттер</SelectItem>
                          <SelectItem value="star-wars">Звездные войны</SelectItem>
                          <SelectItem value="marvel">Марвел</SelectItem>
                          <SelectItem value="dc">DC</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="rating">Возрастной рейтинг</Label>
                      <Select defaultValue={isEditing ? "pg13" : ""}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите рейтинг" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="g">G (без ограничений)</SelectItem>
                          <SelectItem value="pg">PG (10+)</SelectItem>
                          <SelectItem value="pg13">PG-13 (13+)</SelectItem>
                          <SelectItem value="r">R (16+)</SelectItem>
                          <SelectItem value="nc17">NC-17 (18+)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="tags">Теги</Label>
                    <Input id="tags" placeholder="Приключения, Драма, Фантастика..." defaultValue={isEditing ? "Космос, Пираты, Приключения, Драма" : ""} />
                    <p className="text-xs text-muted-foreground">Разделяйте теги запятыми</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                  <Button variant="outline">Отмена</Button>
                  <Button>Сохранить</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Обложка</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center space-y-4">
                  <div className="w-full max-w-xs aspect-[3/4] rounded-md overflow-hidden">
                    <img 
                      src={coverImage} 
                      alt="Обложка истории" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CoverUploader onCoverChange={(url) => setCoverImage(url)} />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Главы */}
          <TabsContent value="chapters">
            <Card>
              <CardHeader>
                <CardTitle>Главы истории</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {isEditing ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border rounded-md hover:bg-muted/50 transition-colors">
                      <div>
                        <h3 className="font-medium">Глава 1: Начало приключений</h3>
                        <p className="text-sm text-muted-foreground">Опубликована: 10.04.2023</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Редактировать</Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border rounded-md hover:bg-muted/50 transition-colors">
                      <div>
                        <h3 className="font-medium">Глава 2: Космическая буря</h3>
                        <p className="text-sm text-muted-foreground">Опубликована: 15.04.2023</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Редактировать</Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border rounded-md hover:bg-muted/50 transition-colors">
                      <div>
                        <h3 className="font-medium">Глава 3: Чужие миры</h3>
                        <p className="text-sm text-muted-foreground">Черновик</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Редактировать</Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground mb-4">У вас пока нет глав. Создайте первую главу вашей истории.</p>
                  </div>
                )}
                
                <Button className="w-full">Добавить новую главу</Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Публикация */}
          <TabsContent value="publish">
            <Card>
              <CardHeader>
                <CardTitle>Настройки публикации</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="status">Статус истории</Label>
                  <Select defaultValue={isEditing ? "in-progress" : "draft"}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите статус" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Черновик (не виден читателям)</SelectItem>
                      <SelectItem value="in-progress">В процессе</SelectItem>
                      <SelectItem value="completed">Завершена</SelectItem>
                      <SelectItem value="on-hold">На паузе</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="visibility">Видимость</Label>
                  <Select defaultValue={isEditing ? "public" : "private"}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите видимость" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">Публичная (видна всем)</SelectItem>
                      <SelectItem value="private">Приватная (только вы)</SelectItem>
                      <SelectItem value="unlisted">По ссылке (не отображается в поиске)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="comments">Комментарии</Label>
                  <Select defaultValue="enabled">
                    <SelectTrigger>
                      <SelectValue placeholder="Настройки комментариев" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="enabled">Разрешены</SelectItem>
                      <SelectItem value="moderated">С модерацией</SelectItem>
                      <SelectItem value="disabled">Отключены</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {isEditing && (
                  <div className="space-y-2 pt-4 border-t">
                    <h3 className="font-medium">Опубликована</h3>
                    <p className="text-sm">10 апреля 2023 г.</p>
                    
                    <h3 className="font-medium mt-4">Последнее обновление</h3>
                    <p className="text-sm">15 апреля 2023 г.</p>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline">Сохранить как черновик</Button>
                <Button>{isEditing ? "Обновить" : "Опубликовать"}</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}
