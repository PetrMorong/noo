import styled from 'styled-components';

export const Wrap = styled.div`
  .spinner
  {
    -webkit-animation: rotation 1.35s linear infinite;
    animation: rotation 1.35s linear infinite;
  }

  @-webkit-keyframes rotation
  {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(270deg);
      transform: rotate(270deg);
    }
  }

  @keyframes rotation
  {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(270deg);
      transform: rotate(270deg);
    }
  }

  .circle
  {
    stroke-dasharray: 180;
    stroke-dashoffset: 0;
    -webkit-transform-origin: center;
    -ms-transform-origin: center;
    transform-origin: center;
    -webkit-animation: turn 1.35s ease-in-out infinite;
    animation: turn 1.35s ease-in-out infinite;
  }

  @-webkit-keyframes turn
  {
    0% {
      stroke-dashoffset: 180;
    }

    50% {
      stroke-dashoffset: 45;
      -webkit-transform: rotate(135deg);
      transform: rotate(135deg);
    }

    100% {
      stroke-dashoffset: 180;
      -webkit-transform: rotate(450deg);
      transform: rotate(450deg);
    }
  }

  @keyframes turn
  {
    0% {
      stroke-dashoffset: 180;
    }

    50% {
      stroke-dashoffset: 45;
      -webkit-transform: rotate(135deg);
      transform: rotate(135deg);
    }

    100% {
      stroke-dashoffset: 180;
      -webkit-transform: rotate(450deg);
      transform: rotate(450deg);
    }
  }

  svg:nth-child(1){stroke:#009788;}
`;
