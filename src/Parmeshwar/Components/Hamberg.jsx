import React from 'react'
import styled from "styled-components";
import { useContext } from 'react';
import { AppContent } from '../Contex/ContextApi';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'

export const Hamberg = () => {

  const { theme } = useContext(AppContent)

  return (
    <DIV theme={theme}>

      <input id="checkbox" type="checkbox" />
        <label class="toggle" for="checkbox">
          <div id="bar1" class="bars"></div>
          <div id="bar2" class="bars"></div>
          <div id="bar3" class="bars"></div>
        </label>




    </DIV>
  )
}

const DIV = styled.div`
  #checkbox {
  display: none;
}

.toggle {
  position: relative;
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  transition-duration: .3s;
}

.bars {
  width: 100%;
  height: 4px;
  background-color:  ${props => (props.theme === "lightTheme" ?  "#212121" : "#e8e8e8")};
  /* border-radius: 5px; */
  transition-duration: .3s;
}

/* #checkbox:checked + .toggle .bars {
  margin-left: 13px;
} */

/* #checkbox:checked + .toggle #bar2 {
  transform: translateY(14px) rotate(60deg);
  margin-left: 0;
  transform-origin: right;
  transition-duration: .3s;
  z-index: 2;
} */

/* #checkbox:checked + .toggle #bar1 {
  transform: translateY(28px) rotate(-60deg);
  transition-duration: .3s;
  transform-origin: left;
  z-index: 1;
}

#checkbox:checked + .toggle {
  transform: rotate(-90deg);
} */
/* #checkbox:checked + .toggle #bar3 {
  transform: rotate(90deg);
  transition-duration: .3s;
  transform-origin:right;
} */


`
