import { useDispatch } from "react-redux";
import { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom/dist";
import { LeafyGreen } from "lucide-react";
import { AppContent } from "../Parmeshwar/Contex/ContextApi";

export const ProductCard = ({
  id,
  name,
  image,
  price,
  company,
  category,
  color,
}) => {
  const [off, setoff] = useState("30%off");
  let disc = Math.floor(price - (price * 15) / 100);
  let pr = 30 % useEffect(() => {}, []);
  const { theme } = useContext(AppContent);
  return (
    <DIV className="product-card" theme={theme}>
      <Link to={`/products/${id}`}>
        <div class="card">
          <div class="card__body">
            <img
              src={`https://source.unsplash.com/featured/600x600?${category},products`}
              alt="name"
              className="product-image"
            />
            <h3 className="product-title">{name}</h3>
            <p style={{ textTransform: "uppercase" }} className="product-brand">
              {company}
            </p>
            <h5 style={{ fontWeight: "bold", fontSize: "22px", color: "blue" }}>
              ₹{disc}
            </h5>
            <p
              style={{
                textAlign: "center",
                textDecoration: "line-through",
                color: "#999",
              }}
            >
              {price}{" "}
            </p>
            <span style={{ color: "green" }}></span>
            <p className="product-discount">{category}</p>
          </div>
          <span> View Details</span>
        </div>
      </Link>
    </DIV>
  );
};
const DIV = styled.div`
  text-align: center;
  background-color: ${(props) =>
    props.theme === "lightTheme" ? "#e8e8e8" : "#212121"};
  color: ${(props) => (props.theme === "lightTheme" ? "#000" : "#fff")};
  border-radius: 10px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
  width: 20vw;

  .product-image {
    width: 100%;
    height: 200px;
  }
  .product-title {
    /* font-size:30px */
    font-weight: bold;
  }

  .card {
    --bg: "#f5f5f5";
    --hover-bg: "#f5f5f5";
    --hover-text: "#f5f5f5";
    /* border: 1px solid red; */
    max-width: 800ch;
    text-align: center;
    background: "#f5f5f5e5";
    padding: 1.5em;
    padding-block: 1.8em;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    transition: 0.3s cubic-bezier(0.6, 0.4, 0, 1), transform 0.15s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
  }

  .card__body {
    color: #464853;
    line-height: 1.5em;
    font-size: 1em;
    width: 90%;
    /* border: 1px solid blue; */
  }

  .card > :not(span) {
    transition: 0.3s cubic-bezier(0.6, 0.4, 0, 1);
  }

  .card > strong {
    display: block;
    font-size: 1.4rem;
    letter-spacing: -0.035em;
  }

  .card span {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--hover-text);
    border-radius: 5px;
    font-weight: bold;
    top: 100%;
    transition: all 0.3s cubic-bezier(0.6, 0.4, 0, 1);
  }

  .card:hover span {
    top: 0;
    font-size: 1.2em;
  }

  .card:hover {
    background: "#f5f5f5c5";
  }

  .card:hover > div,
  .card:hover > strong {
    opacity: 0;
  }
`;
