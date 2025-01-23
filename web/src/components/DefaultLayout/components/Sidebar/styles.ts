import styled from "styled-components";

export const SidebarContainer = styled.aside`
  max-width: 24rem;
  min-width: 18rem;
  width: 20%;
  height: 100vh;
  background-color: ${(props) => props.theme["slate-700"]};
  color: ${(props) => props.theme["slate-50"]};
  display: flex;
  flex-direction: column;
`;

export const SidebarHeader = styled.aside`
  width:100%;
  height: 12%;
  min-height: 6rem;
  max-height: 8rem;
  background-color: ${(props) => props.theme["slate-800"]};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;

  div {

    width: 4rem;
    height: 4rem;

    img {
      object-fit: contain;
    }
  }

  h2 {
    font-size: 1.5rem;
    color: ${(props) => props.theme["slate-50"]};
  }
`;

// Novo container para o conteúdo com sombra
export const SidebarContent = styled.div`
  width: 100%;
  flex: 1;
  box-shadow: 4px 0px 8px rgba(0, 0, 0, 0.3); /* Sombra */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Profile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 4rem 2rem;

   img:last-child{
    object-fit: contain;
    width: 6px;
    height: 25px;
    cursor: pointer;
  }
`;

export const UserProfile = styled.div`

  display: flex;
  flex-direction: row;
  gap: 1rem;

  img {
    width: 64px; 
    height: 64px;
    border-radius: 4px;
    border: 2px solid ${(props) => props.theme["yellow-400"]};
  }

  div {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;

    h3 {
      font-size: 1.6rem;
    }

    span {
      font-size: 1rem;
      color: ${(props) => props.theme["yellow-400"]};
    }
  }
`

export const MenuList = styled.ul`
  width: 100%;
  list-style: none;
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  height: 4rem;
  max-height: 64px;
  justify-content: space-between;
  padding: 0.75rem 2rem;
  background-color: ${(props) => props.theme["slate-700"]};
  cursor: pointer;
  gap: 1rem;

  .icon {
    object-fit: contain;
    width: 2rem; 
    height: 2rem;
  }

  span {
    flex: 1;
    font-size: 1.2rem;
    font-weight: 500;
  }

  .arrow {
    transition: transform 0.3s ease;
    transform: rotate(-90deg);
  }

  .arrow.open {
    transform: rotate(0deg);
  }

  &:hover {
    background-color: ${(props) => props.theme["slate-600"]};
  }
`;

export const SubMenu = styled.ul`
  list-style: none;
  
  li {
    padding: 0.75rem 2rem;
    display: flex;
    align-items: center;
    height: 4rem;
    max-height: 64px;
    background-color: ${(props) => props.theme["slate-800"]};
    cursor: pointer;

    span {
      flex: 1;
      font-size: 1.2rem;
      font-weight: 500;
      margin-left: 3rem;
    }

    &:hover {
      background-color: ${(props) => props.theme["slate-600"]};
    }
  }
`;