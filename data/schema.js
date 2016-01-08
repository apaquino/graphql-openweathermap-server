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

import weatherForecastType from './weatherForecastType';
import youtubeType from './youtubeType';
import axios from 'axios';
import YTSearch from 'youtube-api-search';
import API_KEYS from "../KEYS/index";

// helper for YTSearch so it will be a promise based.
function YTSearchPromisified(term) {
  return new Promise(
    function(resolve, reject) {
      YTSearch({key: API_KEYS.youtube, term}, (response) => {
        resolve(response);
      });
    }
  );
}

const query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    weatherForecast: {
      type: weatherForecastType,
      args: {
        city: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve: (_, {city}) => {
        const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city},us&appid=${API_KEYS.weather}`;
        return axios.get(url)
                .then(function(response) {
                  return response.data;
               });
      }
    },
    youtube: {
      type: new GraphQLList(youtubeType),
      args: {
        term: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve: (_,{term}) => {
        return YTSearchPromisified(term)
                 .then(data => data);
      },
    }
  }),
});

const schema = new GraphQLSchema({
  query,
});

export default schema;
