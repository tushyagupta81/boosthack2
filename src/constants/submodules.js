const submodules = [
  {
    id: 1,
    // id of the chapter it belongs to
    moduleId: 1,
    title: "The Stock Markets ",
    info: [
      "We explore the basics of stock trading and understand what makes the stock move on a minute by minute basis. We also explore concept of return calculation. ..",
    ],
  },
  {
    id: 2,
    // id of the chapter it belongs to
    moduleId: 1,
    title: "Regulators, the guardians of capital markets",
    info: [
      "Find out who and how the regulators govern the financial markets and also understand different types of financial market participants. Understand the need to regulate the markets. ..",
    ],
  },
  {
    id: 3,
    // id of the chapter it belongs to
    moduleId: 1,
    title: "Market Intermediaries",
    info: [
      "An overview of the financial intermediaries in the Indian stock market and the services they offer. ..",
    ],
  },
  {
    id: 4,
    // id of the chapter it belongs to
    moduleId: 1,
    title: "  Key Events and Their Impact on Markets",
    info: [
      "An introduction to the various macros economic factors that impact the performance of shares and stock markets. ..",
    ],
  },

  // module -2
  {
    id: 1,
    moduleId: 2,
    title: ". Classifying Your Market Activity",
    info: [
      "Here we study in detail the four heads of income for a trader/investor and their meaning and relevance. The rules for computation of tax under each head is clearly outlined. We also study the advanta ..",
    ],
  },
  {
    id: 2,
    moduleId: 2,
    title: "Taxation for Investors",
    info: [
      "This topic explains how long term and short term capital gains/losses are determined based on the holding period of the investment and their applicable tax rates. We also studied how one can reduce LT ..",
    ],
  },
  {
    id: 3,
    moduleId: 2,
    title: "Taxation for Traders",
    info: [
      "Here we take a detailed look at the two heads of business income (speculative and non speculative) and their tax treatment. We also studied key terms such as BTST, Advance tax and Tax loss harvesting. ..",
    ],
  },
  {
    id: 4,
    moduleId: 2,
    title: "Foreign Stocks and Taxation",
    info: [
      "In the previous chapters, you learned how investing and trading in the Indian stock market are taxed as per the Income Tax Act. We also touched upon maintaining books of accounts and rules of the tax ..",
    ],
  },

  // chapter=3
  // fundamental analysis
  {
    id: 1,
    moduleId: 3,
    title: "Introduction to Fundamental Analysis",
    info: [
      "The chapter lays a foundation to Fundamental Analysis, which is a holistic approach to study and analyze a business. A fundamental perspective is important because the stock prices of a fundamentally ..",
    ],
  },
  {
    id: 2,
    moduleId: 3,
    title: "Mindset of an Investor",
    info: [
      "A insightful look at the basics of Fundamental Analysis and how it can be broken down to Qualitative and Quantitative factors to study the intrinsic value of the stock. Also includes a precise underst ..",
    ],
  },
  {
    id: 3,
    moduleId: 3,
    title: "The Cash Flow statement",
    info: [
      "The chapter discusses an outline on the key components of the cash flow statement, and their analysis. Also describes the connection between the Balance sheet, Profit and Loss statement and Cash flow ..",
    ],
  },
  {
    id: 4,
    moduleId: 3,
    title: "DCF Primer",
    info: [
      "This chapter deals with the understanding of the concept of the Time value of money and how the DCF model can be used to estimate the price of a stock. The DCF analysis helps us to arrive at the prese ..",
    ],
  },
  // module -4

  {
    id: 1,
    moduleId: 4,
    title: "Introduction to Financial Modelling",
    info: [
      "Unusual approach We are all living in a very uncertain and unprecedented time. Covid 2nd wave has been brutally devastating and has caused a lot of pain and misery to humanity. I hope you ..",
    ],
  },
  {
    id: 2,
    moduleId: 4,
    title: "Debt Schedule",
    info: [
      " Dealing with debt We dealt with fixed assets in the previous chapter. The fixed assets, as you realize, is the most oversized line item on the asset side of the balance sheet. In this chapter, ..",
    ],
  },
  {
    id: 3,
    moduleId: 4,
    title: " Projections",
    info: [
      "Milestone When building a financial model, there are two essential milestones. We will hit the first one in this chapter and the 2nd milestone in the next. Before we proceed, I’d like ..",
    ],
  },
  {
    id: 4,
    moduleId: 4,
    title: "Cash flow statement",
    info: [
      "Indirect cashflow We are at a crucial juncture in our financial modeling journey. This chapter will derive the cash flow statements and plug that cash flow number into the balance sheet. Afte ..",
    ],
  },
  // module 5
  {
    id: 1,
    moduleId: 5,
    title: "Orientation note",
    info: [
      "A unique opportunity I’m excited about this brand new module on Varsity, wherein we will be discussing two important and closely related market topics – ‘Risk Management and Trading Psyc ..",
    ],
  },
  {
    id: 2,
    moduleId: 5,
    title: "Value at Risk",
    info: [
      " Black Monday Let’s start this chapter with a flashback. For many of us, when we think of the 70’s, we can mostly relate to all the great rock and roll music being produced from across the ..",
    ],
  },
  {
    id: 3,
    moduleId: 5,
    title: "Kelly’s Criterion",
    info: [
      "Percentage Risk Last chapter we looked at three important position sizing techniques, all of them were unique in their own merit. The three techniques were – Unit per fixed amount Percentag ..",
    ],
  },
  {
    id: 4,
    moduleId: 5,
    title: "Trading Biases",
    info: [
      " Mind games If you are a part of any WhatsApp group related to stock markets, then chances are that you may have watched this video – If you are in no mood to watch it, then let me give you ..",
    ],
  },

  // module -6
  {
    id: 1,
    moduleId: 6,
    title: " Currency Basics",
    info: [
      "1.1 – Module Orientation At the onset, let me give you a quick orientation so that you can set your expectations for this module. The focus of this module will be on three main topics – Curren ..",
    ],
  },
  {
    id: 2,
    moduleId: 6,
    title:
      " Reference Rates & Impact of eventsReference Rates & Impact of events",
    info: [
      "All hail the king of Forex Outside India, the biggest market people trade-in is the Forex futures market. Right from the retail to institutional segment, everybody trades the forex futures ma ..",
    ],
  },
  {
    id: 3,
    moduleId: 6,
    title: " Gold (Part 1)",
    info: [
      "– Orientation As you know, there are two commodity exchanges in India – Multi Commodity Exchange (MCX) and National Commodity and Derivative Exchange (NCDEX). MCX is particularly popular f ..",
    ],
  },
  {
    id: 4,
    moduleId: 6,
    title: "Gold (Part 2)",
    info: [
      "The London fix In the previous chapter, we discussed the various Gold contracts that are available on MCX. I want to begin this chapter by discussing how the prices of Gold in the spot market ..",
    ],
  },
];
export default submodules;
