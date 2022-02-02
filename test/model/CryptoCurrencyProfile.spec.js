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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EquiblesCryptos);
  }
}(this, function(expect, EquiblesCryptos) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('CryptoCurrencyProfile', function() {
      beforeEach(function() {
        instance = new EquiblesCryptos.CryptoCurrencyProfile();
      });

      it('should create an instance of CryptoCurrencyProfile', function() {
        // TODO: update the code to test CryptoCurrencyProfile
        expect(instance).to.be.a(EquiblesCryptos.CryptoCurrencyProfile);
      });

      it('should have the property logo (base name: "logo")', function() {
        // TODO: update the code to test the property logo
        expect(instance).to.have.property('logo');
        // expect(instance.logo).to.be(expectedValueLiteral);
      });

      it('should have the property marketCap (base name: "marketCap")', function() {
        // TODO: update the code to test the property marketCap
        expect(instance).to.have.property('marketCap');
        // expect(instance.marketCap).to.be(expectedValueLiteral);
      });

      it('should have the property circulatingSupply (base name: "circulatingSupply")', function() {
        // TODO: update the code to test the property circulatingSupply
        expect(instance).to.have.property('circulatingSupply');
        // expect(instance.circulatingSupply).to.be(expectedValueLiteral);
      });

      it('should have the property maxSupply (base name: "maxSupply")', function() {
        // TODO: update the code to test the property maxSupply
        expect(instance).to.have.property('maxSupply');
        // expect(instance.maxSupply).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property website (base name: "website")', function() {
        // TODO: update the code to test the property website
        expect(instance).to.have.property('website');
        // expect(instance.website).to.be(expectedValueLiteral);
      });

      it('should have the property ticker (base name: "ticker")', function() {
        // TODO: update the code to test the property ticker
        expect(instance).to.have.property('ticker');
        // expect(instance.ticker).to.be(expectedValueLiteral);
      });

      it('should have the property fullTicker (base name: "fullTicker")', function() {
        // TODO: update the code to test the property fullTicker
        expect(instance).to.have.property('fullTicker');
        // expect(instance.fullTicker).to.be(expectedValueLiteral);
      });

      it('should have the property assetType (base name: "assetType")', function() {
        // TODO: update the code to test the property assetType
        expect(instance).to.have.property('assetType');
        // expect(instance.assetType).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property exchange (base name: "exchange")', function() {
        // TODO: update the code to test the property exchange
        expect(instance).to.have.property('exchange');
        // expect(instance.exchange).to.be(expectedValueLiteral);
      });

      it('should have the property lastPrice (base name: "lastPrice")', function() {
        // TODO: update the code to test the property lastPrice
        expect(instance).to.have.property('lastPrice');
        // expect(instance.lastPrice).to.be(expectedValueLiteral);
      });

    });
  });

}));