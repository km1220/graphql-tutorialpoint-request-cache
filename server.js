const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();
const fs = require('fs')



const port = process.env.PORT || 9000;

const db = require('./db');
const typeDefs = fs.readFileSync(('./schema.graphql'), { encoding: 'utf-8' })
const resolvers = require('./resolvers')

const { makeExecutableSchema } = require('graphql-tools')
const schema = makeExecutableSchema({ typeDefs, resolvers })



const { graphiqlExpress, graphqlExpress } = require('apollo-server-express')
app.use(cors(), bodyParser.json());




app.use('/graphql', graphqlExpress(req => ({
	schema,
	context: { user: req.user && db.students.get(req.user.subxxxxx) }  //  [this must be matched with above jwt.sign({ sub: ... })]
})))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))




app.listen(port, () =>
	console.info(`Server started on port ${port}`
	));