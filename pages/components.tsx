import Table from "components/common/Table";
import Authlayout from "components/templates/Authlayout";
import { Container } from "components/templates/container";



const Components = () => {
  const TableHeader = () => (
    <>
      <Table.Th>Code</Table.Th>
      <Table.Th>Company</Table.Th>
      <Table.Th>Price</Table.Th>
      <Table.Th>Change</Table.Th>
      <Table.Th>Price</Table.Th>
      <Table.Th>Change</Table.Th>
      <Table.Th>Price</Table.Th>
      <Table.Th>Change</Table.Th>
    </>
  );
  return (
    <>
      <Authlayout style={{ height: "100%" }}>
        <Container>
          <Table placeholder="Search.." RenderHeader={TableHeader}>
            {[2, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(() => (
              <Table.Tr>
                <Table.Td>Mark</Table.Td>
                <Table.Td>Larry</Table.Td>
                <Table.Td>the Bird</Table.Td>
                <Table.Td>@twitter</Table.Td>
                <Table.Td>Otto</Table.Td>
                <Table.Td>@mdo</Table.Td>
                <Table.Td>Otto</Table.Td>
                <Table.Td>@mdo</Table.Td>
              </Table.Tr>
            ))}
          </Table>
        </Container>
      </Authlayout>
    </>
  );
};

export default Components;
