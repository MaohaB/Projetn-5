import { createBrowserRouter, NavLink, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
  path: '/',
  element: <div>
    <nav>
      <NavLink to="/" >Accueil</NavLink>
      <NavLink to="/about" >A Propos</NavLink>
    </nav>
  </div>
},
{  path: '/about',
  element: <div>
  <nav>
      <NavLink to="/" >Accueil</NavLink>
      <NavLink to="/about" >A Propos</NavLink>
</nav></div>
},
])
function Nav() {
  return <RouterProvider router={router}/>
}

export default Nav;
