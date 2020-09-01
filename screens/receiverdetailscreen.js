import React from 'react'
import {View,Text,TextInput,Cards} from 'react-native'
import firebase from 'firebase'
import db from '../config'
import { Icon } from 'react-native-elements';
export default class ReceiverDetail extends Component{
    constructor(props){
        super(props);
        this.state={emailid:firebase.auth().currentUser.email,
        receiverid:this.props.navigation.getParam('details')[emailid],
        requestid:this.props.navigation.getParam('details')[requestid],
        bookname:this.props.navigation.getParam('details')[bookname],
        reasontorequest:this.props.navigation.getParam('details')[reasontorequest],
        receivername:'',
        receivercontact:'',
        receiveraddress:'',
        receiverrequestdocumentid:''
        }
    }
    getreceiverdet(){
        db.collection('users').where('emailid','==',this.state.receiverid).get().then(Snapshot=>{
            Snapshot.forEach(doc=>{this.setState({receivername:doc.data().firstname,
            receivercontact:doc.data().mobno,
        receiveraddress:doc.data().address})})
        })
    }
    updatebookstate=()=>{
        db.collection('alldonations').add({
            bookname:this.state.bookname,
            requestid:this.state.requestid,
            requestedby:this.state.receivername,
            donorid:this.state.emailid,
            requeststatus:"bookdonorinterested"
        })
    }
    render(){
        return(
            <View>
                <Header leftComponent={<Icon name="arrow-left" type="feather" color="black" onpress={
                    ()=>{this.props.navigation.goback()}}/>}
                    centerComponent={{text:"donatebooks"}}
                    backgroundColor="white"/>
            </View>
        )

    }
}