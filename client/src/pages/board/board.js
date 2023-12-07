import KanabanBoard, { moveCard, moveColumn, removeCard, addCard } from '@asseinfo/react-kanban'
import "@asseinfo/react-kanban/dist/styles.css";
import useBoard from '../../state/board'
import './board.css'
const BoardPage = () => {
    const {board, setBoard} = useBoard()
    return ( 
        <div className='boardX'>
        
        <span>
            Trello Board
        </span>
        <KanabanBoard>
                {board}
        </KanabanBoard>
        </div>
     );
}
 
export default BoardPage;