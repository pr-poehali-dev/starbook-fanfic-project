
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  acceptedFileTypes?: string;
  maxFileSize?: number; // в MB
  defaultImage?: string;
  className?: string;
}

export function FileUpload({
  onFileSelect,
  acceptedFileTypes = "image/*",
  maxFileSize = 5, // 5MB по умолчанию
  defaultImage,
  className,
}: FileUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(defaultImage || null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    
    const file = files[0];
    validateAndProcessFile(file);
  };

  const validateAndProcessFile = (file: File) => {
    // Проверка типа файла
    if (acceptedFileTypes && !file.type.match(acceptedFileTypes.replace(/\s/g, ''))) {
      setError(`Неподдерживаемый тип файла. Пожалуйста, загрузите ${acceptedFileTypes}`);
      return;
    }

    // Проверка размера
    if (maxFileSize && file.size > maxFileSize * 1024 * 1024) {
      setError(`Файл слишком большой. Максимальный размер: ${maxFileSize}MB`);
      return;
    }

    setError(null);
    // Создаем превью файла
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
    
    // Передаем файл наверх
    onFileSelect(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      validateAndProcessFile(e.dataTransfer.files[0]);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={className}>
      <div
        className={cn(
          "relative flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-md transition-colors cursor-pointer",
          isDragging ? "border-primary bg-primary/5" : "border-muted-foreground/20 hover:border-primary/50",
          "aspect-[3/2] overflow-hidden"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={triggerFileSelect}
      >
        {previewUrl ? (
          <img 
            src={previewUrl} 
            alt="Предпросмотр" 
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        ) : (
          <div className="flex flex-col items-center text-center gap-2">
            <Icon name="Upload" size={24} className="text-muted-foreground" />
            <div className="text-sm font-medium">
              Перетащите файл сюда или <span className="text-primary">нажмите</span>
            </div>
            <div className="text-xs text-muted-foreground">
              {acceptedFileTypes.replace('image/', '').replace(/,\s*/g, ', ')} • Макс. {maxFileSize}MB
            </div>
          </div>
        )}
        
        {previewUrl && (
          <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
            <Button 
              variant="default" 
              size="sm" 
              className="bg-white text-black hover:bg-white/90 hover:text-black"
              onClick={(e) => {
                e.stopPropagation();
                triggerFileSelect();
              }}
            >
              Изменить
            </Button>
          </div>
        )}
      </div>
      
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept={acceptedFileTypes}
        className="hidden"
      />
      
      {error && <div className="mt-2 text-sm text-destructive">{error}</div>}
    </div>
  );
}
