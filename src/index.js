import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import $ from 'jquery'; 
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num:this.props.num,
      delete:this.props.delete
    };
  }
  render(){
    return (
      <div className="cardclass">
      <button 
      className="card" 
      >
        <a href={this.props.value[1]} target="_blank" rel="noopener noreferrer"> {this.props.value[0]}</a>
      </button>
       <button 
       className="delete"  onClick={()=>this.state.delete(this.state.num)}
       >
         __
       </button>
       </div>
    );

  }
 

}

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Cards:this.props.Cards,
      num:this.props.num,
      store:this.props.store
    };
  }

renderCard(i) {
 
  return (<Card value={this.state.Cards[i]}
        delete={this.delete.bind(this)}
        num={i}
  />);
  
}

AddClick() {
const Cards=this.state.Cards.slice();
var url=prompt("ページのタイトルとURLを半角スペースを空けて入力してください");
const chars = url.split(' ');
Cards.push(chars);
  this.setState({Cards:Cards ,
  });
  this.state.store(this.state.num,Cards);
 }
 delete(i) {
  const Cards=this.state.Cards.slice();
  Cards.splice(i, 1);
    this.setState({Cards:Cards ,
    });
    this.state.store(this.state.num,Cards);
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
    Lists:Array(0).fill(null),
    names:Array(0).fill(null),
    isHome:true,
    current:null,
    num:null,
  }
  this.callback = this.store.bind(this)
  
}
AddClick() {
  const Lists=this.state.Lists.slice();
  const names=this.state.names.slice();
  var name=prompt("カテゴリーの名前を入力してください");
  names.push(name);
  Lists.push(Array(0).fill(null));
    this.setState(
      {Lists:Lists,
       names:names
      },
      )
  }
  nameClick(i) {
    this.setState(
       {isHome:!this.state.isHome,
        current:this.state.Lists[i],
        num:i
      }
      )
    }
    store(i,v) {
      const Lists=this.state.Lists.slice();
      Lists[i]=v;
      this.setState(
        {Lists:Lists
        }
        )
      }
render() {
  const names = this.state.names;
  const data =
(<div className="list">
    <List 
   Cards={this.state.current}
   num={this.state.num}
   store={this.callback}
   />
 </div> );
  const category = names.map((step, i) => {
   
    return (
     <button className="category" 
     onClick={() => this.nameClick(i)}
     >
      {this.state.names[i]}
     </button>
    );
  });

  const back =(
    <button className="back" 
    onClick={ ()=> this.setState(
      {isHome:!this.state.isHome
      }
      )
    }
    >
     {"ホームに戻る"}
    </button>
   );
  return (
    <div className="home">
       {this.state.isHome===true?category:back}
       {this.state.isHome===false?data:null}
   {this.state.isHome===true?
   <button 
    className="AddList" 
    onClick={() => this.AddClick()}
    >
      {"+"} 
      </button>
      :null  
      }
    </div>
  );
}
}

// ========================================

ReactDOM.render(
<Home
/>,
document.getElementById('root')
);
