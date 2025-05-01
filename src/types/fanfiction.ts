
export interface Author {
  id: string;
  name: string;
  avatar: string;
}

export type FanficRating = 'G' | 'PG' | 'PG-13' | 'R' | 'NC-17';

export const RATING_LABELS: Record<FanficRating, string> = {
  'G': 'G (General Audiences)',
  'PG': 'PG (Parental Guidance)',
  'PG-13': 'PG-13 (Teens)',
  'R': 'R (Mature)',
  'NC-17': 'NC-17 (Explicit)',
};

export const RATING_DESCRIPTIONS: Record<FanficRating, string> = {
  'G': 'Подходит для всех возрастов',
  'PG': 'Возможно присутствие мягких ругательств и намёков',
  'PG-13': 'Подходит для подростков 13+, может включать умеренные ругательства и намёки',
  'R': 'Содержит материалы для взрослых: насилие, ругательства, сексуальные сцены (17+)',
  'NC-17': 'Содержит откровенные сексуальные сцены, графическое насилие (18+)',
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
