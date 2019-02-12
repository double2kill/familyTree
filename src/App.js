import React, { useState } from 'react';
import './App.css';
import { Button, Table } from 'antd';
import Form from './components/Form'
import 'antd/dist/antd.css';

const columns = [{
  title: 'id',
  dataIndex: 'id',
  key: 'id',
}, {
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '父',
  dataIndex: 'parent_id',
  key: 'parent_id',
}, {
  title: '子',
  dataIndex: 'child_ids',
  key: 'child_id',
}];


const App = () => {

  const data = [
    { id: 1, name: 'Tania', child_ids: [2, 3]},
    { id: 2, name: 'Craig', parent_id: 1},
    { id: 3, name: 'Ben', parent_id: 1},
  ]

  const [items, setItems] = useState(data);
  const [newParent, setNewParent] = useState(1);

  const addItem = item => {
    const newId = item.length ? (item[item.length - 1].id + 1) : 1
    item.id = newId
    setItems([ ...items, item ])
  }

  return (
    <div>
      <Button onClick={() => addItem({})}>新增</Button>
      <Form />
      <Table dataSource={items} columns={columns} />
    </div>
  );
}

export default App;
