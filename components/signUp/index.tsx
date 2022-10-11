import React, { useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { useRouter } from 'next/router';
import {Form, Button} from 'react-bootstrap';
import { ISignupData } from '../../interface';
import { addNewUser } from '../../store/userSlice';


const SignUp = () => {
    const [name , setName] = useState<string>("");
    const [contactNo, setContactNo] = useState<number>(0);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const dispatch = useDispatch();
    const route = useRouter();
    const handleRegistration = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        var data:ISignupData = {
            name : name,
            contactNo : contactNo,
            email: email,
            password: password
        };
        dispatch(addNewUser(data));
        route.push("/");
    }

    return (
        <Form onSubmit={handleRegistration}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInputName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="Text" placeholder="Name" name="name" onChange={(event:React.ChangeEvent<HTMLInputElement>) => setName(event.target.value) }/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInputContactNo">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control type="text" name="contactNo"  placeholder="Contact Number" onChange={(event:React.ChangeEvent<HTMLInputElement>) => setContactNo(parseInt(event.target.value)) } />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInputEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" name="emil" onChange={(event:React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value) } />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInputPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(event:React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value) } />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Button type="submit" variant="info">Submit</Button>
            </Form.Group>
        </Form>
    );
}

export default SignUp;