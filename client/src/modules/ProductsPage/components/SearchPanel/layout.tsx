import React, { useEffect, useState, useCallback } from "react";
import { SearchPanelContainer } from "./layout.styled";

export const SearchPanelLayout = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [SearchContainerHeight, setSearchContainerHeight] = useState(0);

  const bodyHeight = document.body.offsetHeight;
  const bodyWidth = document.body.offsetWidth;

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

  return (
    <SearchPanelContainer style={{ height: SearchContainerHeight }}>
      <ul>
        COLLECTION
        <li>Jackets</li>
        <li>Suits</li>
        <li>Skirts</li>
      </ul>
      <ul>
        Boots
        <li>Sport shoes</li>
        <li>Boots</li>
      </ul>
    </SearchPanelContainer>
  );
};
