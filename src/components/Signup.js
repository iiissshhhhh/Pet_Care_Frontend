import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function Signup() {
    const history = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();

        try {

            await axios.post("https://pet-care-backend.onrender.com/loginRoute/signup", {
                email, password
            })
                .then(res => {
                    if (res.data === "exist") {
                        alert("User already exists")
                    }
                    else if (res.data === "notexist") {
                        history("/home")
                    }
                })
                .catch(e => {
                    alert("wrong details")
                    console.log(e);
                })

        }
        catch (e) {
            console.log(e);

        }

    }


    return (
        <center>
            <div className="login">

                <h1>Signup</h1>

                <form action="POST" style={{ width: "30%" }}>
                    <input type="email" class="form-control" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                    <input type="password" class="form-control" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                    <input type="submit" class="btn btn-primary mt-2" onClick={submit} />

                </form>

                <br />
                <p>OR</p>
                <br />

                <Link to="/">Login Page</Link>

            </div>
        </center>
    )
}

export default Signup