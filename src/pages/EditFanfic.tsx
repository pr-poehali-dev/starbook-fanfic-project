
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "@/components/layouts/MainLayout";
import {
  Card,
  CardContent,
  CardDescription,
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
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { getFanficById } from "@/data/fanfics";
import { fandoms } from "@/data/fandoms";
import { FanficRating, RATING_LABELS } from "@/types/fanfiction";

export default function EditFanfic() {
  const { fanficId } = useParams<{ fanficId: string }>();
  const [fanfic, setFanfic] = useState(getFanficById(fanficId || ""));
  const [coverPreview, setCoverPreview] = useState<string | undefined>(fanfic?.imageUrl);
  
  // Если фанфик не найден, показываем заглушку
  if (!fanfic) {
    return (
      <MainLayout>
        <div className="container py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Фанфик не найден</h1>
          <p className="text-muted-foreground mb-6">Запрашиваемый фанфик не существует или был удален.</p>
          <Button asChild>
            <a href="/my-stories">Вернуться к моим историям</a>
          </Button>
        </div>
      </MainLayout>
    );
  }
  
  return (
    <MainLayout>
      <div className="container py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Редактирование истории</h1>
          <div className="flex gap-2">
            <Button variant="outline">Отмена</Button>
            <Button>Сохранить</Button>
          </div>
        </div>
        
        <Tabs defaultValue="content" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="content">Содержание</TabsTrigger>
            <TabsTrigger value="settings">Настройки</TabsTrigger>
            <TabsTrigger value="publish">Публикация</TabsTrigger>
          </TabsList>
          
          {/* Вкладка с основным содержимым */}
          <TabsContent value="content">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Основная информация</CardTitle>
                    <CardDescription>
                      Заголовок и описание истории
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Название истории</Label>
                      <Input 
                        id="title" 
                        defaultValue={fanfic.title} 
                        placeholder="Введите название истории"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="excerpt">Краткое описание</Label>
                      <Textarea 
                        id="excerpt" 
                        defaultValue={fanfic.excerpt}
                        placeholder="Краткое описание сюжета (не более 150 символов)"
                        className="min-h-20"
                      />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Текст истории</CardTitle>
                    <CardDescription>
                      Содержание вашей истории
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="border rounded-md p-4 min-h-[400px] relative">
                      {/* Здесь будет редактор текста */}
                      <Textarea 
                        className="min-h-[400px] border-0 p-0 resize-none focus-visible:ring-0 focus-visible:ring-offset-0"
                        placeholder="Начните писать вашу историю здесь..."
                        defaultValue="Это был обычный день, пока не произошло нечто необычное..."
                      />
                      
                      {/* Панель инструментов */}
                      <div className="absolute bottom-4 left-4 right-4 border rounded-md p-2 bg-background flex items-center gap-2">
                        <button className="p-2 rounded-md hover:bg-accent">
                          <Icon name="Bold" size={16} />
                        </button>
                        <button className="p-2 rounded-md hover:bg-accent">
                          <Icon name="Italic" size={16} />
                        </button>
                        <button className="p-2 rounded-md hover:bg-accent">
                          <Icon name="Underline" size={16} />
                        </button>
                        <Separator orientation="vertical" className="h-6" />
                        <button className="p-2 rounded-md hover:bg-accent">
                          <Icon name="AlignLeft" size={16} />
                        </button>
                        <button className="p-2 rounded-md hover:bg-accent">
                          <Icon name="AlignCenter" size={16} />
                        </button>
                        <button className="p-2 rounded-md hover:bg-accent">
                          <Icon name="AlignRight" size={16} />
                        </button>
                        <Separator orientation="vertical" className="h-6" />
                        <button className="p-2 rounded-md hover:bg-accent">
                          <Icon name="List" size={16} />
                        </button>
                        <button className="p-2 rounded-md hover:bg-accent">
                          <Icon name="ListOrdered" size={16} />
                        </button>
                        <button className="p-2 rounded-md hover:bg-accent">
                          <Icon name="Heading1" size={16} />
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Панель справа */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Обложка</CardTitle>
                    <CardDescription>
                      Загрузите обложку для вашей истории
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="aspect-[3/2] rounded-md overflow-hidden border-2 border-dashed border-muted-foreground/25 flex items-center justify-center relative">
                      {coverPreview ? (
                        <>
                          <img 
                            src={coverPreview} 
                            alt="Предпросмотр обложки" 
                            className="w-full h-full object-cover"
                          />
                          <button 
                            className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70"
                            onClick={() => setCoverPreview(undefined)}
                          >
                            <Icon name="X" size={16} />
                          </button>
                        </>
                      ) : (
                        <div className="text-center p-4">
                          <Icon name="Image" size={48} className="mx-auto text-muted-foreground mb-2" />
                          <p className="text-sm text-muted-foreground">
                            Перетащите изображение или нажмите для загрузки
                          </p>
                        </div>
                      )}
                    </div>
                    <Button variant="outline" className="w-full">
                      <Icon name="Upload" className="mr-2" size={16} />
                      Загрузить обложку
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Теги</CardTitle>
                    <CardDescription>
                      Добавьте теги для лучшего поиска
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {fanfic.tags.map((tag, index) => (
                        <div 
                          key={index} 
                          className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-sm flex items-center"
                        >
                          {tag}
                          <button className="ml-1 text-muted-foreground hover:text-foreground">
                            <Icon name="X" size={14} />
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Input placeholder="Добавить тег..." />
                      <Button variant="secondary" className="shrink-0">
                        <Icon name="Plus" size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          {/* Вкладка с настройками */}
          <TabsContent value="settings">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Фандом и категория</CardTitle>
                  <CardDescription>
                    Выберите фандом и категорию для вашей истории
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fandom">Основной фандом</Label>
                    <Select defaultValue={fanfic.fandom.id}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите фандом" />
                      </SelectTrigger>
                      <SelectContent>
                        {fandoms.map((fandom) => (
                          <SelectItem key={fandom.id} value={fandom.id}>
                            {fandom.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="category">Категория</Label>
                    <Input defaultValue={fanfic.category} />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Возрастной рейтинг</CardTitle>
                  <CardDescription>
                    Укажите возрастное ограничение для вашей истории
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-2">
                    {(Object.keys(RATING_LABELS) as FanficRating[]).map((rating) => (
                      <div
                        key={rating}
                        className={`flex items-start space-x-4 border p-4 rounded-md cursor-pointer transition-colors ${
                          fanfic.rating === rating ? "border-primary bg-primary/5" : "hover:border-primary/30"
                        }`}
                      >
                        <input
                          type="radio"
                          id={`rating-${rating}`}
                          name="rating"
                          value={rating}
                          defaultChecked={fanfic.rating === rating}
                          className="mt-1"
                        />
                        <div>
                          <Label htmlFor={`rating-${rating}`} className="cursor-pointer">
                            {RATING_LABELS[rating]}
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            {/* Здесь должно быть описание рейтинга */}
                            Соответствующее описание для рейтинга {rating}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Статус истории</CardTitle>
                  <CardDescription>
                    Установите текущий статус вашей истории
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="status-in_progress"
                        name="status"
                        value="in_progress"
                        defaultChecked={fanfic.status === "in_progress"}
                      />
                      <div>
                        <Label htmlFor="status-in_progress">В процессе</Label>
                        <p className="text-sm text-muted-foreground">
                          История ещё пишется и будет обновляться
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="status-completed"
                        name="status"
                        value="completed"
                        defaultChecked={fanfic.status === "completed"}
                      />
                      <div>
                        <Label htmlFor="status-completed">Завершена</Label>
                        <p className="text-sm text-muted-foreground">
                          История полностью закончена
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="status-abandoned"
                        name="status"
                        value="abandoned"
                        defaultChecked={fanfic.status === "abandoned"}
                      />
                      <div>
                        <Label htmlFor="status-abandoned">Заброшена</Label>
                        <p className="text-sm text-muted-foreground">
                          Работа над историей прекращена без завершения
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Дополнительные настройки</CardTitle>
                  <CardDescription>
                    Настройте дополнительные параметры истории
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="allow-comments" defaultChecked />
                    <div>
                      <Label htmlFor="allow-comments">Разрешить комментарии</Label>
                      <p className="text-sm text-muted-foreground">
                        Читатели смогут оставлять комментарии к вашей истории
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="show-stats" defaultChecked />
                    <div>
                      <Label htmlFor="show-stats">Показывать статистику</Label>
                      <p className="text-sm text-muted-foreground">
                        Отображать счетчики просмотров и лайков для читателей
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Вкладка с публикацией */}
          <TabsContent value="publish">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="CheckCircle" className="text-green-500" size={20} />
                  История готова к публикации
                </CardTitle>
                <CardDescription>
                  Проверьте настройки перед публикацией
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <h3 className="text-sm font-medium text-muted-foreground">Название</h3>
                      <p className="font-medium">{fanfic.title}</p>
                    </div>
                    
                    <div className="space-y-1">
                      <h3 className="text-sm font-medium text-muted-foreground">Описание</h3>
                      <p>{fanfic.excerpt}</p>
                    </div>
                    
                    <div className="space-y-1">
                      <h3 className="text-sm font-medium text-muted-foreground">Фандом</h3>
                      <p>{fanfic.fandom.name}</p>
                    </div>
                    
                    <div className="space-y-1">
                      <h3 className="text-sm font-medium text-muted-foreground">Категория</h3>
                      <p>{fanfic.category}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <h3 className="text-sm font-medium text-muted-foreground">Возрастной рейтинг</h3>
                      <p>{RATING_LABELS[fanfic.rating as FanficRating]}</p>
                    </div>
                    
                    <div className="space-y-1">
                      <h3 className="text-sm font-medium text-muted-foreground">Статус</h3>
                      <p>
                        {fanfic.status === "completed" ? "Завершена" : 
                         fanfic.status === "in_progress" ? "В процессе" : "Заброшена"}
                      </p>
                    </div>
                    
                    <div className="space-y-1">
                      <h3 className="text-sm font-medium text-muted-foreground">Теги</h3>
                      <div className="flex flex-wrap gap-1">
                        {fanfic.tags.map((tag, index) => (
                          <span key={index} className="bg-secondary px-2 py-0.5 rounded-md text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex flex-col gap-4">
                  <h3 className="text-lg font-medium">Время публикации</h3>
                  
                  <div className="flex items-start space-x-2">
                    <input
                      type="radio"
                      id="publish-now"
                      name="publish-time"
                      defaultChecked
                    />
                    <div>
                      <Label htmlFor="publish-now">Опубликовать сейчас</Label>
                      <p className="text-sm text-muted-foreground">
                        История будет опубликована сразу после сохранения
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <input
                      type="radio"
                      id="publish-later"
                      name="publish-time"
                    />
                    <div className="space-y-2">
                      <Label htmlFor="publish-later">Опубликовать позже</Label>
                      <p className="text-sm text-muted-foreground mb-2">
                        Выберите дату и время для публикации
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <Input type="date" disabled />
                        <Input type="time" disabled />
                      </div>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex justify-between">
                  <Button variant="outline">
                    <Icon name="Save" className="mr-2" size={16} />
                    Сохранить черновик
                  </Button>
                  <Button>
                    <Icon name="Send" className="mr-2" size={16} />
                    Опубликовать
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}
