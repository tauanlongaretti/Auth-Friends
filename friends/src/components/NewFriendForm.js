import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialFriend = {
    id: Date.now(),
    name: "",
    age: "",
    email: ""
};

const NewFriendForm = props => {
    const [newFriend, setNewFriend] = useState(initialFriend);

    const changeHandler = e => {
        setNewFriend({ ...newFriend, [e.target.name]: e.target.value})
    };

    const handleSubmit = e => {
        axiosWithAuth()
            .post('/friends', newFriend)
            .then(res => {
                console.log(res);
                setNewFriend({ ...newFriend, 
                name: "",
                age: "",
                email: ""
                })
            })
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={newFriend.name}
                  onChange={changeHandler}
                />
                <input
                  type="text"
                  placeholder="Age"
                  name="age"
                  value={newFriend.age}
                  onChange={changeHandler}
                />
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={newFriend.email}
                  onChange={changeHandler}
                />
            <button>Add New Friend</button>
        </form>
    )
}

export default NewFriendForm;

