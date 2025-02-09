import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.224 19.539l1.82 3.28m-4.45-1.134l1.179 2.053m5.62-.17c-.53.225-1.543.646-2.358-.76m-1.345 1.64s-1.107.765-1.913-.71M11 8.07H8.002a3 3 0 00-3 3.002l.006 6.604a1 1 0 001 .999h.842l3.037 5.223c.721 1.22 1.85 1.156 2.367 1.046m11.793-4.36c-.22.628-1.65 4.313-3.49 1.087l-2.567-4.03m6.057 2.742h.947a2 2 0 002-2.006l-.022-7.019a3 3 0 00-1.8-2.74l-1.977-.863a9 9 0 00-3.585-.75L15.881 7s-1.255.017-2.503 1.59l-2.971 3.88c-.46.6-.564 1.446.003 1.944.627.55 1.635.944 2.985-.09l2.234-2.271c.42-.428.753-.667 1.35-.614v0c.989.088 2.146.666 2.653 1.52l4.415 7.425z"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const GenericPartners =
  styled(Svg).withConfig({
    shouldForwardProp: prop =>
      !['backgroundColor', 'circleColor', 'color'].includes(prop),
  }) <
  IconProps >
  (({ backgroundColor, circleColor, color, theme }) => [
    backgroundColor && {
      backgroundColor: themed('color', backgroundColor)(theme),
      padding: backgroundColor ? '0.25em' : 0,
      overflow: 'visible',
      borderRadius: '50%',
    },
    color && {
      color: themed('color', color)(theme),
    },
    circleColor && {
      circle: {
        fill: themed('color', circleColor)(theme),
      },
    },
  ]);
export default GenericPartners;
