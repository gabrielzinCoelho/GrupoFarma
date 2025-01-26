import { Plus } from "phosphor-react";
import { PageTitle } from "../../components/PageTitle";
import { ContentContainer, PageHeaderContainer, PageContentContainer } from "./styles";
import { PrimaryButtonWithIcon } from "../../components/PrimaryButtonWithIcon";
import { RegistersTable } from "../../components/RegistersTable";

export function ListarProdutos() {


  return (
    <ContentContainer>
      <PageHeaderContainer>
        <PageTitle
          titles={[
            "Produtos",
            "Lista de Produtos",
            "Antibiótico",
          ]}
          description="Gerencie um produto."
        />
        <PrimaryButtonWithIcon 
          label="Novo Produto"
          Icon={Plus}
        />
      </PageHeaderContainer>
      <PageContentContainer>
          <RegistersTable
            pagination={{
              pageSize: 10,
              currentPage: 1,
              resultsAmount: 117
            }}
            columns={[
              {
                label: 'Nome do Produto',
                hasOrder: true,
                percentWidth: 40
              },
              {
                label: 'Código',
                hasOrder: true,
                percentWidth: 15
              },
              {
                label: 'Categoria',
                hasOrder: true,
                percentWidth: 15
              },
              {
                label: 'Ações',
                hasOrder: false,
                percentWidth: 30
              }
            ]}
            registers={[
              [
                {
                  value: 'Um texo para ordenar o registro',
                  element: <h3>Coluna da tabela</h3>
                },
                {
                  value: 'Um texo para ordenar o registro',
                  element: <h3>Coluna da tabela</h3>
                },
                {
                  value: 'Um texo para ordenar o registro',
                  element: <h3>Coluna da tabela</h3>
                },
                {
                  value: 'Um texo para ordenar o registro',
                  element: <h3>Coluna da tabela</h3>
                }
              ]
            ]}
          />
      </PageContentContainer>

    </ContentContainer>
  );
}