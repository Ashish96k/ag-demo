import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

const tooltipRenderer = params => {
  return '<span title="' + params.value + '">' + params.value + '</span>';
};

const columnDefinations = [
  {
    headerName: 'Make',
    field: 'make',
    sortable: true,
    filter: true,
    cellRenderer: tooltipRenderer
  },
  {
    headerName: 'Model',
    field: 'model',
    sortable: true,
    filter: true
  },
  {
    headerName: 'Price',
    field: 'price',
    sortable: true,
    filter: true
  }
];

const rowsData = [
  {
    make: 'Toyota Toyota Toyota Toyota Toyota',
    model: 'Celica',
    price: 35000
  },
  {
    make:
      'Ford Ford Ford Ford Ford Ford Ford Ford Ford Ford Ford Ford Ford FordFord Ford Ford',
    model: 'Mondeo',
    price: 32000
  },
  {
    make:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like) There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    model: 'Boxter',
    price: 72000
  }
];

const AgGrid = () => {
  const [columnDefs, setColumnDefs] = useState(columnDefinations);
  const [rowData, setRowData] = useState(rowsData);

  return (
    <div
      className='ag-theme-balham'
      style={{
        height: '500px',
        width: '600px'
      }}
    >
      <AgGridReact columnDefs={columnDefs} rowData={rowData}></AgGridReact>
    </div>
  );
};

export default AgGrid;
