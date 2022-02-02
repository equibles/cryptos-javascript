/*
 * Cryptos
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
 * The Image model module.
 * @module model/Image
 * @version v1
 */
export class Image {
  /**
   * Constructs a new <code>Image</code>.
   * @alias module:model/Image
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Image</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Image} obj Optional instance to populate.
   * @return {module:model/Image} The populated <code>Image</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Image();
      if (data.hasOwnProperty('size'))
        obj.size = ApiClient.convertToType(data['size'], 'Number');
      if (data.hasOwnProperty('extension'))
        obj.extension = ApiClient.convertToType(data['extension'], 'String');
      if (data.hasOwnProperty('filename'))
        obj.filename = ApiClient.convertToType(data['filename'], 'String');
      if (data.hasOwnProperty('contentType'))
        obj.contentType = ApiClient.convertToType(data['contentType'], 'String');
      if (data.hasOwnProperty('webPath'))
        obj.webPath = ApiClient.convertToType(data['webPath'], 'String');
      if (data.hasOwnProperty('webPathname'))
        obj.webPathname = ApiClient.convertToType(data['webPathname'], 'String');
      if (data.hasOwnProperty('width'))
        obj.width = ApiClient.convertToType(data['width'], 'Number');
      if (data.hasOwnProperty('height'))
        obj.height = ApiClient.convertToType(data['height'], 'Number');
    }
    return obj;
  }
}

/**
 * The size of the image in bytes.
 * @member {Number} size
 */
Image.prototype.size = undefined;

/**
 * The image extension. I.e. png.
 * @member {String} extension
 */
Image.prototype.extension = undefined;

/**
 * The image name.
 * @member {String} filename
 */
Image.prototype.filename = undefined;

/**
 * The content type. I.e. image/png.
 * @member {String} contentType
 */
Image.prototype.contentType = undefined;

/**
 * The url of the folder where the image is stored.
 * @member {String} webPath
 */
Image.prototype.webPath = undefined;

/**
 * The url where the image stored. You can use this URL to download the image.
 * @member {String} webPathname
 */
Image.prototype.webPathname = undefined;

/**
 * The width in pixels of the image.
 * @member {Number} width
 */
Image.prototype.width = undefined;

/**
 * The height in pixels of the image.
 * @member {Number} height
 */
Image.prototype.height = undefined;

