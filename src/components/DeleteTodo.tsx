import { graphql } from '@/lib/gql'
import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useMutation } from 'urql'

const DeleteTodoMutation = graphql(/* GraphQL */`
mutation DeleteTodoMutation ($id: Float!) {
    deleteTodo (id: $id) {
      id
    }
  }
`)

interface DeleteTodoProps {
  todoID: number;
}

export const DeleteTodo: React.FC<DeleteTodoProps> = ({ todoID }) => {
    const [id, setID ] = useState(0);
    const [{data}, deleteTodoMutation] = useMutation(DeleteTodoMutation);

    const handleDeleteTodo = () => {
        setID(todoID);
        deleteTodoMutation({ id: todoID })
        .then(() => {
            console.log('Todoの削除に成功しました');
            setID(0);
        })
        .catch((error) => {
            console.error('Todoの削除に失敗しました:', error);
        });
    }

  return (
    <Button 
        colorScheme='red'
        value={id}
        onClick={handleDeleteTodo}
    >
        削除
    </Button>
  )
}