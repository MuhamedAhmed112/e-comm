export interface sliderCategory {
  results: number;
  metadata: Metadata;
  data: categoriesinfo[];
}

export interface categoriesinfo {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface Metadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
}
