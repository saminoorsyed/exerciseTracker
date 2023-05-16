import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const AddExercisePage = () => {

    const [name, setName]=      useState('');
    const [date, setDate]=      useState('');
    const [reps, setReps]=      useState('');
    const [weight,setWeight]=   useState('');
    const [unit, setUnit]=      useState('');

    
    const history = useHistory();

    const addExercise = async () => {
        const newExercise = { name, reps, weight, unit, date };
        const response = await fetch('/exercises', {
            method: 'post',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert("Successfully added the Exercise!");
        } else {
            alert(`Failed to add Exercise, status code = ${response.status}`);
        }
        history.push("/");
    };


    return (
        <>
        <article>
            <h2>Log your workouts here</h2>
            <p>Make sure to fill out each input. Otherwise, your exercise won't be added!</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which exercise are you adding?</legend>
                    <label for="name">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="name" />
                    
                    <label for="date">date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date" />

                    <label for="Reps">Repetitions</label>
                    <input
                        type="number"
                        value={reps}
                        onChange={e => setReps(e.target.value)} 
                        id="reps" />
                    
                    <label for="weight">Weight or distance</label>
                    <input
                        type="number"
                        value={weight}
                        onChange={e => setWeight(e.target.value)} 
                        id="weight" />

                    <label for="unit">Unit</label>
                    <select 
                        name="unit"
                        id="unit"
                        value={unit}
                        onChange={e => setUnit(e.target.value)}
                        >
                        <option>select one</option>
                        <option value="lbs">lbs</option>
                        <option value="kgs">kgs</option>
                        <option value="mi">mi</option>
                        <option value="km">km</option>
                    </select>
                    <label for="submit">
                    <button
                        type="submit"
                        onClick={addExercise}
                        id="submit"
                    >Add</button> to your exercises</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddExercisePage;