import { FormSelect } from "../FormSelect";
import { InfoBox } from "../InfoBox";
import { InsideBox, InsideBoxText } from "./styles";

interface PersonInfoInputProps {
    label: string,
    profilePic: string,
    personName: string,
    email: string
  }

export function PersonInfoInput({label, profilePic, personName, email} : PersonInfoInputProps){
    return(
    <InfoBox label={label} children={
        <InsideBox>
        <img src={profilePic}></img>
        <InsideBoxText>
            <div className="formSelect">
            <FormSelect 
              label={""} 
              placeholder={personName} 
              options={[]} 
              value={""} 
              onChange={function (newValue: string): void {
                throw new Error("Function not implemented.");
              } } 
            />
            </div>
            <h2>{personName}</h2>
            <h2>{email}</h2>
        </InsideBoxText>
        </InsideBox>
        }>
    </InfoBox>
    )
}