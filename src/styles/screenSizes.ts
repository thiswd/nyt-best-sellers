// @ts-nocheck
import { css } from "styled-components"

export const SCREEN_SIZES: SizeProps = {
  xs: 375,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
} as const

export const media = Object.keys(SCREEN_SIZES).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${SCREEN_SIZES[label] / 16}rem) {
      ${css(...args)};
    }
  `
  return acc
}, {})
