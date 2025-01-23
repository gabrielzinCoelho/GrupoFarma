import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
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