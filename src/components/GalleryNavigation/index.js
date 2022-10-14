import { NavLink } from "react-router-dom";

function GalleryNavigation({ galleries }) {
  console.log(galleries);
  const galleryList = galleries.map(gallery => {
    return <li><NavLink to={`/galleries/${gallery.id}`} key={gallery.id}>{gallery.name}</NavLink></li>
  })
  return (
    <nav>
      <h1>Galleries</h1>
      <NavLink to="/">Home</NavLink>
      <ul>{galleryList}</ul>
    </nav>
  )
}

export default GalleryNavigation;