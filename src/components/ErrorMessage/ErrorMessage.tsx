import style from "./ErrorMessage.module.css";

type Props = {
  children: React.ReactNode;
};

const ErrorMessage = ({ children }: Props) => {
  return <div className={style.error}>{children}</div>;
};

export default ErrorMessage;
