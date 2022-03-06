import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
function DataTables(props) {
  const {
    rowHeight,
    rows,
    columns,
    checkboxSelection,
    pageSize,
    onRowClick,
    onSelectionChange,
    hideFooter,
    hideFooterPagination
  } = props

  return (
    <div style={{ width: '100%', height: 700 }}>
      <DataGrid
        rowHeight={rowHeight}
        rows={rows}
        columns={columns}
        checkboxSelection={checkboxSelection}
        pageSize={pageSize}
        onRowClick={onRowClick}
        onSelectionModelChange={onSelectionChange}
        hideFooter={hideFooter}
        hideFooterPagination={hideFooterPagination}
      />
    </div>
  )
}
export default DataTables
