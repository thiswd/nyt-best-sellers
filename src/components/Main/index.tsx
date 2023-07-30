import { BookList } from "../BookList"
import { MainTitle } from "./styles"

export function Main() {
  return (
    <div>
      <MainTitle>The New York Times Best Sellers</MainTitle>
      <BookList />
    </div>
  )
}
