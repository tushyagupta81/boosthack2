import module from "./module";
import submodules from "./submodules";

const lessons = [
  {
    id: 1,
    // id of the submodule it belongs to
    submoduleId: 1,
    // id of the chapter it belongs to
    moduleId: 1,
    info: ["information in detail", "multiple paras","We have many such examples in the Indian market. To name a few, one can think of companies such as Infosys Limited, TCS Limited, Page Industries, Eicher Motors, Bosch India, Nestle India, TTK Prestige etc. Each of these companies has delivered an average over 20% compounded annual growth return (CAGR) year on year for over 10 years. At a 20% CAGR, the investor would double his money in roughly about 3.5 years to give you a perspective. Higher the CAGR faster is the wealth creation process. Some companies such as Bosch India Limited have delivered close to 30% CAGR. Therefore, you can imagine the magnitude and the speed at which wealth is created if one would invest in fundamentally strong companies."],
  },
  {
    id: 2,
    // id of the submodule it belongs to
    submoduleId: 1,
    // id of the chapter it belongs to
    moduleId: 1,
    info: ["information in detail", "multiple paras"],
  },


  // module -3
  // submodule-1
  {
    id:1 ,

    submoduleId: 1,
    moduleId:3 ,
    title:" Introduction to Fundamental Analysis",
    info: [" Fundamental Analysis (FA) is a holistic approach to study a business. When an investor wishes to invest in a business for the long term (say 3 – 5 years), it becomes essential to understand the business from various perspectives. It is critical for an investor to separate the daily short term noise in the stock prices and concentrate on the underlying business performance. Over the long term, a fundamentally strong company’s stock prices tend to appreciate, thereby creating wealth for its investors.", "We have many such examples in the Indian market. To name a few, one can think of companies such as Infosys Limited, TCS Limited, Page Industries, Eicher Motors, Bosch India, Nestle India, TTK Prestige etc. Each of these companies has delivered an average over 20% compounded annual growth return (CAGR) year on year for over 10 years. At a 20% CAGR, the investor would double his money in roughly about 3.5 years to give you a perspective. Higher the CAGR faster is the wealth creation process. Some companies such as Bosch India Limited have delivered close to 30% CAGR. Therefore, you can imagine the magnitude and the speed at which wealth is created if one would invest in fundamentally strong companies."],
  },
  {
    id: 2,

    submoduleId:1 ,
    moduleId: 3,
    title:" Can I be a fundamental analyst?",
    info: ["Of course, you can be. It is a common misconception that only chartered accountants and professionals from commerce background can be good fundamental analysts. This is not true at all. A fundamental analyst adds 2 and 2 to ensure it sums up to 4. To become a fundamental analyst, you will need a few basic skills:", "Understanding the basic financial statements","Understand businesses concerning the industry in which it operates","Basic arithmetic operations such as addition, subtraction, division, and multiplication"],
  },
  {
    id: 3,

    submoduleId:1 ,
    moduleId: 3,
    title:"  I’m happy with Technical Analysis, so why bother about Fundamental Analysis?",
    info: ["Technical Analysis (TA) helps you garner quick short term returns. It helps you time the market for a better entry and exit. However, TA is not an effective approach to create wealth. Wealth is created only by making intelligent long term investments. However, both TA & FA must coexist in your market strategy.", "Let us say a market participant identifies Eicher motors as a fundamentally strong stock to invest and therefore invests his money in the stock in 2006. You can see the stock made a relatively negligible move between 2006 and 2010. The real move in Eicher Motors started only from 2010. This also means FA based investment in Eicher Motors did not give the investor any meaningful return between 2006 and 2010. The market participant would have been better off taking short term trades during this time. Technical Analysis helps the investor in taking short term trading bets. Hence both TA & FA should coexist as a part of your market strategy. In fact, this leads us to an important capital allocation strategy called “The Core Satellite Strategy”.","Let us say, a market participant has a corpus of Rs.500,000/-. This corpus can be split into two unequal portions; for example, the split can be 60 – 40. The 60% of capital, Rs 300,000/- can be invested for a long term is fundamentally strong. This 60% of the investment makes up the core of the portfolio. One can expect the core portfolio to grow at least 12% to 15% CAGR year on year basis.","The balance 40% of the amount, which is Rs.200,000/- can be utilized for active short term trading using Technical Analysis technique on equity, futures, and options. The Satellite portfolio can be expected to yield at least 10% to 12% absolute return every year."],
  },
  {
    id:1,

    submoduleId:2,
    moduleId: 3,
    title:"Speculator Vs Trader Vs Investor",
    info: ["Depending on how you would like to participate in the market, you can choose to speculate, trade or invest. All three types of participation are different from one another. One has to take a stance on the type of market participant he would like to be. Having clarity on this can have a huge impact on his Profit & Loss account.", "To help you get this clarity, let us consider a market scenario and identify how each market participant (speculator, trader, and investor) would react to it.","RBI in the next two days is expected to convene to announce their latest stance on the monetary policy. Owing to the high and sticky inflation, RBI has hiked the interest rates during the previous 4 monetary policy reviews.  As we know, an increase in interest rates means tougher growth prospects for Corporate India – hence corporate earnings would take a hit",""],
  },
  {
    id:2 ,
    submoduleId:2 ,
    moduleId: 3,
    title:" Does invest work?",
    info: ["Think about a sapling – if you give it the right amount of water, manure, and care would it not grow? Of course, it will. Likewise, think about a good business with healthy sales, great margins, innovative products, and ethical management. Is it not obvious that the share price of such companies would appreciate? In some situations, the price appreciation may delay (recall the Eicher Motors chart from the previous chapter), but it will always appreciate it. This has happened over and over again across markets in the world, including India.", "An investment in a good company defined by investable grade attributes will always yield results. However, one has to develop an appetite to digest short term market volatility."],
  },
  {
    id:3 ,

    submoduleId:2 ,
    moduleId: 3,
    title:" Investible grade attributes? What does that mean?",
    info: ["Like we discussed briefly in the previous chapter, an investible grade company has a few distinguishable characteristics. These characteristics can be classified under two heads: the ‘Qualitative aspect’ and the ‘Quantitative aspects’. The process of evaluating a fundamentally strong company includes a study of both these aspects. In fact, I give the qualitative aspects a little more importance over the quantitative aspects of my personal investment practice.", "A red flag is raised when any of the factors mentioned above do not fall in the right place. For example, if a company undertakes too many related party transactions, it would send favouritism and malpractice. This is not good in the long run. So even if the company has great profit margins, malpractice is not acceptable. It would only be a matter of time before the market discovers matters about ‘related party transactions’ and punishes the company by bringing the stock price lower. Hence an investor would be better off not investing in companies with great margins if such a company scores low on corporate governance."],
  },
  {
    id: 1,

    submoduleId:3 ,
    moduleId: 3,
    title:" Overview",
    info: ["The Cash flow statement is a significant financial statement, as it reveals how much cash the company is actually generating. Is this information not revealed in the P&L statement you may think? Well, the answer is both a yes and a no.", "Assume a simple coffee shop selling coffee and short eats. All the shop’s sales are mostly on a cash basis, meaning if a customer wants to have a cup of coffee and a snack, he needs to have enough money to buy what he wants. On a particular day, assume the shop manages to sell Rs.2,500/- worth of coffee and Rs.3,000/- worth of snacks. The shop’s income is Rs.5,500/- for that day. Rs.5,500/- is reported as revenues in P&L, and there is no ambiguity with this.","Now think about another business that sells laptops. For the sake of simplicity, let us assume that the shop sells only 1 type of laptop at a standard fixed rate of Rs.25,000/- per laptop. Assume on a certain day; the shop manages to sell 20 such laptops. Clearly the revenue for the shop would be Rs.25,000 x 20 = Rs.500,000/-. But what if 5 of the 20 laptops were sold on credit? A credit sale is when the customer takes the product today but pays the cash at a later point in time. In this situation here is how the numbers would look:","If this shop were to show its total revenue in its P&L statement, you would see revenue of Rs.500,000/- which may seem good on the face of it. However, how much of this Rs.500,000/- is actually present in the company’s bank account is not clear. What if this company had a loan of Rs.400,000/- that had to be repaid urgently? Even though the company has a sale of Rs.500,000, it has only Rs.375,000/- in its account. This means the company has a cash crunch, as it cannot meet its debt obligations."],
  },
  {
    id:2 ,

    submoduleId: 3,
    moduleId: 3,
    title:" A brief on the financial statements",
    info: ["If this shop were to show its total revenue in its P&L statement, you would see revenue of Rs.500,000/- which may seem good on the face of it. However, how much of this Rs.500,000/- is actually present in the company’s bank account is not clear. What if this company had a loan of Rs.400,000/- that had to be repaid urgently? Even though the company has a sale of Rs.500,000, it has only Rs.375,000/- in its account. This means the company has a cash crunch, as it cannot meet its debt obligations.", "The P&L statement discusses how much the company earned as revenues versus how much the company expanded in terms of expenses. The company’s retained earnings, also called the surplus of the company, are carried forward to the balance sheet. The P&L also incorporates the depreciation number. The depreciation mentioned in the P&L statement is carried forward to the balance sheet.","The Balance Sheet details the company’s assets and liabilities. On the liabilities side of the Balance sheet, the company represents the shareholders’ funds. The assets should always be equal to the liabilities; only then do we say the balance sheet has balanced. One of the key details on the balance sheet is the cash and cash equivalents of the firm. This number tells us how much money the company has in its bank account. This number comes from the cash flow statement.","The cash flow statement provides information to the users of the financial statements about the entity’s ability to generate cash and cash equivalents and indicates the cash needs of a company. Cash flows are prepared on a historical basis providing information about the cash and cash equivalents, classifying cash flows in to operating, financing and investing activities. The final number of cash flow tells us how much money the company has in its bank account.","We have so far looked into how to read the financial statements and what to expect from each of them. We have not yet ventured into how to analyze these numbers. One of the ways to analyze the financial numbers is by calculating a few important financial ratios. In fact, we will focus on the financial ratios in the next few chapters."],
  },
  {
    id: 1,

    submoduleId: 4,
    moduleId: 3,
    title:"The Stock Price",
    info: ["In the previous chapter, we understood stage 1 and stage 2 of equity research. Stage 1 dealt with understanding the business, and stage 2 dealt with understanding the company’s financial performance. One can proceed to stage 3, only if he is convinced with both the earlier stages’ findings. Stage 3 deals with the stock price valuation.", "An investment is considered a great investment only if a great business is bought at a great price. In fact, I would even stretch to say that it is wonderful to buy a mediocre business, as long as you are buying it at a great price. This only shows the significance of ‘the price’ when it comes to investing.","The objective of the next two chapters is to help you understand “the price”. A valuation technique can estimate the price of a stock. Valuation per se helps you determine the ‘intrinsic value’ of the company. We use a valuation technique called the “Discounted Cash Flow (DCF)” method to calculate the company’s intrinsic value. The intrinsic value as per the DCF method is evaluating the ‘perceived stock price’ of a company, keeping all the future cash flows in perspective.","The DCF model is made up of several concepts which are interwoven with one another. Naturally, we need to understand each of these concepts individually and then place it in the context of DCF.  In this chapter we will understand the core concept of DCF called “The Net Present Value (NPV)”, and then we will proceed to understand the other concepts involved in DCF, before understanding the DCF as a whole."],
  },
  
  {
    id: 2,

    submoduleId: 4,
    moduleId: 3,
    title:" Time Value of Money (TMV)",
    info: ["Time value of money plays an extremely crucial role in finance. The TMV finds its application in almost all the financial concepts. Be it discounted cash flow analysis, financial derivatives pricing, project finance, calculation of annuities etc., the time value of money is applicable. Think of the ‘Time value of money’ as the car engine, with the car itself being the “Financial World”.", "The concept of the time value of money revolves around the fact that money does not remain the same across time. Meaning, the value of Rs.100 today is not really Rs.100, 2 years from now. Inversely, the value of Rs.100, 2 years from now is not really Rs.100 as of today. Whenever there is the passage of time, there is an element of opportunity. Money has to be accounted (adjusted) for that opportunity.","If we have to evaluate, what would be the value of money that we have today sometime in the future, then we need to move the ‘money today’ through the future. This is called the “Future Value (FV)” of the money.  Likewise, if we have to evaluate the value of money that we are expected to receive in the future in today’s terms, then we have to move the future money back to today’s terms. This is called the “Present Value (PV)” of money.",],
  },
 
 

];
export default lessons;
