import L from "./components/sites/l"
import {
  createBrowserRouter,
  Link, RouterProvider
} from "react-router-dom";

function App() {

    const router = createBrowserRouter([
    {
      path: "/",
      element: <L/>
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
