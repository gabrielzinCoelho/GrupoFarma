import { Title, TitleContainer } from "./styles";
import iconTitle from "../../assets/icon-title.png";

interface PageTitleProps {
  title: string;
  title2?: string;
  subtitle: string;
  description: string;
}

export function PageTitle({ title, title2, subtitle, description }: PageTitleProps) {
  return (
    <Title>
      <TitleContainer>
        <h1 className="title">{title}</h1>
        <img src={iconTitle}/>
        {title2 && (
          <>
            <h1 className="title">{title2}</h1>
            <img src={iconTitle}/>
          </>
        )}
        <h1 className="subtitle">{subtitle}</h1>
      </TitleContainer>
      <h3 className="description">{description}</h3>
    </Title>
  );
}
