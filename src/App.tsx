import { ToastContainer } from "react-toastify"
import { Main } from "./components/Main"
import { GlobalStyle } from "./styles/global"

import "react-toastify/dist/ReactToastify.min.css"

function App() {
  return (
    <>
      <GlobalStyle />
      <Main />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App
