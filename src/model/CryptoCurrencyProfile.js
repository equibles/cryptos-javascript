/*
 * Cryptos
 * <h3>Authentication</h3>                     You need to authenticate to use this API.                     To authenticate click on the \"Authorize\" button and do one of the following steps.<br />                     1. Send your API key in the headers of the request by typing \"Bearer my-key\" on the Bearer authorization scheme.<br />                     2. Send your API key on the \"ApiKey\" query string parameter. To do this type your API key in the Query String authorization scheme.<br />                     Both methods are equally valid. We offer both options so that you can use the method that is easier to use in your application.<br />                     <br />                     <h3>API limits</h3>                     Your API key may be subject to daily/hourly limits. To know how much requests you have left look at the following headers in the response.<br />                     1. <strong>x-ratelimit-limit</strong> - The total number of requests that you are allowed to make in a given period (hour/day)                       2. <strong>x-ratelimit-remaining</strong> - The number of remaining requests that you can perform in the current period.<br />                     3. <strong>x-ratelimit-reset</strong> - The number of seconds until the current period resets.<br />                     <br />                     <h3>Suggestions</h3>                     You don't need to implement the whole API by hand in your programming language of choice.<br />                     Since this API has an OpenAPI specification you can use                      <a href=\"https://github.com/swagger-api/swagger-codegen\" target=\"_blank\">Swagger Generator</a>                      to automatically generate client stubs for more than 30 programming languages.                     <br />                     <br />                     You don't have an API key? <a href=\"https://api.equibles.com/pricing\" target=\"_blank\">Get one for free here.</a>
 *
 * OpenAPI spec version: v1
 * Contact: equibles@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.32
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {AssetType} from './AssetType';
import {Exchange} from './Exchange';
import {Image} from './Image';
import {Price} from './Price';

/**
 * The CryptoCurrencyProfile model module.
 * @module model/CryptoCurrencyProfile
 * @version v1
 */
export class CryptoCurrencyProfile {
  /**
   * Constructs a new <code>CryptoCurrencyProfile</code>.
   * @alias module:model/CryptoCurrencyProfile
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CryptoCurrencyProfile</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CryptoCurrencyProfile} obj Optional instance to populate.
   * @return {module:model/CryptoCurrencyProfile} The populated <code>CryptoCurrencyProfile</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CryptoCurrencyProfile();
      if (data.hasOwnProperty('logo'))
        obj.logo = Image.constructFromObject(data['logo']);
      if (data.hasOwnProperty('marketCap'))
        obj.marketCap = ApiClient.convertToType(data['marketCap'], 'Number');
      if (data.hasOwnProperty('circulatingSupply'))
        obj.circulatingSupply = ApiClient.convertToType(data['circulatingSupply'], 'Number');
      if (data.hasOwnProperty('maxSupply'))
        obj.maxSupply = ApiClient.convertToType(data['maxSupply'], 'Number');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('website'))
        obj.website = ApiClient.convertToType(data['website'], 'String');
      if (data.hasOwnProperty('ticker'))
        obj.ticker = ApiClient.convertToType(data['ticker'], 'String');
      if (data.hasOwnProperty('fullTicker'))
        obj.fullTicker = ApiClient.convertToType(data['fullTicker'], 'String');
      if (data.hasOwnProperty('assetType'))
        obj.assetType = AssetType.constructFromObject(data['assetType']);
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('exchange'))
        obj.exchange = Exchange.constructFromObject(data['exchange']);
      if (data.hasOwnProperty('lastPrice'))
        obj.lastPrice = Price.constructFromObject(data['lastPrice']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Image} logo
 */
CryptoCurrencyProfile.prototype.logo = undefined;

/**
 * @member {Number} marketCap
 */
CryptoCurrencyProfile.prototype.marketCap = undefined;

/**
 * @member {Number} circulatingSupply
 */
CryptoCurrencyProfile.prototype.circulatingSupply = undefined;

/**
 * @member {Number} maxSupply
 */
CryptoCurrencyProfile.prototype.maxSupply = undefined;

/**
 * @member {String} description
 */
CryptoCurrencyProfile.prototype.description = undefined;

/**
 * @member {String} website
 */
CryptoCurrencyProfile.prototype.website = undefined;

/**
 * @member {String} ticker
 */
CryptoCurrencyProfile.prototype.ticker = undefined;

/**
 * @member {String} fullTicker
 */
CryptoCurrencyProfile.prototype.fullTicker = undefined;

/**
 * @member {module:model/AssetType} assetType
 */
CryptoCurrencyProfile.prototype.assetType = undefined;

/**
 * @member {String} name
 */
CryptoCurrencyProfile.prototype.name = undefined;

/**
 * @member {module:model/Exchange} exchange
 */
CryptoCurrencyProfile.prototype.exchange = undefined;

/**
 * @member {module:model/Price} lastPrice
 */
CryptoCurrencyProfile.prototype.lastPrice = undefined;

