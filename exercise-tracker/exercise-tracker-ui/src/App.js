// Import dependencies
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import Pages
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import { LoginPage } from './pages/LoginPage';

// Define the function that renders the content in routes using State.
function App() {

  const [exercise, setExercise] = useState([]);

  return (
    <div className='exercise-app'>
      <Router>

          <header>
            <h1>Exercise Tracker</h1>
            <p>Log and track your workouts with this site which was built using the MERN Stack</p>
          </header>

          <Navigation />

          <main>
            <Route path="/" exact>
              <HomePage setExercise={setExercise} />
            </Route>

            <Route path="/add-exercise">
              <AddExercisePage />
            </Route>

            <Route path="/login">
              <LoginPage />
            </Route>
            
            <Route path="/edit-Exercise">
              <EditExercisePage exercise={exercise} />
            </Route>
          </main>

          <footer>
          <cite> © 2022 Sami Noor Syed</cite>
            <cite>
              Photo by <a href="https://unsplash.com/@okiaguilar?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Óscar Aguilar Elías </a>
              on <a href="https://unsplash.com/s/photos/exercise?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash</a>
              </cite>
          </footer>

      </Router>
    </div>
  );
}

export default App;