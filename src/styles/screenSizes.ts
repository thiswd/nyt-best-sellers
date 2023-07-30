/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck

import { css } from "styled-components"

interface SizeProps {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
  xxl: number
}

export const screenSizes: SizeProps = {
  xs: 375,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
}

export const media = (
  Object.keys(screenSizes) as Array<keyof SizeProps>
).reduce(
  (acc, label) => {
    acc[label] = (...args) => css`
      @media (min-width: ${screenSizes[label] / 16}rem) {
        ${css(...args)};
      }
    `
    return acc
  },
  {} as { [key in keyof SizeProps]: (...args: any[]) => string },
)
