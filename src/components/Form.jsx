import React from 'react';
import {
  Form, Select, Input, Button,
} from 'antd';

const Option = Select.Option;

const MyForm = (props) => {

  const { form, options, onSubmit } = props

  const { getFieldDecorator, validateFields, resetFields } = form;

  const handleSubmit = (e) => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
      onSubmit(values)
      resetFields()
    });
  }

  return (
    <Form layout="inline" onSubmit={handleSubmit}>
      <Form.Item>
        {
          getFieldDecorator('name', {
            rules:[{
              required: true, message: '请输入姓名',
            }]
          })(
            <Input placeholder="姓名" />
          )
        }
      </Form.Item>
      <Form.Item>
        {
          getFieldDecorator('parent_id', {
            rules:[{
              required: true, message: '请选择一个父亲',
            }]
          })(
            <Select
              style={{ width: 150 }}
              placeholder="选择父亲"
              options={options}
              dropdownMatchSelectWidth={false}>
              {
                options.map(o =>
                  <Option key={o.value}>{o.text}</Option>)
              }
            </Select>
          )
        }
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit"> 添加 </Button>
      </Form.Item>
    </Form>
  );
};



export default Form.create({})(MyForm)