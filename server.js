import express from 'express';
import path from 'path';
import GraphQLHTTP from 'express-graphql';
import schema from './data/schema';

// for relay
import fs from 'fs';
import { graphql }  from 'graphql';
import { introspectionQuery } from 'graphql/utilities';

const app = express();
const PORT = 8888;

app.use(express.static(path.join(__dirname, 'public')));

app.use("/GraphQL", GraphQLHTTP({
    schema,
    graphiql: true,
  })
);
// for relay
(async () => {
  let schemaJSON = await graphql(schema, introspectionQuery);
  fs.writeFile('./data/schema.json', JSON.stringify(schemaJSON, null, 2), err => {
    if (err) {
      throw err;
    }
    console.log("schema.json was created");
  });

})();

app.listen(PORT, () => {
  console.log("Node/Express server for GraphQL server for weather searches.  listening on port", PORT);
});
