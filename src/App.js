import React, { useState } from 'react';
import './App.css';
import { Table } from 'antd';
import Form from './components/Form'
import UserTag from './components/UserTag'
import 'antd/dist/antd.css';

const App = () => {
  const initData = [
    { id: 1, name: 'Tania', child_ids: [2, 3]},
    { id: 2, name: 'Craig', parent_id: 1},
    { id: 3, name: 'Ben', parent_id: 1},
  ]

  const [items, setItems] = useState(initData);

  const options = items.map(item => ({
    value: item.id,
    text: item.name,
  }))

  const addItem = item => {
    const newId = items.length ? (items[items.length - 1].id + 1) : 1
    item.id = newId

    const parentItem = items.find(ele => +ele.id === +item.parent_id)
    const { child_ids = [] } = parentItem
    parentItem.child_ids = child_ids.concat(newId)

    setItems([ ...items, item ])
  }

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
    render: (text, record) => {
      if(text) {
        return <UserTag value={text} dataList={items}/>
      }
      return text
    }
  }, {
    title: '子',
    dataIndex: 'child_ids',
    key: 'child_id',
    render: (text, record) => {
      if(Array.isArray(text)) {
        return <span>
          {text.map(item => <UserTag key={item} value={item} dataList={items}/>)}
        </span>
      }
      return text
    }
  }];

  return (
    <div>
      <Form options={options} onSubmit={addItem}/>
      <Table dataSource={items} columns={columns} rowKey='id'/>
    </div>
  );
}

export default App;
