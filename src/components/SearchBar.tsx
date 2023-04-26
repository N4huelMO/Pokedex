import styles from "@/styles/Searchbar.module.scss";

const SearchBar = () => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Enter a name or number"
      />
    </div>
  );
};

export default SearchBar;
