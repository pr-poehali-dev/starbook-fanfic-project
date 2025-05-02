
import { Fandom, FandomCategory } from "@/types/fanfiction";

// Популярные фандомы по категориям
export const fandoms: Fandom[] = [
  // Книги
  {
    id: "harry-potter",
    name: "Гарри Поттер",
    category: "books",
    imageUrl: "https://source.unsplash.com/random/600x400/?magic,books"
  },
  {
    id: "lotr",
    name: "Властелин Колец",
    category: "books",
    imageUrl: "https://source.unsplash.com/random/600x400/?fantasy,ring"
  },
  // Фильмы
  {
    id: "star-wars",
    name: "Звездные войны",
    category: "movies",
    imageUrl: "https://source.unsplash.com/random/600x400/?space,stars"
  },
  {
    id: "marvel",
    name: "Киновселенная Marvel",
    category: "movies",
    imageUrl: "https://source.unsplash.com/random/600x400/?superhero"
  },
  // Сериалы
  {
    id: "stranger-things",
    name: "Очень странные дела",
    category: "tv_shows",
    imageUrl: "https://source.unsplash.com/random/600x400/?retro,lights"
  },
  {
    id: "game-of-thrones",
    name: "Игра престолов",
    category: "tv_shows",
    imageUrl: "https://source.unsplash.com/random/600x400/?medieval,castle"
  },
  // Аниме и манга
  {
    id: "naruto",
    name: "Наруто",
    category: "anime_manga",
    imageUrl: "https://source.unsplash.com/random/600x400/?ninja"
  },
  {
    id: "attack-on-titan",
    name: "Атака титанов",
    category: "anime_manga",
    imageUrl: "https://source.unsplash.com/random/600x400/?giant,wall"
  },
  // Игры
  {
    id: "minecraft",
    name: "Minecraft",
    category: "games",
    imageUrl: "https://source.unsplash.com/random/600x400/?blocks,pixelated"
  },
  {
    id: "the-witcher",
    name: "Ведьмак",
    category: "games",
    imageUrl: "https://source.unsplash.com/random/600x400/?witcher,monster"
  },
  // Другое
  {
    id: "other",
    name: "Другое",
    category: "other",
    imageUrl: "https://source.unsplash.com/random/600x400/?abstract"
  }
];

// Группировка фандомов по категориям для удобства
export const fandomsByCategory = fandoms.reduce((acc, fandom) => {
  if (!acc[fandom.category]) {
    acc[fandom.category] = [];
  }
  acc[fandom.category].push(fandom);
  return acc;
}, {} as Record<FandomCategory, Fandom[]>);

// Функция для поиска фандома по ID
export const getFandomById = (id: string): Fandom | undefined => {
  return fandoms.find(fandom => fandom.id === id);
};

// Функция для получения фандомов по категории
export const getFandomsByCategory = (category: FandomCategory): Fandom[] => {
  return fandomsByCategory[category] || [];
};
