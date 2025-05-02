
// Централизованный экспорт всех функций и данных для работы с фанфиками

// Экспорт констант
export { DEFAULT_COVER, FANFIC_CATEGORIES, POPULAR_TAGS } from './constants';

// Экспорт моков данных
export { mockFanfics as fanfics } from './mock-fanfics';
export { mockAuthors } from './mock-authors';

// Экспорт функций доступа и фильтрации
export {
  getFanficById,
  getFanficsByFandom,
  getFanficsByRating,
  getFanficsByAuthor,
  getFanficsWithCover,
  getFanficsWithoutCover,
  searchFanfics,
  getFanficsByStatus,
  getFanficsByTag,
  getRelatedFanfics,
  getFanficCover
} from './fanfic-service';

// Экспорт функций для рекомендуемых фанфиков
export {
  getFeaturedFanfics,
  getPopularFanficsByCategory,
  getNewestFanfics
} from './featured-fanfics';

// Реэкспорт функций для фэндомов
export { getFandomById, fandomsByCategory, getFandomsByCategory } from './fandoms';
export { getAuthorById } from './mock-authors';
