import styled from "styled-components"
import type { TypographiesProps } from "@/types/typographies"
import { pxToRem } from "@/utils"

const breakpoints = {
  md: '900px',
  sm: '600px',
}

export const StyledH1 = styled.h1<TypographiesProps>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => pxToRem(props.size || 60)};
  font-weight: ${(props) => pxToRem(props.weight || 600)};
  letter-spacing: ${pxToRem(-1)};
  line-height: ${(props) => pxToRem(props.lineHeight || 36)};

  @media (max-width: ${breakpoints.md}) {
    font-size: ${(props) => pxToRem((props.size || 60) * 0.8)};
    line-height: ${(props) => pxToRem((props.lineHeight || 36) * 0.8)};
  }

  @media (max-width: ${breakpoints.sm}) {
    font-size: ${(props) => pxToRem((props.size || 60) * 0.6)};
    line-height: ${(props) => pxToRem((props.lineHeight || 36) * 0.6)};
  }
`

export const StyledH2 = styled.h2<TypographiesProps>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => pxToRem(props.size || 44)};
  font-weight: ${(props) => props.weight || 700};
  line-height: ${(props) => pxToRem(props.lineHeight || 60)};

  @media (max-width: ${breakpoints.md}) {
    font-size: ${(props) => pxToRem((props.size || 44) * 0.8)};
    line-height: ${(props) => pxToRem((props.lineHeight || 60) * 0.7)};
  }

  @media (max-width: ${breakpoints.sm}) {
    font-size: ${(props) => pxToRem((props.size || 44) * 0.5)};
    line-height: ${(props) => pxToRem((props.lineHeight || 60) * 0.4)};
  }
`

export const StyledH3 = styled.h3<TypographiesProps>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => pxToRem(props.size || 30)};
  font-weight: ${(props) => props.weight || 700};
  line-height: ${(props) => props.lineHeight || '100%'};

  @media (max-width: ${breakpoints.md}) {
    font-size: ${(props) => pxToRem((props.size || 30) * 0.9)};
  }

  @media (max-width: ${breakpoints.sm}) {
    font-size: ${(props) => pxToRem((props.size || 30) * 0.8)};
    text-align:center;
  }
`

export const StyledH4 = styled.h4<TypographiesProps>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => pxToRem(props.size || 26)};
  font-weight: ${(props) => props.weight || 700};
  line-height: ${(props) => pxToRem(props.lineHeight || 32)};

  @media (max-width: ${breakpoints.md}) {
    font-size: ${(props) => pxToRem((props.size || 26) * 0.9)};
  }

  @media (max-width: ${breakpoints.sm}) {
    font-size: ${(props) => pxToRem((props.size || 26) * 0.8)};
  }
`
export const StyledH5 = styled.h5<TypographiesProps>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => pxToRem(props.size || 22)};
  font-weight: ${(props) => props.weight || 400};
  line-height: ${(props) => props.lineHeight || '100%'};
  margin-bottom: ${pxToRem(32)};

  @media (max-width: ${breakpoints.md}) {
    font-size: ${(props) => pxToRem((props.size || 26) * 0.9)};
  }

  @media (max-width: ${breakpoints.sm}) {
    font-size: ${(props) => pxToRem((props.size || 26) * 0.8)};
  }
`

export const StyledP = styled.p<TypographiesProps>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => pxToRem(props.size || 16)};
  font-weight: ${(props) => props.weight || 400};
  line-height: ${(props) => pxToRem(props.lineHeight || 24)};

  @media (max-width: ${breakpoints.sm}) {
    font-size: ${(props) => pxToRem((props.size || 16) * 0.9)};
  }
`

export const StyledSpan = styled.span<TypographiesProps>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => pxToRem(props.size || 18)};
  font-weight: ${(props) => props.weight || 400};
  line-height: ${(props) => props.lineHeight || '100%'};

  @media (max-width: ${breakpoints.md}) {
    font-size: ${(props) => pxToRem((props.size || 18) * 0.8)};
  }

  @media (max-width: ${breakpoints.sm}) {
    font-size: ${(props) => pxToRem((props.size || 18) * 0.6)};
  }
`

export const IconWrapper = styled.a`
  width: 32px;
  height: 32px;
  margin-bottom: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colorPrimary};  // Cor que muda com tema
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.buttons.primaryBackground}; // Outra cor ao hover
  }

  svg {
    width: 24px;
    height: 24px;
    fill: currentColor; // Vai herdar a cor do pai (IconWrapper)
  }
`;

export const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M22 12.07C22 6.49 17.52 2 12 2S2 6.49 2 12.07c0 5.02 3.66 9.17 8.44 9.95v-7.05H7.9v-2.9h2.54v-2.22c0-2.5 1.5-3.88 3.78-3.88 1.1 0 2.25.2 2.25.2v2.5h-1.27c-1.25 0-1.64.78-1.64 1.58v1.82h2.8l-.45 2.9h-2.35v7.05C18.34 21.24 22 17.1 22 12.07z"/>
  </svg>
);

export const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM12 7.1a4.9 4.9 0 110 9.8 4.9 4.9 0 010-9.8zm5.5-1.35a1.15 1.15 0 11-2.3 0 1.15 1.15 0 012.3 0z"/>
    <circle cx="12" cy="12" r="3.1"/>
  </svg>
);

export const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M4.98 3.5A2.5 2.5 0 002.5 6v12a2.5 2.5 0 002.48 2.5h14.04a2.5 2.5 0 002.48-2.5V6a2.5 2.5 0 00-2.48-2.5H4.98zM8 17.5H6v-7h2v7zm-1-8.2a1.15 1.15 0 111.15-1.15A1.15 1.15 0 017 9.3zm11 8.2h-2v-3.5a1.6 1.6 0 00-3.2 0v3.5h-2v-7h2v1a3 3 0 012.7-1.5c2.3 0 3 1.5 3 3.7v3.8z"/>
  </svg>
);

export const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 32 32">
    <path fillRule="evenodd" d="M 24.503906 7.503906 C 22.246094 5.246094 19.246094 4 16.050781 4 C 9.464844 4 4.101563 9.359375 4.101563 15.945313 C 4.097656 18.050781 4.648438 20.105469 5.695313 21.917969 L 4 28.109375 L 10.335938 26.445313 C 12.078125 27.398438 14.046875 27.898438 16.046875 27.902344 L 16.050781 27.902344 C 22.636719 27.902344 27.996094 22.542969 28 15.953125 C 28 12.761719 26.757813 9.761719 24.503906 7.503906 Z M 16.050781 25.882813 L 16.046875 25.882813 C 14.265625 25.882813 12.515625 25.402344 10.992188 24.5 L 10.628906 24.285156 L 6.867188 25.269531 L 7.871094 21.605469 L 7.636719 21.230469 C 6.640625 19.648438 6.117188 17.820313 6.117188 15.945313 C 6.117188 10.472656 10.574219 6.019531 16.054688 6.019531 C 18.707031 6.019531 21.199219 7.054688 23.074219 8.929688 C 24.949219 10.808594 25.980469 13.300781 25.980469 15.953125 C 25.980469 21.429688 21.523438 25.882813 16.050781 25.882813 Z M 21.496094 18.445313 C 21.199219 18.296875 19.730469 17.574219 19.457031 17.476563 C 19.183594 17.375 18.984375 17.328125 18.785156 17.625 C 18.585938 17.925781 18.015625 18.597656 17.839844 18.796875 C 17.667969 18.992188 17.492188 19.019531 17.195313 18.871094 C 16.894531 18.722656 15.933594 18.40625 14.792969 17.386719 C 13.90625 16.597656 13.304688 15.617188 13.132813 15.320313 C 12.957031 15.019531 13.113281 14.859375 13.261719 14.710938 C 13.398438 14.578125 13.5625 14.363281 13.710938 14.1875 C 13.859375 14.015625 13.910156 13.890625 14.011719 13.691406 C 14.109375 13.492188 14.058594 13.316406 13.984375 13.167969 C 13.910156 13.019531 13.3125 11.546875 13.0625 10.949219 C 12.820313 10.367188 12.574219 10.449219 12.390625 10.4375 C 12.21875 10.429688 12.019531 10.429688 11.820313 10.429688 C 11.621094 10.429688 11.296875 10.503906 11.023438 10.804688 C 10.75 11.101563 9.980469 11.824219 9.980469 13.292969 C 9.980469 14.761719 11.050781 16.183594 11.199219 16.382813 C 11.347656 16.578125 13.304688 19.59375 16.300781 20.886719 C 17.011719 21.195313 17.566406 21.378906 18 21.515625 C 18.714844 21.742188 19.367188 21.710938 19.882813 21.636719 C 20.457031 21.550781 21.648438 20.914063 21.898438 20.214844 C 22.144531 19.519531 22.144531 18.921875 22.070313 18.796875 C 21.996094 18.671875 21.796875 18.597656 21.496094 18.445313 Z"></path>
  </svg>
);




