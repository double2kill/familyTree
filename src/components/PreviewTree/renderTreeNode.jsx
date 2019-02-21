import React from 'react';
import { Tree } from 'antd';
const { TreeNode } = Tree

const renderTreeNode = (props) => {
  const { data, dataMap } = props
  const { id, name, child_ids } = data
  // TODO 健壮性考虑要做死循环检测
  return (
    <TreeNode title={name} key={id}>
      {
        child_ids && child_ids.map(item => {
          return renderTreeNode({
            data: dataMap[item],
            dataMap
          })
        })
      }
    </TreeNode>
  );
};

export default renderTreeNode;