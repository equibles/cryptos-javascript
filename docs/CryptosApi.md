# EquiblesCryptos.CryptosApi

All URIs are relative to *https://api.equibles.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list**](CryptosApi.md#list) | **GET** /cryptos/list | Get a list of all the available crytocurrencies.
[**profile**](CryptosApi.md#profile) | **GET** /cryptos/profile | The profile of this cryptocurrency.

<a name="list"></a>
# **list**
> CryptoCurrencyProfilesResponse list(opts)

Get a list of all the available crytocurrencies.

### Example
```javascript
import {EquiblesCryptos} from 'equibles_cryptos';
let defaultClient = EquiblesCryptos.ApiClient.instance;

// Configure API key authorization: Query String
let Query String = defaultClient.authentications['Query String'];
Query String.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Query String.apiKeyPrefix = 'Token';

let apiInstance = new EquiblesCryptos.CryptosApi();
let opts = { 
  'page': 1, // Number | The number of the page to request.
  'pageSize': 100 // Number | The number of elements in each page. Max value: 100.
};
apiInstance.list(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| The number of the page to request. | [optional] [default to 1]
 **pageSize** | **Number**| The number of elements in each page. Max value: 100. | [optional] [default to 100]

### Return type

[**CryptoCurrencyProfilesResponse**](CryptoCurrencyProfilesResponse.md)

### Authorization

[Query String](../README.md#Query String)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="profile"></a>
# **profile**
> CryptoCurrencyProfileResponse profile(ticker)

The profile of this cryptocurrency.

### Example
```javascript
import {EquiblesCryptos} from 'equibles_cryptos';
let defaultClient = EquiblesCryptos.ApiClient.instance;

// Configure API key authorization: Query String
let Query String = defaultClient.authentications['Query String'];
Query String.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Query String.apiKeyPrefix = 'Token';

let apiInstance = new EquiblesCryptos.CryptosApi();
let ticker = "ticker_example"; // String | The cryptocurrency ticker. Example: BTC (for Bitcoin)

apiInstance.profile(ticker).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticker** | **String**| The cryptocurrency ticker. Example: BTC (for Bitcoin) | 

### Return type

[**CryptoCurrencyProfileResponse**](CryptoCurrencyProfileResponse.md)

### Authorization

[Query String](../README.md#Query String)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

