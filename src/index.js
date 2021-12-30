import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Card (props) {
  
  return (
    <button 
    className="card" 
    //onClick={props.onClick}
    >
      {props.value}
    </button>
  );

}

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Cards:props.Cards,
    };
  }

renderCard(i) {
 
  return (<Card value={this.state.List[i]}
    //onClick={() => this.props.onClick(i)}
  />);
  
}
AddClick() {
const Cards=this.state.Cards.slice();
Cards.push("testdayo");
  this.setState({Cards:Cards ,
  });
 }
render() {
  return (
    <div>
    {this.state.Cards.map((val, i) => {
              return (
               this.renderCard(i)
              );
            
          
          })}   
    <button 
    className="AddCard" 
    onClick={this.AddClick}
    >
      {"+"} 
    </button>
</div>
  );
}
}

class Home extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    List: Array(9).fill("test"),
  };
}


render() {
 
  return (
    <div className="home">
        <div className="list">
          <List 
           Cards={this.state.List}
          />
        </div>
    </div>
  );
}
}

// ========================================

ReactDOM.render(
<Home />,
document.getElementById('root')
);
