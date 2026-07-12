import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import {
  Captions,
  Counter,
  Thumbnails,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import { loadImages } from "../assets/images";
import Modal from "./Modal";

const Gallery = ({ isOpen, onClose }) => {
  const [images, setImages] = useState(null);

  useEffect(() => {
    if (isOpen && !images) {
      loadImages().then(setImages);
    }
  }, [isOpen, images]);

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  return (
    <Modal isOpen={isOpen}>
      <div onContextMenu={handleContextMenu}>
        {images && (
          <Lightbox
            open
            slides={images}
            close={onClose}
            plugins={[Captions, Thumbnails, Counter]}
            counter={{ container: { style: { top: "unset", bottom: 0 } } }}
            carousel={{
              preload: 2,
              imageFit: "contain",
            }}
          />
        )}
      </div>
    </Modal>
  );
};

export default Gallery;
