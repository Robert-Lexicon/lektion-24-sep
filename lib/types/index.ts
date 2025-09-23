export interface PlatziProduct {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: PlatziCategory;
  price: number;
  images: string[];
}

export interface PlatziCategory {
  id: number;
  slug: string;
  name: string;
  image: string;
}

export interface PlatziCreateProduct {
  title: string;
  description: string;
  categoryId: number;
  price: number;
  images: string[];
}
