import React from 'react';
import { useHistory } from "react-router-dom";
import { useState } from 'react';

export const EditExercisePage = ({ exercise }) => {
 
    const [name, setName]=      useState(exercise.name);
    const [date, setDate]=      useState(exercise.date);
    const [reps, setReps]=      useState(exercise.reps);
    const [weight,setWeight]=   useState(exercise.weight);
    const [unit, setUnit]=      useState(exercise.unit);

    const history = useHistory();

    const editExercise = async () => {
        const response = await fetch(`/exercises/${exercise._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                name: name,
                reps: reps,
                weight: weight,
                unit: unit,
                date: date 
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert("Successfully edited document!");
        } else {
            const errMessage = await response.json();
            alert(`Failed to update document. Status ${response.status}. ${errMessage.Error}`);
        }
        history.push("/");
    }

    return (
        <>
        <article>
            <h2>Edit an exercise</h2>
            <p>Marked your exercise wrong? Go ahead and change it... Don't pad your numbers though.</p>
            <p>Working out is for you and you alone! There's no need to be dishonest here. </p>
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
                    
                    <label for="weight">Weight/ distance</label>
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
                        <option value="lbs">lbs</option>
                        <option value="kgs">kgs</option>
                        <option value="mi">mi</option>
                        <option value="km">km</option>
                    </select>
                    <label for="submit">
                    
                    <button
                        onClick={editExercise}
                        id="submit"
                    >Save</button> updates to the collection</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditExercisePage;