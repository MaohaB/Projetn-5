import './App.css'
import Header from "./components/Header";
import { createBrowserRouter, Link, NavLink, RouterProvider } from 'react-router-dom';

// const router = createBrowserRouter([
// {
// path: '/',
// element: <div> aceuil
// <nav>
// <NavLink to="/blog" >blog</NavLink>
// <NavLink to="/contact" >contact</NavLink>
// </nav>
// </div>
// },
// {  path: '/blog',
// element: <div>blog<nav>
// <NavLink to="/blog" >blog</NavLink>
// <NavLink to="/contact" >contact</NavLink>
// </nav></div>
// },
// {  path: '/contact',
// element: <div>contact<nav>
// <NavLink to="/blog" >blog</NavLink>
// <NavLink to="/contact" >contact</NavLink>
// </nav> </div>
// }
// ])
function App() {
  return (
    <div>
      <Header/>
    </div>
  )
}

export default App;
