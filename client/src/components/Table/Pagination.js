import React from "react";

function Pagination({ count, curentPage, maxitem }) {

  let btn = [];
  
  for (let index = 1; index <= Math.ceil(count / maxitem); index++) {
    btn.push(
      <button key={index} onClick={() => curentPage(5 * index)}>
        {index}
      </button>
    );
  }
  return <div>{btn.map((i) => i)}</div>;
}

export default Pagination;
