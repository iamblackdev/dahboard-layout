import { Form, Input } from 'antd';

type FieldType = {
  email?: string;
  password?: string;
};

const LoginPage = () => {


  const onFinish = async (values: any) => {

  };
  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] ">
      <h2 className="display-xl font-bold mb-[24px]">Carozza admin</h2>
      <Form
        name="basic"
        className="login_form"
        initialValues={{}}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>



        <button>
          Login
        </button>
      </Form>

    </div >
  );
}

export default LoginPage;