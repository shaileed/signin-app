import React, { useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import Link from 'next/link';
import {useDispatch} from 'react-redux';
import { ILoginData, ISignupData } from '../../interface';
import { useAppSelector } from '../../hooks/hooks';
import { verifyUser } from '../../store/userSlice';
import {setMessage} from '../../store/alertSlice';
import {useRouter} from 'next/router';
import Alert from '../alert';

const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const users = useAppSelector((state) => state.users.users);
    const logedInUser = useAppSelector((state) => state.users.logedInUser);
    const route = useRouter();
    const dispatch = useDispatch();
    const handleLogin = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        var data:ILoginData = {
            email: email,
            password: password
        };
        if(users && users.length > 0){
            var ifUserExist = users.filter((user:ISignupData)=>user.email == data.email && user.password == data.password)
            if(ifUserExist.length > 0){
                dispatch(verifyUser(ifUserExist[0]));
            }else{
                // dispatch alter message action.
                dispatch(setMessage("Please Check Email and Password again."));
            }
        }else{
            dispatch(setMessage("Please Check Email and Password again."));
        }
        
    }

    //if already login redirect to home page
    if(logedInUser && logedInUser.name){
        route.push("/home");
    }
    return (
        <>
        <h1>Login</h1>
        <Alert/>
        <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInputEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" onChange={(event:React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value) } />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInputpassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="password" onChange={(event:React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value) } />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                <Button type="submit" variant="info">Submit</Button>
            </Form.Group>
        </Form>
        <p>Create Account: <u><Link href="/signin">Signup</Link></u></p>
        </>
    );
}
export default Login;