import { Plus } from "phosphor-react";
import { PageTitle } from "../../components/PageTitle";
import { ContentContainer, PageHeaderContainer, PageContentContainer } from "./styles";
import { PrimaryButtonWithIcon } from "../../components/PrimaryButtonWithIcon";
import { RegistersTable } from "../../components/RegistersTable";
import { ColumnText } from "../../components/RegistersTable/components/ColumnText";
import { ColumnActions } from "../../components/RegistersTable/components/ColumnActions";

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
                percentWidth: 35
              },
              {
                label: 'Código',
                hasOrder: true,
                percentWidth: 15
              },
              {
                label: 'Categoria',
                hasOrder: true,
                percentWidth: 20
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
                  element: <ColumnText label="Antibiótico 500g" />
                },
                {
                  value: 'Um texo para ordenar o registro',
                  element: <ColumnText label="DHIUYF0098455" />
                },
                {
                  value: 'Um texo para ordenar o registro',
                  element: <ColumnText label="Anti-inflamatório" />
                },
                {
                  value: 'Um texo para ordenar o registro',
                  element: <ColumnActions onRemove={() => {}} showMore={() => {}} />
                }
              ],
              [
                {
                  value: 'Um texo para ordenar o registro',
                  element: <ColumnText label="Antibiótico 500g" />
                },
                {
                  value: 'Um texo para ordenar o registro',
                  element: <ColumnText label="DHIUYF0098455" />
                },
                {
                  value: 'Um texo para ordenar o registro',
                  element: <ColumnText label="Anti-inflamatório" />
                },
                {
                  value: 'Um texo para ordenar o registro',
                  element: <ColumnActions onRemove={() => {}} showMore={() => {}} />
                }
              ],
              [
                {
                  value: 'Um texo para ordenar o registro',
                  element: <ColumnText label="Antibiótico 500g" />
                },
                {
                  value: 'Um texo para ordenar o registro',
                  element: <ColumnText label="DHIUYF0098455" />
                },
                {
                  value: 'Um texo para ordenar o registro',
                  element: <ColumnText label="Anti-inflamatório" />
                },
                {
                  value: 'Um texo para ordenar o registro',
                  element: <ColumnActions onRemove={() => {}} showMore={() => {}} />
                }
              ],
              [
                {
                  value: 'Um texo para ordenar o registro',
                  element: <ColumnText label="Antibiótico 500g" />
                },
                {
                  value: 'Um texo para ordenar o registro',
                  element: <ColumnText label="DHIUYF0098455" />
                },
                {
                  value: 'Um texo para ordenar o registro',
                  element: <ColumnText label="Anti-inflamatório" />
                },
                {
                  value: 'Um texo para ordenar o registro',
                  element: <ColumnActions onRemove={() => {}} showMore={() => {}} />
                }
              ],
              [
                {
                  value: 'Um texo para ordenar o registro',
                  element: <ColumnText label="Antibiótico 500g" />
                },
                {
                  value: 'Um texo para ordenar o registro',
                  element: <ColumnText label="DHIUYF0098455" />
                },
                {
                  value: 'Um texo para ordenar o registro',
                  element: <ColumnText label="Anti-inflamatório" />
                },
                {
                  value: 'Um texo para ordenar o registro',
                  element: <ColumnActions onRemove={() => {}} showMore={() => {}} />
                }
              ],
              [
                {
                  value: 'Um texo para ordenar o registro',
                  element: <ColumnText label="Antibiótico 500g" />
                },
                {
                  value: 'Um texo para ordenar o registro',
                  element: <ColumnText label="DHIUYF0098455" />
                },
                {
                  value: 'Um texo para ordenar o registro',
                  element: <ColumnText label="Anti-inflamatório" />
                },
                {
                  value: 'Um texo para ordenar o registro',
                  element: <ColumnActions onRemove={() => {}} showMore={() => {}} />
                }
              ],
              [
                {
                  value: 'Um texo para ordenar o registro',
                  element: <ColumnText label="Antibiótico 500g" />
                },
                {
                  value: 'Um texo para ordenar o registro',
                  element: <ColumnText label="DHIUYF0098455" />
                },
                {
                  value: 'Um texo para ordenar o registro',
                  element: <ColumnText label="Anti-inflamatório" />
                },
                {
                  value: 'Um texo para ordenar o registro',
                  element: <ColumnActions onRemove={() => {}} showMore={() => {}} />
                }
              ],
              [
                {
                  value: 'Um texo para ordenar o registro',
                  element: <ColumnText label="Antibiótico 500g" />
                },
                {
                  value: 'Um texo para ordenar o registro',
                  element: <ColumnText label="DHIUYF0098455" />
                },
                {
                  value: 'Um texo para ordenar o registro',
                  element: <ColumnText label="Anti-inflamatório" />
                },
                {
                  value: 'Um texo para ordenar o registro',
                  element: <ColumnActions onRemove={() => {}} showMore={() => {}} />
                }
              ],
              [
                {
                  value: 'Um texo para ordenar o registro',
                  element: <ColumnText label="Antibiótico 500g" />
                },
                {
                  value: 'Um texo para ordenar o registro',
                  element: <ColumnText label="DHIUYF0098455" />
                },
                {
                  value: 'Um texo para ordenar o registro',
                  element: <ColumnText label="Anti-inflamatório" />
                },
                {
                  value: 'Um texo para ordenar o registro',
                  element: <ColumnActions onRemove={() => {}} showMore={() => {}} />
                }
              ],
              [
                {
                  value: 'Um texo para ordenar o registro',
                  element: <ColumnText label="Antibiótico 500g" />
                },
                {
                  value: 'Um texo para ordenar o registro',
                  element: <ColumnText label="DHIUYF0098455" />
                },
                {
                  value: 'Um texo para ordenar o registro',
                  element: <ColumnText label="Anti-inflamatório" />
                },
                {
                  value: 'Um texo para ordenar o registro',
                  element: <ColumnActions onRemove={() => {}} showMore={() => {}} />
                }
              ],
            ]}
          />
      </PageContentContainer>

    </ContentContainer>
  );
}