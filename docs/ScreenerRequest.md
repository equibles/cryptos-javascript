# EquiblesCryptos.ScreenerRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**searchQuery** | **String** | A textual search term. | [optional] 
**exchangeIds** | **[Number]** | The ids of the exchanges to use. | [optional] 
**sectorIds** | **[Number]** | The ids of the sectors to use. | [optional] 
**industryIds** | **[Number]** | The ids of the industries to use. | [optional] 
**marketCapMin** | **Number** | The minimum market capitalization. | [optional] 
**marketCapMax** | **Number** | The maximum market capitalization. | [optional] 
**betaMin** | **Number** | The minimum price beta for a 5 year period calculated monthly. | [optional] 
**betaMax** | **Number** | The maximum price beta for a 5 year period calculated monthly. | [optional] 
**forwardDividendMin** | **Number** | The minimum current dividend value. | [optional] 
**forwardDividendMax** | **Number** | The maximum current dividend value. | [optional] 
**forwardDividendYieldMin** | **Number** | The minimum current dividend percentage. | [optional] 
**forwardDividendYieldMax** | **Number** | The maximum current dividend percentage. | [optional] 
**shortRatioMin** | **Number** | The minimum short ratio. | [optional] 
**shortRatioMax** | **Number** | The maximum short ratio. | [optional] 
**sharesShortPercentageMin** | **Number** | The minimum percentage of shares short. | [optional] 
**sharesShortPercentageMax** | **Number** | The maximum percentage of shares short. | [optional] 
**sharesShortPreviousMonthPercentageMin** | **Number** | The minimum percentage of shares short on the last month. | [optional] 
**sharesShortPreviousMonthPercentageMax** | **Number** | The maximum percentage of shares short on the last month. | [optional] 
**analystRecommendationMin** | [**Recommendation**](Recommendation.md) |  | [optional] 
**analystRecommendationMax** | [**Recommendation**](Recommendation.md) |  | [optional] 
**performanceOneDayMin** | **Number** | The minimum stock price percentage change in the last day. | [optional] 
**performanceOneDayMax** | **Number** | The maximum stock price percentage change in the last day. | [optional] 
**performanceOneWeekMin** | **Number** | The minimum stock price percentage change in the last week. | [optional] 
**performanceOneWeekMax** | **Number** | The maximum stock price percentage change in the last week. | [optional] 
**performanceTwoWeeksMin** | **Number** | The minimum stock price percentage change in the last two weeks. | [optional] 
**performanceTwoWeeksMax** | **Number** | The maximum stock price percentage change in the last two weeks. | [optional] 
**performanceOneMonthMin** | **Number** | The minimum stock price percentage change in the last month. | [optional] 
**performanceOneMonthMax** | **Number** | The maximum stock price percentage change in the last month. | [optional] 
**performanceThreeMonthsMin** | **Number** | The minimum stock price percentage change in the last three months. | [optional] 
**performanceThreeMonthsMax** | **Number** | The maximum stock price percentage change in the last three months. | [optional] 
**performanceOneYearMin** | **Number** | The minimum stock price percentage change in the last year. | [optional] 
**performanceOneYearMax** | **Number** | The maximum stock price percentage change in the last year. | [optional] 
**performanceThreeYearsMin** | **Number** | The minimum stock price percentage change in the last three years. | [optional] 
**performanceThreeYearsMax** | **Number** | The maximum stock price percentage change in the last three years. | [optional] 
**performanceFiveYearsMin** | **Number** | The minimum stock price percentage change in the last five years. | [optional] 
**performanceFiveYearsMax** | **Number** | The maximum stock price percentage change in the last five years. | [optional] 
**performanceTenYearsMin** | **Number** | The minimum stock price percentage change in the last ten years. | [optional] 
**performanceTenYearsMax** | **Number** | The maximum stock price percentage change in the last ten years. | [optional] 
**performanceTwentyYearsMin** | **Number** | The minimum stock price percentage change in the last twenty years. | [optional] 
**performanceTwentyYearsMax** | **Number** | The maximum stock price percentage change in the last twenty years. | [optional] 
**epsGrowthOneYearMin** | **Number** | The minimum EPS growth in the last year. | [optional] 
**epsGrowthOneYearMax** | **Number** | The maximum EPS growth in the last year. | [optional] 
**epsGrowthTwoYearsMin** | **Number** | The minimum EPS growth in the last two years. This value is annualized. | [optional] 
**epsGrowthTwoYearsMax** | **Number** | The maximum EPS growth in the last two years. This value is annualized. | [optional] 
**epsGrowthThreeYearsMin** | **Number** | The minimum EPS growth in the last three years. This value is annualized. | [optional] 
**epsGrowthThreeYearsMax** | **Number** | The maximum EPS growth in the last three years. This value is annualized. | [optional] 
**epsGrowthFiveYearsMin** | **Number** | The minimum EPS growth in the last five years. This value is annualized. | [optional] 
**epsGrowthFiveYearsMax** | **Number** | The maximum EPS growth in the last five years. This value is annualized. | [optional] 
**epsGrowthTenYearsMin** | **Number** | The minimum EPS growth in the last ten years. This value is annualized. | [optional] 
**epsGrowthTenYearsMax** | **Number** | The maximum EPS growth in the last ten years. This value is annualized. | [optional] 
**epsGrowthTwentyYearsMin** | **Number** | The minimum EPS growth in the last twenty years. This value is annualized. | [optional] 
**epsGrowthTwentyYearsMax** | **Number** | The maximum EPS growth in the last twenty years. This value is annualized. | [optional] 
**peMin** | **Number** | The minimum price to earnings value. | [optional] 
**peMax** | **Number** | The maximum price to earnings value. | [optional] 
**pegMin** | **Number** | The minimum price to earnings to growth value. | [optional] 
**pegMax** | **Number** | The maximum price to earnings to growth value. | [optional] 
**priceFcfMin** | **Number** | The minimum price to free cash flow value. | [optional] 
**priceFcfMax** | **Number** | The maximum price to free cash flow value. | [optional] 
**bookValuePerShareMin** | **Number** | The minimum book value per share. | [optional] 
**bookValuePerShareMax** | **Number** | The maximum book value per share. | [optional] 
**priceBookValuePerShareMin** | **Number** | The minimum price to book value. | [optional] 
**priceBookValuePerShareMax** | **Number** | The maximum price to book value. | [optional] 
**payoutMin** | **Number** | The minimum payout ratio (as percentage). | [optional] 
**payoutMax** | **Number** | The maximum payout ratio (as percentage). | [optional] 
**debtToEquityMin** | **Number** | The minimum debt to equity ratio (as percentage). | [optional] 
**debtToEquityMax** | **Number** | The maximum debt to equity ratio (as percentage). | [optional] 
**grossMarginMin** | **Number** | The minimum gross margin (as percentage). | [optional] 
**grossMarginMax** | **Number** | The maximum gross margin (as percentage). | [optional] 
**operatingMarginMin** | **Number** | The minimum operating margin (as percentage). | [optional] 
**operatingMarginMax** | **Number** | The maximum operating margin (as percentage). | [optional] 
**profitMarginMin** | **Number** | The minimum profit margin (as percentage). | [optional] 
**profitMarginMax** | **Number** | The maximum profit margin (as percentage). | [optional] 
**priceToSalesMin** | **Number** | The minimum price to sales ratio. | [optional] 
**priceToSalesMax** | **Number** | The maximum price to sales ratio. | [optional] 
**buybacksThreeMonthsMin** | **Number** | The minimum percentage of shares bought back in the last 3 months. Negative values represent dilution of shares. | [optional] 
**buybacksThreeMonthsMax** | **Number** | The maximum percentage of shares bought back in the last 3 months. Negative values represent dilution of shares. | [optional] 
**buybacksSixMonthsMin** | **Number** | The minimum percentage of shares bought back in the last 6 months. Negative values represent dilution of shares. | [optional] 
**buybacksSixMonthsMax** | **Number** |  | [optional] 
**buybacksOneYearMin** | **Number** | The minimum percentage of shares bought back in the last year. Negative values represent dilution of shares. | [optional] 
**buybacksOneYearMax** | **Number** | The maximum percentage of shares bought back in the last year. Negative values represent dilution of shares. | [optional] 
**buybacksTwoYearsMin** | **Number** | The minimum percentage of shares bought back in the last 2 years. Negative values represent dilution of shares. | [optional] 
**buybacksTwoYearsMax** | **Number** | The maximum percentage of shares bought back in the last 2 years. Negative values represent dilution of shares. | [optional] 
**buybacksThreeYearsMin** | **Number** | The minimum percentage of shares bought back in the last 3 years. Negative values represent dilution of shares. | [optional] 
**buybacksThreeYearsMax** | **Number** | The maximum percentage of shares bought back in the last 3 years. Negative values represent dilution of shares. | [optional] 
**buybacksFiveYearsMin** | **Number** | The minimum percentage of shares bought back in the last 5 years. Negative values represent dilution of shares. | [optional] 
**buybacksFiveYearsMax** | **Number** | The maximum percentage of shares bought back in the last 5 years. Negative values represent dilution of shares. | [optional] 
**buybacksTenYearsMin** | **Number** | The minimum percentage of shares bought back in the last 10 years. Negative values represent dilution of shares. | [optional] 
**buybacksTenYearsMax** | **Number** | The maximum percentage of shares bought back in the last 10 years. Negative values represent dilution of shares. | [optional] 
**buybacksTwentyYearsMin** | **Number** | The minimum percentage of shares bought back in the last 20 years. Negative values represent dilution of shares. | [optional] 
**buybacksTwentyYearsMax** | **Number** | The maximum percentage of shares bought back in the last 20 years. Negative values represent dilution of shares. | [optional] 
**potentialUpside** | **Number** | The upside potential according to the analysts&#x27; target price consensus (as percentage). I.e. If the stock price is $100 and the analysts&#x27; target price consensus is $150 then the potential upside is 50%. | [optional] 
