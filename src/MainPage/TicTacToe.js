import { useState } from "react";
import "./TicTacToe.css";

function TicTacToeComp(){

    const [turn, setTurn] = useState('x')
    const [cells, setCells] = useState(Array(9).fill(''))
    const [winner, setWinner] = useState()

    const findTheWinner = (squares) => {
        let winnerOptions = [
            [0,1,2], 
            [3,4,5] ,
            [6,7,8],
            [0,3,6], 
            [1,4,7], 
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        winnerOptions.forEach((x) => {
            console.log(squares[x[0]] +squares[x[1]] +squares[x[2]])
            if(
                squares[x[0]] === ''||
                squares[x[1]] === ''||
                squares[x[2]] === '' 
                )
            {
                
            }
            else if (
              squares[x[0]] === squares[x[1]] &&
              squares[x[1]] === squares[x[2]]
            )
            {
              setWinner(squares[x[0]])
            }
        });
    }

    const makeSome = (num) => {
        let squares = [...cells]
        if((cells[num]) !== ''){
            alert("Already click")
            return
        }
        if(turn === 'x'){
            squares[num] = 'x';
            setTurn('o')
        }
        else{
            squares[num] = 'o'
            setTurn('x')
        }
        findTheWinner(squares)
        setCells(squares)
        console.log(squares)
    }

    const restartGame = () => {
        setWinner('')
        setCells(Array(9).fill(''))
    }

    const Cell = ({num}) => {
        return <td onClick={() => {makeSome(num)}}>{cells[num]}</td>;
    }

    return (
    <div className="container">
        <table  >
                Turn: {turn}
                <tbody>
                    <tr>
                        <Cell num={0} />
                        <Cell num={1}/>
                        <Cell num={2}/>
                    </tr>
                    <tr>
                        <Cell num={3}/>
                        <Cell num={4}/>
                        <Cell num={5}/>
                    </tr>
                    <tr>
                        <Cell num={6}/>
                        <Cell num={7}/>
                        <Cell num={8}/>
                    </tr>
                </tbody>
        </table>
        <br/>
        {
            winner && (
                <>
                <p>And the Winner is {winner}</p>
                <button onClick={() => {restartGame()}}>Start new game</button>
                </>
        )}
        
    </div>)
}

export default TicTacToeComp