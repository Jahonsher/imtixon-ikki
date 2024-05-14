import React from "react";

const Product = ({ item, onClick }) => {
  const { title, description, thumbnail } = item;

  return (
    <div>
      <div>
        <a href="#">
          <img
            class="rounded-t-lg"
            src={thumbnail}
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5>
              {title}
            </h5>
          </a>
          <p>
            {description}
          </p>
            <button className="text-[aqua] bg-[#393f39]" onClick={() => onClick(item)}>Add to cart</button>
          
        </div>
        
      </div>

      {/* <h1>{title}</h1>
      <p>{description}</p>
      <img src={thumbnail} alt="" /> */}
      <br />
      <br />
      <br />
    </div> 
  );
};

export default Product;
