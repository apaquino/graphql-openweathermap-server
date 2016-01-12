# GraphQL Server for Open Weather Map API w/ sample React/Redux app.

### Update.  Added Youtube search API to the GraphQL server.  No app though, in progress.
#### Update 2, used Immutable.js
##### The logger and state is harder to read with Immutable but easier to maintain persistent data. IMHO

This is a GraphQL server for the OpenWeatherMap API for the 5 Day / 3 hour forecast.

I did this to get more familiar with GraphQL.  

The app accessing the GraphQL server is created with no surprise - React with Redux.

To use this, I expect you to have babel installed globally because the npm start command doesn't look for it locally.

```
npm install -g babel
```

Install all the other dependencies.

```
npm install
```

## IMPORTANT

You need to provide your own OpenWeatherMAP API key to have this work.

* Update.  You all need to get a key for the youtube API v3 to have the youtube search working.

create a "KEYS" directory at the root level and an index.js file.

Here is a sample file in the /KEYS directory:

```
const API_KEYS = {
  youtube: "YOUR YOUTUBE KEY HERE",
  weather: "YOUR OPEN WEATHERMAP KEY HERE"
};

export default API_KEYS;
```

To start the server, run this command:

```
npm start
```

To use GraphiQL, open your browser and go to http://localhost:8888/graphql

Review the Docs in the upper right hand corner to view more about the fields available.

Below is a query to get query all the available fields in the current setup.  The "city" parameter is required and you can change it to whatever city you want.  NOTE: for this setup, the default country it searches for is the USA.

```
query {
  weatherForecast(city:"Seattle") {
    city {
      id,
      population,
      name,
      country,
      coord{
        lon,
        lat
      }
    },
    cnt,
    message,
    list{
      dt,
      dt_txt
      main{
        temp,
        temp_min,
        temp_max,
        pressure,
        sea_level,
        grnd_level,
        humidity,
        temp_kf,
        temp_f,
        temp_c
      },
      weather{
        id,
        main,
        description,
        icon
      },
      wind{
        speed,
        deg
      },
      clouds{
        all
      }
    }

  }
}

# the temp_c and temp_f are created in addition to what the API provides
# now the developer doesn't need to calculate that if they need it ... they just ask for it.
```

In the sample app included in this repo, it does not need most of those fields.  Normally, the app still needs to download all that information to the client.  That is not even all the possible fields that come with the API.  You can also alias to match the prop names so you can use ES6/2015 object notation shortcuts.

Here is what the sample app gets.  It is much less than the what the API gives you using traditional REST calls.

```
query:
{
  weatherForecast(city:"${term}") {
    city {
      id,
      name,
      coord{
        lat,
        lng: lon
      }
    },
    list {
      main {
        temp_f,
        pressure,
        humidity
      }
    }
  }
}
```

Here is a sample of all the available fields for the youtube search API.

```
query {
  youtube(term:"surfboards") {
    kind,
		etag,
    id {
      videoId,
      kind
    },
    snippet {
      title
      channelId,
      channelTitle,
      description,
      liveBroadcastContent,
      publishedAt
      thumbnails {
      	default {
        	url
      	},
      	medium {
        	url
      	},
      	high {
        	url
      	}
    }
    }

  }
}
# the sample app I plan will not require half of those fields, maybe just 4-5 of them!
```

I plan to add other query fields in the future and split up the code as it gets bigger.

Also, I will add descriptions to the fields and types so graphiql can automatically document it.

Before you view the app, run the following command

```
npm run devbuild
```

To use view the weather app, open your browser and go to http://localhost:8888

Working on other features/technologies on different branches.  
