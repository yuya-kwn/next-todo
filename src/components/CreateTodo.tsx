import { graphql } from '@/lib/gql';
import { Box, Button, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useMutation } from 'urql';

const CreateTodoMutation = graphql(/* GraphQL */`
mutation CreateTodoMutation ($content: String!, $dueDate: String!) {
    createTodo (content: $content, dueDate: $dueDate) {
      content
      dueDate
    }
  }
`)

export const CreateTodo = () => {
  const [content, setContent] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [{fetching,data,error},createTodoMutation] = useMutation(CreateTodoMutation);

  const handleSubmitTodo = () => {
    createTodoMutation({ content, dueDate })
    .then((result) => {
      console.log(result)
      // Input内容を初期化
      setContent('');
      setDueDate('');
    })
    .catch((error) => {
      console.error('Todoの作成に失敗しました:', error);
    });
  }

  return (
    <Box m={4}  display='flex' justifyContent='center' alignItems='center'>
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
      <Button
        colorScheme='whatsapp'
        onClick={handleSubmitTodo}
      >
        追加
      </Button>
    </Box>
  )
}