import React from "react";
import img from "../../assets/img/author.webp";
import Button from "../commons/Button";
export default function PostContentItem() {
  return (
    <div className="post-item">
      <div className="category">
        <span>Designs</span>
      </div>
      <div className="content">
        <h2>
          <a href="/" className="article">
            Hello My Name Is Uzair And I am A developer
          </a>
        </h2>
        <div className="author-info">
          <div className="author-info-inner">
            <div className="info-author">
              <div className="img">
                <img src={img} alt="Author" />
              </div>
              <div className="info-parent">
                <div className="name">Muhammad Uzair</div>
                <div className="info">
                  <span className="date">Feb 30 2022 </span>
                  <span className="dot"></span>
                  <span>200K Views</span>
                </div>
              </div>
            </div>
            <div className="read-more">
              <Button text="Read More" link="/" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
