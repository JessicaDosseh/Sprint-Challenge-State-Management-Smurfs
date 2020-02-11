import React, { useState } from 'react';
import "../components/App.css";

const SmurfForm = (props) => {
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: ''
    });

    const handleSubmit = e => {
        e.preventDefault();
        props.addSmurf(newSmurf);
        setNewSmurf({
            name: "",
            age: "",
            height:""
        });
    };

    const handleChanges = e => {

        setNewSmurf({ 
            ...newSmurf, 
            [e.target.name]: e.target.value 
         });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="name"
                    onChange={handleChanges}
                    value={newSmurf.name} 
                />
                <br/>
                <br/>
                <input
                    type="text"
                    name="age"
                    placeholder="age"
                    onChange={handleChanges}
                    value={newSmurf.age} 
                />
                <br/>
                <br/>
                <input
                    type="text"
                    name="height"
                    placeholder="height"
                    onChange={handleChanges}
                    value={newSmurf.height}
                />
                <br/>
                <br/>
                 <button className = "submitButton" type="submit">ADD SMURF!</button>
            </form>
        </div>
    );
};

export default SmurfForm; 