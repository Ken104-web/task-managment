import KanabanBoard, { moveCard, moveColumn, removeCard, addCard } from '@asseinfo/react-kanban'
import "@asseinfo/react-kanban/dist/styles.css";
import useBoard from '../../state/board'
import './board.css'
import { RxCross2 } from 'react-icons/rx'

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

                        renderCard = {(props) => (
                            <div className='kanban-Card' style={(props)}>
                                <div>
                                    <span>
                                        {props.title}
                                    </span>
                                    <button className='remove-button' type='button'
                                    // onClick={() => {
                                    //     const updateBoard = removeCard(board,
                                    //         getColumn(props))
                                    //         props
                                            
                                    // }}
                                    >
                                    <RxCross2 color="white" size={15} />
                                    </button>
                                </div>
                                <span>{props.description}</span>
                            </div>
    )}
                         
        >
                {board}
        </KanabanBoard>
        </div>
     );
}
 
export default BoardPage;