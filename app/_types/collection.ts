export interface ICollection {
  title: string;
  items: ICollectionItem[];
}

interface ICollectionItem {
  title: string;
  description: string;
  songs: string[];
}
