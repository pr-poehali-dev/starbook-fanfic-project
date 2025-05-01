
import React from "react";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

type IconProps = {
  name: keyof typeof LucideIcons;
  size?: number;
  color?: string;
  className?: string;
  fallback?: keyof typeof LucideIcons;
  strokeWidth?: number;
};

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color,
  className,
  fallback = "HelpCircle",
  strokeWidth = 2,
}) => {
  // Проверяем наличие иконки в Lucide
  const IconComponent = LucideIcons[name] || LucideIcons[fallback];

  return (
    <IconComponent
      size={size}
      color={color}
      className={cn(className)}
      strokeWidth={strokeWidth}
    />
  );
};

export default Icon;
