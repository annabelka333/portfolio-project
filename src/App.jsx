import { createBrowserRouter, RouterProvider } from 'react-router';
import MainLayout from './layout/main-layout';
import Home from './views/home';


const router = createBrowserRouter([
  { path: "/", 
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <div>About</div>,
      },
      {
        path: "projects",
        element: <div>Projects</div>,
      },
      {
        path: "contact",
        element: <div>Contact</div>,
      },{
        path: '*',
        element: <div>Main</div>
      }
    ]
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
