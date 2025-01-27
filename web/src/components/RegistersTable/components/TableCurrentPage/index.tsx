import { CaretLeft, CaretRight } from "phosphor-react";
import { CurrentPageContainer, PageSlideContainer } from "./styles";

interface TableCurrentPageProps {
  page: number
  pagesAmount: number
  handleNextPage: () => void
  handlePreviousPage: () => void
}

export function TableCurrentPage({page, pagesAmount, handleNextPage, handlePreviousPage} : TableCurrentPageProps){

  const isPrevPageAble = page > 1
  const isNextPageAble = page < pagesAmount

  return (
    <CurrentPageContainer>
      <PageSlideContainer $isAble={isPrevPageAble} onClick={() => (isPrevPageAble && handlePreviousPage())}>
        <CaretLeft />
      </PageSlideContainer>
      <span>{`Pág. ${page}`}</span>
      <PageSlideContainer $isAble={isNextPageAble} onClick={() => (isNextPageAble && handleNextPage())}>
        <CaretRight />
      </PageSlideContainer>
    </CurrentPageContainer>
  )
}