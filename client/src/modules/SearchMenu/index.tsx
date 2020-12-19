import React, { memo, useState, useEffect, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMenuIsOpenRX } from "../../store/searchMenu/selectors";
import { searchByTermResultRX } from "../../store/searchByTerm/selectors";
import { searchByTermStarted } from "../../store/searchByTerm/actions";
import { SearchMenuLayout } from "./layout";

export const SearchMenu = memo(() => {
  const [Term, setTerm] = useState("");

  const dispatch = useDispatch();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  const searchMenuIsOpen = useSelector(searchMenuIsOpenRX);
  const searchByTermResult = useSelector(searchByTermResultRX);

  useEffect(() => {
    if (Term) dispatch(searchByTermStarted(Term));
  }, [Term]);

  useEffect(() => {
    if (!searchMenuIsOpen) setTerm("");
  }, [searchMenuIsOpen]);

  return (
    <SearchMenuLayout
      isOpen={searchMenuIsOpen}
      handleOnChange={handleOnChange}
      value={Term}
      searchByTermResult={searchByTermResult}
    />
  );
});
