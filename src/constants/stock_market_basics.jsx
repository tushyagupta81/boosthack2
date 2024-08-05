import React from "react";
const stock_market_basics = ()=>{
    return(
        <div className="stock_market MODULE">
        <h1>Stock Market Basics</h1>
        <div className='THE NEED TO INVEST CHP-1'>
        <h2>Chapter 1: The Need to Invest</h2>
        <div className=" Where to invest ? topic-1">
        <h3>where to invest ? </h3>
        <p>
        Having figured out the reasons to invest, the next obvious question is – where would one invest, and what return can one expect with investing? When investing, one has to choose an asset class that suits the individual’s risk and returns profile. For example, one individual will be open to taking a lot of risk with his or her money, while another may want to take moderate risk, while another would want zero risk.
Think of an asset class as an investment vehicle defined by its risk and return characteristics.  The following are some of the popular asset classes.
        </p>
        <ul>
        <li>Fixed income instruments</li>
        <li>Equity</li>
        <li>real estates</li>
        </ul>
        <div className="Fixed income instruments">
            <h3>Fixed income instruments</h3>
            <p>
            Fixed-income instruments are investment avenues where your principal amount (the money you invest) is perceived to be safe. The entity pays an interest amount on the principal you invest. The bank’s fixed deposit scheme is the simplest example of a fixed investment instrument.  The interest paid could be quarterly, semi-annual or annual. The capital is returned to the investor at the end of the investment period, also known as the maturity period. 
            </p>
            <p>
            As of October 2022, the typical return from a fixed-income instrument (bank’s FD) varies between 5 – 6%. Government bonds offer about 5.5%, and a few corporate bonds offer nearly 9 or 10%. The rates across different instruments vary because of the risk varies. The Govt bonds are considered the safest investment, with zero risk to your investment, because, well, the govt can’t cheat and run away with your money. Corporate bonds are risky, though; investment in corporate bonds can go to zero, and we have seen plenty of such examples in the past.
            </p>

        </div>
        <div className="Equity">
            <h3>Equity</h3>
            <p>
            Investment in Equities involves buying shares of publicly listed companies. The shares are traded on the Bombay Stock Exchange (BSE) and the National Stock Exchange (NSE).

When an investor invests in equity, unlike a fixed-income instrument, there is no capital guarantee. However, as a trade-off, the returns from equity investment can be much better. Indian Equities have generated upwards of 12% CAGR (compound annual growth rate) over the past 10 to 15 years.
Investing in some of the best and most well-run Indian companies has yielded over 20% CAGR in the long term. Identifying such investment opportunities requires skill, hard work, and patience.
            </p>

        </div>
        <div className="Real Estates">
            <h4>Real Estates</h4>
            <p>
            Real Estate Investment involves transacting (buying and selling) commercial and non-commercial land. Typical examples include transacting in vacant plots, apartments, and commercial buildings. There are two income sources from real estate investments: Rental income and Capital appreciation of the investment amount. The rental yield typically varies between 2-3%, which is not so attractive, in my opinion. The appreciation in land prices is in select pockets and is not uniform.

The transaction procedure can be quite complex involving legal verification of documents. The cash outlay in real estate investment is usually quite large. There is no official metric to measure the returns generated by real estate. Hence it would be hard to comment on this.
            </p>

        </div>
        
        <div className="Commodity-Bullion">
            <h4>Commodity-Bullion</h4>
            <p>
            Gold and silver are considered one of the most popular investment options.  Gold and silver, over the long term, have appreciated. Investments in these metals have yielded a CAGR return of approximately 5-8% over the last 20 years. There are several ways to invest in gold and silver. One can invest in jewelry, Exchange Traded Funds (ETF), or Sovereign Gold bonds, popularly called as SGBs.

Going back to our initial example of investing the surplus cash, it would be interesting to see how much one would have saved by the end of 20 years, considering he can invest in any one – fixed income, equity, or bullion.

By investing in fixed income at an average rate of 9% per annum (good corporate bond), the corpus would have grown to Rs.3.3Crs.
Investing in equities at an average rate of 15% per annum, the corpus would have grown to Rs.5.4Crs.
Investing in bullion at an average rate of 8% per annum, the corpus would have grown to Rs.3.09Crs.
Equities tend to give you the best returns, especially when you have a multi-year investment perspective.

Many of you reading this may wonder why I’ve not considered Cryptocurrencies as an asset class. When you invest your hard-earned money, you need to ensure enough checks, balances, and regulatory frameworks to protect you as an investor. Crypto, lacks all these; hence I’d suggest you stay away from crypto (or any other fancy investment option) till there is a regulatory framework.

It is best if your investments have a mix of all asset classes. It is wise to diversify your investment among the various asset classes. The technique of allocating money across asset classes is termed ‘Asset Allocation’, and we will discuss asset allocation later in Varsity.

For instance, a young professional may take a higher risk given the age and years of investment available. Typically investors should allocate at least 60% of their investable amount in equity, 20% in precious metals, and 20% in fixed-income investments. The percentage mix changes based on risk profile and age. For example, a retired person could invest 80% in fixed income (Govt bonds maybe), 10% in equity markets, and 10% in precious metals.
            </p>

        </div>
        </div>

{/* topic-2 */}
        <div className="Things to note before investing"></div>
        <h4>Things to note before investing</h4>
        <p>
        Investing is an integral part of financial planning, but before you start your investment journey, it is good to be aware of the following –
        <ul>
            <Li>Risk and Return go hand in hand. Higher the risk, the higher the return. The lower the risk, the lower the return.</Li>
            <Li>investment in fixed income is a good option if you want to protect your principal amount. It is relatively less risky. However, you have the risk of losing money when you adjust the inflation return. Example – A fixed deposit that gives you 9% when the inflation is 10% means you lose a net of 1% per annum. Alternatively, the risk increases if you invest in a corporate fixed-income instrument.</Li>
            <Li>Investment in Equities is a great option. It is known to beat inflation over a long period. Historically equity investment has generated returns close to 14-15%. However, equity investments can be risky.</Li>
            <Li>Real Estate investment requires a significant outlay of cash and cannot be done with smaller amounts. Liquidity is another issue with real estate investment – you cannot buy or sell whenever you want.</Li>
        </ul>
        </p>

        </div>

{/* chapter -2 */}

<div className="Regulators, the guardians of capital markets">
{/* toppic -1 */}
    <div className="What is the stock market?">
        <h2>What is the stock market?</h2>
        <p>
        In the previous chapter, we established that investing in equities is vital to generate inflation-beating returns. Having said that, how do we go about investing in equities? Before we dwell further into this topic, it is essential to understand the market ecosystem and the many different entities involved in making our capital market journey smooth.
        </p>
        <p>
        Just like the way we go to the neighborhood kirana store or a supermarket to shop for our daily needs, similarly, we go to the stock market to shop (read as transact) for investments. The stock market is where all the participants who wish to transact in shares go. Transact means to buy or sell shares in the context of stock markets. The primary purpose of the stock market is to help you facilitate your transactions. So if you want to buy shares of a company, the stock market helps you meet the seller and vice versa. 
        </p>
        <p>
        Unlike a supermarket, the stock market does not exist in a brick-and-mortar form. It exists in electronic form. You access the market electronically from your computer and conduct transactions (buy or sell). It is also important to note that you can access the stock market via a registered intermediary called the stockbroker. We will discuss the stockbrokers at a later point.
        </p>
        <p>
        India has two stock exchanges – the Bombay Stock Exchange (BSE) and the National Stock Exchange (NSE). There were many other exchanges earlier, but none of them survived. So when you talk about the stock markets in India, you are essentially referring to either NSE or BSE. Older stock exchanges like Bangalore Stock Exchange (BgSE), Madras Stock Exchange (MSE), Calcutta Stock Exchange (CSE) have either merged with BSE/NSE or shut shop.
        </p>

    </div>
    {/* topic-2 */}

    <div className="Market Participants and the need to regulate them">
        <h2>Market Participants and the need to regulate them</h2>
        <p>
        The stock market attracts individuals and corporations from diverse backgrounds. Anyone who transacts in the stock market is called a market participant. The market participant can be classified into various categories –
        <ul>
            <li>Domestic Retail Participants – These are people like you and me transacting in markets</li>
            <li>NRI’s and OCI – These are people of Indian origin but based outside India</li>
            <li>Domestic Asset Management Companies (AMC) – Mutual fund companies like SBI Mutual Fund, HDFC AMC, Edelweiss, ICICI Pru, etc.</li>
            <li>Domestic Asset Management Companies (AMC) – Mutual fund companies like SBI Mutual Fund, HDFC AMC, Edelweiss, ICICI Pru, etc.</li>
        </ul>
        </p>
        <p>
        When money is involved, human emotions such as greed and fear run high. One can easily fall prey to these emotions and get involved in unfair practices. India has its fair share of such unethical practices. Given this, the stock markets need someone who can set the game rules (commonly referred to as regulation and compliance) and ensure that people adhere to these regulations and compliance, thereby making the markets a level playing field for everyone.
        </p>
    </div>
    {/* topic-3 */}
    <div className="The Regulator">
        <h2>The Regulator</h2>
        <p>
        In India, the stock market regulator is called The Securities and Exchange Board of India, often referred to as SEBI. SEBI aims to promote the development of stock exchanges, protect the interest of retail investors, and regulate market participants’ and financial intermediaries’ activities. In general, SEBI ensures:
        <ul>
            <li>The stock exchange conducts its business fairly</li>
            <li>Stockbrokers conduct their business fairly</li>
            <li>Participants don’t get involved in unfair practices</li>
            <li>Corporates don’t use the markets to benefit themselves (Satyam Computers) unduly</li>
            <li>Small investors’ interests are protected</li>
            <li>Large investors with mega cash piles should not manipulate the markets</li>
            <li>Overall development of markets</li>
        </ul>
        </p>
        <p>
        Given the above objectives, it becomes imperative for SEBI to regulate all the entities which are involved in the market. All the entities mentioned below are directly involved in the stock markets. Malpractice by any of the following entities can disrupt what is otherwise a harmonious market in India.
        </p>
        <p>
        SEBI has prescribed a set of rules and regulations for each entity. The entity should operate within the legal framework as prescribed by SEBI. The specific rules applicable to a specific entity are made available by SEBI on its website. They are published under the ‘Legal Framework’ section of their site.
        </p>

    </div>


</div>
{/* chapter -3 */}
<div className="Market Intermediaries">
    <h2>Market Intermediaries</h2>
    {/* topic -1 */}
    <div className="The Stock Broker">
        <h3>The Stock Broker</h3>
        <p>
        The stockbroker is probably one of the most important financial intermediaries you need to know. A stockbroker is a corporate entity registered as a trading member with the stock exchange and holds a stockbroking license. SEBI grants the license through due diligence, and the broker is expected to comply with the rules prescribed by SEBI.
        </p>
        <p>
        A stockbroker is your gateway to the stock markets to make investments in stocks, bonds, ETFs, and Mutual funds. To transact in the stock market, you must set up (open account) with a stockbroker of your choice. Many stock brokers are registered in India, and you can choose a broker based on personal criteria. A few popular filters based on which people select stockbrokers are –
        <ul>
            <li>The simplicity of the broker platform</li>
            <li>The efficiency of the broker’s support system</li>
            <li>ccess to ready reports – Profit & Loss reports, Tradebook, Tax P&L</li>
            <li>Broker’s net worth (you dont want to deal with a broker who is not profitable or does not have a good P&L)</li>
            <li>Initiatives like education</li>
        </ul>

        </p>
        <p>
        Once you decide on your broker and open a trading and DEMAT account, you can start transacting in the stock market. After setting up your account, there are a few standard ways to interact with your broker.
        <ul>
            <li>You can call your broker, identify yourself with your client code (account code) and place an order for your transaction. The dealer at the other end will execute the order for you and confirm the status of the same while you are still on the call.</li>
            <li>Do it yourself – this is perhaps the most popular way to transact in the markets. The broker gives you access to the market via a ‘Trading Terminal’. After you log in to the trading terminal, you can view live price quotes from the market and place orders yourself. For example, Zerodha’s trading platform is called ‘Kite’.</li>
            <li>Advanced users can access the market programmatically via APIs. Some of the brokers provide APIs for a fee.</li>
            <li></li>
        </ul>
        </p>
        <p>
        The essential services provided by the broker include....
            <ul>
                <li>Access to the markets and allow you to transact</li>
                <li>Margins for trading, we will discuss this point at a later point</li>
                <li>Issue contract notes for the transactions – A contract note is a written confirmation detailing the transactions you have carried out during the day</li>
                <li>Facilitate the fund transfer between your trading and bank account</li>
                <li>Provide you with a back-office. The back office is a portal to access many reports about your account. .</li>
                <li>The broker charges a fee for the services provided, also called the ‘brokerage charge’ or just brokerage. The brokerage rates vary, and it’s up to you to find a broker you think strikes a balance between the brokerage charged and the services provided.</li>
            </ul>
        </p>

    </div>
    {/* topic -2 */}
    <div className=" Depository and Depository Participants">
    <h3>Depository and Depository Participants</h3>
    <p>
    When you buy a property, the only way to identify and claim that you own the property is by producing the property papers. Hence, it becomes essential to keep the property papers safe and secure.
    </p>
    <p>
    Likewise, when you buy a share (a share represents part ownership in a company), the only way to claim ownership is by producing your share certificate. A share certificate is nothing but a document entitling you as the owner of the shares in a company. Before 1996 the share certificate was in paper format; however, post-1996, the share certificates were converted to digital form. Converting a paper format share certificate into a digital format share certificate is called “Dematerialization,” often abbreviated as DEMAT.
    </p>
    <p>
    Did you know the Harshad Mehta scam of 1992, played a significant role in digitizing the share certificate? I’d suggest you watch the SonyLiv series on the Harshad Mehta saga, it gives you a good perspective of the market’s ecosystem before it went digital.
    </p>
    <p>
    The share certificate in DEMAT format has to be stored digitally. The storage place for the digital share certificate is the ‘DEMAT Account. A Depository is a financial intermediary that offers the Demat account service.  Think of the demat account as a digital vault for your shares. As you may have guessed, your broker’s trading account and the DEMAT account from the Depository are interlinked
    </p>
    <p>
    For example, if your idea is to buy Infosys shares, then all you need to do is open your trading account, look for Infosys’ prices, and buy it. Once the transaction is complete, the role of your trading account is done. After you buy, the shares of Infosys will automatically get credited to your demat account.
    </p>
    <p>
    Likewise, when you wish to sell Infosys shares, you must log in to your trading account and sell the stock. The act of selling is carried out in your trading account. But in the backend, because your trading account and demat account are linked, the broker debits your demat account of the shares you have sold.
    </p>
    <p>
    At present, only two depositaries offer DEMAT account services. The National Securities Depository Limited (NSDL) and Central Depository Services (India) Limited. There is virtually no difference between the two, and both operate under strict SEBI regulations.
    </p>
    <p>
    You cannot walk into National Stock Exchange’s (NSE) office to open a trading account, likewise, you cannot walk into a Depository (NSDL or CDSL) to open a demat account. To open a demat account, you must speak to a Depository Participant (DP). A DP helps you set up your DEMAT account with a Depository. A DP acts as an intermediary between you and the Depository. Even the DP is governed by the regulations laid out by the SEBI.
    </p>

    </div>
    {/* topic-3 */}
    <div className=" Banks">
        <h2>Banks</h2>
        <p>
        Banks play a straightforward role in the market ecosystem. They help facilitate the fund transfer from your bank account to your trading account. Both the trading account and bank account are linked. Broker’s link these accounts after verifying your bank account.

You can link multiple bank accounts to your trading through which you can transfer funds and trade. Irrespective of how many bank accounts you choose to link with your trading account, funds can be withdrawn to only one bank account. The account you choose to withdraw funds (from your trading account) is called the ‘Primary account.’ At Zerodha, you can add one primary bank account and up to 2 secondary bank accounts. You can add funds to all the bank accounts, but withdrawals are only processed to the primary bank account.

        </p>
        <p>
        Also, dividend payments and money from buybacks will be sent to the primary bank account. The primary bank account is connected to your trading account, the Depository, the Registrar, and the transfer agents (RTA).

At this stage, you must have realized that the three financial intermediaries operate via three different accounts – a trading account offered by your broker, demat account offered by the depositary participant, and a Bank account offered by a bank. All three accounts operate electronically and are interlinked, giving you a seamless experience.
        </p>

    </div>
    {/* topic-4 */}
    <div className=" NSE clearing Limited and ICCL" >
    <h2>NSE Clearing Limited and ICCL</h2>
    <p>
    NSE Clearing Limited and Indian Clearing Corporation (ICCL) are wholly owned subsidiaries of the National Stock Exchange and Bombay Stock Exchange, respectively.

The job of the clearing corporation is to ensure guaranteed settlement of your trades/transactions. For example, if you buy one Biocon share at Rs.446 per share, someone must sell that one share to you at Rs.446. For this transaction, you will be debited Rs.446 from your trading account, and the seller must be credited that Rs.446 toward the sale of Biocon. In a typical transaction like this, the clearing corporation’s role is to ensure the following:
<ul>
    <li>Identify the buyer and seller and match the debit and credit process</li>
    <li>Ensure no defaults – The clearing corporation also ensures no defaults by either party. For instance, after selling the shares, the seller should not be able to back out, thereby defaulting in his transaction.</li>
</ul>
    </p>
    <p>
    For all practical purposes, it’s ok not to know much about NSE Clearing Limited or ICCL simply because you, as a trader or investor, would not be interacting with these agencies directly. You need to know these institutions are also heavily regulated and work towards a smooth settlement and efficient clearing activity.
    </p>
    <p>

    </p>Clearing corporations are also involved in the margining process, which is critical while trading complex instruments like futures and options. Perhaps, we will discuss this aspect in a related discussion.

    </div>

</div>


        </div>

    );
};