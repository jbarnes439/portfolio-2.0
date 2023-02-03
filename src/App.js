import './App.css';
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';
import ErrorPage from './Pages/Error-Page/error-page';
import About from './Pages/About/about';
import Contact from './Pages/Contact/contact';
import Home from './Pages/Home/home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "about",
    element: <About />
  },
  {
    path: "contact",
    element: <Contact />
  }
])

function App() {
  return (
    <div className="App">
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
