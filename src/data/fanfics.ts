
import { Fanfic, FanficRating } from "@/types/fanfiction";
import { fandoms, getFandomById } from "./fandoms";


// Стандартная обложка для фанфиков без изображения
export const DEFAULT_COVER = "https://cdn.poehali.dev/files/bed427fc-7159-4579-8a00-0101094c1626.png";


// Пример данных фанфиков
export const fanfics: Fanfic[] = [
  {
    id: "1",
    title: "Возвращение Звёздного Капитана",
    excerpt: "После десяти лет изгнания, легендарный капитан возвращается с секретной миссией...",
    author: {
      id: "author1",
      name: "АлексСкайуокер",
      avatar: "https://source.unsplash.com/random/300x300/?portrait,1",
    },
    fandom: getFandomById("star-wars") || fandoms[0],
    category: "Научная фантастика",
    rating: "PG-13",
    readTime: "12 мин",
    likes: 342,
    imageUrl: "https://source.unsplash.com/random/600x400/?space,1",
    publishedAt: "2024-12-15",
    updatedAt: "2025-01-20",
    tags: ["космические путешествия", "приключения", "героизм"],
    status: "in_progress"
  },
  {
    id: "2",
    title: "Тайна Зачарованного Леса",
    excerpt: "Когда древние деревья начинают шептать, юная волшебница должна раскрыть секрет...",
    author: {
      id: "author2",
      name: "МагияСлов",
      avatar: "https://source.unsplash.com/random/300x300/?portrait,2",
    },
    fandom: getFandomById("harry-potter") || fandoms[0],
    category: "Фэнтези",
    rating: "G",
    readTime: "8 мин",
    likes: 217,
    imageUrl: "https://source.unsplash.com/random/600x400/?forest,1",
    publishedAt: "2025-01-05",
    updatedAt: "2025-02-10",
    tags: ["магия", "лес", "волшебство", "тайны"],
    status: "completed"
  },
  {
    id: "3",
    title: "Последний Рыцарь Королевства",
    excerpt: "В мире, где честь давно забыта, один рыцарь продолжает служить павшему королевству...",
    author: {
      id: "author3",
      name: "РыцарьПера",
      avatar: "https://source.unsplash.com/random/300x300/?portrait,3",
    },
    fandom: getFandomById("game-of-thrones") || fandoms[0],
    category: "Историческое фэнтези",
    rating: "R",
    readTime: "15 мин",
    likes: 189,
    publishedAt: "2025-02-12",
    updatedAt: "2025-03-01",
    tags: ["рыцари", "честь", "средневековье", "война"],
    status: "in_progress"
  },
  {
    id: "4",
    title: "Тени Метрополиса",
    excerpt: "Супергерой в тени, злодей на свету. Город погружается во тьму, когда правда стирает грани между добром и злом...",
    author: {
      id: "author4",
      name: "ТворецМиров",
      avatar: "https://source.unsplash.com/random/300x300/?portrait,4",
    },
    fandom: getFandomById("marvel") || fandoms[0],
    category: "Супергероика",
    rating: "PG-13",
    readTime: "10 мин",
    likes: 278,
    imageUrl: "https://source.unsplash.com/random/600x400/?city,night",
    publishedAt: "2025-01-30",
    updatedAt: "2025-02-15",
    tags: ["супергерои", "город", "мрачное", "борьба"],
    status: "in_progress"
  },
  {
    id: "5",
    title: "Когда поют драконы",
    excerpt: "Юная наследница древней крови обнаруживает, что может говорить с драконами, которых все считали вымершими...",
    author: {
      id: "author5",
      name: "ХранительЛегенд",
      avatar: "https://source.unsplash.com/random/300x300/?portrait,5",
    },
    fandom: getFandomById("lotr") || fandoms[0],
    category: "Фэнтези",
    rating: "PG",
    readTime: "14 мин",
    likes: 325,
    publishedAt: "2024-11-20",
    updatedAt: "2025-01-05",
    tags: ["драконы", "магия", "приключения", "легенды"],
    status: "completed"
  }
];

// Получение фанфика по ID
export const getFanficById = (id: string): Fanfic | undefined => {
  return fanfics.find(fanfic => fanfic.id === id);
};

// Фильтрация фанфиков по фандому
export const getFanficsByFandom = (fandomId: string): Fanfic[] => {
  return fanfics.filter(fanfic => 
    fanfic.fandom.id === fandomId || 
    fanfic.secondaryFandoms?.some(f => f.id === fandomId)
  );
};

// Фильтрация фанфиков по рейтингу
export const getFanficsByRating = (rating: FanficRating): Fanfic[] => {
  return fanfics.filter(fanfic => fanfic.rating === rating);
};

// Получение фанфиков с обложкой
export const getFanficsWithCover = (): Fanfic[] => {
  return fanfics.filter(fanfic => fanfic.imageUrl);
};

// Получение фанфиков без обложки
export const getFanficsWithoutCover = (): Fanfic[] => {
  return fanfics.filter(fanfic => !fanfic.imageUrl);
};
