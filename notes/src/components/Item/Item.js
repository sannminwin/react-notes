import React from "react";
import "./item.scss";

const Item = (props) => {
  console.log(props);
  return (
    <div class="item">
      <i class="sticky note icon"></i>
      <div class="content">
  <a class="header">{props.data.title}</a>
  <div class="description">{props.data.desc}</div>
      </div>
      <span class="right floated trash">
        <i class="trash alternate outline icon"></i>
      </span>
      <span class="right floated edit">
        <i class="edit outline icon"></i>
      </span>
      <span class="right floated view">
        <i class="envelope open outline icon"></i>
      </span>
    </div>
  );
};

export default Item;
