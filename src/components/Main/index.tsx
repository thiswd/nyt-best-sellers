import { BookList } from "../BookList"
import { Loader } from "../Loader"
import { AppContainer, MainTitle } from "./styles"

export function Main() {
  return (
    <div>
      <MainTitle>The New York Times Best Sellers</MainTitle>
      <AppContainer>
        <BookList />
      </AppContainer>
    </div>
  )
}
