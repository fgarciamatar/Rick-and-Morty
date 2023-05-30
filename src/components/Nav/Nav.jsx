import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import {Link} from "react-router-dom";
import style from "./Nav.mudule.css"
export default function Nav(props) {
  return (
    <div className={style.container}>
      <SearchBar onSearch={props.onSearch}/>
    </div>
  );
}
