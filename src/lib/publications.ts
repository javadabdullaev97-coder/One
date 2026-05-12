export interface Publication {
  slug: string;
  tag: string;
  category: string;
  title: string;
  description: string;
  year: string;
  date?: string;
  pages: number;
  image?: string;
  hasDownload?: boolean;
  hasRead?: boolean;
}

export interface ArticleContentBlock {
  type: "h2" | "h3" | "p" | "ul" | "blockquote" | "divider";
  text?: string;
  items?: string[];
}

export interface ArticleFaqItem {
  question: string;
  answer: string;
}

export interface ArticleHowToStep {
  name: string;
  text: string;
}

export interface ArticleHowTo {
  name: string;
  description: string;
  steps: ArticleHowToStep[];
}

export interface LocalizedArticle {
  subtitle?: string;
  author?: string;
  readTime?: string;
  content: ArticleContentBlock[];
  faq?: ArticleFaqItem[];
  howTo?: ArticleHowTo;
}

export interface PublicationArticle extends Publication {
  subtitle?: string;
  author?: string;
  readTime?: string;
  content: ArticleContentBlock[];
  faq?: ArticleFaqItem[];
  howTo?: ArticleHowTo;
}
