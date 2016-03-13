import
  { GraphQLSchema
  , GraphQLObjectType
  , GraphQLInt
  , GraphQLString
  , GraphQLList
  , GraphQLNonNull
  , GraphQLID
  , GraphQLBoolean
  , GraphQLFloat
  } from 'graphql';

const weatherForecastType = new GraphQLObjectType({
  name: "WeatherForecast",
  description: "Fields and iterable objects with weather data",
  fields: () => ({
    cod: { type: GraphQLString },
    message: { type: GraphQLInt },
    cnt: { type: GraphQLInt },
    city: { type: cityType },
    list: {type: new GraphQLList(listType)},
    temp_f_avg: {
      type: GraphQLFloat,
      resolve: (obj) => {
        const avgTemp = (obj.list.map(weather => weather.main.temp)
                                 .reduce((a, b) => a + b, 0)) / obj.list.length;
        return _to_farenheit(avgTemp);
      }
    },
    temp_c_avg: {
      type: GraphQLFloat,
      resolve: (obj) => {
        const avgTemp = (obj.list.map(weather => weather.main.temp)
                                 .reduce((a, b) => a + b, 0)) / obj.list.length;
        return _to_celsius(avgTemp);
      }
    },
    pressure_avg: {
      type: GraphQLFloat,
      resolve: (obj) => {
        const avgPressure = (obj.list.map(weather => weather.main.pressure)
                                     .reduce((a, b) => a + b, 0)) / obj.list.length;
        return avgPressure.toFixed(2);
      }
    },
    humidity_avg: {
      type: GraphQLFloat,
      resolve: (obj) => {
        const avghumidity = (obj.list.map(weather => weather.main.humidity)
                                     .reduce((a, b) => a + b, 0)) / obj.list.length;
        return avghumidity.toFixed(2);
      }
    },
    pressure_data: {
      type: new GraphQLList(GraphQLFloat),
      resolve: (obj) => {
        return obj.list.map(weather => weather.main.pressure);
      }
    },
    humidity_data: {
      type: new GraphQLList(GraphQLFloat),
      resolve: (obj) => {
        return obj.list.map(weather => weather.main.humidity);
      }
    },
    temp_f_data: {
      type: new GraphQLList(GraphQLFloat),
      resolve: (obj) => {
        return obj.list.map(weather => _to_farenheit(weather.main.temp));
      }
    },
  })
});

const _to_farenheit = (temp) => {
  return ((temp * 9/5) - 459.67).toFixed(2);
};

const _to_celsius = (temp) => {
  return (temp - 273.15).toFixed(2);
};

const cityType = new GraphQLObjectType({
  name: "City",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    country: { type: GraphQLString },
    population: { type: GraphQLInt },
    coord: {type: coordType },
  })
});

const coordType = new GraphQLObjectType({
  name: "Coordinates",
  fields: () => ({
    lon: { type: GraphQLFloat },
    lat: { type: GraphQLFloat},
  }),
});

const listType = new GraphQLObjectType({
  name: "List",
  description: "list of 5 day weather information",
  fields: () => ({
    dt: { type: GraphQLInt },
    dt_txt: { type: GraphQLString },
    lat: { type: GraphQLFloat},
    main: { type: mainType },
    weather: { type: new GraphQLList(weatherListType) },
    wind: { type: windType },
    clouds: { type: cloudsType }
  }),
});

const mainType = new GraphQLObjectType({
  name: "Main",
  description:"Main Weather Information",
  fields: () => ({
    temp: { type: GraphQLFloat },
    temp_min: { type: GraphQLFloat },
    temp_max: { type: GraphQLFloat },
    pressure: { type: GraphQLFloat },
    sea_level: { type: GraphQLFloat },
    grnd_level: { type: GraphQLFloat },
    humidity: { type: GraphQLInt },
    temp_kf: { type: GraphQLFloat},
    temp_f: {
      type: GraphQLFloat,
      resolve: (obj) => {
        return _to_farenheit(obj.temp);
      }
    },
    temp_c: {
      type: GraphQLFloat,
      resolve: (obj) => {
        return _to_celsius(obj.temp);
      }
    },
  }),
});

const weatherListType = new GraphQLObjectType({
  name: "WeatherList",
  description: "Weather information for that day",
  fields: () => ({
    id: { type: GraphQLID },
    main: { type: GraphQLString},
    description: { type: GraphQLString},
    icon: { type: GraphQLString},
  }),
});

const windType = new GraphQLObjectType({
  name: "Wind",
  fields: () => ({
    speed: { type: GraphQLFloat },
    deg: { type: GraphQLFloat },
  }),
});

const cloudsType = new GraphQLObjectType({
  name: "Clouds",
  fields: () => ({
    all: { type: GraphQLInt },
  }),
});

export default weatherForecastType;
