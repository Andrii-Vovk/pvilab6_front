import './index.css';
import Figures from './Figures';
import Tboard from './Tboard';
import { Table } from "react-bootstrap";
var aplph = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];


/* var figs = [];
var tmp = [];
for(let i = 0; i < 8; i++) {
    for(let j = 0; j < 8; j++) {
        tmp.push(Figures[Tboard[i][j]])
    }
} */


/* function generate(board) {
    var result = [];
    for (var i = 0; i < 8; i++) {
        let ttd = [];
        let tmptd = [];
        for (var j = 0; j < 8; j++) {
            
            if (j === 0) {
                tmptd.push(<div className="numposition">{8 - i}</div>);
            }
            if (i === 7) {
                tmptd.push(<div className="letterposition">{aplph[j]}</div>);
            }
            tmptd.push(
                <img src={Figures[Tboard[i][j]]} alt="" />
            );
            if ((i + j) % 2 === 0) {
                ttd.push(<td className="tgreen">{tmptd}</td>);
            }
            else {
                ttd.push(<td>{tmptd}</td>);
            }
            tmptd = [];
        }
        console.log(ttd);
        result.push(<tr>{ttd}</tr>);
        ttd = [];
    }
    return result;
} */

function generate(board) {
    var result = [];
    for (var i = 0; i < 8; i++) {
        let ttd = [];
        let tmptd = [];
        for (var j = 0; j < 8; j++) {
            tmptd.push(
                <img src={Figures[Tboard[i][j]]} alt="" />
            );
            if ((i + j) % 2 === 0) {
                ttd.push(<td className="tgreen">{tmptd}</td>);
            }
            else {
                ttd.push(<td>{tmptd}</td>);
            }
            tmptd = [];
        }
        console.log(ttd);
        result.push(<tr>{ttd}</tr>);
        ttd = [];
    }
    return result;
}

const Board = () => {
    return (
        <>
            <table>
                <tbody>
                    {generate(Tboard)}
                </tbody>
            </table>
        </>
    );
}

export default Board;