
import { useState, useEffect } from "react";
import { Fanfic } from "@/types/fanfiction";
import { useToast } from "@/components/ui/use-toast";

interface UseFanficProps {
  fanficId?: string;
}

export function useFanfic({ fanficId }: UseFanficProps) {
  const [fanfic, setFanfic] = useState<Partial<Fanfic> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  
  const isEditing = fanficId !== "new" && fanficId !== undefined;
  
  useEffect(() => {
    async function fetchFanfic() {
      if (!isEditing) {
        setFanfic({});
        setLoading(false);
        return;
      }
      
      try {
        // В реальности здесь был бы запрос к API
        // А пока эмулируем загрузку данных
        setTimeout(() => {
          // Мок данные для демонстрации
          setFanfic({
            id: fanficId,
            title: "Тайны космических пиратов",
            excerpt: "Захватывающая история о космических пиратах, бороздящих просторы вселенной в поисках приключений и сокровищ.",
            rating: "16+",
            status: "in_progress",
            tags: ["Космос", "Пираты", "Приключения", "Драма"],
            fandom: {
              id: "original",
              name: "Ориджинал",
              category: "other"
            },
            imageUrl: "https://source.unsplash.com/random/600x800/?space,pirate"
          });
          setLoading(false);
        }, 500);
      } catch (err) {
        setError("Не удалось загрузить данные истории");
        setLoading(false);
      }
    }
    
    fetchFanfic();
  }, [fanficId, isEditing]);
  
  // Методы для работы с фанфиком
  const saveFanfic = async (data: Partial<Fanfic>) => {
    try {
      setLoading(true);
      // Мок для сохранения данных
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Сохранено",
        description: "Данные истории успешно сохранены",
      });
      
      return true;
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Ошибка",
        description: "Не удалось сохранить данные истории",
      });
      return false;
    } finally {
      setLoading(false);
    }
  };
  
  const publishFanfic = async () => {
    try {
      setLoading(true);
      // Мок для публикации
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Опубликовано",
        description: isEditing 
          ? "История успешно обновлена" 
          : "История успешно опубликована",
      });
      
      return true;
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Ошибка",
        description: "Не удалось опубликовать историю",
      });
      return false;
    } finally {
      setLoading(false);
    }
  };
  
  return {
    fanfic,
    loading,
    error,
    isEditing,
    saveFanfic,
    publishFanfic
  };
}
