import React from "react";
import styled from "styled-components";
import { AppContent } from "../Contex/ContextApi";
import { useContext } from "react";
import { AboutModal } from "./AboutModal";
import { useLocation } from "react-router";

export const ButtonComp = ({ text }) => {
  const location = useLocation();
  const { theme, loginHandler } = useContext(AppContent);
  return (
    <DIV theme={theme}>
      <button onClick={loginHandler}>
        <span>{text}</span>
      </button>
    </DIV>
  );
};

const DIV = styled.div`
  button {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #377ffd;
    box-shadow: 0px 6px 24px 0px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    border: none;
  }

  button:after {
    content: " ";
    width: 0%;
    height: 100%;

    position: absolute;
    transition: all 0.4s ease-in-out;
    right: 0;
  }

  button:hover::after {
    right: auto;
    left: 0;
    width: 100%;
  }

  button span {
    text-align: center;
    text-decoration: none;
    width: 100%;
    padding: 4px 8px;
    color: #fff;
    font-size: 1.125em;
    font-weight: 700;
    letter-spacing: 0.3em;
    z-index: 20;
    transition: all 0.3s ease-in-out;
    border: ${(props) =>
      props.theme === "lightTheme" ? "" : "2px solid #fff"};
  }

  button:hover span {
    color: #183153;
    animation: scaleUp 0.3s ease-in-out;
  }

  @keyframes scaleUp {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(0.95);
    }

    100% {
      transform: scale(1);
    }
  }
`;
