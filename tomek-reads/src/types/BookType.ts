
export type BookType = {
  id: string,
  title: string,
  author: string,
  publicationDate: string,
  pageCount: number,
  bookStartDate?: string,
  bookFinishDate?: string,
  rating?: number,
  review?: string,
}