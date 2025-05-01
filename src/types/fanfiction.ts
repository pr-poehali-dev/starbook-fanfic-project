
export interface Author {
  id: string;
  name: string;
  avatar: string;
}


export type FanficRating = '6+' | '12+' | '16+' | '18+' | '21+';

export const RATING_LABELS: Record<FanficRating, string> = {
  '6+': '6+ (Для всех)',
  '12+': '12+ (Подростки)',
  '16+': '16+ (Старшие подростки)',
  '18+': '18+ (Взрослые)',
  '21+': '21+ (Строго 21+)',
};

export const RATING_DESCRIPTIONS: Record<FanficRating, string> = {
  '6+': 'Контент, подходящий для детей 6 лет и старше. Нет неприемлемых тем или содержимого.',
  '12+': 'Подходит для подростков 12 лет и старше. Может включать лёгкие ругательства и романтические отношения.',
  '16+': 'Для подростков 16 лет и старше. Может содержать умеренную ненормативную лексику, неявные романтические сцены.',
  '18+': 'Только для взрослых. Может содержать откровенный контент, насилие и интимные сцены.',
  '21+': 'Строго для аудитории 21+. Содержит откровенные сексуальные сцены и графическое насилие.',
};


export interface Fandom {
  id: string;
  name: string;
  category: FandomCategory;
  imageUrl?: string;
}

export type FandomCategory = 
  | 'books' 
  | 'movies' 
  | 'tv_shows' 
  | 'anime_manga' 
  | 'games' 
  | 'comics' 
  | 'celebrities' 
  | 'music' 
  | 'other';

export const FANDOM_CATEGORIES: Record<FandomCategory, string> = {
  'books': 'Книги',
  'movies': 'Фильмы',
  'tv_shows': 'Сериалы',
  'anime_manga': 'Аниме и манга',
  'games': 'Игры',
  'comics': 'Комиксы',
  'celebrities': 'Знаменитости',
  'music': 'Музыка',
  'other': 'Другое',
};

export interface Fanfic {
  id: string;
  title: string;
  excerpt: string;
  author: Author;
  fandom: Fandom;
  secondaryFandoms?: Fandom[];
  category: string;
  rating: FanficRating;
  readTime: string;
  likes: number;
  imageUrl?: string;
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  status: 'completed' | 'in_progress' | 'abandoned';
}
