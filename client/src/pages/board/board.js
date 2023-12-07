import KanabanBoard, { moveCard, moveColumn, removeCard, addCard } from '@asseinfo/react-kanban'
import "@asseinfo/react-kanban/dist/styles.css";
import useBoard from '../../state/board'
import './board.css'
import { RxCross2 } from 'react-icons/rx'
import { useState } from 'react';
import { IoMdAdd } from 'react-icons/io'
import AddCardx from '../../component/addCard/addCard';
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
    const getColumn = (card) => {
        const column = board.columns.filter((column) => column.cards.includes(card))
        return column[0]
    }

    const getGradient = (card) => {
        const column = getColumn(card)
        const title = column.title
        if (title === "TODO") {
            return {
                background:
                    "linear-gradient(65.35deg, rgba(65, 65, 65, 0.67) -1.72%, rgba(48, 189, 220) 163.54%)",
            };
        } else if (title === "Doing") {
            return {
                background:
                    "linear-gradient(65.35deg, rgba(65, 65, 65, 0.67) -1.72%, rgba(220, 48, 48) 163.54%)",
            };
        } else if (title === "Completed") {
            return {
                background:
                    "linear-gradient(65.35deg, rgba(65, 65, 65, 0.67) -1.72%, rgba(48, 220, 86) 163.54%)",
            };
        } else if (title === "Backlog") {
            return {
                background:
                    "linear-gradient(65.35deg, rgba(65, 65,65, 0.67) -1.72%,rgba(134, 48, 220) 163.54%)",
            };
        }
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
                            <div className='kanban-Card' style={getGradient(props)}>
                                <div>
                                    <span>
                                        {props.title}
                                    </span>
                                    <button className='remove-button' type='button'
                                    onClick={() => {
                                        const updateBoard = removeCard(board,
                                            getColumn(props),
                                            props
                                            )
                                            setBoard(updateBoard)
                                    }}
                                    >
                                    <RxCross2 color="white" size={15} />
                                    </button>
                                </div>
                                <span>{props.description}</span>
                            </div>
    )} 
    renderColumnHeader={(props) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [modalOpen, setModalOPen] = useState(false)
        const handleCardAdd = (title, detail) => {
            const card = {
                id: new Date().getTime(),
                title,
                description:detail
            };
            const updateBoard = addCard(board, props, card)
            setBoard(updateBoard)
            setModalOPen(false)
        }
        return (
            <div className='column-Header'>
            <span>{props.title}</span>

            <IoMdAdd
                color="white"
                size={25} title="Add card"
                onClick={()=>setModalOPen(true)}
            />
            <AddCardx visible={modalOpen} handleCardAdd={handleCardAdd}
                 onClose={() => setModalOPen(false)} />
        </div>
        )
    }}                
        >
                {board}
        </KanabanBoard>
        </div>
     );
}
 
export default BoardPage;