import { ChangeEvent, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";

import style from "./SearchBar.module.css";

type Props = {
  onSubmit: (value: string) => void;
};

const SearchBar = ({ onSubmit }: Props) => {
  const [value, setValue] = useState<string>("");
  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!value.trim()) {
      toast.error("You need to enter text to search", {
        position: "top-right",
      });
      return;
    }

    onSubmit(value);
  };

  return (
    <header className={style.header}>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.wrapper}>
          <input
            className={style.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images..."
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <button className={style.button} type="submit">
            <IoMdSearch className={style.searchIcon} width={20} height={20} />
          </button>
        </div>
      </form>
      <Toaster containerClassName={style.toast} />
    </header>
  );
};

export default SearchBar;
