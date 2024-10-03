import { ApolloServer } from '@apollo/server';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
import { makeExecutableSchema } from '@graphql-tools/schema';
import teacherResolver from './resolvers/teacherResolver';
import subjectResolver from './resolvers/subjectResolver';
import gradeResolver from './resolvers/gradeResolver';
import pupilResolver from './resolvers/pupilResolver';
import express from 'express'
import { expressMiddleware } from '@apollo/server/express4'
import path from 'path';
import cors from 'cors';
import { context } from '../middleware/auth.middleware'
import userResolver from './resolvers/userResolver'

// Load all .graphql schema files
const typesArray = loadFilesSync(path.join(__dirname, './schemas'))

// Merge all type definitions
const typeDefs = mergeTypeDefs(typesArray);

// Combine all resolvers
const resolvers = {
    Query: {
        ...teacherResolver.Query,
        ...subjectResolver.Query,
        ...gradeResolver.Query,
        ...pupilResolver.Query,
        ...userResolver.Query,
    },
    Mutation: {
        ...teacherResolver.Mutation,
        ...subjectResolver.Mutation,
        ...gradeResolver.Mutation,
        ...pupilResolver.Mutation,
        ...userResolver.Mutation,
    },
    Teacher: teacherResolver.Teacher,
    Subject: subjectResolver.Subject,
    Grade: gradeResolver.Grade,
};

// Create the executable schema
const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

const startServer = async () => {
    const app = express();
    const server = new ApolloServer({ schema });
    await server.start();

    app.use(
        '/graphql',
        cors<cors.CorsRequest>(),
        express.json(),
        expressMiddleware(server, { context })
    );

    app.listen(4000, () => {
        console.log('Server running on http://localhost:4000/graphql');
    });
};

export default startServer;