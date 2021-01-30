import React, { Component, Fragment } from 'react';
import Board from './Board';
 

class Game extends Component {
  state  = {
 
  xIsNext: true,
  stepNumber: 0,
  history: [
    {
      squares: Array(9).fill(null)
    }
  ]
  }
  newGame = () => {
    const his = [{squares: Array(9).fill(null)}]
    console.log(his)
    this.setState({
      history: his ,
      setNumber: 0,
      xIsNext: true,
     
    })
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
    xIsNext: step %2 === 0
    })
  }
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[history.length - 1]
    const squares = current.squares.slice()
 
    const winner = this.calculateWinner(squares)
    if (winner || squares[i]) {
      return
    }
     
    squares[i] = this.state.xIsNext? 'X' : 'O'

    this.setState({
      history: history.concat({
        squares: squares,

      }),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length 
    })
    this.calculateWinner(history[history.length - 1])
  }
  calculateWinner = (s) => {
  
    const isX = this.state.xIsNext
 
    // let check = each[0].squares.forEach((c) => {
  
    //   if(!c == null) {
    //     console.log('DRAW')
    //   }
    // })
 
   

 if ((s[0] === s[1] && s[0] ===s[2]) && s[0]   ) {
      console.log(isX)
       return true
    }
    if ((s[3] === s[4] && s[3] ===s[5]) && s[3]   ) {
      console.log(isX)
       return true
    }
  if ((s[6] === s[5] && s[6] ===s[8]) && s[6]   ) {
      console.log(isX)
       return true
    }
 if ((s[0] === s[3] && s[3] ===s[6]) && s[0]   ) {
     return true
    }
    if ((s[1] === s[4] && s[4] ===s[7]) && s[1]   ) {
    return true
    }
  if ((s[2] === s[5] && s[5] ===s[8]) && s[2]   ) {
      return true
    }
    if ( (s[2] === s[4]) && (s[4] === s[6])  &&s[4]) {


      return true
    }
    if ( s[0] === s[4] && s[4] === s[8] && s[4] )
    {
      return true
    }
  

    return false
  }
  
  render() {
    const history = this.state.history;
     
    const current = history[history.length - 1]

    const winner =    this.calculateWinner(current.squares)
    // const moves = history.map((step ,index) => {
    //   const desc = index ? 'Go to #' + index : 'Start game'
    //    console.log(winner)
    //   return (
    //     <li key={index}>
    //       <button onClick={() => this.jumpTo(index)}>
    //         {desc}
    //       </button>

    //     </li>
    //   )
    // })
    let status = winner ? `WINNER ${this.state.xIsNext?'X': 'O'}` : `Next is ${this.state.xIsNext?'X': 'O'}`
    let endGame = winner ? true : false
    return (
      <div className="game">
          <div className="gameboard">
            <Board onClick={(i) => this.handleClick(i)} squares={current.squares}/>
          </div>
          <div className="game-info">
            <h1>{this.state.endgame}</h1>
            <div>
              <h1>
                {status}
                </h1></div>
               {endGame && (
                 <Fragment>
     <h4>New game?</h4>
                 <button onClick={this.newGame}>Yess</button>
                 </Fragment>
            
               )}
            {/* <ul>{moves}</ul> */}
          </div>
      </div>
    );
  }
}

export default Game;
