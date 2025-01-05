import { useNavigate } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import {
  Captions,
  Counter,
  Thumbnails,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import { images } from "./assets/images";

const Gallery = () => {
  const navigate = useNavigate();

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  return (
    <div onContextMenu={handleContextMenu}>
      <Lightbox
        open
        slides={images}
        close={() => navigate("/")}
        plugins={[Captions, Thumbnails, Counter]}
        counter={{ container: { style: { top: "unset", bottom: 0 } } }}
      />
    </div>
  );
};

export default Gallery;
