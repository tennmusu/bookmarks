import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import $ from 'jquery'; 
function Card (props) {
  
  return (
    <button 
    className="card" 
    >
      <a href={props.value[1]} target="_blank" rel="noopener noreferrer"> {props.value[0]}</a>
    </button>
  );

}

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Cards:props.Cards,
      title:"",
    };
  }

renderCard(i) {
 
  return (<Card value={this.state.Cards[i]}
    //onClick={() => this.props.onClick(i)}
  />);
  
}

AddClick() {
const Cards=this.state.Cards.slice();
var url=prompt("ページのタイトルとURLを半角スペースを空けて入力してください");
const chars = url.split(' ');
Cards.push(chars);
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
    onClick={() => this.AddClick()}
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
    Lists:Array(1).fill(Array(0).fill(null)),
  };
}
AddClick() {
  const Lists=this.state.Lists.slice();
  Lists.push(Array(0).fill(null));
    this.setState(
      {Lists:Lists},
      )
  }
render() {
  const Lists = this.state.Lists;
  const datas = Lists.map((step, i) => {
   
    return (
      <div className="list">
      <List 
     Cards={this.state.Lists[i]}
     />
   </div> 
    );
  });
 
  return (
    <div className="home">
       {datas}
    <button 
    className="AddList" 
    onClick={() => this.AddClick()}
    >
      {"+"} 
    </button>
    </div>
  );
}
}

// ========================================

ReactDOM.render(
<Home />,
document.getElementById('root')
);
