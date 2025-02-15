import ImageCard from "../ImageCard/ImageCard";
import { Photo } from "../../service/types";
import style from "./ImageGallery.module.css";

type Props = {
  photos: Photo[];
  onImageClick: (image: Photo) => void;
};

const ImageGallery = ({ photos, onImageClick }: Props) => {
  return (
    <ul className={style.gallery}>
      {photos.map((photo) => {
        const { id, urls, alt_description } = photo;
        return (
          <li key={id} className={style.galleryItem}>
            <ImageCard
              imageLink={urls.small}
              descr={alt_description}
              onImageClick={onImageClick}
              imageData={photo}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
