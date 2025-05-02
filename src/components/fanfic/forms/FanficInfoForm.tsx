
import { useState } from "react";
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
import CoverUploader from "@/components/upload/CoverUploader";
import { FanficFormProps } from "../types/fanfic-form-types";
import { RATING_LABELS } from "@/types/fanfiction";
import { useFandoms } from "../hooks/useFandoms";

export function FanficInfoForm({ isEditing, fanfic, onSave, onCancel }: FanficFormProps) {
  const [coverImage, setCoverImage] = useState(
    fanfic?.imageUrl || "https://source.unsplash.com/random/600x800/?book"
  );
  
  const { fandoms } = useFandoms();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Основная информация</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Название</Label>
            <Input 
              id="title" 
              placeholder="Введите название вашей истории..." 
              defaultValue={isEditing ? fanfic?.title : ""} 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="summary">Краткое описание</Label>
            <Textarea 
              id="summary" 
              placeholder="Кратко опишите вашу историю..."
              defaultValue={isEditing ? fanfic?.excerpt : ""}
              className="min-h-24"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fandom">Фэндом</Label>
              <Select defaultValue={isEditing ? fanfic?.fandom?.id : ""}>
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
              <Select defaultValue={isEditing ? fanfic?.rating : ""}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите рейтинг" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="6+">6+ (Для всех)</SelectItem>
                  <SelectItem value="12+">12+ (Подростки)</SelectItem>
                  <SelectItem value="16+">16+ (Старшие подростки)</SelectItem>
                  <SelectItem value="18+">18+ (Взрослые)</SelectItem>
                  <SelectItem value="21+">21+ (Строго 21+)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="tags">Теги</Label>
            <Input 
              id="tags" 
              placeholder="Приключения, Драма, Фантастика..." 
              defaultValue={isEditing ? fanfic?.tags.join(", ") : ""} 
            />
            <p className="text-xs text-muted-foreground">Разделяйте теги запятыми</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button variant="outline" onClick={onCancel}>Отмена</Button>
          <Button onClick={onSave}>Сохранить</Button>
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
  );
}
