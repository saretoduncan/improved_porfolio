import React from "react";

const StackCard = (props) => {
  return (
    <div className='col-12 col-sm-6 col-md-4    '>
      <div className='col-12 card my-1 card_stack'>
        <div class='card-body '>
          <figure className='d-flex justify-content-center'>
            <img src={props.img} />
          </figure>
          <h5 class='card-title text-center '>{props.titl}</h5>

          <div className=''>
            <p class='card-text text-center'>{props.about}</p>
          </div>
          <h5 className='orange text-center'>{props.stackTitle}</h5>
          <div>
            <p className='text-center '>{props.stacks}</p>
          </div>
          <h5 className='orange text-center'>{props.devTitles}</h5>
          <div>
            <ul className='text-center devTools '>{props.dev}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackCard;
