import React, { useState } from "react";
import {
  FaShare,
  FaFacebookSquare,
  FaTwitter,
  FaPinterest,
  FaGithub,
} from "react-icons/fa";

function ArticleComponent() {
  const [showMedia, setShowMedia] = useState(false);
  return (
    <main>
      <article className="container">
        <header>
          <img
            className="article-img"
            src="./images/drawers.jpg"
            alt="article-img"
          />
        </header>
        <div className="article-content">
          <div className="article-info">
            <h1 className="title">
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </h1>
            <p className="text">
              {" "}
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips to
              help you make any room feel complete.
            </p>
          </div>

          <footer>
            <div className="author-container">
              <img
                className="author-avatar"
                src="./images/avatar-michelle.jpg"
                alt="avatar"
              />
              <div className="author-info">
                <p className="author">Michelle Appleton</p>
                <p className="date">28 Jun 2020</p>
              </div>
            </div>
            <div className="share-icon-padding">
              <FaShare
                className="share-icon"
                onClick={() => setShowMedia(!showMedia)}
              />
            </div>
            {showMedia && (
              <div className="media-container">
                <p className="share-text">SHARE</p>
                <div className="media-icons">
                  <FaFacebookSquare className="icon" />
                  <FaTwitter className="icon" />
                  <FaPinterest className="icon" />
                </div>
                <div className="share-icon-padding">
                  <FaShare
                    className="share-icon"
                    onClick={() => setShowMedia(!showMedia)}
                  />
                </div>
              </div>
            )}
          </footer>
        </div>
      </article>
      <div class="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/Nikl4auss" target="_blank" rel="noreferrer">
          Nikl4auss <FaGithub />
        </a>
        .
      </div>
    </main>
  );
}

export default ArticleComponent;
