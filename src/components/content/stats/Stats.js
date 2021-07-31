import React from 'react'
import axios from 'axios'
import { Container } from 'reactstrap'

class ScoreCard extends React.Component {

    constructor(props){
        super(props)
        this.state={
            stats:[],
            current_page: 1
            
        }
    }

    async componentDidMount(){
        const url = `https://www.balldontlie.io/api/v1/stats?seasons[]=2020&per_page=100`;
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
        this.setState({stats: result.data.data})
        this.setState({current_page: result.data.meta.current_page})
    }

    render(){
        const {stats} = this.state;
        const {current_page} = this.state;
        console.log({stats});
        let mappedArray = (stats).map((stats, key) => {
            return(
            
            <div className ="card-container">
            <div className = "card-template">
                <table>
                <thead>
                <tr>
                    <th></th>
                    <th scope ="col" key = {key}>{stats.player.first_name}</th>
                    <td>  </td>
                    <th scope ="col" >{stats.player.last_name}</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope = "row"></th>
                    <td >Team: {stats.team.abbreviation}</td>
                    <td></td>
                    <td >Position: {stats.player.position}</td>
                </tr>
                <tr>
                    <th scope = "row"> last game: </th>
                    <td >Points: {stats.pts}</td>
                    <td></td>
                    <td >Rebounds: {stats.reb}</td>
                </tr>
                </tbody>
                </table>
            </div>
            </div>
            )
        })
    return (
        <div >
            <h2>Stats</h2>
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