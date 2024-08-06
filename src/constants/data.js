const chapters = [
  {
    id: 1,
    title: "stock_market_basics",
    info: ["The stock market can play a pivotal role in ensuring your financial security. In this module, you will learn how to get started in the stock market, its fundamentals, how it functions, and the various intermediaries that appertain it."],
  },
  {
    id: 2,
    title: "Markets_and_Taxation",
    info: ["As a trader in India, you should be informed of the taxes applicable to your investments and trades. This module outlines essential topics like calculating your turnover, preparing balance sheet and P&L statements, and filing your Income Tax Returns."],
  },
];

const submodules = [
  {
    id: 1,
    // id of the chapter it belongs to
    chapterId: 1,
    title: "submodules title",
    info: ["intro to the submodules in 1-2 paras", "para 2"],
  },
  {
    id: 2,
    // id of the chapter it belongs to
    chapterId: 1,
    title: "submodule 2",
    info: [],
  },
];

const lessons = [
  {
    id: 1,
    // id of the submodule it belongs to
    submoduleId: 1,
    // id of the chapter it belongs to
    chapterId: 1,
    info: ["information in detail", "multiple paras"],
  },
  {
    id: 2,
    // id of the submodule it belongs to
    submoduleId: 1,
    // id of the chapter it belongs to
    chapterId: 1,
    info: ["information in detail", "multiple paras"],
  },
];

export default { chapters, submodules, lessons };
