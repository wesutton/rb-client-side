import React from "react";
import axios from "axios";
import MessageList from "./MessageList";

class MessageGroup extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
             message: '',

        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        var token = localStorage.getItem("token");
        const headers = {
                        'content-type': 'application/json',
                        'Authorization': token
        }
        console.log(this.state)
        axios.post('http://localhost:3005/message/create', this.state, {headers})
            .then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error)
            })
    }
    

//     handleCommentSubmit(data){
//         const owner = req.user.id
//         console.log('hello', data);
//         const newMessage = {
//             message: req.body.message,
//             owner: owner
    
//         };
//         const headers = {
//             'Authorization': props.token,
//             'content-type': 'application/json'
//         };

       
    

    // componentDidMount(req, res){
    //     const owner = req.user.id
    //     const newMessage = {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({message: message, owner: owner })
    //     };
    //     fetch('http://localhost:3005/message/create', newMessage)
    


    render() {
        const {message} = this.state
        return (
            // <div>
            //     <MessageList />
            //     <MessageAdd handleCommentSubmit ={this.handleCommentSubmit} />

            // </div>
            <div>
                
            <form onSubmit={this.submitHandler}>
            <div className = "card mt-4 mb-3">
                <div className="card-header"><strong>Comments</strong></div>
                <div className="card-body">
                    <textarea name="message" className="form-control" placeholder="Add a new comment" value={message} onChange ={this.changeHandler}>
                    </textarea>
                </div>
            </div> 
            <div>
                <button type ="submit" className="btn btn-primary mr-3">Comment</button>
            </div>
            </form>
        </div>
        );
    }
}
export default MessageGroup;