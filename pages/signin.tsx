import Alert from "../components/alert"
import SignUp from "../components/signUp"

const Signin = () =>{
    return (
        <div>
        <h1>Sign in</h1>
        <Alert/>
        <SignUp/>
        {/* <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Contact No</th>
                    <th>Email</th>
                    <th>Password</th>
                </tr>
                {users && users.length > 0 ? 
                    users.map((user:signupData)=>{
                        return (
                        <tr key={user.name}>
                            <td>{user.name}</td>
                            <td>{user.contactNo}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                        </tr>
                        );
                    })
                    : <tr><td colSpan={3}>No Records</td></tr>}
                
            </table>
        </div> */}
        </div>
    )
}

export default Signin