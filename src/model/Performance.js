/*
 * Stocks
 * <h3>Authentication</h3>                     You need to authenticate to use this API.                     To authenticate click on the \"Authorize\" button and do one of the following steps.<br />                     1. Send your API key in the headers of the request by typing \"Bearer my-key\" on the Bearer authorization scheme.<br />                     2. Send your API key on the \"ApiKey\" query string parameter. To do this type your API key in the Query String authorization scheme.<br />                     Both methods are equally valid. We offer both options so that you can use the method that is easier to use in your application.<br />                     <br />                     <h3>API limits</h3>                     Your API key may be subject to daily/hourly limits. To know how much requests you have left look at the following headers in the response.<br />                     1. <strong>x-ratelimit-limit</strong> - The total number of requests that you are allowed to make in a given period (hour/day)                       2. <strong>x-ratelimit-remaining</strong> - The number of remaining requests that you can perform in the current period.<br />                     3. <strong>x-ratelimit-reset</strong> - The number of seconds until the current period resets.<br />                     <br />                     <h3>Suggestions</h3>                     You don't need to implement the whole API by hand in your programming language of choice.<br />                     Since this API has an OpenAPI specification you can use                      <a href=\"https://github.com/swagger-api/swagger-codegen\" target=\"_blank\">Swagger Generator</a>                      to automatically generate client stubs for more than 30 programming languages.                     <br />                     <br />                     You don't have an API key? <a href=\"https://www.equibles.com/api/pricing\" target=\"_blank\">Get one for free here.</a>
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

/**
 * The Performance model module.
 * @module model/Performance
 * @version v1
 */
export class Performance {
  /**
   * Constructs a new <code>Performance</code>.
   * @alias module:model/Performance
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Performance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Performance} obj Optional instance to populate.
   * @return {module:model/Performance} The populated <code>Performance</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Performance();
      if (data.hasOwnProperty('oneDay'))
        obj.oneDay = ApiClient.convertToType(data['oneDay'], 'Number');
      if (data.hasOwnProperty('oneWeek'))
        obj.oneWeek = ApiClient.convertToType(data['oneWeek'], 'Number');
      if (data.hasOwnProperty('twoWeeks'))
        obj.twoWeeks = ApiClient.convertToType(data['twoWeeks'], 'Number');
      if (data.hasOwnProperty('oneMonth'))
        obj.oneMonth = ApiClient.convertToType(data['oneMonth'], 'Number');
      if (data.hasOwnProperty('threeMonths'))
        obj.threeMonths = ApiClient.convertToType(data['threeMonths'], 'Number');
      if (data.hasOwnProperty('sixMonths'))
        obj.sixMonths = ApiClient.convertToType(data['sixMonths'], 'Number');
      if (data.hasOwnProperty('yearToDate'))
        obj.yearToDate = ApiClient.convertToType(data['yearToDate'], 'Number');
      if (data.hasOwnProperty('oneYear'))
        obj.oneYear = ApiClient.convertToType(data['oneYear'], 'Number');
      if (data.hasOwnProperty('twoYears'))
        obj.twoYears = ApiClient.convertToType(data['twoYears'], 'Number');
      if (data.hasOwnProperty('twoYearsAnnualized'))
        obj.twoYearsAnnualized = ApiClient.convertToType(data['twoYearsAnnualized'], 'Number');
      if (data.hasOwnProperty('threeYears'))
        obj.threeYears = ApiClient.convertToType(data['threeYears'], 'Number');
      if (data.hasOwnProperty('threeYearsAnnualized'))
        obj.threeYearsAnnualized = ApiClient.convertToType(data['threeYearsAnnualized'], 'Number');
      if (data.hasOwnProperty('fiveYears'))
        obj.fiveYears = ApiClient.convertToType(data['fiveYears'], 'Number');
      if (data.hasOwnProperty('fiveYearsAnnualized'))
        obj.fiveYearsAnnualized = ApiClient.convertToType(data['fiveYearsAnnualized'], 'Number');
      if (data.hasOwnProperty('tenYears'))
        obj.tenYears = ApiClient.convertToType(data['tenYears'], 'Number');
      if (data.hasOwnProperty('tenYearsAnnualized'))
        obj.tenYearsAnnualized = ApiClient.convertToType(data['tenYearsAnnualized'], 'Number');
      if (data.hasOwnProperty('twentyYears'))
        obj.twentyYears = ApiClient.convertToType(data['twentyYears'], 'Number');
      if (data.hasOwnProperty('twentyYearsAnnualized'))
        obj.twentyYearsAnnualized = ApiClient.convertToType(data['twentyYearsAnnualized'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} oneDay
 */
Performance.prototype.oneDay = undefined;

/**
 * @member {Number} oneWeek
 */
Performance.prototype.oneWeek = undefined;

/**
 * @member {Number} twoWeeks
 */
Performance.prototype.twoWeeks = undefined;

/**
 * @member {Number} oneMonth
 */
Performance.prototype.oneMonth = undefined;

/**
 * @member {Number} threeMonths
 */
Performance.prototype.threeMonths = undefined;

/**
 * @member {Number} sixMonths
 */
Performance.prototype.sixMonths = undefined;

/**
 * @member {Number} yearToDate
 */
Performance.prototype.yearToDate = undefined;

/**
 * @member {Number} oneYear
 */
Performance.prototype.oneYear = undefined;

/**
 * @member {Number} twoYears
 */
Performance.prototype.twoYears = undefined;

/**
 * @member {Number} twoYearsAnnualized
 */
Performance.prototype.twoYearsAnnualized = undefined;

/**
 * @member {Number} threeYears
 */
Performance.prototype.threeYears = undefined;

/**
 * @member {Number} threeYearsAnnualized
 */
Performance.prototype.threeYearsAnnualized = undefined;

/**
 * @member {Number} fiveYears
 */
Performance.prototype.fiveYears = undefined;

/**
 * @member {Number} fiveYearsAnnualized
 */
Performance.prototype.fiveYearsAnnualized = undefined;

/**
 * @member {Number} tenYears
 */
Performance.prototype.tenYears = undefined;

/**
 * @member {Number} tenYearsAnnualized
 */
Performance.prototype.tenYearsAnnualized = undefined;

/**
 * @member {Number} twentyYears
 */
Performance.prototype.twentyYears = undefined;

/**
 * @member {Number} twentyYearsAnnualized
 */
Performance.prototype.twentyYearsAnnualized = undefined;

