import React, { useEffect } from "react";
import "../styles/LeftMenu.css";
import { Link } from "react-router-dom";

function Menu({ title, listObject }) {
  useEffect(() => {
    const allLi = document
      .querySelector(".menuContainer ul")
      .querySelectorAll("li");

    function changeMenuActive() {
      allLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    allLi.forEach((n) => n.addEventListener("click", changeMenuActive));
  }, []);

  return (
    <div className="menuContainer">

      <ul>
        {listObject &&
         listObject.map((li) => (
          <li key={li.id}>
            <Link to={li.link ? li.link : "/Bay"}>
              <i>{li.icon}</i>
              <span> {li.name}</span>
            </Link>
          </li>
        ))
        }
      </ul>
    </div>
  );
}

export { Menu };
