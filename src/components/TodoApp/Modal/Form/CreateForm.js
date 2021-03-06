import React from "react";
import { Modal, Input, Form, message } from "antd";

const CreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();

  return (
    <Modal
      visible={visible}
      title="Tambah Todo"
      okText="Tambah"
      cancelText="Cancel"
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
            // message.success('Task added');
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}onCancel={onCancel}>
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}>
        <Form.Item
          name="todo"
          rules={[
            {
              required: true,
              message: 'Todo cannot be empty!',
            },
          ]}>
            <Input placeholder="Tambah Todo..." />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateForm;
