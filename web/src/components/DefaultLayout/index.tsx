import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { ContentContainer, MainContainer, PageContainer } from "./styles";

export function DefaultLayout(){

  return (
    <PageContainer>
      <Sidebar />
      <ContentContainer>
        <Header />
        <MainContainer>
            <Outlet />
        </MainContainer>  
      </ContentContainer>
    </PageContainer>
  )

}