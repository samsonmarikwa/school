import React, {Component} from 'react';
import firebase from './firebase';

import './LiveSession.css';



class LiveSession extends Component {

   constructor(props, context) {
      super(props, context)
      this.updateMessage = this.updateMessage.bind(this)
      this.submitMessage = this.submitMessage.bind(this)
      this.state = {
         message: '',
         messages : []
      }
   }

   componentDidMount(){

      console.log('componentDidMount')
      firebase.database().ref('messages/').on('value',(snapshot)=>{
         const currentMessages = snapshot.val()

         if (currentMessages != null) {
            this.setState({
               messages: currentMessages
            })
         }
      })
   }

   updateMessage(event){
      console.log('updateMessage:' + event.target.value)
      this.setState({
         message: event.target.value
      })
   }

   submitMessage(event) {
      console.log('submitMessage: '+ this.state.message)
      const nextMessage = {
         id: this.state.messages.length,
         text: this.state.message
      }

      firebase.database().ref('messages/'+nextMessage.id).set(nextMessage)
   }

   render() {
     

      const currentMessage = this.state.messages.map((message, i) => {
         return (
            <textarea> key={message.id}>{message.text}</textarea>
         )
      })

      return (
        
        // <div className="page-hdr">
        //   <h4 className="page-hdr">Live Session ChatRoom</h4>
        // </div>

         <div className="chat-page">
           <h4 className="page-hdr">Live Session ChatRoom</h4>

            <div>
               {currentMessage}
            </div>


            <input className="msgInput" onChange={this.updateMessage} type="textarea" placeholder = "Message" />
            <br />
            <button onClick={this.submitMessage}>Submit Message</button>
         </div>
      )
   }
}

export default LiveSession