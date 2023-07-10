import { FragmentType, graphql, useFragment } from '@/lib/gql'
import { Button, Card, CardBody, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { DeleteTodo } from './DeleteTodo'
import { UpdateTodo } from './UpdateTodo'

const TodoFragment = graphql(/* GraphQL */`
  fragment TodosCard_todo on TodoModel {
    id
    content
    dueDate
  }
`)

type Props = {
  todo: FragmentType<typeof TodoFragment>
}

export const TodosCard = (props: Props) => {
  const todo = useFragment(TodoFragment, props.todo)

  const [showUpdateTodo, setShowUpdateTodo] = useState(false);

  const handleButtonClick = () => {
    setShowUpdateTodo(true);
  };

  const handleCloseUpdateTodo = () => {
    setShowUpdateTodo(false);
  };

  return (
    <div style={{ display:'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card 
        style={{ border: '1px solid #10b981',
        borderRadius: '4px', 
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        marginBottom: '10px',
        maxWidth: '600px',
        width: '100%'
      }}>
        <CardBody style={{ 
          padding: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center' }}>
          <Text>
            <strong>{todo.content}</strong>  期日:
            <span>{todo.dueDate}</span>
          </Text>
          <div>
          {showUpdateTodo ? (
            <UpdateTodo todoID={Number(todo.id)} onClose={handleCloseUpdateTodo} />
          ) : (
          <>
            <Button 
              colorScheme='whatsapp'
              style={{ marginRight: '5px' }}
              onClick={handleButtonClick}
            >
              編集
            </Button>
            <DeleteTodo todoID={Number(todo.id)}/>
          </>
          )}
          </div>
        </CardBody>
      </Card>
    </div>
  )
}