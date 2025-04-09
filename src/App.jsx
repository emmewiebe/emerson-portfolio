import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';

// ✅ Correct folder: single-project
import FirstProject from './components/single-project/FirstProject';
import SecondProject from './components/single-project/SecondProject';
import ThirdProject from './components/single-project/ThirdProject';
import FourthProject from './components/single-project/FourthProject';
import FifthProject from './components/single-project/FifthProject';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/projects', element: <Projects /> },
  { path: '/project/first', element: <FirstProject /> },
  { path: '/project/second', element: <SecondProject /> },
  { path: '/project/third', element: <ThirdProject /> },
  { path: '/project/fourth', element: <FourthProject /> },
  { path: '/project/fifth', element: <FifthProject /> },
  { path: '/contact', element: <Contact /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
