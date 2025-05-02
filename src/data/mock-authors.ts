
import { Author } from "@/types/fanfiction";

// Авторы фанфиков для демонстрационных данных
export const mockAuthors: Author[] = [
  {
    id: "author1",
    name: "АлексСкайуокер",
    avatar: "https://source.unsplash.com/random/300x300/?portrait,1",
  },
  {
    id: "author2",
    name: "МагияСлов",
    avatar: "https://source.unsplash.com/random/300x300/?portrait,2",
  },
  {
    id: "author3",
    name: "РыцарьПера",
    avatar: "https://source.unsplash.com/random/300x300/?portrait,3",
  },
  {
    id: "author4",
    name: "ТворецМиров",
    avatar: "https://source.unsplash.com/random/300x300/?portrait,4",
  },
  {
    id: "author5",
    name: "ХранительЛегенд",
    avatar: "https://source.unsplash.com/random/300x300/?portrait,5",
  },
  {
    id: "author6",
    name: "ПламяСтрасти",
    avatar: "https://source.unsplash.com/random/300x300/?portrait,6",
  },
  {
    id: "author7",
    name: "ТёмныйАвтор",
    avatar: "https://source.unsplash.com/random/300x300/?portrait,7",
  }
];

// Получение автора по ID
export const getAuthorById = (id: string): Author | undefined => {
  return mockAuthors.find(author => author.id === id);
};
