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

const youtubeType = new GraphQLObjectType({
  name: "Youtube",
  description: "Youtube search results",
  fields: () => ({
    kind: { type: GraphQLString },
    etag: { type: GraphQLString },
    id: { type: idType},
    snippet: { type: snippitType },
  })
});

const idType = new GraphQLObjectType({
  name: "id",
  fields: () => ({
    videoId: { type: GraphQLString },
    kind: { type: GraphQLString },
  })
});

const snippitType = new GraphQLObjectType({
  name: "snippit",
  fields: () => ({
    title: {type: GraphQLString },
    channelId: {type: GraphQLString },
    channelTitle: {type: GraphQLString },
    description: {type: GraphQLString },
    liveBroadcastContent: {type: GraphQLString },
    publishedAt: {type: GraphQLString },
    thumbnails: { type: thumbnailsType },
  })
});

const thumbnailsType = new GraphQLObjectType({
  name: "thumbnails",
  fields: () => ({
    default: { type: urlType },
    high: { type: urlType },
    medium: { type: urlType },
  })
});

const urlType = new GraphQLObjectType({
  name: "url",
  fields: () => ({
    url: { type: GraphQLString }
  })
});

export default youtubeType;
