import React, { useState } from 'react'
import { Button, Input } from '@chakra-ui/react'
import { useMutation } from 'urql';
import { graphql } from '@/lib/gql';

const UpdateTodoMutation = graphql(/* GraphQL */`
mutation UpdateTodoMutation ($id: Float!, $content: String!, $dueDate: String!) {
    updateTodo (id: $id, content: $content, dueDate: $dueDate) {
        id
        content
        dueDate
    }
}
`)

interface UpdateTodoProps {
    todoID: number;
    onClose: () => void;
}

export const UpdateTodo: React.FC<UpdateTodoProps> = ({ todoID, onClose }) => {
    const [id, setID] = useState(0);
    const [content, setContent] = useState('');
    const [dueDate, setDueDate ] = useState('');
    const [{data}, updateTodoMutation] = useMutation(UpdateTodoMutation);

    const handleSubmitUpdateTodo = () => {
        updateTodoMutation({ id: todoID, content, dueDate })
        .then((result) => {
            console.log(result)
            console.log(todoID)
            console.log(content, dueDate)
            // 初期化
            setID(0);
            setContent('');
            setDueDate('');
            onClose(); 
        })
        .catch((error) => {
            console.error('Todoの編集に失敗しました:', error);
        });
    }

    return (
        <div>
        <Input
            focusBorderColor='green.400'
            variant='outline'
            type='text'
            placeholder='例）読書する'
            boxShadow='0 2px 4px rgba(0, 0, 0, 0.1)'
            w={60}
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
            />
        <Input
            focusBorderColor='green.400'
            variant='outline'
            type="date"
            placeholder="Select Date"
            boxShadow='0 2px 4px rgba(0, 0, 0, 0.1)'
            width={60}
            required
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            />
            <div>
            <Button
            onClick={onClose}
            >
                戻る
            </Button>
            <Button
                colorScheme='whatsapp'
                onClick={handleSubmitUpdateTodo}
            >
                確定
            </Button>
            </div>
        </div>
    )
}
