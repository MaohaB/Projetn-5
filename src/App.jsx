import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
  path: '/',
  element: <div> aceuil
    <nav>
      <Link to="/blog" >blog</Link>
      <Link to="/contact" >contact</Link>
    </nav>
  </div>
},
  {  path: '/blog',
  element: <div>blog<nav>
  <Link to="/blog" >blog</Link>
  <Link to="/contact" >contact</Link>
</nav></div>
},
{  path: '/contact',
element: <div>contact<nav>
<Link to="/blog" >blog</Link>
<Link to="/contact" >contact</Link>
</nav> </div>
}
])
function App() {
  return <RouterProvider router={router}/>
}

export default App;
