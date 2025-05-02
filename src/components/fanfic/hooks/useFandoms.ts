
import { useState, useEffect } from "react";
import { Fandom } from "@/types/fanfiction";

export function useFandoms() {
  const [fandoms, setFandoms] = useState<Fandom[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    async function fetchFandoms() {
      try {
        // В реальности здесь был бы запрос к API
        // А пока используем мок-данные
        setFandoms([
          { id: "original", name: "Ориджинал", category: "other" },
          { id: "harry-potter", name: "Гарри Поттер", category: "books" },
          { id: "star-wars", name: "Звездные войны", category: "movies" },
          { id: "marvel", name: "Марвел", category: "comics" },
          { id: "dc", name: "DC", category: "comics" },
        ]);
        setLoading(false);
      } catch (err) {
        setError("Не удалось загрузить список фэндомов");
        setLoading(false);
      }
    }
    
    fetchFandoms();
  }, []);
  
  return { fandoms, loading, error };
}
