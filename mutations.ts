/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./amplify/backend/API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createOrder = /* GraphQL */ `mutation CreateOrder(
  $input: CreateOrderInput!
  $condition: ModelOrderConditionInput
) {
  createOrder(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateOrderMutationVariables,
  APITypes.CreateOrderMutation
>;
export const updateOrder = /* GraphQL */ `mutation UpdateOrder(
  $input: UpdateOrderInput!
  $condition: ModelOrderConditionInput
) {
  updateOrder(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateOrderMutationVariables,
  APITypes.UpdateOrderMutation
>;
export const deleteOrder = /* GraphQL */ `mutation DeleteOrder(
  $input: DeleteOrderInput!
  $condition: ModelOrderConditionInput
) {
  deleteOrder(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteOrderMutationVariables,
  APITypes.DeleteOrderMutation
>;
export const createProduct = /* GraphQL */ `mutation CreateProduct(
  $input: CreateProductInput!
  $condition: ModelProductConditionInput
) {
  createProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateProductMutationVariables,
  APITypes.CreateProductMutation
>;
export const updateProduct = /* GraphQL */ `mutation UpdateProduct(
  $input: UpdateProductInput!
  $condition: ModelProductConditionInput
) {
  updateProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateProductMutationVariables,
  APITypes.UpdateProductMutation
>;
export const deleteProduct = /* GraphQL */ `mutation DeleteProduct(
  $input: DeleteProductInput!
  $condition: ModelProductConditionInput
) {
  deleteProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteProductMutationVariables,
  APITypes.DeleteProductMutation
>;
export const createOrderProducts = /* GraphQL */ `mutation CreateOrderProducts(
  $input: CreateOrderProductsInput!
  $condition: ModelOrderProductsConditionInput
) {
  createOrderProducts(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateOrderProductsMutationVariables,
  APITypes.CreateOrderProductsMutation
>;
export const updateOrderProducts = /* GraphQL */ `mutation UpdateOrderProducts(
  $input: UpdateOrderProductsInput!
  $condition: ModelOrderProductsConditionInput
) {
  updateOrderProducts(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateOrderProductsMutationVariables,
  APITypes.UpdateOrderProductsMutation
>;
export const deleteOrderProducts = /* GraphQL */ `mutation DeleteOrderProducts(
  $input: DeleteOrderProductsInput!
  $condition: ModelOrderProductsConditionInput
) {
  deleteOrderProducts(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteOrderProductsMutationVariables,
  APITypes.DeleteOrderProductsMutation
>;
