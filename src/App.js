import React from 'react';
// import logo from './logo.svg';
import {Alert} from "reactstrap";
import './App.css';
import database from "./firebase";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      documents:[
        {
          'text':"symple",
        },
      ],
    };
    this.db = database.firestore();
    // this.mainQueries = this.mainQueries.bind(this);-
  }
  componentDidMount(){
    let documents=[];
    
    let questions = this.db.collection("Questions").orderBy("date" , "asc").get()
    .then((snapshot)=> {
      snapshot.forEach(doc=>{
        // console.log(doc.id,doc.data());
        documents.push({
          "text":doc.data().Text,
        });
      });
      this.setState({
        documents: documents,
      });
    }).catch(error=>{
      console.log("error",error);
    });
  }
  componentDidUpdate() {
    let documents = [];
    let questions = this.db.collection("Questions").orderBy("date","asc").get()
    .then((snap) => {
      snap.forEach(doc=> {
        documents.push({
          "text":doc.data().Text,
        });
      });
      this.setState({
        documents: documents,
      });
    })
    .catch(err => {
      console.log("ERROR OCCURED IN mainQueries",err);
    });
  }
  render(){
    let queries = this.state.documents;
    return (
      <div className="container">
        <h1 className="display-1">User Queries</h1>
        {
          this.state.documents.slice(0).reverse().map( (stuff) => <Alert><p className="lead">{stuff.text}</p></Alert>)
        }
      </div>
    );
  }
}

