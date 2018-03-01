import React, {Component} from "react";
import InputBox from "./InputBox";
import axios from "./utils/axios";

let currentId = 0;

class ListContainer extends Component {
  constructor() {
    super();
    this.state = {
      comments: [
        {
          _id: 0,
          text: "React is awesome!"
        }
      ]
    };
    // Binding our addComment method to this component since we'll be passing it to
    // InputBox to use
    this.addComment = this.addComment.bind(this);
    this.getComments = this.getComments.bind(this);
    this.renderList = this.renderList.bind(this);
  }
  addComment(text) {
    // First, create a new comment object here. This object should have properties
    // that match the comment object currently in this.state.comments
    // Try giving each comment a unique id, use the `currentId` variable to accomplish this
    // Then use the concat method to create a brand new array with the new comment object added on.
    // Set this.state.comments equal to this new array
    currentId ++;
    var newComment =[{
      id : currentId,
      text
    }]
    // this.setState({comments: this.state.comments.concat(newComment)});
  axios.saveQuote(this.state.comments.concat(newComment));
  }

  componentDidMount(){
    this.getComments();
  }

  componentDidUpdate(){
      this.getComments();
  }

  getComments(){
    axios.getQuotes().then(function(i){
        this.setState({comments: i.data});
        // console.log(this.state, "STATE");
    }.bind(this));
  }

  renderList(){
    return this.state.comments.map(function(quote){

      return (<p key= {quote._id}>{quote.text}</p>);
    }.bind(this));
    // console.log(this.state.comments, "RENDER LIST");
  }

  render() {
    return (
      <div>
        <InputBox addComment={this.addComment}/>
        <ul style={styles.listGroupStyle} className="list-group">

          {this.renderList()}

        </ul>
      </div>
    );
  }
}

const styles = {
  listGroupStyle: {
    marginTop: 80
  }
};

export default ListContainer;
