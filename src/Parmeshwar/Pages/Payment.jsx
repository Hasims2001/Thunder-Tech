import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PaymentImage from "../Images/PaymentImage.png";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { postOrder } from "../../redux/productRedux/action";
import { clearcartaction } from "../../redux/cartRedux/action";

const initialCod = {
  email: "",
  address: "",
  state: "",
  district: "",
  pincode: "",
};

const initialCard = {
  email: "",
  address: "",
  state: "",
  district: "",
  pincode: "",
  cardNumber: "",
  expMonth: "",
  expYear: "",
  cvv: "",
};

export const Payment = () => {
  const toast = useToast();
  const [cod, setCod] = useState(initialCod);
  const [card, setCard] = useState(initialCard);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [payment, setPayment] = useState("cod");
  const {cartproduct} = useSelector(store => store.cartReducer);
  const {orders} = useSelector(store => store.productReducer);
  const {userEmail, userName} = useSelector(store=> store.authReducer);

  useEffect(()=>{
    for(let i=0; i<cartproduct.length; i++){
      let pro = cartproduct[i];
      orders.forEach((item)=>{
        let orderProduct = item.products;
        for(let i=0; i<orderProduct.length; i++){
          if(pro.name === orderProduct[i].name){
            toast({
              title: `Order has been placed!`,
              status: "success",
              isClosable: true,
              duration: 9000
            })
            dispatch(clearcartaction());
            navigate('/');
          }
        }
      
      })
    }
  }, [orders]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (payment === "cod") {
      setCod((prev) => {
        return { ...prev, [name]: name === "pincode" ? +value : value };
      });
    } else if (payment === "cards") {
      setCard((prev) => {
        return {
          ...prev,
          [name]:
            name === "pincode" ||
            name === "cardNumber" ||
            name === "cvv" ||
            name === "expMonth" ||
            name === "expYear"
              ? +value
              : value,
        };
      });
    }
  };

  const successHandler = () => {
    if(payment === "cards"){
   
      if(!card.email || !card.address || !card.state || !card.district || !card.pincode || !card.expYear || !card.cardNumber || !card.expMonth || !card.cvv){
        toast({
          title: `All fields are require`,
          status: "error",
          isClosable: true,
          duration: 9000
        });
      }else{
        let postObj = {
          products: cartproduct,
          userEmail,
          userName,
          status: "Pending",
          address: card,
          payment: "card",
          quantity: cartproduct.length
        }
        dispatch(postOrder(postObj));
      }
    }else if(payment === 'cod'){
      if(!cod.email || !cod.address || !cod.state || !cod.district || !cod.pincode){
        
        toast({
          title: `All fields are require`,
          status: "error",
          isClosable: true,
          duration: 9000
        });
      }else{
        let postObj = {
          products: cartproduct,
          userEmail,
          userName,
          status: "Pending",
          address: cod,
          payment: "cod",
          quantity: cartproduct.length
        }
        dispatch(postOrder(postObj));
       
      }
    }else{
      toast({
      title: `Choose to correct payment option`,
      status: "error",
      isClosable: true,
    });
    }
  };

  return (
    <DIV>
      <div className="">
      
        <Flex justifyContent={"center"} gap={"2rem"}   marginLeft={"5rem"} alignItems={"center"}>
          <Stack justifyContent={'center'} alignItems={'flex-end'} >
            <img src={PaymentImage} alt="" width={"50%"}  />
          </Stack>

          <Stack gap={"1rem"} w={"100%"}>
           
              <Text fontSize="xl" className="">
                Accepted Card
              </Text>
                <img src="https://logodix.com/logo/845851.png" width={"30%"} alt="" />

              {/* Payment Options */}

              <div
                onChange={(e) => {
                  setPayment(e.target.value);
                }}
                style={{ display: "flex", gap:"1rem" }}
              >
                <div>
                  <input
                    type="radio"
                    name="paymentOptions"
                    value={"cod"}
                    checked={payment === "cod"}
                  />
                  &nbsp;<label htmlFor="">Cash On Delivery</label>
                </div>

                <div>
                  <input type="radio" name="paymentOptions" value={"cards"} />
                  &nbsp;<label htmlFor="">Debit Card / Credit Cards </label>
                </div>
              </div>

              <div>
                <form action="" className="paymentForm">
                  {payment === "cod" || payment === "" ? (
                    <div>
                      <div>
                        <label htmlFor="">Email</label>
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Your Email"
                          name="email"
                          value={cod.email}
                          onChange={handleChange}
                          aria-required
                        />
                      </div>

                      <div>
                        <label htmlFor="">Address</label>
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Your Address"
                          name="address"
                          value={cod.address}
                          onChange={handleChange}
                          aria-required
                        />
                      </div>

                      <div>
                        <label htmlFor="">State</label>
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Your State"
                          name="state"
                          value={cod.state}
                          onChange={handleChange}
                          aria-required
                        />
                      </div>

                      <div>
                        <label htmlFor="">District</label>
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Your District"
                          name="district"
                          value={cod.district}
                          onChange={handleChange}
                          aria-required
                        />
                      </div>

                      <div>
                        <label htmlFor="">Pincode</label>
                      </div>
                      <div>
                        <input
                          type="number"
                          placeholder="Enter Your Pincode"
                          name="pincode"
                          value={cod.pincode}
                          onChange={handleChange}
                          aria-required
                        />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div
                        style={{
                          display: "flex",
                          gap: "2rem"
                        }}
                      >
                        <div>
                          <div>
                            <label htmlFor="">Email</label>
                          </div>
                          <div>
                            <input
                              type="text"
                              placeholder="Enter Your Email"
                              onChange={(e) => {
                                card.email = e.target.value;
                              }}
                              aria-required
                            />
                          </div>

                          <div>
                            <label htmlFor="">Address</label>
                          </div>
                          <div>
                            <input
                              type="text"
                              placeholder="Enter Your Address"
                              onChange={(e) => {
                                card.address = e.target.value;
                              }}
                              aria-required
                            />
                          </div>

                          <div>
                            <label htmlFor="">State</label>
                          </div>
                          <div>
                            <input
                              type="text"
                              placeholder="Enter Your State"
                              onChange={(e) => {
                                card.state = e.target.value;
                              }}
                              aria-required
                            />
                          </div>

                          <div>
                            <label htmlFor="">District</label>
                          </div>
                          <div>
                            <input
                              type="text"
                              placeholder="Enter Your District"
                              onChange={(e) => {
                                card.district = e.target.value;
                              }}
                              aria-required
                            />
                          </div>

                          <div>
                            <label htmlFor="">Pincode</label>
                          </div>
                          <div>
                            <input
                              type="number"
                              placeholder="Enter Your Pincode"
                              onChange={(e) => {
                                card.pincode = e.target.value;
                              }}
                              aria-required
                            />
                          </div>
                        </div>

                        {/* CARD DETAILS */}
                        <div>
                          <div>
                            <label htmlFor="">Card Number</label>
                          </div>
                          <div>
                            <input
                              type="number"
                              placeholder="Enter Card Number"
                              name="cardNumber"
                              value={card.cardNumber}
                              onChange={handleChange}
                              required
                            />
                          </div>

                          <div>
                            <label htmlFor="">Exp Month</label>
                          </div>
                          <div>
                            <input
                              type="number"
                              placeholder="Enter Month"
                              name="expMonth"
                              value={card.expMonth}
                              onChange={handleChange}
                            />
                          </div>

                          <div>
                            <label htmlFor="">Exp Year</label>
                          </div>
                          <div>
                            <select
                              id=""
                              onChange={handleChange}
                              name="expYear"
                              value={card.expYear}
                            >
                              <option value="">Select Year</option>
                              <option value="2025">2025</option>
                              <option value="2026">2026</option>
                              <option value="2027">2027</option>
                              <option value="2028">2028</option>
                              <option value="2029">2029</option>
                              <option value="2030">2030</option>
                              <option value="2031">2032</option>
                              <option value="2033">2034</option>
                              <option value="2035">2035</option>
                            </select>
                          </div>

                          <div>
                            <label htmlFor="">CVV</label>
                          </div>
                          <div>
                            <input
                              type="number"
                              placeholder="Enter CVV"
                              name="cvv"
                              value={card.cvv}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <Button
                    variant={"SimpleBlue"}
                    className="cvv"
                    onClick={successHandler}
                  >
                    Proceed To Payment
                  </Button>
                </form>
              </div>
          </Stack>

          {/* <div style={{ width: "20%" }} className="visaCard">
            <div class="card">
              <div class="card__info">
                <div class="card__logo">MasterCard</div>
                <div class="card__chip">
                  <svg
                    class="card__chip-lines"
                    role="img"
                    width="20px"
                    height="20px"
                    viewBox="0 0 100 100"
                    aria-label="Chip"
                  >
                    <g opacity="0.8">
                      <polyline
                        points="0,50 35,50"
                        fill="none"
                        stroke="#000"
                        stroke-width="2"
                      ></polyline>
                      <polyline
                        points="0,20 20,20 35,35"
                        fill="none"
                        stroke="#000"
                        stroke-width="2"
                      ></polyline>
                      <polyline
                        points="50,0 50,35"
                        fill="none"
                        stroke="#000"
                        stroke-width="2"
                      ></polyline>
                      <polyline
                        points="65,35 80,20 100,20"
                        fill="none"
                        stroke="#000"
                        stroke-width="2"
                      ></polyline>
                      <polyline
                        points="100,50 65,50"
                        fill="none"
                        stroke="#000"
                        stroke-width="2"
                      ></polyline>
                      <polyline
                        points="35,35 65,35 65,65 35,65 35,35"
                        fill="none"
                        stroke="#000"
                        stroke-width="2"
                      ></polyline>
                      <polyline
                        points="0,80 20,80 35,65"
                        fill="none"
                        stroke="#000"
                        stroke-width="2"
                      ></polyline>
                      <polyline
                        points="50,100 50,65"
                        fill="none"
                        stroke="#000"
                        stroke-width="2"
                      ></polyline>
                      <polyline
                        points="65,65 80,80 100,80"
                        fill="none"
                        stroke="#000"
                        stroke-width="2"
                      ></polyline>
                    </g>
                  </svg>
                  <div class="card__chip-texture"></div>
                </div>
                <div class="card__type">debit</div>
                <div class="card__number">
                  <span class="card__digit-group">0123</span>
                  <span class="card__digit-group">4567</span>
                  <span class="card__digit-group">8901</span>
                  <span class="card__digit-group">2345</span>
                </div>
                <div class="card__valid-thru" aria-label="Valid thru">
                  Valid
                </div>
                <div class="card__exp-date">
                  <time datetime="2038-01">01/38</time>
                </div>
                <div class="card__name" aria-label="Dee Stroyer">
                  Jk Huger
                </div>
                <div
                  class="card__vendor"
                  role="img"
                  aria-labelledby="card-vendor"
                >
                  <span id="card-vendor" class="card__vendor-sr">
                    Mastercard
                  </span>
                </div>
                <div class="card__texture"></div>
              </div>
            </div>
          </div> */}
        </Flex>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0 ;
  .cvv {
  }

  .pay {
    color: #ff7300;
  }

  .payment {
    width: 100%;
    /* margin-top: 100px; */
  }

  .paymentForm > div {
    margin-bottom: 10px;
  }

  label {
    margin-bottom: 10px;
  }

  input {
    background-color: #ebebeb;
    margin-bottom: 10px;
    padding: 5px;
  }

  select {
    background-color: #ebebeb;
    margin-bottom: 10px;
    padding: 5px;
  }

  .card,
  .card__chip {
    overflow: hidden;
    position: relative;
  }

  .card,
  .card__chip-texture,
  .card__texture {
    animation-duration: 3s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }

  .card {
    animation-name: rotate_500;
    background-color: black;
    background-image: radial-gradient(
        circle at 100% 0%,
        hsla(0, 0%, 100%, 0.08) 29.5%,
        hsla(0, 0%, 100%, 0) 30%
      ),
      radial-gradient(
        circle at 100% 0%,
        hsla(0, 0%, 100%, 0.08) 39.5%,
        hsla(0, 0%, 100%, 0) 40%
      ),
      radial-gradient(
        circle at 100% 0%,
        hsla(0, 0%, 100%, 0.08) 49.5%,
        hsla(0, 0%, 100%, 0) 50%
      );
    border-radius: 0.5em;
    box-shadow: 0 0 0 hsl(0, 0%, 80%), 0 0 0 hsl(0, 0%, 100%),
      -0.2rem 0 0.75rem 0 hsla(0, 0%, 0%, 0.3);
    color: hsl(0, 0%, 100%);
    width: 18.3em;
    height: 9.8em;
    transform: translate3d(0, 0, 0);
  }

  .visaCard {
    display: flex;

    align-items: center;
  }

  .card__info,
  .card__chip-texture,
  .card__texture {
    position: absolute;
  }

  .card__chip-texture,
  .card__texture {
    animation-name: texture;
    top: 0;
    left: 0;
    width: 200%;
    height: 100%;
  }

  .card__info {
    font: 0.75em/1 "DM Sans", sans-serif;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 0.75rem;
    inset: 0;
  }

  .card__logo,
  .card__number {
    width: 100%;
  }

  .card__logo {
    font-weight: bold;
    font-style: italic;
  }

  .card__chip {
    background-image: linear-gradient(hsl(0, 0%, 70%), hsl(0, 0%, 80%));
    border-radius: 0.2rem;
    box-shadow: 0 0 0 0.05rem hsla(0, 0%, 0%, 0.5) inset;
    width: 1.25rem;
    height: 1.25rem;
    transform: translate3d(0, 0, 0);
  }

  .card__chip-lines {
    width: 100%;
    height: auto;
  }

  .card__chip-texture {
    background-image: linear-gradient(
      -80deg,
      hsla(0, 0%, 100%, 0),
      hsla(0, 0%, 100%, 0.6) 48% 52%,
      hsla(0, 0%, 100%, 0)
    );
  }

  .card__type {
    align-self: flex-end;
    margin-left: auto;
  }

  .card__digit-group,
  .card__exp-date,
  .card__name {
    background: linear-gradient(
      hsl(0, 0%, 100%),
      hsl(0, 0%, 85%) 15% 55%,
      hsl(0, 0%, 70%) 70%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Courier Prime", monospace;
    filter: drop-shadow(0 0.05rem hsla(0, 0%, 0%, 0.3));
  }

  .card__number {
    font-size: 0.8rem;
    display: flex;
    justify-content: space-between;
  }

  .card__valid-thru,
  .card__name {
    text-transform: uppercase;
  }

  .card__valid-thru,
  .card__exp-date {
    margin-bottom: 0.25rem;
    width: 50%;
  }

  .card__valid-thru {
    font-size: 0.3rem;
    padding-right: 0.25rem;
    text-align: right;
  }

  .card__exp-date,
  .card__name {
    font-size: 0.6rem;
  }

  .card__exp-date {
    padding-left: 0.25rem;
  }

  .card__name {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 6.25rem;
  }

  .card__vendor,
  .card__vendor:before,
  .card__vendor:after {
    position: absolute;
  }

  .card__vendor {
    right: 0.375rem;
    bottom: 0.375rem;
    width: 2.55rem;
    height: 1.5rem;
  }

  .card__vendor:before,
  .card__vendor:after {
    border-radius: 50%;
    content: "";
    display: block;
    top: 0;
    width: 1.5rem;
    height: 1.5rem;
  }

  .card__vendor:before {
    background-color: #e71d1a;
    left: 0;
  }

  .card__vendor:after {
    background-color: #fa5e03;
    box-shadow: -1.05rem 0 0 #f59d1a inset;
    right: 0;
  }

  .card__vendor-sr {
    clip: rect(1px, 1px, 1px, 1px);
    overflow: hidden;
    position: absolute;
    width: 1px;
    height: 1px;
  }

  .card__texture {
    animation-name: texture;
    background-image: linear-gradient(
      -80deg,
      hsla(0, 0%, 100%, 0.3) 25%,
      hsla(0, 0%, 100%, 0) 45%
    );
  }

  /* Dark theme */
  @media (prefers-color-scheme: dark) {
    :root {
      --bg: hsl(var(--hue), 10%, 30%);
      --fg: hsl(var(--hue), 10%, 90%);
    }
  }

  /* Animation */
  @keyframes rotate_500 {
    from,
    to {
      animation-timing-function: ease-in;
      box-shadow: 0 0 0 hsl(0, 0%, 80%), 0.1rem 0 0 hsl(0, 0%, 100%),
        -0.2rem 0 0.75rem 0 hsla(0, 0%, 0%, 0.3);
      transform: rotateY(-10deg);
    }

    25%,
    75% {
      animation-timing-function: ease-out;
      box-shadow: 0 0 0 hsl(0, 0%, 80%), 0 0 0 hsl(0, 0%, 100%),
        -0.25rem -0.05rem 1rem 0.15rem hsla(0, 0%, 0%, 0.3);
      transform: rotateY(0deg);
    }

    50% {
      animation-timing-function: ease-in;
      box-shadow: -0.1rem 0 0 hsl(0, 0%, 80%), 0 0 0 hsl(0, 0%, 100%),
        -0.3rem -0.1rem 1.5rem 0.3rem hsla(0, 0%, 0%, 0.3);
      transform: rotateY(10deg);
    }
  }

  @keyframes texture {
    from,
    to {
      transform: translate3d(0, 0, 0);
    }

    50% {
      transform: translate3d(-50%, 0, 0);
    }
  }
`;
