import React, { useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import Link from 'next/link';

interface loginData {
    email: string,
    password: string
}

const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleLogin = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        var data:loginData = {
            email: email,
            password: password
        };
        console.log("data",data);
    }

    return (
        <>
        <h1>Login</h1>
        <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInputEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" onChange={(event:React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value) } />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInputpassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" onChange={(event:React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value) } >
                <Button variant="info">Submit</Button>
            </Form.Group>
        </Form>
        <p>Create Account: <u><Link href="/signin">Signup</Link></u></p>
        </>
    );
}
export default Login;