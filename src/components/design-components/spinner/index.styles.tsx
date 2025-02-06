import styled, { keyframes } from "styled-components";

interface SpinnerProps {
  $color: string;
}

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div<SpinnerProps>`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
  display: inline-block;

  ${({ $color }) => `
    border: 4px solid rgb(104 99 99 / 30%);
    border-top: 4px solid ${$color};
  `}
`;
