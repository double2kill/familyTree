import React from 'react';
import { Tag } from 'antd';

const UserTag = (props) => {
  const { value, dataList } = props
  const { name } = dataList.find(item => +item.id === +value)
  return (
    <Tag>{name}</Tag>
  );
};

export default UserTag;