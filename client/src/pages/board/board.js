import KanabanBoard, { moveCard, moveColumn, removeCard, addCard } from '@asseinfo/react-kanban'
import "@asseinfo/react-kanban/dist/styles.css";
import useBoard from '../../state/board'
import './board.css'
const BoardPage = () => {
    const {board, setBoard} = useBoard()

    const handleColumnMove = (__card, source, destination) => {
        const updateBoard = moveColumn(board, source, destination)
        setBoard(updateBoard)
    }
    const handleCardMove = (__card, source, destination) => {
        const updateBoard = moveCard(board, source, destination)
            setBoard(updateBoard)
    }
    return ( 
        <div className='boardX'>
        
        <span>
            Trello Board
        </span>
        <KanabanBoard 
                        allowAddColumn
                        allowRenameColumn
                        allowRemoveCard
                        onCardDragEnd={handleCardMove}
                        onColumnDragEnd={handleColumnMove}
        >
                {board}
        </KanabanBoard>
        </div>
     );
}
 
export default BoardPage;