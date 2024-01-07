import React from "react";
import "../Style/footer.scss";

function Footer() {
  return (
    <footer>
      <div>
        <h2>TecxhStar</h2>
        <p>@All right Reserved</p>
      </div>

        <div>
            <h5>Follow us</h5>
            <div>
                <a href="https://youtube.com/" target={"blank"}>Youtube</a>
                <a href="https://inistagram.com/" target={"blank"}>Instagram</a>
                <a href="https://github.com/" target={"blank"}>Github</a>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
