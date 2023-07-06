import { ContentsContainer, StyledTitledContainer, TitleHeading } from '../styles/style'

const TitledContainer = ({title, children, ...props}) => {
  title = title || 'TitledContainer에 Title props를 넘겨주지 않았습니다.';
  children = children || '컨텐츠의 내용이 비었습니다.'
  return (
    <StyledTitledContainer {...props}>
      <TitleHeading> {title} </TitleHeading>
      <ContentsContainer> {children} </ContentsContainer>
    </StyledTitledContainer>
  )
}

export default TitledContainer;