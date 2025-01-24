import { ReactNode } from "react";
import { Box, LabelContainer, Divider, InfoContainer } from "./styles";

interface BoxProps {
  label: string;
  children: ReactNode;
}

export function InfoBox({ label, children }: BoxProps) {
  return (
    <Box>
      <LabelContainer>
        <h2>{label}</h2>
      </LabelContainer>
      <Divider />
      <InfoContainer>{children}</InfoContainer>
    </Box>
  );
}
