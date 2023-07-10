/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nmutation CreateTodoMutation ($content: String!, $dueDate: String!) {\n    createTodo (content: $content, dueDate: $dueDate) {\n      content\n      dueDate\n    }\n  }\n": types.CreateTodoMutationDocument,
    "\nmutation DeleteTodoMutation ($id: Float!) {\n    deleteTodo (id: $id) {\n      id\n    }\n  }\n": types.DeleteTodoMutationDocument,
    "\n  fragment TodosCard_todo on TodoModel {\n    id\n    content\n    dueDate\n  }\n": types.TodosCard_TodoFragmentDoc,
    "\nmutation UpdateTodoMutation ($id: Float!, $content: String!, $dueDate: String!) {\n    updateTodo (id: $id, content: $content, dueDate: $dueDate) {\n        id\n        content\n        dueDate\n    }\n}\n": types.UpdateTodoMutationDocument,
    "\nquery HomePageQuery {\n    getTodoList {\n        id\n        order\n        content\n        dueDate\n        ...TodosCard_todo\n    }\n}\n": types.HomePageQueryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation CreateTodoMutation ($content: String!, $dueDate: String!) {\n    createTodo (content: $content, dueDate: $dueDate) {\n      content\n      dueDate\n    }\n  }\n"): (typeof documents)["\nmutation CreateTodoMutation ($content: String!, $dueDate: String!) {\n    createTodo (content: $content, dueDate: $dueDate) {\n      content\n      dueDate\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation DeleteTodoMutation ($id: Float!) {\n    deleteTodo (id: $id) {\n      id\n    }\n  }\n"): (typeof documents)["\nmutation DeleteTodoMutation ($id: Float!) {\n    deleteTodo (id: $id) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment TodosCard_todo on TodoModel {\n    id\n    content\n    dueDate\n  }\n"): (typeof documents)["\n  fragment TodosCard_todo on TodoModel {\n    id\n    content\n    dueDate\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation UpdateTodoMutation ($id: Float!, $content: String!, $dueDate: String!) {\n    updateTodo (id: $id, content: $content, dueDate: $dueDate) {\n        id\n        content\n        dueDate\n    }\n}\n"): (typeof documents)["\nmutation UpdateTodoMutation ($id: Float!, $content: String!, $dueDate: String!) {\n    updateTodo (id: $id, content: $content, dueDate: $dueDate) {\n        id\n        content\n        dueDate\n    }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery HomePageQuery {\n    getTodoList {\n        id\n        order\n        content\n        dueDate\n        ...TodosCard_todo\n    }\n}\n"): (typeof documents)["\nquery HomePageQuery {\n    getTodoList {\n        id\n        order\n        content\n        dueDate\n        ...TodosCard_todo\n    }\n}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;