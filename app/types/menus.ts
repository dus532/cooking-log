export interface Menu {
  id: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  image: string;
  difficulty: number;
  bookmark: never;
  ingredients: any[];
}

export interface Menus {
  total: number;
  menus: Menu[];
}
