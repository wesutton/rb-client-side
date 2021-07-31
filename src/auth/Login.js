
import React, {useState, useEffect, useRef} from 'react';
// import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './Login.css'
import 'antd/dist/antd.css'


// const Login = (props) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     // const [password, setPasswordError] = useState(null)
    

//     let handleSubmit = (event) => {
//         event.preventDefault();
//         fetch("http://localhost:3005/user/login", {
//             method: 'POST', 
//             body: JSON.stringify({user: {username: username, password: password}}),
//             headers: new Headers({
//                 'Content-Type': 'application/json'
//             })
//         }).then(
//             (response) => response.json()
//         ).then((data) => {
//             props.updateToken(data.sessionToken)
//         })
//     }



//     return(
//         <div>
//             <h3>Hello, Login</h3>
//             <Form onSubmit={handleSubmit}>
//                 <FormGroup>
//                     <Label htmlFor="username">Email</Label>
//                     <Input onChange = {(e) => setUsername(e.target.value)} name = "email" value = {username}/>
//                 </FormGroup>
//                 <FormGroup>
//                     <Label htmlFor="password">Password</Label>
//                     <Input type= "password" onChange = {(e) => setPassword(e.target.value)} name = "password" value = {password}/>
//                 </FormGroup>
//                 <Button type = "submit"  className = "login-button">Login</Button>
//             </Form>
//         </div>
//     )
// }

// export default Login;




const NormalLoginForm = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
 
  const onFinish = (values) => {
    fetch("http://localhost:3005/user/login", {
        method: 'POST', 
        body: JSON.stringify({username: username, password: password}),
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
    <div className = "login-container">
    <h4> Login </h4>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
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
          Log in
        </Button>
      </Form.Item>
    </Form>
  </div>
  );
};



export default NormalLoginForm;
// const Login = (props) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//   let handleSubmit = (event) => {
//     event.preventDefault();
//     fetch("http://localhost:3005/user/login", {
//       method: 'POST',
//       body: JSON.stringify({user: {username, password: password}}),
//       headers: new Header({
//           'Content-Type': 'application/json'
//       })
//     }).then(
//         (response) => response.json()
//     ).then((data) => {
//         props.updateToken(data.sessionToken)
//     })
//     console.log( username, password);

// }

//   return (
//     <div>
//     <h4>Login</h4>
//     <Form onSubmit= {handleSubmit}
//       name="normal_login"
//       className="login-form"
//       initialValues={{
//         remember: true,
//       }}
//     >
//       <Form.Item
//         name="username"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your Username!',
//           },
//         ]}
//       >
//         <Input onChange = {(e) => setUsername (e.target.value)} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" value={username}/>
//       </Form.Item>
//       <Form.Item
//         name="password"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your Password!',
//           },
//         ]}
//       >
//         <Input
//           onChange = {(e) => setPassword (e.target.value)}
//           prefix={<LockOutlined className="site-form-item-icon" />}
//           type="password"
//           placeholder="Password"
//           value = {password}
//         />
//       </Form.Item>
//       <Form.Item>
//         <Form.Item name="remember" valuePropName="checked" noStyle>
//           <Checkbox>Remember me</Checkbox>
//         </Form.Item>

//       </Form.Item>

//       <Form.Item>
//         <Button type="submit">
//           Log in
//         </Button>
//       </Form.Item>
//     </Form>
//     </div>
//   );
// };

// export default Login;
