const User = require('../models/User');

const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: 'variables.env' });

const createToken = (user, secret, expiresIn) => {
    console.log(user);
    const { id, email, full_name} = user;
    return jwt.sign( { id, email, full_name }, secret, { expiresIn } )
}

// Resolvers
const resolvers = {
    Query: {
        getUser: async (_, {}, ctx) => {
            return ctx.user;
        }, 
    }, 
    Mutation: {
        newUser: async (_, { input } ) => {
            const { email, password } = input;
            
            // Check if user exist
            const userExist = await User.findOne({email});
            if (userExist) {
                throw new Error('User already registered!');
            }

            // Hash password
            const salt = await bcryptjs.genSalt(10);
            input.password = await bcryptjs.hash(password, salt);

            try {
                 // Save User in database
                const user = new User(input);
                user.save(); // Save it
                return user;
            } catch (error) {
                console.log(error);
            }
        }, 
        authUser: async (_, {input}) => {
            const { email, password } = input;

            // Check if user exist
            const userExist = await User.findOne({email});
            if (!userExist) {
                throw new Error('User does not exist!');
            }

            // Check if password is correct
            const correctPassrword = await bcryptjs.compare( password, userExist.password );
            if(!correctPassrword) {
                throw new Error('Incorrect password!');
            }

            // Create token
            return {
                token: createToken(userExist, process.env.SECRET, '8h' ) 
            }
            
        },
    }
}

module.exports = resolvers;