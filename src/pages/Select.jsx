import React from "react";
import List from "../components/common/List";
import {createList} from "../libs/util/dummyCreator"

const Select = () => {
  const list = createList();
  console.log(list)
  return (
    <>
      <List list = {list}></List>
    </>
  )
};

export default Select;
    