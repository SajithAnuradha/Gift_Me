import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/UserAssets/assets";

function ExploreMenu({ category, setCategory }) {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Gifts: Perfect Presents, Hassle-Free Ordering!</h1>
      <p className="explore-menu-text">
      Choose from a diverse selection of exquisite gifts. Our mission is to delight your loved ones and elevate their special moments. One perfect gift at a time.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev == item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}

export default ExploreMenu;
