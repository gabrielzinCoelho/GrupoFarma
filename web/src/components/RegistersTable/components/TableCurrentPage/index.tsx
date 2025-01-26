import { CaretLeft } from "phosphor-react";
import { CurrentPageContainer, PageSlideContainer } from "./styles";

interface TableCurrentPageProps {
  page: number
}

export function TableCurrentPage({page} : TableCurrentPageProps){
  return (
    <CurrentPageContainer>
      <PageSlideContainer><CaretLeft /></PageSlideContainer>
      <span>{`Pág. ${page}`}</span>
      <PageSlideContainer><CaretLeft /></PageSlideContainer>
    </CurrentPageContainer>
  )
}