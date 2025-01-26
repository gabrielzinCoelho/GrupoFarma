import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const TitleText = styled.h1`
  font-size: 1.3rem;
  color: rgba(30, 41, 59, 0.5);
  white-space: nowrap;      
  overflow: hidden;         
  text-overflow: ellipsis;  
`

export const SubtitleText = styled.h1`
  font-size: 1.3rem;
  color: ${(props) => props.theme["slate-800"]};
  white-space: nowrap;      
  overflow: hidden;         
  text-overflow: ellipsis;  
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.3rem;

  span {

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.3rem;

    svg {
    color: ${props => props.theme["slate-800"]}
  }

  }

`

export const DescriptionText = styled.h1`
  font-size: .9rem;
  font-weight: 600; 
  color: ${(props) => props.theme["slate-800"]};
  white-space: nowrap;      
  overflow: hidden;         
  text-overflow: ellipsis;  
`
