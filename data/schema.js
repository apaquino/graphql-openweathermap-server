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

import YTSearch from 'youtube-api-search';
import fetch from 'isomorphic-fetch';
import axios from 'axios';
import API_KEYS from "../KEYS/index";

const weatherType = new GraphQLObjectType({
  name: "Weather",
  fields: () => ({
    cod: { type: GraphQLString },
    message: { type: GraphQLInt },
    cnt: { type: GraphQLInt },
    city: { type: cityType },
  })
});

const cityType = new GraphQLObjectType({
  name: "City",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    country: { type: GraphQLString },
    population: { type: GraphQLInt },
  })
});

const query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    weather: {
      type: weatherType,
      args: {
        city: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve: (_, {city}) => {
        const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city},us&appid=${API_KEYS.weather}`
        console.log(url);
        return axios.get(url)
                .then(function(response) {
                  console.log(response.data);
                  return response.data;
                });
      }
    }
  })
});

let schema = new GraphQLSchema({
  query
});

export default schema;
