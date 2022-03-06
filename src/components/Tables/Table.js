import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DataTables from './DataTables'

function Table() {
  const [tableData, setTableData] = useState([])
  const api = 'https://jsonplaceholder.typicode.com/photos'
  const columns = [
    { field: 'id', headerName: 'ID', width: 90, type: 'number' },
    {
      field: 'thumbnailUrl',
      headerName: 'Album',
      width: 200,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <img
          alt={params.value}
          src={params.value}
          width={45}
          height={45}
          loading="lazy"
        />
      )
    },
    {
      field: 'title',
      headerName: 'Title',
      width: 600
    }
  ]

  useEffect(() => {
    getAlbumList()
  }, [])
  const getAlbumList = async () => {
    try {
      const response = await axios.get(api)
      if (response?.data?.length > 0) {
        setTableData(response.data)
      }
    } catch (error) {
      console.error(error)
    }
  }
  const onRowClick = (param) => {
    console.log(param)
  }
  const onSelectionChange = (ids) => {
    const selectedIDs = new Set(ids)
    const selectedRowData = tableData
      .filter((row) => selectedIDs.has(row.id))
      .map((row) => ({
        id: row.id,
        thumbnailUrl: row.thumbnailUrl,
        title: row.title
      }))
    console.log(selectedRowData)
  }
  return (
    tableData &&
    tableData.length > 0 && (
      <div style={{ width: '100%', height: 700 }}>
        <DataTables
          rowHeight={52}
          rows={tableData}
          columns={columns}
          checkboxSelection={true}
          pageSize={25}
          onRowClick={onRowClick}
          onSelectionChange={onSelectionChange}
          hideFooter={false}
          hideFooterPagination={true}
        />
      </div>
    )
  )
}
export default Table
