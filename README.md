# Equibles Cryptos API for Javascript

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install equibles_cryptos --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/equibles/cryptos-javascript
then install it via:

```shell
    npm install equibles/cryptos-javascript --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var EquiblesCryptos = require('equibles_cryptos');
var defaultClient = EquiblesCryptos.ApiClient.instance;

// Configure API key authorization: Query String
var Query String = defaultClient.authentications['Query String'];
Query String.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Query String.apiKeyPrefix['ApiKey'] = "Token"

var api = new EquiblesCryptos.CryptosApi()
var opts = { 
  'page': 1, // {Number} The number of the page to request.
  'pageSize': 100 // {Number} The number of elements in each page. Max value: 100.
};
api.list(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

## Documentation for API Endpoints

All URIs are relative to *https://api.equibles.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*EquiblesCryptos.CryptosApi* | [**list**](docs/CryptosApi.md#list) | **GET** /cryptos/list | Get a list of all the available crytocurrencies.
*EquiblesCryptos.CryptosApi* | [**profile**](docs/CryptosApi.md#profile) | **GET** /cryptos/profile | The profile of this cryptocurrency.
*EquiblesCryptos.PricesApi* | [**endOfDay**](docs/PricesApi.md#endOfDay) | **GET** /cryptos/prices/endofday | Lists the end of day prices for a given cryptocurrency.
*EquiblesCryptos.PricesApi* | [**intraday**](docs/PricesApi.md#intraday) | **GET** /cryptos/prices/intraday | Lists the intraday prices for a given cryptocurrency with one minute precision.

## Documentation for Models

 - [EquiblesCryptos.AssetType](docs/AssetType.md)
 - [EquiblesCryptos.CryptoCurrencyProfile](docs/CryptoCurrencyProfile.md)
 - [EquiblesCryptos.CryptoCurrencyProfileResponse](docs/CryptoCurrencyProfileResponse.md)
 - [EquiblesCryptos.CryptoCurrencyProfilesResponse](docs/CryptoCurrencyProfilesResponse.md)
 - [EquiblesCryptos.Exchange](docs/Exchange.md)
 - [EquiblesCryptos.Image](docs/Image.md)
 - [EquiblesCryptos.Price](docs/Price.md)
 - [EquiblesCryptos.PricesResponse](docs/PricesResponse.md)
 - [EquiblesCryptos.ResponseStatus](docs/ResponseStatus.md)

## Documentation for Authorization


### Query String

- **Type**: API key
- **API key parameter name**: ApiKey
- **Location**: URL query string

## Author
[Equibles](https://www.equibles.com)\
equibles@gmail.com

