import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './gettitle.php'
import $ from 'jquery'; 
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
      title:"",
    };
  }

renderCard(i) {
 
  return (<Card value={this.state.Cards[i]}
    //onClick={() => this.props.onClick(i)}
  />);
  
}
Ajax(i) {
  
 $.ajax({
    url: './gettitle.php',
    type: 'post',
    dataType: 'text/html',
    data: {'url':i}
}).done(function(data){
    console.log(data);
    this.setState(
      {title:data},
      )
}).fail(function(){
    console.log('failed');
});
}
AddClick() {
const Cards=this.state.Cards.slice();
var url=prompt("ページのURLを入力してください");
this.Ajax(url);
Cards.push(url);
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
