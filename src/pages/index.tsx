import { graphql } from '@/lib/gql';
import { useMutation, useQuery  } from "urql";
import { TodosCard } from '@/components/TodoCard';
import { Box, Button, Grid, GridItem, Stack } from '@chakra-ui/react';
import { CreateTodo } from '@/components/CreateTodo';
import { DeleteTodo } from '@/components/DeleteTodo';


const HomePageQuery = graphql(/* GraphQL */`
query HomePageQuery {
    getTodoList {
        id
        order
        content
        dueDate
        ...TodosCard_todo
    }
}
`)

export default function Home() {
const [{data}] = useQuery({
  query: HomePageQuery
})

  return (
    <Box>
        <CreateTodo  />
      <Box m={4} />
        <Grid gap={6}>
          <GridItem>
            {data?.getTodoList?.map((todo) => (
              <div>
                <TodosCard key={todo.id} todo={todo} />
              </div>
            ))}
          </GridItem>
        </Grid>
    </Box>
  )
}
