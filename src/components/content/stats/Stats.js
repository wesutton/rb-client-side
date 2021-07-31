import React from 'react'
import axios from 'axios'
import { Container } from 'reactstrap'

class ScoreCard extends React.Component {

    constructor(props){
        super(props)
        this.state={
            games:[],
            current_page: 1
            
        }
    }

    async componentDidMount(){
        const url = `https://www.balldontlie.io/api/v1/games?seasons[]=2020&page=${this.state.current_page}`;
        let result = null;
        try{
            result = await axios(url, {
                headers: {
                    "content-type": "application/json"
                }
            })
        } catch(e){
            console.log(e)
        }
        this.setState({games: result.data.data})
        this.setState({current_page: result.data.meta.current_page})
    }

    render(){
        const {games} = this.state;
        const {current_page} = this.state;
        console.log({games});
        let mappedArray = (games).map((games, key) => {
            return(
            
            <div className ="card-container">
            <div className = "card-template">
                <table>
                <thead>
                <tr>
                    <th></th>
                    <th scope ="col" key = {key}>{games.home_team.full_name}</th>
                    <td> vs </td>
                    <th scope ="col" >{games.visitor_team.full_name}</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope = "row"></th>
                    <td >{games.home_team_score}</td>
                    <td></td>
                    <td >{games.visitor_team_score}</td>
                </tr>
                </tbody>
                </table>
            </div>
            </div>
            )
        })
    return (
        <div >
        
            <div className = "card-page">
                {mappedArray}
            </div>
            <div style={{display: "flex", justifyContent:"space-around"}}>
            </div>
        </div>
    );
    }
}

export default ScoreCard;