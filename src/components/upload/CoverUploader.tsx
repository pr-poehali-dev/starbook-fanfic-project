
import { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DEFAULT_COVER } from "@/data/fanfics";

interface CoverUploaderProps {
  onCoverChange: (imageData: string | null) => void;
  initialCover?: string;
  className?: string;
}

export default function CoverUploader({ 
  onCoverChange, 
  initialCover = DEFAULT_COVER,
  className = "",
}: CoverUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
          onCoverChange(reader.result as string);
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
        <FileUpload 
          onFileSelect={handleFileSelect}
          acceptedFileTypes="image/jpeg, image/png, image/webp"
          maxFileSize={2} // 2MB
          defaultImage={initialCover}
        />
        {error && <p className="text-destructive mt-2 text-sm">{error}</p>}
        {isUploading && <p className="text-muted-foreground mt-2 text-sm">Загрузка...</p>}
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button 
          variant="outline" 
          onClick={handleUseDefault} 
          disabled={isUploading}
        >
          Использовать стандартную
        </Button>
      </CardFooter>
    </Card>
  );
}
