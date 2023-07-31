import { ReactNode } from "react"
import { ScrollBarContainer } from "./styles"

interface ScrollBarProps {
  children: ReactNode
}

export function HorizontalScrollBar({ children }: ScrollBarProps) {
  return <ScrollBarContainer>{children}</ScrollBarContainer>
}
