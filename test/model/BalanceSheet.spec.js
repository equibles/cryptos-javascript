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
    describe('BalanceSheet', function() {
      beforeEach(function() {
        instance = new EquiblesCryptos.BalanceSheet();
      });

      it('should create an instance of BalanceSheet', function() {
        // TODO: update the code to test BalanceSheet
        expect(instance).to.be.a(EquiblesCryptos.BalanceSheet);
      });

      it('should have the property assets (base name: "assets")', function() {
        // TODO: update the code to test the property assets
        expect(instance).to.have.property('assets');
        // expect(instance.assets).to.be(expectedValueLiteral);
      });

      it('should have the property tangibleAssets (base name: "tangibleAssets")', function() {
        // TODO: update the code to test the property tangibleAssets
        expect(instance).to.have.property('tangibleAssets');
        // expect(instance.tangibleAssets).to.be(expectedValueLiteral);
      });

      it('should have the property currentAssets (base name: "currentAssets")', function() {
        // TODO: update the code to test the property currentAssets
        expect(instance).to.have.property('currentAssets');
        // expect(instance.currentAssets).to.be(expectedValueLiteral);
      });

      it('should have the property cashAndCashEquivalents (base name: "cashAndCashEquivalents")', function() {
        // TODO: update the code to test the property cashAndCashEquivalents
        expect(instance).to.have.property('cashAndCashEquivalents');
        // expect(instance.cashAndCashEquivalents).to.be(expectedValueLiteral);
      });

      it('should have the property cashAndShortTermInvestments (base name: "cashAndShortTermInvestments")', function() {
        // TODO: update the code to test the property cashAndShortTermInvestments
        expect(instance).to.have.property('cashAndShortTermInvestments');
        // expect(instance.cashAndShortTermInvestments).to.be(expectedValueLiteral);
      });

      it('should have the property inventory (base name: "inventory")', function() {
        // TODO: update the code to test the property inventory
        expect(instance).to.have.property('inventory');
        // expect(instance.inventory).to.be(expectedValueLiteral);
      });

      it('should have the property currentNetReceivables (base name: "currentNetReceivables")', function() {
        // TODO: update the code to test the property currentNetReceivables
        expect(instance).to.have.property('currentNetReceivables');
        // expect(instance.currentNetReceivables).to.be(expectedValueLiteral);
      });

      it('should have the property nonCurrentAssets (base name: "nonCurrentAssets")', function() {
        // TODO: update the code to test the property nonCurrentAssets
        expect(instance).to.have.property('nonCurrentAssets');
        // expect(instance.nonCurrentAssets).to.be(expectedValueLiteral);
      });

      it('should have the property propertyPlantEquipment (base name: "propertyPlantEquipment")', function() {
        // TODO: update the code to test the property propertyPlantEquipment
        expect(instance).to.have.property('propertyPlantEquipment');
        // expect(instance.propertyPlantEquipment).to.be(expectedValueLiteral);
      });

      it('should have the property accumulatedDepreciationAmortization (base name: "accumulatedDepreciationAmortization")', function() {
        // TODO: update the code to test the property accumulatedDepreciationAmortization
        expect(instance).to.have.property('accumulatedDepreciationAmortization');
        // expect(instance.accumulatedDepreciationAmortization).to.be(expectedValueLiteral);
      });

      it('should have the property intangibleAssets (base name: "intangibleAssets")', function() {
        // TODO: update the code to test the property intangibleAssets
        expect(instance).to.have.property('intangibleAssets');
        // expect(instance.intangibleAssets).to.be(expectedValueLiteral);
      });

      it('should have the property intangibleAssetsExcludingGoodwill (base name: "intangibleAssetsExcludingGoodwill")', function() {
        // TODO: update the code to test the property intangibleAssetsExcludingGoodwill
        expect(instance).to.have.property('intangibleAssetsExcludingGoodwill');
        // expect(instance.intangibleAssetsExcludingGoodwill).to.be(expectedValueLiteral);
      });

      it('should have the property goodwill (base name: "goodwill")', function() {
        // TODO: update the code to test the property goodwill
        expect(instance).to.have.property('goodwill');
        // expect(instance.goodwill).to.be(expectedValueLiteral);
      });

      it('should have the property investments (base name: "investments")', function() {
        // TODO: update the code to test the property investments
        expect(instance).to.have.property('investments');
        // expect(instance.investments).to.be(expectedValueLiteral);
      });

      it('should have the property longTermInvestments (base name: "longTermInvestments")', function() {
        // TODO: update the code to test the property longTermInvestments
        expect(instance).to.have.property('longTermInvestments');
        // expect(instance.longTermInvestments).to.be(expectedValueLiteral);
      });

      it('should have the property shortTermInvestments (base name: "shortTermInvestments")', function() {
        // TODO: update the code to test the property shortTermInvestments
        expect(instance).to.have.property('shortTermInvestments');
        // expect(instance.shortTermInvestments).to.be(expectedValueLiteral);
      });

      it('should have the property otherCurrentAssets (base name: "otherCurrentAssets")', function() {
        // TODO: update the code to test the property otherCurrentAssets
        expect(instance).to.have.property('otherCurrentAssets');
        // expect(instance.otherCurrentAssets).to.be(expectedValueLiteral);
      });

      it('should have the property otherNonCurrentAssets (base name: "otherNonCurrentAssets")', function() {
        // TODO: update the code to test the property otherNonCurrentAssets
        expect(instance).to.have.property('otherNonCurrentAssets');
        // expect(instance.otherNonCurrentAssets).to.be(expectedValueLiteral);
      });

      it('should have the property liabilities (base name: "liabilities")', function() {
        // TODO: update the code to test the property liabilities
        expect(instance).to.have.property('liabilities');
        // expect(instance.liabilities).to.be(expectedValueLiteral);
      });

      it('should have the property currentLiabilities (base name: "currentLiabilities")', function() {
        // TODO: update the code to test the property currentLiabilities
        expect(instance).to.have.property('currentLiabilities');
        // expect(instance.currentLiabilities).to.be(expectedValueLiteral);
      });

      it('should have the property currentAccountsPayable (base name: "currentAccountsPayable")', function() {
        // TODO: update the code to test the property currentAccountsPayable
        expect(instance).to.have.property('currentAccountsPayable');
        // expect(instance.currentAccountsPayable).to.be(expectedValueLiteral);
      });

      it('should have the property deferredRevenue (base name: "deferredRevenue")', function() {
        // TODO: update the code to test the property deferredRevenue
        expect(instance).to.have.property('deferredRevenue');
        // expect(instance.deferredRevenue).to.be(expectedValueLiteral);
      });

      it('should have the property currentDebt (base name: "currentDebt")', function() {
        // TODO: update the code to test the property currentDebt
        expect(instance).to.have.property('currentDebt');
        // expect(instance.currentDebt).to.be(expectedValueLiteral);
      });

      it('should have the property shortTermDebt (base name: "shortTermDebt")', function() {
        // TODO: update the code to test the property shortTermDebt
        expect(instance).to.have.property('shortTermDebt');
        // expect(instance.shortTermDebt).to.be(expectedValueLiteral);
      });

      it('should have the property nonCurrentLiabilities (base name: "nonCurrentLiabilities")', function() {
        // TODO: update the code to test the property nonCurrentLiabilities
        expect(instance).to.have.property('nonCurrentLiabilities');
        // expect(instance.nonCurrentLiabilities).to.be(expectedValueLiteral);
      });

      it('should have the property capitalLeaseObligations (base name: "capitalLeaseObligations")', function() {
        // TODO: update the code to test the property capitalLeaseObligations
        expect(instance).to.have.property('capitalLeaseObligations');
        // expect(instance.capitalLeaseObligations).to.be(expectedValueLiteral);
      });

      it('should have the property longTermDebt (base name: "longTermDebt")', function() {
        // TODO: update the code to test the property longTermDebt
        expect(instance).to.have.property('longTermDebt');
        // expect(instance.longTermDebt).to.be(expectedValueLiteral);
      });

      it('should have the property currentLongTermDebt (base name: "currentLongTermDebt")', function() {
        // TODO: update the code to test the property currentLongTermDebt
        expect(instance).to.have.property('currentLongTermDebt');
        // expect(instance.currentLongTermDebt).to.be(expectedValueLiteral);
      });

      it('should have the property longTermDebtNonCurrent (base name: "longTermDebtNonCurrent")', function() {
        // TODO: update the code to test the property longTermDebtNonCurrent
        expect(instance).to.have.property('longTermDebtNonCurrent');
        // expect(instance.longTermDebtNonCurrent).to.be(expectedValueLiteral);
      });

      it('should have the property shortLongTermDebtTotal (base name: "shortLongTermDebtTotal")', function() {
        // TODO: update the code to test the property shortLongTermDebtTotal
        expect(instance).to.have.property('shortLongTermDebtTotal');
        // expect(instance.shortLongTermDebtTotal).to.be(expectedValueLiteral);
      });

      it('should have the property otherCurrentLiabilities (base name: "otherCurrentLiabilities")', function() {
        // TODO: update the code to test the property otherCurrentLiabilities
        expect(instance).to.have.property('otherCurrentLiabilities');
        // expect(instance.otherCurrentLiabilities).to.be(expectedValueLiteral);
      });

      it('should have the property otherNonCurrentLiabilities (base name: "otherNonCurrentLiabilities")', function() {
        // TODO: update the code to test the property otherNonCurrentLiabilities
        expect(instance).to.have.property('otherNonCurrentLiabilities');
        // expect(instance.otherNonCurrentLiabilities).to.be(expectedValueLiteral);
      });

      it('should have the property equity (base name: "equity")', function() {
        // TODO: update the code to test the property equity
        expect(instance).to.have.property('equity');
        // expect(instance.equity).to.be(expectedValueLiteral);
      });

      it('should have the property treasuryStock (base name: "treasuryStock")', function() {
        // TODO: update the code to test the property treasuryStock
        expect(instance).to.have.property('treasuryStock');
        // expect(instance.treasuryStock).to.be(expectedValueLiteral);
      });

      it('should have the property retainedEarnings (base name: "retainedEarnings")', function() {
        // TODO: update the code to test the property retainedEarnings
        expect(instance).to.have.property('retainedEarnings');
        // expect(instance.retainedEarnings).to.be(expectedValueLiteral);
      });

      it('should have the property commonStock (base name: "commonStock")', function() {
        // TODO: update the code to test the property commonStock
        expect(instance).to.have.property('commonStock');
        // expect(instance.commonStock).to.be(expectedValueLiteral);
      });

      it('should have the property sharesOutstanding (base name: "sharesOutstanding")', function() {
        // TODO: update the code to test the property sharesOutstanding
        expect(instance).to.have.property('sharesOutstanding');
        // expect(instance.sharesOutstanding).to.be(expectedValueLiteral);
      });

      it('should have the property accumulatedOtherComprehensiveIncome (base name: "accumulatedOtherComprehensiveIncome")', function() {
        // TODO: update the code to test the property accumulatedOtherComprehensiveIncome
        expect(instance).to.have.property('accumulatedOtherComprehensiveIncome');
        // expect(instance.accumulatedOtherComprehensiveIncome).to.be(expectedValueLiteral);
      });

      it('should have the property workingCapital (base name: "workingCapital")', function() {
        // TODO: update the code to test the property workingCapital
        expect(instance).to.have.property('workingCapital');
        // expect(instance.workingCapital).to.be(expectedValueLiteral);
      });

    });
  });

}));