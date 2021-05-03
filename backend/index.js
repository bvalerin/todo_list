const { ApolloServer  } = require('apollo-server');
const typeDefs = require('./db/schema');
const resolvers = require('./db/resolvers');
const DBConnect = require('./config/db');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: 'variables.env' });

// Connect database
DBConnect();

// Server
const server = new ApolloServer({
    typeDefs,
    resolvers, 
    context: ({req}) => {
        // console.log(req.headers['authorization'])

        // console.log(req.headers);

        const token = req.headers['authorization'] || '';

        if(token) {
            try {
                const user = jwt.verify(token.replace('Bearer ', ''), process.env.SECRETA );
                // console.log(usuario);
                return {
                    user
                }
            } catch (error) {
                console.log('Error in your request!');
                console.log(error);
            }
        }
    }
});

// Run the server
server.listen({ port: process.env.PORT || 4000 }).then( ({url}) => {
    console.log(`Server running in ${url}`)
} )