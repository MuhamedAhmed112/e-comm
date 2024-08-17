export interface cateObject {
  results: number;
  metadata: Metadata;
  data: categori[];
}

export interface categori {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

interface Metadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
}