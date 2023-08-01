export type Category = {
  label: string
  value: string
}

export interface CategoriesByUpdateProps {
  weekly: Category[]
  monthly: Category[]
}

export const categoriesByUpdateFrequency: CategoriesByUpdateProps = {
  weekly: [
    {
      label: "Combined Print & E-Book Fiction",
      value: "combined-print-and-e-book-fiction",
    },
    {
      label: "Combined Print & E-Book Nonfiction",
      value: "combined-print-and-e-book-nonfiction",
    },
    {
      label: "Hardcover Fiction",
      value: "hardcover-fiction",
    },
    {
      label: "Hardcover Nonfiction",
      value: "hardcover-nonfiction",
    },
    {
      label: "Paperback Trade Fiction",
      value: "trade-fiction-paperback",
    },
    {
      label: "Paperback Nonfiction",
      value: "paperback-nonfiction",
    },
    {
      label: "Advice, How-To & Miscellaneous",
      value: "advice-how-to-and-miscellaneous",
    },
    {
      label: "Children's Middle Grade Hardcover",
      value: "childrens-middle-grade-hardcover",
    },
    {
      label: "Children's Picture Books",
      value: "picture-books",
    },
    {
      label: "Children's Series",
      value: "series-books",
    },
    {
      label: "Young Adult Hardcover",
      value: "young-adult-hardcover",
    },
  ],
  monthly: [
    {
      label: "Audio Fiction",
      value: "audio-fiction",
    },
    {
      label: "Audio Nonfiction",
      value: "audio-nonfiction",
    },
    {
      label: "Business",
      value: "business-books",
    },
    {
      label: "Graphic Books and Manga",
      value: "graphic-books-and-manga",
    },
    {
      label: "Mass Market",
      value: "mass-market-monthly",
    },
    {
      label: "Middle Grade Paperback",
      value: "middle-grade-paperback-monthly",
    },
    {
      label: "Young Adult Paperback",
      value: "young-adult-paperback-monthly",
    },
  ],
}

export const categories: Category[] = categoriesByUpdateFrequency.weekly.concat(
  categoriesByUpdateFrequency.monthly,
)

export const MAIN_CATEGORY = categories[0]
