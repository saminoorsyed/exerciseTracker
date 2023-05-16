import React from 'react';
import Exercise from './Exercise';
import { Link } from 'react-router-dom';


function ExerciseList({ exercises, onDelete, onEdit }) {
    return (
        <table id="exercises">
            <caption><Link to ="../add-exercise">Add</Link> and Edit the Exercises below</caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Unit</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {exercises.map((exercise, i) => 
                    <Exercise 
                        exercise={exercise} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default ExerciseList;
