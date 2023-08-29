// @ts-nocheck
import { css } from "styled-components"

export const SCREEN_SIZES = {
  xs: 375,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
} as const

type SizeProps = typeof SCREEN_SIZES

export const media = (
  Object.keys(SCREEN_SIZES) as Array<keyof SizeProps>
).reduce(
  (acc, label) => {
    acc[label] = (...args) => css`
      @media (min-width: ${SCREEN_SIZES[label] / 16}rem) {
        ${css(...args)};
      }
    `
    return acc
  },
  {} as { [key in keyof SizeProps]: (...args) => string },
)
