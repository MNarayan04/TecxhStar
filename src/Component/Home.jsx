import React from "react";
import "../Style/home.scss";
import vg from "../assets/software-developer-6521720_1920.jpg";

import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

function Home() {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h2>TexhStar</h2>
          <p> Solution of all problem </p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            nobis, quisquam voluptas et sunt nesciunt. Commodi tempore quibusdam
            labore enim.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h2>Who we are ?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            aspernatur vel quas fugit sapiente asperiores esse fugiat? Ad nisi
            cupiditate perferendis quia. Consequatur dolorem atque voluptate,
            molestiae ex accusantium expedita.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h2>Brands</h2>

          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div style={{ animationDelay: "0.7s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>

            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Home;
