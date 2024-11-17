"use client";
import React from "react";
import Link from "next/link";
import Header from "../components/Header";
import "/styles/main.scss";

const MainPage = () => {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <div className="arrow arrow--top">
          <svg xmlns="http://www.w3.org/2000/svg" width="270.11" height="649.9" overflow="visible">
            <g className="item-to bounce-1">
              <path className="geo-arrow draw-in" d="M135.06 142.564L267.995 275.5 135.06 408.434 2.125 275.499z" />
            </g>
            <circle className="geo-arrow item-to bounce-2" cx="194.65" cy="69.54" r="7.96" />
            <circle className="geo-arrow draw-in" cx="194.65" cy="39.5" r="7.96" />
            <circle className="geo-arrow item-to bounce-3" cx="194.65" cy="9.46" r="7.96" />
            <g className="geo-arrow item-to bounce-2">
              <path className="st0 draw-in" d="M181.21 619.5l13.27 27 13.27-27zM194.48 644.5v-552" />
            </g>
          </svg>
        </div>
        <div className="arrow arrow--bottom">
          <svg xmlns="http://www.w3.org/2000/svg" width="31.35" height="649.9" overflow="visible">
            <g className="item-to bounce-1">
              <circle className="geo-arrow item-to bounce-3" cx="15.5" cy="580.36" r="7.96" />
              <circle className="geo-arrow draw-in" cx="15.5" cy="610.4" r="7.96" />
              <circle className="geo-arrow item-to bounce-2" cx="15.5" cy="640.44" r="7.96" />
              <g className="item-to bounce-2">
                <path className="geo-arrow draw-in" d="M28.94 30.4l-13.26-27-13.27 27zM15.68 5.4v552" />
              </g>
            </g>
          </svg>
        </div>
        <div className="main">
          <div className="main__text-wrapper">
            <h1 className="main__title">Drug-induced QT prolongation Surveillance system</h1>
            <p>
              Ajou Drug Report is a system enables us to find out which drug can induces QT prolongation. Using clinical Big-Data from Ajou university hospital, this can show
              harmfulness of drug to heart objectively, so that the medical diagnosis can be made more precisely.
            </p>
            <p>
              In this system, some drug’s effect to heart ion-channel was calculated using latest machine learning algorithm and measurements in laboratory. And it can connect
              single ion-channel research to medical result.
            </p>
            <Link className="button-main" href="/dashboard">
              get started
            </Link>
            <svg xmlns="http://www.w3.org/2000/svg" className="dotted-circle" width="352" height="352" overflow="visible">
              <circle cx="176" cy="176" r="174" fill="none" stroke="#fff" strokeWidth="2" strokeMiterlimit="10" strokeDasharray="12.921,11.9271" />
            </svg>
          </div>

          <ul className="partners">
            <li className="logo-mfds"></li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
              </svg>
            </li>
            <li className="logo-kit"></li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
              </svg>
            </li>
            <li className="logo-cmi"></li>
          </ul>
        </div>
      </div>
      <style>{`
        body {
          background: -webkit-gradient(linear, left top, left bottom, from(#2869bd), to(#083b7d));
          background: linear-gradient(#2869bd, #083b7d);
          height: 100vh;
          margin: 0;
          font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
          font-family: "Comfortaa", cursive;
          font-weight: 300;
          overflow: hidden;
          color: white;
          text-align: center;

          ul {
            margin: 0;
            padding: 0;
            list-style: none;
          }

          h1 {
            opacity: 0;
            font-size: 3rem;
            margin-bottom: 1em;
            animation: fadeInDown 0.6s forwards 0.3s;
          }

          p {
            font-family: "NanumSquare", sans-serif;
            opacity: 0;
            font-size: 18px;
            padding: 0;
            line-height: 1.5;
            animation: fadeInUp 0.6s forwards 0.6s;
          }

          header {
            padding: 1rem;
            flex: 0 0 auto;
            display: flex;
            flex-direction: row-reverse;
          }

          small {
            font-family: "Comfortaa", cursive;
            line-height: 1.2;
            font-size: 14px;
          }

          header ul {
            display: flex;
            align-items: center;
            cursor: pointer;
          }

          header .language {
            display: flex;
          }

          header .language small {
            color: #8396af;
            background-color: transparent;
            padding: 0.5rem;
            position: relative;
            line-height: 1;
          }

          header .language small:first-of-type::before {
            content: "";
            display: block;
            border-right: 1px solid #839ab7;
            height: 9px;
            width: 1px;
            position: absolute;
            right: 0;
          }

          header .language small.active {
            color: white;
          }
        }
      `}</style>
    </div>
  );
};

export default MainPage;
