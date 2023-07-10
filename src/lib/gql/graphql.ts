/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo: TodoModel;
  deleteTodo: TodoModel;
  sortTodo: Array<TodoModel>;
  updateTodo: TodoModel;
};


export type MutationCreateTodoArgs = {
  content: Scalars['String']['input'];
  dueDate: Scalars['String']['input'];
};


export type MutationDeleteTodoArgs = {
  id: Scalars['Float']['input'];
};


export type MutationSortTodoArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationUpdateTodoArgs = {
  content: Scalars['String']['input'];
  dueDate: Scalars['String']['input'];
  id: Scalars['Float']['input'];
};

export type Query = {
  __typename?: 'Query';
  getFilteredTodo: Array<TodoModel>;
  getTodo: TodoModel;
  getTodoList: Array<TodoModel>;
};


export type QueryGetFilteredTodoArgs = {
  content: Scalars['String']['input'];
};


export type QueryGetTodoArgs = {
  id: Scalars['Float']['input'];
};

export type TodoModel = {
  __typename?: 'TodoModel';
  content: Scalars['String']['output'];
  dueDate: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  order?: Maybe<Scalars['Int']['output']>;
};

export type CreateTodoMutationMutationVariables = Exact<{
  content: Scalars['String']['input'];
  dueDate: Scalars['String']['input'];
}>;


export type CreateTodoMutationMutation = { __typename?: 'Mutation', createTodo: { __typename?: 'TodoModel', content: string, dueDate: string } };

export type DeleteTodoMutationMutationVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type DeleteTodoMutationMutation = { __typename?: 'Mutation', deleteTodo: { __typename?: 'TodoModel', id: string } };

export type TodosCard_TodoFragment = { __typename?: 'TodoModel', id: string, content: string, dueDate: string } & { ' $fragmentName'?: 'TodosCard_TodoFragment' };

export type UpdateTodoMutationMutationVariables = Exact<{
  id: Scalars['Float']['input'];
  content: Scalars['String']['input'];
  dueDate: Scalars['String']['input'];
}>;


export type UpdateTodoMutationMutation = { __typename?: 'Mutation', updateTodo: { __typename?: 'TodoModel', id: string, content: string, dueDate: string } };

export type HomePageQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type HomePageQueryQuery = { __typename?: 'Query', getTodoList: Array<(
    { __typename?: 'TodoModel', id: string, order?: number | null, content: string, dueDate: string }
    & { ' $fragmentRefs'?: { 'TodosCard_TodoFragment': TodosCard_TodoFragment } }
  )> };

export const TodosCard_TodoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TodosCard_todo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TodoModel"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}}]}}]} as unknown as DocumentNode<TodosCard_TodoFragment, unknown>;
export const CreateTodoMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTodoMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dueDate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTodo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}},{"kind":"Argument","name":{"kind":"Name","value":"dueDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dueDate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}}]}}]}}]} as unknown as DocumentNode<CreateTodoMutationMutation, CreateTodoMutationMutationVariables>;
export const DeleteTodoMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteTodoMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTodo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteTodoMutationMutation, DeleteTodoMutationMutationVariables>;
export const UpdateTodoMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTodoMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dueDate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTodo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}},{"kind":"Argument","name":{"kind":"Name","value":"dueDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dueDate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}}]}}]}}]} as unknown as DocumentNode<UpdateTodoMutationMutation, UpdateTodoMutationMutationVariables>;
export const HomePageQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HomePageQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTodoList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"order"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TodosCard_todo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TodosCard_todo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TodoModel"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}}]}}]} as unknown as DocumentNode<HomePageQueryQuery, HomePageQueryQueryVariables>;