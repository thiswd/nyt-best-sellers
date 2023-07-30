import { Box, LoaderContainer, LoaderWrapper } from "./styles"

export function Loader() {
  return (
    <LoaderContainer>
      <LoaderWrapper>
        <Box className="box-0"></Box>
        <Box className="box-1"></Box>
        <Box className="box-2"></Box>
        <Box className="box-3"></Box>
        <Box className="box-4"></Box>
        <Box className="box-5"></Box>
      </LoaderWrapper>
    </LoaderContainer>
  )
}
