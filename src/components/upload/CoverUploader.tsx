
import { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DEFAULT_COVER } from "@/data/fanfics";
import DefaultCover from "@/components/fanfic/DefaultCover";

interface CoverUploaderProps {
  onCoverChange: (imageData: string | null) => void;
  initialCover?: string;
  className?: string;
  title?: string;
}

export default function CoverUploader({ 
  onCoverChange, 
  initialCover = DEFAULT_COVER,
  className = "",
  title,
}: CoverUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentCover, setCurrentCover] = useState<string | null>(initialCover);
  const [isDefaultCover, setIsDefaultCover] = useState(initialCover === DEFAULT_COVER);

  const handleFileSelect = (file: File) => {
    setIsUploading(true);
    setError(null);
    
    // В реальном приложении здесь будет отправка файла на сервер
    // Для демонстрации просто имитируем загрузку и конвертируем в URL данных
    setTimeout(() => {
      try {
        const reader = new FileReader();
        reader.onload = () => {
          setIsUploading(false);
          const result = reader.result as string;
          setCurrentCover(result);
          setIsDefaultCover(false);
          onCoverChange(result);
        };
        reader.onerror = () => {
          setIsUploading(false);
          setError("Ошибка при чтении файла");
        };
        reader.readAsDataURL(file);
      } catch (err) {
        setIsUploading(false);
        setError("Что-то пошло не так при обработке изображения");
      }
    }, 1000); // Имитация задержки загрузки
  };

  const handleUseDefault = () => {
    setCurrentCover(null);
    setIsDefaultCover(true);
    onCoverChange(DEFAULT_COVER);
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Обложка фанфика</CardTitle>
        <CardDescription>
          Загрузите изображение для обложки вашего фанфика. 
          Рекомендуемое соотношение сторон 3:2.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isDefaultCover ? (
          <div className="aspect-[3/2] rounded-md overflow-hidden mb-4">
            <DefaultCover title={title} />
          </div>
        ) : (
          <FileUpload 
            onFileSelect={handleFileSelect}
            acceptedFileTypes="image/jpeg, image/png, image/webp"
            maxFileSize={2} // 2MB
            defaultImage={currentCover || undefined}
          />
        )}
        {error && <p className="text-destructive mt-2 text-sm">{error}</p>}
        {isUploading && <p className="text-muted-foreground mt-2 text-sm">Загрузка...</p>}
      </CardContent>
      <CardFooter className="flex justify-between gap-2">
        {!isDefaultCover ? (
          <Button 
            variant="outline" 
            onClick={handleUseDefault} 
            disabled={isUploading}
          >
            Использовать стандартную
          </Button>
        ) : (
          <Button 
            variant="outline" 
            onClick={() => {
              setIsDefaultCover(false);
              setCurrentCover("");
            }} 
            disabled={isUploading}
          >
            Загрузить свою обложку
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
