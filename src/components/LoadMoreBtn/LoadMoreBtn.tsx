import style from "./LoadMoreBtn.module.css";

type Props = {
  onLoad: () => void;
};

const LoadMoreBtn = ({ onLoad }: Props) => {
  return (
    <button className={style.button} onClick={onLoad}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;
