
import { useState } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import ProfileCard from "@/components/profile/ProfileCard";
import ProfileTabs from "@/components/profile/ProfileTabs";
import { useUserProfile } from "@/hooks/useUserProfile";
import { Skeleton } from "@/components/ui/skeleton";

export default function Profile() {
  const { userProfile, loading, error } = useUserProfile();
  
  return (
    <MainLayout>
      <div className="container py-8">
        {loading ? (
          <LoadingProfileView />
        ) : error ? (
          <ErrorView message={error} />
        ) : userProfile ? (
          <div className="flex flex-col md:flex-row gap-8">
            {/* Профиль слева */}
            <div className="w-full md:w-1/3">
              <ProfileCard user={userProfile} />
            </div>
            
            {/* Основной контент справа */}
            <div className="w-full md:w-2/3">
              <ProfileTabs user={userProfile} />
            </div>
          </div>
        ) : null}
      </div>
    </MainLayout>
  );
}

function LoadingProfileView() {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/3">
        <Skeleton className="h-[400px] w-full rounded-lg" />
      </div>
      <div className="w-full md:w-2/3">
        <Skeleton className="h-[60px] w-full mb-6 rounded-lg" />
        <Skeleton className="h-[340px] w-full rounded-lg" />
      </div>
    </div>
  );
}

function ErrorView({ message }: { message: string }) {
  return (
    <div className="flex items-center justify-center h-[400px]">
      <div className="text-center">
        <h2 className="text-xl font-bold mb-2">Произошла ошибка</h2>
        <p className="text-muted-foreground">{message}</p>
      </div>
    </div>
  );
}
