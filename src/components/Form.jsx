import React, { useState } from 'react';
import {
  Form, Icon, Input, Button,
} from 'antd';

const MyForm = (props) => {
  const {
    getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,
  } = props.form;
  return (
    <Form layout="inline">
    <Form.Item>
    {getFieldDecorator('userName')(
      <Input placeholder="Username" />
    )}
    </Form.Item>
    <Form.Item>
    <Button
      type="primary"
      htmlType="submit"
    >
      +
    </Button>
  </Form.Item>
    </Form>
  );
};



export default Form.create({})(MyForm)