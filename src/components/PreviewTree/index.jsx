import React from 'react';
import { Tree } from 'antd';
import * as R from 'ramda';
import renderTreeNode from './renderTreeNode'
// const { TreeNode } = Tree;

const PreviewTree = (props) => {
  const { dataSource } = props

  const dataMap = R.indexBy(R.prop('id'))(dataSource)

  const root = dataSource[0]

  return (
    <Tree
      checkable
    >
      {
        renderTreeNode({
          data: root,
          dataMap
        })
      }
    </Tree>
  );
};

export default PreviewTree;