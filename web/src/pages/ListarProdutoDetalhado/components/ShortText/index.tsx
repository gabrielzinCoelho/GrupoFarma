import { ShortTextContainer } from "./styles";

interface TextProps {
  title: string;
  text?: string;
}

export function ShortText({ title, text = ''}: TextProps) {
  return (
    <ShortTextContainer>
      <h2>{text}</h2>
      <h3>{title}</h3>
    </ShortTextContainer>
  );
}
