import React from 'react';
import ScoreCard from './pages/ScoreCard';

class Scores extends React.Component {

    render(){
        return(
        <div>
            <div className = "scorespage-container">
                <h2>Scores page</h2>
                
                <div className ="scorecard-container">
                   <ScoreCard/>
                </div>
            </div>
        </div>
        )
    }
}

export default Scores;