import { ImageContainer, StyledButton } from "../styles/style"

function ImageInsertableButton({text, children, $size, $isNegative}) {
  return (
    <StyledButton {...{$size,$isNegative}}>
      {text}
      <ImageContainer>
        {children}
      </ImageContainer>
    </StyledButton>
  )
}

export default ImageInsertableButton