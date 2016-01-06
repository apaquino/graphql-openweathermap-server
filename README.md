# GraphQL Server for Open Weather Map API

This is a GraphQL server for the OpenWeatherMap API for the 5 Day / 3 hour forecast.

I did this to get more familiar with GraphQL.

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

create a directory at the root level and an index.js file.

Here is a sample file in the /KEYS directory:

```
const API_KEYS = {
  weather: "YOUR KEY HERE"
};

export default API_KEYS;
```

To start the server, run this command:


```
npm start
```

Open your browser and go to http://localhost:8888/graphql

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
        temp_kf
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
```

I plan to add other query fields in the future and split up the code as it gets bigger.  
