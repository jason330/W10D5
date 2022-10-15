import React from "react";
import { useParams } from "react-router-dom";

function GalleryView({galleries}) {
  const {galleryId} = useParams();
  return <h1>Hello from GalleryView</h1>
}

export default GalleryView;