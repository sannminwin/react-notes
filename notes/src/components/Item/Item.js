import React from "react";
import "./item.scss";
import { useHistory } from "react-router-dom";
import axios from 'axios';

const Item = (props) => {
  console.log(props);
  const history = useHistory();
  console.log(history);
  const viewItem = (id) => {
    history.push(`/items/${id}`, props.data)
  }
  const editItem = (id) => {
    history.push(`/items/edit/${id}`, props.data)
  }
  const deleteItem = (id) => {
    axios.delete(`http://localhost:3001/items/${id}`)
    .then(() => {
      props.refresh();
    })
    .catch((err) => {
      console.log(err);
    })

}
  return (
    <div class="item">
      <i class="sticky note icon"></i>
      <div class="content">
  <a class="header">{props.data.title}</a>
  <div class="description">{props.data.desc}</div>
      </div>
      <span onClick={() => deleteItem(props.data.id)} class="right floated trash">
        <i class="trash alternate outline icon"></i>
      </span>
      <span onClick={() => editItem(props.data.id)} class="right floated edit">
        <i class="edit outline icon"></i>
      </span>
      <span onClick={() => viewItem(props.data.id)} class="right floated view">
        <i class="envelope open outline icon"></i>
      </span>
    </div>
  );
};

export default Item;
