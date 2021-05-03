const {  gql } = require('apollo-server');

// Schema
const typeDefs = gql`

    type User {
        id: ID
        full_name: String
        email: String
        created_at: String
    }
    
    type Token {
        token: String
    }

    input UserInput {
        full_name: String!
        email: String!
        password: String!
    }

    input AuthInput{
        email: String!
        password: String!
    }


    type Query {
        #Users
        getUser: User
    }

    type Mutation {
        # Users
        newUser(input: UserInput) : User
        authUser(input: AuthInput) : Token
    }
`;

module.exports = typeDefs;