import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableRow,
  } from "../../components/ui/table";
  
  import "./AppDetailTable.css";
  
  export function AppDetailTable({
    version,
    size,
    category,
    price,
  }: {
    version: string;
    size: string;
    category: string;
    price: string;
  }) {
    return (
      <div className="app-detail-table-container">
        <h1 className="app-detail-title">App Details</h1>
        <Table>
          <TableCaption>Contents Provided by Squash Gbr</TableCaption>
          <TableBody>
            <TableRow>
              <TableCell className="gray-table-font">Version</TableCell>
              <TableCell className="text-right">{version}</TableCell>
            </TableRow>
  
            <TableRow>
              <TableCell className="gray-table-font">Size</TableCell>
              <TableCell className="text-right">{size}</TableCell>
            </TableRow>
  
            <TableRow>
              <TableCell className="gray-table-font">Category</TableCell>
              <TableCell className="text-right">{category}</TableCell>
            </TableRow>
  
            <TableRow>
              <TableCell className="gray-table-font">Price</TableCell>
              <TableCell className="text-right" style={{ fontWeight: "bold" }}>
                {price}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }