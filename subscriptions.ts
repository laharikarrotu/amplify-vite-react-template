/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./amplify/backend/API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onCreateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onUpdateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onDeleteUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateOrder = /* GraphQL */ `subscription OnCreateOrder(
  $filter: ModelSubscriptionOrderFilterInput
  $owner: String
) {
  onCreateOrder(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateOrderSubscriptionVariables,
  APITypes.OnCreateOrderSubscription
>;
export const onUpdateOrder = /* GraphQL */ `subscription OnUpdateOrder(
  $filter: ModelSubscriptionOrderFilterInput
  $owner: String
) {
  onUpdateOrder(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateOrderSubscriptionVariables,
  APITypes.OnUpdateOrderSubscription
>;
export const onDeleteOrder = /* GraphQL */ `subscription OnDeleteOrder(
  $filter: ModelSubscriptionOrderFilterInput
  $owner: String
) {
  onDeleteOrder(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteOrderSubscriptionVariables,
  APITypes.OnDeleteOrderSubscription
>;
export const onCreateProduct = /* GraphQL */ `subscription OnCreateProduct(
  $filter: ModelSubscriptionProductFilterInput
  $owner: String
) {
  onCreateProduct(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProductSubscriptionVariables,
  APITypes.OnCreateProductSubscription
>;
export const onUpdateProduct = /* GraphQL */ `subscription OnUpdateProduct(
  $filter: ModelSubscriptionProductFilterInput
  $owner: String
) {
  onUpdateProduct(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProductSubscriptionVariables,
  APITypes.OnUpdateProductSubscription
>;
export const onDeleteProduct = /* GraphQL */ `subscription OnDeleteProduct(
  $filter: ModelSubscriptionProductFilterInput
  $owner: String
) {
  onDeleteProduct(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProductSubscriptionVariables,
  APITypes.OnDeleteProductSubscription
>;
export const onCreateOrderProducts = /* GraphQL */ `subscription OnCreateOrderProducts(
  $filter: ModelSubscriptionOrderProductsFilterInput
  $owner: String
) {
  onCreateOrderProducts(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateOrderProductsSubscriptionVariables,
  APITypes.OnCreateOrderProductsSubscription
>;
export const onUpdateOrderProducts = /* GraphQL */ `subscription OnUpdateOrderProducts(
  $filter: ModelSubscriptionOrderProductsFilterInput
  $owner: String
) {
  onUpdateOrderProducts(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateOrderProductsSubscriptionVariables,
  APITypes.OnUpdateOrderProductsSubscription
>;
export const onDeleteOrderProducts = /* GraphQL */ `subscription OnDeleteOrderProducts(
  $filter: ModelSubscriptionOrderProductsFilterInput
  $owner: String
) {
  onDeleteOrderProducts(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteOrderProductsSubscriptionVariables,
  APITypes.OnDeleteOrderProductsSubscription
>;
