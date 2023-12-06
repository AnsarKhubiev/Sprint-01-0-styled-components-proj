import styled, {css} from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";

type StyledBtnPropsType = {
    color?: string,
    fontSize?: string,
    btnType?: "primary" | "outlined",
    active?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: none;
  background-color: ${props => props.color || "#fb3f78"};
  padding: 10px 20px;
  border-radius: 5px;
  color: snow;
  font-size: ${props => props.fontSize || "2rem"};
  font-weight: bold;
  

  ${props => props.btnType === "outlined" && css<StyledBtnPropsType>`
    border: 2px solid ${props => props.color || "#fb3f78"};
    color: ${props => props.color || "#fb3f78"};
    background-color: transparent;

    &:hover {
      border-color: #1c3a65;
      background-color: ${props => props.color || "#1c3a65"};
      color: snow;
    }
  `}


  ${props => props.btnType === "primary" && css<StyledBtnPropsType>`
    background-color: ${props => props.color || "#fb3f78"};
    color: snow;

    &:hover {
      background-color: #1c3a65;
    }
  `}

  ${props => props.active && css<StyledBtnPropsType>`
    box-shadow: 5px 5px 5px 5px rgba(54, 57, 63, 0.75);
  `}
`