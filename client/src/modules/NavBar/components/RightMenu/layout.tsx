import React, { memo, useState, useEffect } from "react";
import { RightMenu, RightMenuItem } from "./layout.styled";

export const RightMenuLayout = memo(() => {
  const [ChangeLayout, setChangeLayout] = useState(false);
  const open = false;

  useEffect(() => {
    if (window.innerWidth < 1300) {
      setChangeLayout(true);
    } else setChangeLayout(false);
  }, [window.innerWidth]);

  return (
    <RightMenu>
      <RightMenuItem>
        {ChangeLayout ? (
          <i className="fas fa-search" style={{ paddingRight: "8px" }}></i>
        ) : (
          <span>
            <i className="fas fa-search" style={{ paddingRight: "8px" }}></i>{" "}
            Szukaj
          </span>
        )}
      </RightMenuItem>
      <RightMenuItem>
        {ChangeLayout ? <i className="far fa-user"></i> : "Zaloguj się"}
      </RightMenuItem>
      <RightMenuItem>
        {ChangeLayout ? (
          <i className="fas fa-clipboard-list"></i>
        ) : (
          "Moje zamówienia"
        )}
      </RightMenuItem>
      <RightMenuItem>
        {ChangeLayout ? <i className="fas fa-shopping-bag"></i> : "Mój koszyk"}
      </RightMenuItem>
      {ChangeLayout && (
        <RightMenuItem>
          {open ? (
            <i style={{ fontSize: "1.3em" }} className="fas fa-bars"></i>
          ) : (
            <i style={{ fontSize: "1.4em" }} className="fas fa-times"></i>
          )}
        </RightMenuItem>
      )}
    </RightMenu>
  );
});
