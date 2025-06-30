import { pxToRem } from "@/utils"
import styled from "styled-components"


export const ProjectImage = styled.figure<{  height: number; width: number }>`
    background-size:cover;
    background-image: url('/projeto1.svg');
    border-radius:${pxToRem(6)};
    height:${(props) => pxToRem(props.height) };
    width:${(props) => pxToRem(props.width) };
    margin: 0 auto; /* Centraliza por padrão (telas pequenas) */
    display: block;

    @media (min-width: 900px) {
        margin: 0; /* Remove centralização */
        height:${(props) => pxToRem((props.height)*0.9)};
        width:${(props) => pxToRem((props.width)*0.9) };
    }
`;