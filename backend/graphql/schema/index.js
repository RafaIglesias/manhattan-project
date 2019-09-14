const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Post {
        _id: ID!,
        title: String!,
        description: String!,
        body: String!,
        imgUrl: String!
        creator: User!
    }

    type User {
        _id: ID!,
        username: String!,
        email: String!,
        password: String,
        createdPosts: [Post!]
    }

    type AuthData {
        userId: ID!
        token: String!
        username: String!,
        tokenExpiration: Int!
    }

    input PostInput {
        title: String!
        description: String!
        body: String!
        imgUrl: String!
    }

    input UserInput {
        username: String!,
        email: String!,
        password: String!,
    }

    type RootQuery {
        posts: [Post!]!
        login(email: String!, password: String!): AuthData
    }

    type RootMutation {
        createPost(postInput: PostInput): Post
        createUser(userInput: UserInput): User
    }

    schema{
        query: RootQuery
        mutation: RootMutation
    }  
`);
