import React, {useState} from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './Signup.css'
import 'antd/dist/antd.css'






// const NormalSignupForm = (props) => {
//    const [firstName, setFirstName] = useState('');
//    const [lastName, setLastName] = useState('');
//    const [username, setUsername] = useState('');
//    const [password, setPassword] = useState('');


//   let handleSubmit = (event) => {
//       event.preventDefault();
//       fetch("http://localhost:3005/user/register", {
//         method: 'POST',
//         body: JSON.stringify({firstName: firstName, lastName: lastName, username, password: password}),
//         headers: new Headers({
//             'Content-Type': 'application/json'
//         })
//       }).then(
//           (response) => response.json()
//       ).then((data) => {
//           props.updateToken(data.sessionToken)
//       })
//       console.log(firstName, lastName, username, password);

//   }

//   return (
//     <div>
//          <Form onSubmit={handleSubmit}>
//             <FormGroup>
//                 <Label htmlFor="firstName">First</Label>
//                 <Input onChange={(e) => setFirstName(e.target.value)} name = "firstName" value = {firstName}/>
//             </FormGroup>
//             <FormGroup>
//                 <Label htmlFor="lastName">Last</Label>
//                 <Input onChange={(e) => setLastName(e.target.value)} name = "lastName" value = {lastName}/>
//             </FormGroup>
//             <FormGroup>
//                 <Label htmlFor="username">Username</Label>
//                 <Input onChange={(e) => setUsername(e.target.value)} name = "email" value = {username} />
//             </FormGroup>
//             <FormGroup>
//                 <Label htmlFor="password">Password</Label>
//                 <Input type ="password" onChange={(e) => setPassword(e.target.value)} name = "password" value = {password}/>
//             </FormGroup>
//             <Button type = "submit">Signup</Button>
//         </Form>
//     </div>
//   );
// };

const NormalSignupForm = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
 
  const onFinish = (values) => {
    fetch("http://localhost:3005/user/register", {
        method: 'POST', 
        body: JSON.stringify({firstName: firstName, lastName: lastName, username: username, password: password}),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(
        (response) => response.json()
    ).then((data) => {
        props.updateToken(data.sessionToken)
    })  
    console.log('Received values of form: ', values);
  };

  return (
    <div className = "signup-container">
    <h4> Signup </h4>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    > 
      <Form.Item
        name="firstName"
        rules={[
          {
            required: true,
            message: 'Please input your First Name!',
          },
        ]}
      >
        <Input onChange={(e) => setFirstName (e.target.value)} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="First Name" value={firstName} />
      </Form.Item>
      <Form.Item
        name="lastName"
        rules={[
          {
            required: true,
            message: 'Please input your Last Name!',
          },
        ]}
      >
        <Input onChange={(e) => setLastName (e.target.value)} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="LastName" value={lastName} />
      </Form.Item>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input onChange={(e) => setUsername (e.target.value)} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" value={username} />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          onChange={(e) => setPassword (e.target.value)}
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          value = {password}
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Sign up
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};



export default NormalSignupForm;

