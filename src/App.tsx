import { BookListContainer } from "./components/BookList/BookListContainer"
import { GlobalStyle } from "./styles/global"

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>New York Times Best Sellers</h1>
      <BookListContainer />
    </>
  )
}

export default App
