
import { Fanfic, FanficRating } from "@/types/fanfiction";
import { fandoms, getFandomById } from "./fandoms";


// Стандартная обложка для фанфиков без изображения
export const DEFAULT_COVER = "https://cdn.poehali.dev/files/bed427fc-7159-4579-8a00-0101094c1626.png";


// Пример данных фанфиков

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
    rating: "12+",
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
    rating: "6+",
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
    rating: "16+",
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
    rating: "12+",
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
    rating: "6+",
    readTime: "14 мин",
    likes: 325,
    publishedAt: "2024-11-20",
    updatedAt: "2025-01-05",
    tags: ["драконы", "магия", "приключения", "легенды"],
    status: "completed"
  },
  {
    id: "6",
    title: "Тайное общество",
    excerpt: "Элитная школа скрывает секреты, которые могут изменить судьбу мира. Группа студентов находит древний артефакт...",
    author: {
      id: "author2",
      name: "МагияСлов",
      avatar: "https://source.unsplash.com/random/300x300/?portrait,2",
    },
    fandom: getFandomById("harry-potter") || fandoms[0],
    category: "Фэнтези",
    rating: "16+",
    readTime: "18 мин",
    likes: 456,
    imageUrl: "https://source.unsplash.com/random/600x400/?school,mystery",
    publishedAt: "2025-01-15",
    updatedAt: "2025-02-28",
    tags: ["школа", "тайны", "артефакты", "заговор"],
    status: "in_progress"
  },
  {
    id: "7",
    title: "Огненная страсть",
    excerpt: "Встреча с таинственным незнакомцем переворачивает жизнь молодой художницы, вовлекая её в опасную игру страсти и интриг...",
    author: {
      id: "author6",
      name: "ПламяСтрасти",
      avatar: "https://source.unsplash.com/random/300x300/?portrait,6",
    },
    fandom: getFandomById("other") || fandoms[0],
    category: "Романтика",
    rating: "18+",
    readTime: "20 мин",
    likes: 312,
    imageUrl: "https://source.unsplash.com/random/600x400/?couple,silhouette",
    publishedAt: "2025-02-14",
    updatedAt: "2025-03-10",
    tags: ["страсть", "интриги", "романтика", "тайны"],
    status: "completed"
  },
  {
    id: "8",
    title: "За гранью дозволенного",
    excerpt: "Подпольный клуб, где исполняются самые тёмные фантазии. Кто-то готов переступить все границы ради острых ощущений...",
    author: {
      id: "author7",
      name: "ТёмныйАвтор",
      avatar: "https://source.unsplash.com/random/300x300/?portrait,7",
    },
    fandom: getFandomById("other") || fandoms[0],
    category: "Триллер",
    rating: "21+",
    readTime: "25 мин",
    likes: 189,
    imageUrl: "https://source.unsplash.com/random/600x400/?dark,silhouette",
    publishedAt: "2025-01-21",
    updatedAt: "2025-03-15",
    tags: ["клуб", "тайны", "триллер", "запретное"],
    status: "in_progress"
  }
];

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
