import { useDispatch } from "react-redux";
import { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom/dist";
import { LeafyGreen } from "lucide-react";
import { AppContent } from "../Parmeshwar/Contex/ContextApi";
import { Flex } from "@chakra-ui/react";

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
  // let pr = 30 % useEffect(() => {}, []);
  const { theme } = useContext(AppContent);
  return (
    <DIV className="product-card" theme={theme}>
      <Link to={`/products/${id}`}>
        <div class="card">
        <img
              src={`https://source.unsplash.com/featured/600x600?${category},products`}
              alt="name"
              className="product-image"
            />
          <div class="card__body">
            
            <h3 className="product-title">{name}</h3>
            <Flex gap={".5rem"} m={'1rem 0'} justifyContent={'center'}>
            <h5 style={{ fontWeight: "bold", fontSize: "22px", color: "#377ffd" }}>
              ₹{disc}
            </h5>
            <p
              style={{
                textAlign: "center",
                textDecoration: "line-through",
                color: "#999",
              }}
            >
              ₹{price}{" "}
            </p>
            </Flex>
            <Flex justifyContent={'center'} mb={"1rem"} gap={".5rem"}>
            <p style={{ textTransform: "uppercase" }} className="product-brand">
              {company} 
            </p>-
            <p className="product-discount">{category}</p>
            </Flex>
          </div>
          {/* <span> View Details</span> */}
        </div>
      </Link>
    </DIV>
  );
};
const DIV = styled.div`
  /* text-align: center; */
  background-color: ${(props) =>
    props.theme === "lightTheme" ? "#e8e8e8" : "#212121"};
  color: ${(props) => (props.theme === "lightTheme" ? "#000" : "#fff")};
  border-radius:10px;
  
  width: 20vw;

  .product-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px 10px 0 0 ;
  }
  .product-title {
    font-size:large;
    font-weight: bold;
    margin: .5rem 0;
  }

  .card {
    --bg: "#f5f5f5";
    --hover-bg: "#f5f5f5";
    --hover-text: "#f5f5f5";
    /* border: 1px solid red; */
    max-width: 800ch;
    text-align: center;
    background: "#f5f5f5e5";
    /* padding: 1.5em; */
    /* padding-block: 1.8em; */
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    transition: 0.3s cubic-bezier(0.6, 0.4, 0, 1), transform 0.15s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* gap: 1em; */
  }

  .card__body {
    color: #464853;
    line-height: 1.5em;
    font-size: 1em;
    width: 90%;
    margin: 1rem 0;
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
  
  /* .card span {
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
  } */

  /* .card:hover span {
    top: 0;
    font-size: 1.2em;
  } */

  /* .card:hover {
    background: "#f5f5f5c5";
  } */

  /* .card:hover > div,
  .card:hover > strong {
    opacity: 0;
  } */
`;
