import styled from "styled-components";

export const Title = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  .title {
    font-size: 1.3rem;
    margin-right: 0.3rem;
    color: rgba(30, 41, 59, 0.5);
  }

  img{
    margin-top: .4rem;
    margin-right: 0.4rem;
  }

  .subtitle {
    font-size: 1.3rem;
    color: ${(props) => props.theme["slate-800"]};
  }

  .description {
    font-size: .9rem;
    font-weight: 600; 
    color: ${(props) => props.theme["slate-800"]};
    margin-top: 0.1rem;
  }
`;

export const TitleContainer = styled.aside`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
