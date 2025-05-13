import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Main from "./components/sites/Main";

function App() {

    const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>
    }, {
      path: "/contact",
      element: <div>Kontakt</div>
    },
  ])
  
    return (
    <><RouterProvider router={router} /></>
  )
}

export default App
