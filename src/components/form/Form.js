import React, {useState} from "react";


function Form(props) {

    const [nameInput, setNameInput] = useState("");
    const [ageInput, setAgeInput] = useState("");

   
    const updateNameInput = (event) => {
        setNameInput(event.target.value);
        console.log(nameInput);
    }

    const updateAgeInput = (event) => {
        setAgeInput(event.target.value);
        console.log(ageInput);
    }
    
    const submitForm = (event) => {
        event.preventDefault();
        if (nameInput==="" || ageInput==="") {
            return;
        }
        let submitValue = {
            name: nameInput,
            age: ageInput
        };
        console.log(submitValue.name);
        props.submitHandler(submitValue); 
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <label for="name">Name</label>
                <input type="text" name="name" id="name" placeholder="Name..." onChange={updateNameInput}></input>
                <label for="age">Name</label>
                <input type="text" name="age" id="age" onChange={updateAgeInput} placeholder="Age..."></input>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default Form;