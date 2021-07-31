import React from "react";

class MessageList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
             messages: [],

        }
    }

    async componentDidMount(){
        const response = await fetch('http://localhost:3005/message/');
        let result = null;
        const data = await response.json();
        this.setState({messages: data})
    }

    render() {
        const {messages} = this.state;
        console.log(messages)
        let messageList = (messages).map((messages, key) => {
            return (
                <div>
                    <div key = {key}>
                        <ul class="list-group">
                         <li class="list-group-item"> user {messages.owner}: {messages.message} </li>
                        </ul>
                    </div>
                </div>
   
            )
        })
        return (
            <div>
                <ul>{messageList}</ul>
            </div>
        );
    }
}
export default MessageList;