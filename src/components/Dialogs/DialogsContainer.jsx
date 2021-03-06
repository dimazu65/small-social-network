import React from "react";
import { connect } from "react-redux";

import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from "../../redux/dialogs-reducer";

import { Dialogs } from "./Dialogs";


let mapStateToProps =(state) =>{
   return {
      dialogsPage : state.dialogsPage
   }
}
let mapDispatchToProps =(dispatch) =>{
   return {
    sendMessage : () => {
      dispatch(sendMessageCreator()); 
    },
    updateNewMessageBody : (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    }
   }
}
export const MyDialogsContainer = connect (mapStateToProps,mapDispatchToProps)(Dialogs)
