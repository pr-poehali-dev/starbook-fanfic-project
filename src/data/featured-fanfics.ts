
import { Fanfic } from "@/types/fanfiction";
import { mockFanfics } from "./mock-fanfics";

// Рекомендуемые фанфики для главной страницы
export const getFeaturedFanfics = (): Fanfic[] => {
  // Имитация логики выбора рекомендованных историй
  // В реальном приложении здесь могла бы быть сложная логика отбора
  return mockFanfics
    .filter(fanfic => fanfic.imageUrl && fanfic.likes > 200)
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 4);
};

// Популярные фанфики по определенной категории
export const getPopularFanficsByCategory = (category: string, limit: number = 5): Fanfic[] => {
  return mockFanfics
    .filter(fanfic => fanfic.category === category)
    .sort((a, b) => b.likes - a.likes)
    .slice(0, limit);
};

// Новые фанфики
export const getNewestFanfics = (limit: number = 5): Fanfic[] => {
  return [...mockFanfics]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
};
