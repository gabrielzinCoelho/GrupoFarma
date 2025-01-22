import {PageContainer} from "./styles";
import { Sidebar } from '../../components/Sidebar'
import { Header } from '../../components/Header'

export function CriarProduto(){

    return (
        <PageContainer>
            <Sidebar/>
            <Header/>
        </PageContainer>
    )
}