import { Pagination } from "@/interfaces/interfaces";

import arrowLeft from "../../public/static/paginationArrowLeft.svg";
import arrowRight from "../../public/static/paginationArrowRight.svg";

import styles from "@/styles/Pagination.module.scss";

import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import Image from "next/image";

const Pagination = ({ page, totalPages }: Pagination) => {
  const router = useRouter();

  const { filter } = router.query;

  const [displayedPages, setDisplayedPages] = useState([page]);

  const navigatePage = (direction: number) => {
    const newPage = page + direction;

    if (router.query.filter) {
      router.push(`/?page=${newPage}&filter=${filter}`);
      return;
    }

    router.push({
      pathname: "/",
      query: { page: newPage },
    });
  };

  const goToPage = (pageNumber: number) => {
    if (router.query.filter) {
      router.push(`/?page=${pageNumber}&filter=${filter}`);
      return;
    }

    router.push({
      pathname: "/",
      query: { page: pageNumber },
    });
  };

  const updateDisplayedPages = () => {
    const pagesToShow = [];

    pagesToShow.push(page);

    for (let i = page - 1; i >= page - 2 && i >= 1; i--) {
      pagesToShow.unshift(i);
    }

    for (let i = page + 1; i <= page + 2 && i <= totalPages; i++) {
      pagesToShow.push(i);
    }

    setDisplayedPages(pagesToShow);
  };

  useEffect(() => {
    updateDisplayedPages();
  }, [page, totalPages]);

  return (
    <div className={styles.pagination}>
      <div className={styles.buttonsPagination}>
        <button
          disabled={page === 1}
          type="button"
          className={styles.buttons}
          onClick={() => {
            navigatePage(-1);
          }}
        >
          <Image alt="Right arrow" width={20} height={20} src={arrowLeft} />
        </button>

        <div className={styles.pages}>
          {displayedPages.map((pageNumber) => (
            <div key={pageNumber} onClick={() => goToPage(pageNumber)}>
              <button
                className={
                  pageNumber === page ? styles.currentPage : styles.page
                }
                disabled={pageNumber === page}
              >
                {pageNumber}
              </button>
            </div>
          ))}
        </div>

        <button
          disabled={totalPages === page ? true : false}
          type="button"
          className={styles.buttons}
          onClick={() => {
            navigatePage(1);
          }}
        >
          <Image alt="Right arrow" width={20} height={20} src={arrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
