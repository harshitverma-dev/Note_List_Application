import React, { useState } from 'react'
import { Button, Card, Form, InputGroup } from 'react-bootstrap'
import { AiOutlinePlusCircle, AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, removeAllTodo } from '../../store/actions/todoActions';
import './todo.css';

const Todo = () => {
    const [inputdata, setInputData] = useState("");
    const dispatch = useDispatch()
    const listData = useSelector((state) => state.todoReducers.todoList);

    const handleChange = (e) => {
        setInputData(e.target.value)
    }
    return (
        <Card className='container'>
            <Card.Header>
                <InputGroup className="mb-3 mt-3">
                    <Form.Control
                        value={inputdata}
                        onChange={handleChange}
                        placeholder="Add Quick Note"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2" onClick={() => {
                        dispatch(addTodo(inputdata));
                        setInputData('')
                    }}>
                        <AiOutlinePlusCircle size={20} />
                    </Button>
                </InputGroup>
            </Card.Header>

            {
                listData?.map((items, index) => {
                    return (
                        <Card.Body className='todos-child mb-3'>
                            <h6>{items.data}</h6>
                            <Button variant="outline-secondary" id="button-addon3" onClick={() => dispatch(deleteTodo(items.id))}>
                                <AiOutlineDelete size={20} />
                            </Button>
                        </Card.Body>
                    )
                })
            }
            { 
                listData.length > 0 &&
                <div className='clear-todo-btn mt-3'>
                    <Button variant="outline-secondary" className="float-end" onClick={() => dispatch(removeAllTodo())}>
                        Clear All Notes
                    </Button>
                </div>
            }
        </Card>

    )
}

export default Todo
