import styled from "styled-components"
import { pxToRem } from "@/utils"

export const CardComponent = styled.div`
    background-color: ${(props) => props.theme.card.background};
    color: ${(props) => props.theme.card.color};;
    border-radius: ${pxToRem(4)};
    box-sizing: border-box;
    padding:${pxToRem(20)} ${pxToRem(32)};
    width:100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    height: 100%;
    a{
        color:inherit
        text-decoration:none;
    }
    &:hover {
        h4, p, span {
            color: ${(props) => props.theme.primaryHover};
        }
    }
`
