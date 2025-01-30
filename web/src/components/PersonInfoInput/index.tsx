import { ReactNode } from "react";
import { InfoBox } from "../InfoBox";
import { InsideBox, InsideBoxText } from "./styles";


interface PersonInfoInputProps {
  label: string,
  personName: string,
  email: string,
  imgSrc: string,
  InputSelect: ReactNode
}

export function PersonInfoInput({ label, personName, email, imgSrc, InputSelect }: PersonInfoInputProps) {
  return (
    <InfoBox label={label}>
      <InsideBox>
        <img src={imgSrc}></img>
        <InsideBoxText>
          <div className="formSelect">
            {
            InputSelect
            }
          </div>
          <h2>{personName}</h2>
          <h2>{email}</h2>
        </InsideBoxText>
      </InsideBox>
    </InfoBox>
  )
}