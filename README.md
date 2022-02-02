# Equibles Cryptos API for Python

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

var api = new EquiblesCryptos.ExchangesApi()
api.currencies().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

## Documentation for API Endpoints

All URIs are relative to *https://api.equibles.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*EquiblesCryptos.ExchangesApi* | [**currencies**](docs/ExchangesApi.md#currencies) | **GET** /stocks/exchanges/currencies | Get the list of all the currencies supported by this API.
*EquiblesCryptos.ExchangesApi* | [**list**](docs/ExchangesApi.md#list) | **GET** /stocks/exchanges/list | Get the list of all the exchanges supported by this API.
*EquiblesCryptos.ExchangesApi* | [**stocks**](docs/ExchangesApi.md#stocks) | **GET** /stocks/exchanges/stocks | Get all the stocks for a given exchange.
*EquiblesCryptos.FundamentalsApi* | [**dividends**](docs/FundamentalsApi.md#dividends) | **GET** /stocks/fundamentals/dividends | Get the dividends for a given stock.
*EquiblesCryptos.FundamentalsApi* | [**financialReports**](docs/FundamentalsApi.md#financialReports) | **GET** /stocks/fundamentals/financialreports | Get the financial statements for a given stock.
*EquiblesCryptos.MetricsApi* | [**priceToEarnings**](docs/MetricsApi.md#priceToEarnings) | **GET** /stocks/metrics/pricetoearnings | Get the price to earnings ratio over time for this stock.
*EquiblesCryptos.NewsApi* | [**list**](docs/NewsApi.md#list) | **GET** /stocks/news/list | Get the latest news for this stock.
*EquiblesCryptos.NewsApi* | [**publishers**](docs/NewsApi.md#publishers) | **GET** /stocks/news/publishers | Get all the available news publishers.
*EquiblesCryptos.PerformanceApi* | [**list**](docs/PerformanceApi.md#list) | **GET** /stocks/performance/list | Lists the performance for a given stock.
*EquiblesCryptos.PricesApi* | [**endOfDay**](docs/PricesApi.md#endOfDay) | **GET** /stocks/prices/endofday | Lists the end of day prices for a given stock.
*EquiblesCryptos.PricesApi* | [**intraday**](docs/PricesApi.md#intraday) | **GET** /stocks/prices/intraday | Lists the intraday prices for a given stock with one minute precision.
*EquiblesCryptos.SectorsApi* | [**list**](docs/SectorsApi.md#list) | **GET** /stocks/sectors/list | Lists all the sectors.
*EquiblesCryptos.SectorsApi* | [**searchStocks**](docs/SectorsApi.md#searchStocks) | **GET** /stocks/sectors/searchstocks | Lists and the stock in a given sector/industry.
*EquiblesCryptos.StocksApi* | [**list**](docs/StocksApi.md#list) | **GET** /stocks/list | Get a list of all the available stocks.
*EquiblesCryptos.StocksApi* | [**officers**](docs/StocksApi.md#officers) | **GET** /stocks/officers | Get the officers of the company.
*EquiblesCryptos.StocksApi* | [**profile**](docs/StocksApi.md#profile) | **GET** /stocks/profile | The profile of this stock.
*EquiblesCryptos.StocksApi* | [**screener**](docs/StocksApi.md#screener) | **POST** /stocks/screener | Get a list of stocks constraint to several criteria.
*EquiblesCryptos.StocksApi* | [**search**](docs/StocksApi.md#search) | **GET** /stocks/search | Search among all the available stocks.
*EquiblesCryptos.StocksApi* | [**splits**](docs/StocksApi.md#splits) | **GET** /stocks/splits | Get all the splits for a given stock.
*EquiblesCryptos.TransactionsApi* | [**insiders**](docs/TransactionsApi.md#insiders) | **GET** /stocks/transactions/insiders | Lists the insider transactions for a given stock.
*EquiblesCryptos.TransactionsApi* | [**institutional**](docs/TransactionsApi.md#institutional) | **GET** /stocks/transactions/institutional | Lists the institutional transactions for a given stock.

## Documentation for Models

 - [EquiblesCryptos.AssetType](docs/AssetType.md)
 - [EquiblesCryptos.BalanceSheet](docs/BalanceSheet.md)
 - [EquiblesCryptos.CashFlowStatement](docs/CashFlowStatement.md)
 - [EquiblesCryptos.CurrenciesResponse](docs/CurrenciesResponse.md)
 - [EquiblesCryptos.Currency](docs/Currency.md)
 - [EquiblesCryptos.Dividend](docs/Dividend.md)
 - [EquiblesCryptos.DividendsResponse](docs/DividendsResponse.md)
 - [EquiblesCryptos.Exchange](docs/Exchange.md)
 - [EquiblesCryptos.ExchangesResponse](docs/ExchangesResponse.md)
 - [EquiblesCryptos.FinancialAssetsResponse](docs/FinancialAssetsResponse.md)
 - [EquiblesCryptos.FinancialReport](docs/FinancialReport.md)
 - [EquiblesCryptos.FiscalPeriod](docs/FiscalPeriod.md)
 - [EquiblesCryptos.FundamentalsResponse](docs/FundamentalsResponse.md)
 - [EquiblesCryptos.Image](docs/Image.md)
 - [EquiblesCryptos.IncomeStatement](docs/IncomeStatement.md)
 - [EquiblesCryptos.Industry](docs/Industry.md)
 - [EquiblesCryptos.MetricNullablePointsResponse](docs/MetricNullablePointsResponse.md)
 - [EquiblesCryptos.News](docs/News.md)
 - [EquiblesCryptos.NewsResponse](docs/NewsResponse.md)
 - [EquiblesCryptos.NullablePoint](docs/NullablePoint.md)
 - [EquiblesCryptos.Officer](docs/Officer.md)
 - [EquiblesCryptos.OfficersResponse](docs/OfficersResponse.md)
 - [EquiblesCryptos.Performance](docs/Performance.md)
 - [EquiblesCryptos.PerformanceResponse](docs/PerformanceResponse.md)
 - [EquiblesCryptos.Price](docs/Price.md)
 - [EquiblesCryptos.PricesResponse](docs/PricesResponse.md)
 - [EquiblesCryptos.Publisher](docs/Publisher.md)
 - [EquiblesCryptos.PublishersResponse](docs/PublishersResponse.md)
 - [EquiblesCryptos.Recommendation](docs/Recommendation.md)
 - [EquiblesCryptos.ResponseStatus](docs/ResponseStatus.md)
 - [EquiblesCryptos.ScreenerRequest](docs/ScreenerRequest.md)
 - [EquiblesCryptos.Sector](docs/Sector.md)
 - [EquiblesCryptos.SectorsResponse](docs/SectorsResponse.md)
 - [EquiblesCryptos.SplitsResponse](docs/SplitsResponse.md)
 - [EquiblesCryptos.StockProfile](docs/StockProfile.md)
 - [EquiblesCryptos.StockProfileResponse](docs/StockProfileResponse.md)
 - [EquiblesCryptos.StockProfilesResponse](docs/StockProfilesResponse.md)
 - [EquiblesCryptos.StockSplit](docs/StockSplit.md)
 - [EquiblesCryptos.Transaction](docs/Transaction.md)
 - [EquiblesCryptos.TransactionType](docs/TransactionType.md)
 - [EquiblesCryptos.TransactionsResponse](docs/TransactionsResponse.md)

## Documentation for Authorization


### Query String

- **Type**: API key
- **API key parameter name**: ApiKey
- **Location**: URL query string

## Author
[Equibles](https://www.equibles.com)\
equibles@gmail.com

