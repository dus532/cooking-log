export interface Recipe {
  description: string;
  id: number;
  image: string;
}

export interface Menu {
  id: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  image: string;
  difficulty: number;
  bookmark: never;
  ingredients: string[];
  recipes: Recipe[];
}

export interface Menus {
  total: number;
  menus: Menu[];
}
