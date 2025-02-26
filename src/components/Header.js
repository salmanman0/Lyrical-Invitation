import { useEffect } from "react";

function Header({ title = "Header Default" }) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

export default Header;
