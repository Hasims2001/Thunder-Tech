import React from 'react'
import styled from "styled-components";

export const ImageCardComp = () => {

  
  return (
    <DIV>
        <div class="card-container">
  <div class="card">
  <div class="img-content">

    <img src="https://cdn.mos.cms.futurecdn.net/nfp35ACuuzXXDUn7tFixDE-1200-80.jpg.webp" alt="" />
    {/* <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2 19v-14c0-.552.447-1 1-1 .542 0 4.418 2.028 9 2.028 4.593 0 8.456-2.028 9-2.028.55 0 1 .447 1 1v14c0 .553-.45 1-1 1-.544 0-4.407-2.028-9-2.028-4.582 0-8.458 2.028-9 2.028-.553 0-1-.448-1-1zm1.5-.791 6.449-7.691c.289-.344.879-.338 1.16.012 0 0 1.954 2.434 1.954 2.434l1.704-1.283c.319-.24.816-.168 1.054.154l4.679 6.335v-12.44c-1.58.58-4.819 1.798-8.5 1.798-3.672 0-6.918-1.218-8.5-1.799zm2.657-.834c1.623-.471 3.657-.903 5.843-.903 2.309 0 4.444.479 6.105.98l-3.041-4.117-1.065.802.275.344c.259.323.206.796-.117 1.054-.323.259-.795.207-1.054-.117l-2.591-3.236zm.698-9.534c-1.051 0-1.905.854-1.905 1.905s.854 1.904 1.905 1.904 1.904-.853 1.904-1.904-.853-1.905-1.904-1.905zm0 1.3c.333 0 .604.271.604.605 0 .333-.271.604-.604.604-.334 0-.605-.271-.605-.604 0-.334.271-.605.605-.605z" fill-rule="nonzero"></path></svg> */}
  </div>
  <div class="content">
    <img style={{ width: "500px"}} src="https://cdn.mos.cms.futurecdn.net/nfp35ACuuzXXDUn7tFixDE-1200-80.jpg.webp" alt="" />
    <p class="heading">Samsung Galaxy S23 Ultra</p>
    <p>
    <span style={{fontSize: "20px"}}>Dimensions:</span> 7.12 x 3.71 x 1.08-inches (163.4 x 78.1 x 8.9 mm)
    <br />
    <span style={{fontSize: "20px"}}>Screen resolution:</span> 3088 x 1440 (Edge Quad HD+)
    <br />
    <span style={{fontSize: "20px"}} >RAM:</span> 8GB & 12GB options
    <br />
    <span style={{fontSize: "20px"}}>Rear camera:</span> 200MP + 12MP + 10MP + 10MP
    <br />
    <span style={{fontSize: "20px"}}>Front camera:</span> 12MP
    
    </p>
  </div>
</div>
</div>
    </DIV>
  )
}


const DIV = styled.div`
    .card-container {
  /* width: 900px; */
  height: 520px;
  position: relative;
  /* border-radius: 10px; */
  
  margin: auto;
}

.card-container::before {
  content: "";
  z-index: -1;
  position: absolute;
  inset: 0;
  background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100% );
  transform: translate3d(0, 0, 0) scale(0.95);
  filter: blur(20px);
}

.card {
  width: 100%;
  height: 100%;
  border-radius: inherit;
  overflow: hidden;
}

.card .img-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100% );
  transition: scale 0.6s, rotate 0.6s, filter 1s;
}

.card .img-content svg {
  width: 50px;
  height: 50px;
  fill: #212121;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

.card .content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
  color: #e8e8e8;
  padding: 20px;
  line-height: 1.5;
  border-radius: 5px;
  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  
}

.card .content .heading {
  font-size: 32px;
  font-weight: 700;
}

.card:hover .content {
  opacity: 1;
  transform: translateY(0);
}

.card:hover .img-content {
  scale: 2.5;
  rotate: 30deg;
  filter: blur(7px);
  cursor: pointer;
}

.card:hover .img-content svg {
  fill: transparent;
}

.img-content > img{
  width: 100%;
  height: 100%;
}

`