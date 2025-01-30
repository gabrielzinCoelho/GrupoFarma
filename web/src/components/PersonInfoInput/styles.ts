import styled from "styled-components";

export const InsideBox = styled.div`
  display: flex; 
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 3rem;
  margin-top: .4rem;
  img{
    width: 90px;
    height: 90px;
    border-radius: 50%;
    object-fit: contain;
    margin-bottom: .8rem;
    margin-left: .6rem;
    box-shadow: 0px 0px 0px 4px ${(props) => props.theme["slate-800"]};
  }
`;

export const InsideBoxText = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: left;
  gap: .8rem;
  
  .formSelect{
    padding-bottom: .4rem;
  }

  h2{
    margin-left: .4rem;
    font-size: .8rem;
  }
`;