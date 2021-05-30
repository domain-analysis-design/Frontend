import Reacgt from 'react';
import {AiOutlineClose} from "react-icons/ai";
import useToggle from "../../hooks/useToggle";
import { Modal } from "../common/Modal";
import Input from "../common/Input";
import Button from "../common/Button";
import useInput from "../../hooks/useInput";
import { addBoardRequestAction } from "../../reducers/board";
import { createBoard } from "../../libs/util/dummyCreator";
import { useDispatch } from "react-redux";

function CreateBoardModal({name}){
    const [createToggle, setCreateToggle] = useToggle();
    const [boardName, setBoardName, handleBoardName] = useInput("");

    const dispatch = useDispatch();

    const onCreateBoard = () => {
        dispatch(addBoardRequestAction(createBoard()));
    };

    return(
        <>
            <div
                style={{
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.298039)",
                }}
            />
            <Modal feature="create">
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <AiOutlineClose
                        style={{ color: "black", width: "5vh", height: "5vh" }}
                    />
                </div>
                <Input
                feature="create"
                placeholder="  Add Board Title"
                onChange={handleBoardName}
                />
                <div
                style={{
                    color: "black",
                    fontSize: "20px",
                    height: "18vh",
                    display: "flex",
                    alignItems: "center",
                }}
                >
                {name}'s WorkSpace
                </div>
            </Modal>
            <Button
                feature="create"
                onClick={() => {
                onCreateBoard();
                }}
            >
                Create Board
            </Button>
        </>
    )
}

export default CreateBoardModal;