import { Photo } from "../../service/types";
import style from "./ImageCard.module.css";

type Props = {
  imageLink: string;
  descr: string;
  imageData: Photo;
  onImageClick: (image: Photo) => void;
};

const ImageCard = ({ imageLink, descr, onImageClick, imageData }: Props) => {
  const handleClick = () => {
    onImageClick(imageData);
  };

  return (
    <div className={style.wrapper}>
      <img
        className={style.img}
        src={imageLink}
        alt={descr}
        onClick={handleClick}
      />
    </div>
  );
};

export default ImageCard;
