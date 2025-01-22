import styled from "styled-components";

export const SidebarContainer = styled.aside`
  width: 20%;
  max-width: 384px;
  height: 100vh;
  background-color: ${(props) => props.theme["slate-700"]};
  color: ${(props) => props.theme["slate-50"]};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;

`;

export const SidebarHeader = styled.aside`
  width:100%;
  height: 12%;
  max-height: 96px;
  background-color: ${(props) => props.theme["slate-800"]};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .logo {
    display: flex;
    align-items: center;
    gap: .6rem;
    
    img {
      object-fit: contain;
      max-width: 64px;
      max-height: 64px;
      min-width: 16px;
      min-height: 16px;
    }

    h2 {
      font-size: 1.5rem;
      color: ${(props) => props.theme["slate-50"]};
    }
  }
`;


export const Profile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem 0; /* Espaçamento interno menor e consistente */
  gap: 16px;
  margin: 1.5rem;

  .profilepic {
    object-fit: contain;
    width: 64px; 
    height: 64px;
    border-radius: 4px;
    border: 2px solid ${(props) => props.theme["yellow-400"]};
    
  }

  div {
    display: flex;
    flex-direction: column;

    h3 {
      font-size: 1.6rem;
      line-height: 2.6rem;
      margin: 0;
    }

    span {
      font-size: 1rem;
      line-height: 1.8rem;
      color: ${(props) => props.theme["yellow-400"]};
    }
  }

  .profileoptions{
      object-fit: contain;
      width: 6px;
      height: 25px;
    
      margin-left: 30%;
      margin-bottom: 5%;
`;

export const MenuList = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  height: 4rem;
  max-height: 64px;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  background-color: ${(props) => props.theme["slate-700"]};
  cursor: pointer;
  gap: 1rem;
  padding-left: 1.5rem;

  .icon {
    object-fit: contain;
    width: 34px; 
    height: 34px;
  }

  span {
    flex: 1;
    font-size: 1.2rem;
    font-weight: 500;
    
  } 

  .arrow {
    transition: transform 0.3s ease; /* Adiciona uma transição suave */
    transform: rotate(-90deg); /* Rotação padrão */
  }

  .arrow.open {
    transform: rotate(0deg); /* Rotação quando o submenu está aberto */
  }

  &:hover {
    background-color: ${(props) => props.theme["slate-600"]};
  }
`;

export const SubMenu = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    padding: 0.75rem 1rem;
    display: flex;
    align-items: center;
    height: 4rem;
    max-height: 64px;
    justify-content: space-between;
    background-color: ${(props) => props.theme["slate-800"]};
    cursor: pointer;

    span {
      flex: 1;
      font-size: 1.2rem;
      font-weight: 500;
      margin-left: 3.6rem;
    }

    &:hover {
      background-color: ${(props) => props.theme["slate-600"]};
    }
  }
`
