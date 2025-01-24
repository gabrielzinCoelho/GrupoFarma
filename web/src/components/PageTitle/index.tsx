import { DescriptionText, SubtitleText, Title, TitleContainer, TitleText } from "./styles";
import { CaretRight } from "phosphor-react";

interface PageTitleProps {
  titles: string[]
  description: string
}

export function PageTitle({ titles, description }: PageTitleProps) {

  const _titles = titles.slice(0, -1)
  const subtitle = titles[titles.length - 1]

  return (
    <Title>
      <TitleContainer>
        {
          _titles.map((title, index) => (
            <span key={index}>
              <TitleText>{title}</TitleText>
              <CaretRight size={16}/>
            </span>
          ))
        }
        <SubtitleText>{subtitle}</SubtitleText>
      </TitleContainer>
      <DescriptionText>{description}</DescriptionText>
    </Title>
  );
}
