import React from "react";

const Cards = (props) => {
  return (
    <div class="col-12 col-sm-6 col-md-4 card d-flex mx-md-auto flex-column project_card">
      <div class="card-body">
        <h5 class="card-title text-center ">{props.titl}</h5>

        <div className="">
      <p class="card-text content-text">{props.content}</p>
      </div>
      </div>
      
      <div className=" text-center  ">
        <a href={props.website} class="card-link">
          <i class="fa fa-desktop" aria-hidden="true"></i>
        </a>
        <a href={props.github} class="card-link">
          <i class="fa fa-github" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
};

export default Cards;
