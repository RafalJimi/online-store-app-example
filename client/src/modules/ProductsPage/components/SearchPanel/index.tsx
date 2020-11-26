import React, { useState, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { SearchPanelLayout } from "./layout";

export const SearchPanel = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [SearchContainerHeight, setSearchContainerHeight] = useState(0);

    const history = useHistory();

    const bodyHeight = document.body.offsetHeight;
    const bodyWidth = document.body.offsetWidth;

    const gender = history.location.search.split("&")[0].split("=")[1];

    const handleScroll = useCallback(() => {
      const position = window.pageYOffset + window.innerHeight;
      setScrollPosition(position);
      if (position < window.pageYOffset - 292) setSearchContainerHeight(300);
      else setSearchContainerHeight(window.innerHeight);
    }, [scrollPosition]);

    useEffect(() => {
      if (bodyWidth > 1300)
        if (scrollPosition > bodyHeight - 292)
          setSearchContainerHeight(
            window.innerHeight - (352 - (bodyHeight - scrollPosition))
          );
        else setSearchContainerHeight(window.innerHeight - 60);
      else {
        if (scrollPosition > bodyHeight - 292)
          setSearchContainerHeight(
            window.innerHeight - (265 - (bodyHeight - scrollPosition))
          );
        else setSearchContainerHeight(window.innerHeight - 60);
      }
    }, [scrollPosition, bodyWidth]);

    useEffect(() => {
      setSearchContainerHeight(window.innerHeight - 60);
      //@ts-ignore
      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const handleOnClick = useCallback(
      (gender: string, category: string, subCategory?: string) => (
        e: React.MouseEvent
      ) => {
        history.push(
          `/products?gender=${gender}&category=${category}&subCategory=${subCategory}`
        );
      },
      []
    );

    return (
      <SearchPanelLayout
        handleOnClick={handleOnClick}
        searchContainerHeight={SearchContainerHeight}
        gender={gender}
      />
    );
};
