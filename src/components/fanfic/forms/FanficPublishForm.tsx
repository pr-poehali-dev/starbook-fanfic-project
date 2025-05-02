
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FanficFormProps } from "../types/fanfic-form-types";

export function FanficPublishForm({ isEditing, fanfic, onPublish, onSaveDraft }: FanficFormProps) {
  const publishInfo = isEditing ? {
    publishedAt: "10 апреля 2023 г.",
    updatedAt: "15 апреля 2023 г."
  } : null;
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Настройки публикации</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="status">Статус истории</Label>
          <Select defaultValue={isEditing ? fanfic?.status : "draft"}>
            <SelectTrigger>
              <SelectValue placeholder="Выберите статус" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="draft">Черновик (не виден читателям)</SelectItem>
              <SelectItem value="in_progress">В процессе</SelectItem>
              <SelectItem value="completed">Завершена</SelectItem>
              <SelectItem value="on_hold">На паузе</SelectItem>
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
        
        {isEditing && publishInfo && (
          <div className="space-y-2 pt-4 border-t">
            <h3 className="font-medium">Опубликована</h3>
            <p className="text-sm">{publishInfo.publishedAt}</p>
            
            <h3 className="font-medium mt-4">Последнее обновление</h3>
            <p className="text-sm">{publishInfo.updatedAt}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline" onClick={onSaveDraft}>
          Сохранить как черновик
        </Button>
        <Button onClick={onPublish}>
          {isEditing ? "Обновить" : "Опубликовать"}
        </Button>
      </CardFooter>
    </Card>
  );
}
