
import MainLayout from "@/components/layouts/MainLayout";
import HeroBanner from "@/components/home/HeroBanner";
import FeaturedStories from "@/components/home/FeaturedStories";
import Categories from "@/components/home/Categories";

const Index = () => {
  return (
    <MainLayout>
      <HeroBanner />
      <FeaturedStories />
      <Categories />
    </MainLayout>
  );
};

export default Index;
