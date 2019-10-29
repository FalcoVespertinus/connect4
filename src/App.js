import React from 'react';
import {newGame, dropAChip} from "./4gewinnt2"

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {gameState: newGame()}
  }
  render(){
    let tableColor
    if(this.state.gameState.winner !== 0){
      tableColor = "black"
    }
    return (
      <div>
        <div className="board" style={{backgroundColor:tableColor,borderColor:tableColor}}>
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
                      if(this.state.gameState.winner == 0){
                        dropAChip(column,this.state.gameState)
                        this.setState({})
                      }
                    }}></td>
                  })}
                </tr>
              })}
            </tbody>
          </table>
        </div>
        <button onClick={()=>{this.setState({gameState:newGame()})}} className="play-again">Play Again!</button>
      </div>
    );
  }
}

export default App;