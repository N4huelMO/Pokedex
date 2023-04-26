import { Pagination } from "@/interfaces/interfaces";

import styles from "@/styles/Pagination.module.scss";

import { useRouter } from "next/router";

const Pagination = ({ page, totalPages }: Pagination) => {
  const router = useRouter();

  const scrollBehavior = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const nextPage = () => {
    const nextPage = page + 1;

    scrollBehavior();

    setTimeout(() => {
      router.push({
        pathname: "/",
        query: { page: nextPage },
      });
    }, 250);
  };

  const prevPage = () => {
    const prevPage = page - 1;

    scrollBehavior();

    setTimeout(() => {
      router.push({
        pathname: "/",
        query: { page: prevPage },
      });
    }, 250);
  };

  return (
    <div className={styles.pagination}>
      <div className={styles.buttonsPagination}>
        <button
          disabled={page === 1}
          type="button"
          onClick={() => {
            prevPage();
          }}
        >
          &laquo;
        </button>

        <p>{page}</p>

        <button
          disabled={totalPages === page ? true : false}
          type="button"
          onClick={() => {
            nextPage();
          }}
        >
          &raquo;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
