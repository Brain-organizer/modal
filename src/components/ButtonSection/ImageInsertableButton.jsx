import { ImageContainer, StyledButton } from "../../styles/style"

function ImageInsertableButton({text, children, $size, $isNegative, ...props}) {
  return (
    <StyledButton {...{$size,$isNegative, ...props}}>
      {text}
      <ImageContainer>
        {children}
      </ImageContainer>
    </StyledButton>
  )
}

export default ImageInsertableButton