import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
  GraphQLBoolean,
  GraphQLFloat
} from 'graphql';

import fetch from 'isomorphic-fetch';
import KEYS from "../KEYS/index";

let schema = new GraphQLSchema({
  query
});

export default schema;
