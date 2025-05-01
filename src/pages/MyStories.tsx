
import { useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { fanfics } from "@/data/fanfics";
import { Fanfic } from "@/types/fanfiction";

export default function MyStories() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  
  // Используем данные из fanfics для демонстрации
  const myFanfics = fanfics;
  
  // Фильтруем фанфики
  const filteredFanfics = myFanfics.filter((fanfic) => {
    const matchesSearch = fanfic.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || fanfic.status === statusFilter;
    return matchesSearch && matchesStatus;
  });
  
  // Форматирование даты
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <MainLayout>
      <div className="container py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Мои истории</h1>
          <Link to="/create">
            <Button>
              <Icon name="Plus" className="mr-2" size={16} />
              Новая история
            </Button>
          </Link>
        </div>
        
        {/* Фильтры */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="col-span-2">
            <div className="relative">
              <Icon
                name="Search"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                size={18}
              />
              <Input
                placeholder="Поиск по названию..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Все статусы" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все статусы</SelectItem>
              <SelectItem value="completed">Завершено</SelectItem>
              <SelectItem value="in_progress">В процессе</SelectItem>
              <SelectItem value="abandoned">Заброшено</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Таблица историй */}
        <div className="border rounded-md overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[40%]">Название</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Фандом</TableHead>
                <TableHead>Дата обновления</TableHead>
                <TableHead className="text-right">Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredFanfics.length > 0 ? (
                filteredFanfics.map((fanfic) => (
                  <TableRow key={fanfic.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded overflow-hidden flex-shrink-0">
                          <img
                            src={fanfic.imageUrl || "https://source.unsplash.com/random/300x300/?abstract"}
                            alt={fanfic.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="truncate">{fanfic.title}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        fanfic.status === "completed" 
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" 
                          : fanfic.status === "in_progress" 
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                          : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
                      }`}>
                        {fanfic.status === "completed" ? "Завершено" : 
                         fanfic.status === "in_progress" ? "В процессе" : "Заброшено"}
                      </span>
                    </TableCell>
                    <TableCell>{fanfic.fandom.name}</TableCell>
                    <TableCell>{formatDate(fanfic.updatedAt)}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <Icon name="MoreVertical" size={16} />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                            <Link to={`/edit/${fanfic.id}`} className="w-full cursor-pointer">
                              <Icon name="Edit" className="mr-2" size={16} />
                              Редактировать
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link to="#" className="w-full cursor-pointer">
                              <Icon name="Eye" className="mr-2" size={16} />
                              Просмотр
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Icon name="Trash2" className="mr-2" size={16} />
                            Удалить
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-6 text-muted-foreground">
                    Истории не найдены
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </MainLayout>
  );
}
