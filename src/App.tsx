import { BookList } from "./components/BookList"
import { GlobalStyle } from "./styles/global"

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>New York Times Best Sellers</h1>
      <BookList />
    </>
  )
}

export default App
