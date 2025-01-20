/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./amplify/backend/API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    email
    orders {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      email
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getOrder = /* GraphQL */ `query GetOrder($id: ID!) {
  getOrder(id: $id) {
    id
    userId
    user {
      id
      username
      email
      createdAt
      updatedAt
      owner
      __typename
    }
    products {
      nextToken
      __typename
    }
    totalAmount
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetOrderQueryVariables, APITypes.GetOrderQuery>;
export const listOrders = /* GraphQL */ `query ListOrders(
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      totalAmount
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrdersQueryVariables,
  APITypes.ListOrdersQuery
>;
export const getProduct = /* GraphQL */ `query GetProduct($id: ID!) {
  getProduct(id: $id) {
    id
    name
    description
    price
    inStock
    orders {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProductQueryVariables,
  APITypes.GetProductQuery
>;
export const listProducts = /* GraphQL */ `query ListProducts(
  $filter: ModelProductFilterInput
  $limit: Int
  $nextToken: String
) {
  listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      price
      inStock
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProductsQueryVariables,
  APITypes.ListProductsQuery
>;
export const getOrderProducts = /* GraphQL */ `query GetOrderProducts($id: ID!) {
  getOrderProducts(id: $id) {
    id
    orderId
    productId
    order {
      id
      userId
      totalAmount
      createdAt
      updatedAt
      owner
      __typename
    }
    product {
      id
      name
      description
      price
      inStock
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetOrderProductsQueryVariables,
  APITypes.GetOrderProductsQuery
>;
export const listOrderProducts = /* GraphQL */ `query ListOrderProducts(
  $filter: ModelOrderProductsFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrderProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      orderId
      productId
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrderProductsQueryVariables,
  APITypes.ListOrderProductsQuery
>;
export const ordersByUserId = /* GraphQL */ `query OrdersByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  ordersByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      totalAmount
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.OrdersByUserIdQueryVariables,
  APITypes.OrdersByUserIdQuery
>;
export const orderProductsByOrderId = /* GraphQL */ `query OrderProductsByOrderId(
  $orderId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelOrderProductsFilterInput
  $limit: Int
  $nextToken: String
) {
  orderProductsByOrderId(
    orderId: $orderId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      orderId
      productId
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.OrderProductsByOrderIdQueryVariables,
  APITypes.OrderProductsByOrderIdQuery
>;
export const orderProductsByProductId = /* GraphQL */ `query OrderProductsByProductId(
  $productId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelOrderProductsFilterInput
  $limit: Int
  $nextToken: String
) {
  orderProductsByProductId(
    productId: $productId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      orderId
      productId
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.OrderProductsByProductIdQueryVariables,
  APITypes.OrderProductsByProductIdQuery
>;
