import { NavLink } from "react-router-dom";
import './GalleryNavigation.css';

function GalleryNavigation({ galleries }) {
  console.log(galleries);
  const galleryList = galleries.map(gallery => {
    return <li><NavLink to={`/galleries/${gallery.id}`} key={gallery.id}>{gallery.name}</NavLink></li>
  })
  return (
    <nav>
      <h1>Galleries</h1>
      <NavLink exact to="/">Home</NavLink>
      <ul>{galleryList}</ul>
    </nav>
  )
}

export default GalleryNavigation;