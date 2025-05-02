
import { Fanfic, FanficRating, Fandom } from "@/types/fanfiction";
import { mockFanfics } from "./mock-fanfics";
import { DEFAULT_COVER } from "./constants";

// Получение фанфика по ID
export const getFanficById = (id: string): Fanfic | undefined => {
  return mockFanfics.find(fanfic => fanfic.id === id);
};

// Фильтрация фанфиков по фандому
export const getFanficsByFandom = (fandomId: string): Fanfic[] => {
  return mockFanfics.filter(fanfic => 
    fanfic.fandom.id === fandomId || 
    fanfic.secondaryFandoms?.some(f => f.id === fandomId)
  );
};

// Фильтрация фанфиков по рейтингу
export const getFanficsByRating = (rating: FanficRating): Fanfic[] => {
  return mockFanfics.filter(fanfic => fanfic.rating === rating);
};

// Получение фанфиков автора
export const getFanficsByAuthor = (authorId: string): Fanfic[] => {
  return mockFanfics.filter(fanfic => fanfic.author.id === authorId);
};

// Получение фанфиков с обложкой
export const getFanficsWithCover = (): Fanfic[] => {
  return mockFanfics.filter(fanfic => fanfic.imageUrl);
};

// Получение фанфиков без обложки
export const getFanficsWithoutCover = (): Fanfic[] => {
  return mockFanfics.filter(fanfic => !fanfic.imageUrl);
};

// Поиск фанфиков по ключевому слову
export const searchFanfics = (query: string): Fanfic[] => {
  const lowercaseQuery = query.toLowerCase();
  return mockFanfics.filter(fanfic => 
    fanfic.title.toLowerCase().includes(lowercaseQuery) ||
    fanfic.excerpt.toLowerCase().includes(lowercaseQuery) ||
    fanfic.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    fanfic.fandom.name.toLowerCase().includes(lowercaseQuery) ||
    fanfic.category.toLowerCase().includes(lowercaseQuery)
  );
};

// Фильтрация фанфиков по статусу завершенности
export const getFanficsByStatus = (status: Fanfic['status']): Fanfic[] => {
  return mockFanfics.filter(fanfic => fanfic.status === status);
};

// Фильтрация фанфиков по тегам
export const getFanficsByTag = (tag: string): Fanfic[] => {
  return mockFanfics.filter(fanfic => 
    fanfic.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
};

// Получение связанных фанфиков
export const getRelatedFanfics = (fanficId: string, limit: number = 3): Fanfic[] => {
  const fanfic = getFanficById(fanficId);
  
  if (!fanfic) return [];
  
  // Сначала ищем по тому же фэндому
  let related = mockFanfics.filter(f => 
    f.id !== fanficId && 
    f.fandom.id === fanfic.fandom.id
  );
  
  // Если не нашли достаточно, добавляем по тем же тегам
  if (related.length < limit) {
    const byTags = mockFanfics.filter(f => 
      f.id !== fanficId && 
      f.fandom.id !== fanfic.fandom.id &&
      f.tags.some(tag => fanfic.tags.includes(tag))
    );
    
    related = [...related, ...byTags].slice(0, limit);
  }
  
  // Если все еще не хватает, добавляем по категории
  if (related.length < limit) {
    const byCategory = mockFanfics.filter(f => 
      f.id !== fanficId && 
      !related.includes(f) &&
      f.category === fanfic.category
    );
    
    related = [...related, ...byCategory].slice(0, limit);
  }
  
  return related;
};

// Получение обложки с учетом возможного отсутствия
export const getFanficCover = (fanfic: Fanfic): string => {
  return fanfic.imageUrl || DEFAULT_COVER;
};
