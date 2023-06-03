import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

import styles from "@/styles/Filters.module.scss";

import types from "../../data/types.json";

import { useClickOutside } from "@/helpers/clickOutside";

const Filters = () => {
  const router = useRouter();

  const ref = useRef(null);

  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const [filterTypes, setFilterTypes] = useState<string[] | string>("");

  useClickOutside(ref, setShowDropdown);

  useEffect(() => {
    if (router.query) {
      setFilterTypes(router.query.filter || types[0]);
    }
  }, [router.query]);

  const handleFilter = (e: string[] | string) => {
    setFilterTypes(e);

    setShowDropdown(!showDropdown);

    if (e === "all types") {
      router.push(`/?page=1`);
      return;
    }

    router.push(`/?page=1&filter=${e}`);
  };

  return (
    <div className={styles.container} ref={ref}>
      <button
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
        className={showDropdown ? styles.active : undefined}
      >
        {filterTypes}
      </button>

      {showDropdown && (
        <div className={styles.dropdown}>
          {types
            .filter((type) => type !== filterTypes)
            .map((type, i) => (
              <div
                key={i}
                className={styles.type}
                onClick={() => {
                  handleFilter(type);
                }}
              >
                <p>{type}</p>
                <div
                  style={{
                    backgroundColor: `var(--type-${type})`,
                    width: "0.313rem",
                  }}
                ></div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Filters;
