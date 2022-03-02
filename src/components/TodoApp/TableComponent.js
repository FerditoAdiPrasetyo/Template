import React, { useState } from "react";
import { Table, Space, Divider, Popconfirm, message } from "antd";
import EditModal from "./Modal/EditModal";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "./Todos";


export const TodosData = [

];

const TableComponent = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todos.value);

  const [selectionType] = useState('checkbox');

  const columns = [
  {
    title: "TODO",
    dataIndex: "todo",
    key: "todo",
    render: (text) => <div>{text}</div>,
  },
  {
    title: "Action",
    dataIndex: "id",
    key: "id",
    fixed: "right",
    width: 100,
    render: (rows, record) => [
      <Space split={<Divider type="vertical" />} size="middle">

        <EditModal todo={record.todo} id={rows} />

        <Popconfirm
          title="Are You Sure?"
          onConfirm={() => {
              dispatch(deleteTodo({ id: rows }));
              // message.success('deleted');
              }}>
            <a>Delete</a>
        </Popconfirm>
      </Space>
    ],
  },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };

  return (
    <div>
      <Divider />

      <Table
      rowSelection={{
        type: selectionType,
        ...rowSelection,
      }}
      columns={columns}
      dataSource={tasks}
      pagination={{ defaultPageSize: 5 }}
      rowKey="id"
       />
    </div>
  );
};

export default TableComponent;
