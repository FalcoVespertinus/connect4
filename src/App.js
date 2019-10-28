import React from 'react';
import {newGame, dropAChip} from "./4gewinnt2"

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {gameState: newGame()}
  }
  render(){
    return (
      <div className="board">
        <table className="table">
          <tbody>
            {this.state.gameState.table.map(zeile=>{
              return <tr>
                {zeile.map((zelle,column)=>{
                  let color
                  if(zelle == "1"){
                    color = "red"
                  }
                  if(zelle == "2"){
                    color = "yellow"
                  }
                  return <td className="column" style={{backgroundColor: color}} onClick={()=>{
                    dropAChip(column,this.state.gameState)
                    this.setState({})
                  }}></td>
                })}
              </tr>
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;