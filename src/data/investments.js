export const investments = [
  {
    id: "fd",
    name: "Fixed Deposit (FD)",
    humanName: "You become the bank's banker",
    hook: "You lend money to the bank. They pay you fixed rent for it. Safest thing after a locker.",
    category: "domestic",
    regulator: "RBI",
    minInvestment: "Rs 1,000",
    lockIn: "Flexible (penalty for early exit)",
    tax: "Profit added to your income. Taxed at your slab rate.",
    verdict: "GO FOR IT",
    verdictReason: "Safe, regulated, guaranteed returns. Best starting point for beginners.",
    suitedFor: ["First-time investors", "People who need guaranteed returns", "Senior citizens"],
    notSuitedFor: ["People wanting to beat inflation long-term", "Those in highest tax bracket", "Anyone needing high growth"],
    exitGuide: "Break the FD anytime. Bank deducts 0.5-1% of your interest as penalty. Profit is taxed at your income slab rate.",
    entryGuide: "Walk into any bank or open via net banking. Minimum Rs 1,000. Pick your tenure.",
    redFlags: [],
    tag: "",
    apiSymbol: "",
    mfSchemeCode: "",
    businessModel: [
      "How do they make money? They lend your money to others at a higher rate.",
      "Is it safe? Yes, up to 5 lakhs is insured by the government.",
      "What if the bank fails? The government usually steps in to save big banks."
    ],
    bubbleVsReality: {
      bubble: "It's a wealth creator.",
      reality: "It's a wealth protector. It barely beats the rising cost of milk and bread."
    }
  },
  {
    id: "ppf",
    name: "Public Provident Fund (PPF)",
    humanName: "The Government's Piggy Bank",
    hook: "A 15-year commitment where the government keeps your money safe and gives you tax-free interest.",
    category: "domestic",
    regulator: "Government of India",
    minInvestment: "Rs 500 per year",
    lockIn: "15 years (partial withdrawal after 7 years)",
    tax: "Completely tax-free. You don't pay a paisa on the interest.",
    verdict: "GO FOR IT",
    verdictReason: "Unmatched safety and tax benefits for long-term saving.",
    suitedFor: ["Long-term savers", "Tax-saving seekers", "Retirement planning"],
    notSuitedFor: ["People needing money in 2-3 years", "Short-term traders"],
    exitGuide: "Wait for 15 years for full cash back. After 7 years, you can take out some money if you really need it.",
    entryGuide: "Open at any post office or major bank. You need a basic account first.",
    redFlags: [],
    tag: "",
    apiSymbol: "",
    mfSchemeCode: "",
    businessModel: [
      "Where does the money go? The government uses it for national projects.",
      "Who pays the interest? The government sets the rate every 3 months.",
      "Is it guaranteed? Yes, by the central government."
    ],
    bubbleVsReality: {
      bubble: "I can get my money anytime.",
      reality: "Your money is locked. Don't put money here if you need it for next year's holiday."
    }
  },
  {
    id: "nps",
    name: "National Pension System (NPS)",
    humanName: "Your Future Self's Salary",
    hook: "A mix of shares and safe bonds managed by pros to give you a monthly check after you retire.",
    category: "domestic",
    regulator: "PFRDA",
    minInvestment: "Rs 1,000 per year",
    lockIn: "Until age 60",
    tax: "Extra tax saving now. Part of it is tax-free at 60, part must buy a monthly pension.",
    verdict: "GO FOR IT",
    verdictReason: "Low cost and disciplined way to build a retirement fund.",
    suitedFor: ["Salaried employees", "People planning for old age", "Tax savers"],
    notSuitedFor: ["Young people wanting to buy a house soon", "Those who want full control over every rupee"],
    exitGuide: "At 60, you get 60% as a lump sum. The rest stays to pay you a monthly salary.",
    entryGuide: "Register online via eNPS or at your bank. You get a PRAN card.",
    redFlags: [],
    tag: "",
    apiSymbol: "",
    mfSchemeCode: "",
    businessModel: [
      "Who manages it? Professional fund managers approved by the regulator.",
      "What do they buy? A mix of company shares and government loans.",
      "Is it risky? It goes up and down a bit because of company shares, but stays steady long-term."
    ],
    bubbleVsReality: {
      bubble: "It's just another tax saving tool.",
      reality: "It's a long-term engine. It builds a massive bucket of money over 30 years."
    }
  },
  {
    id: "sgb",
    name: "Sovereign Gold Bond (SGB)",
    humanName: "Gold that pays you rent",
    hook: "Paper gold backed by the government. No locker needed, and they pay you 2.5% extra every year.",
    category: "domestic",
    regulator: "RBI",
    minInvestment: "1 gram of gold",
    lockIn: "8 years (exit possible after 5 years)",
    tax: "No tax on the profit if you hold for 8 years. Interest is taxed.",
    verdict: "GO FOR IT",
    verdictReason: "Safest and most profitable way to own gold in India.",
    suitedFor: ["Gold lovers", "Long-term investors", "People tired of locker charges"],
    notSuitedFor: ["People needing gold for a wedding next month", "Short-term speculators"],
    exitGuide: "Wait 8 years for tax-free exit. Or sell on the stock market if you have a demat account.",
    entryGuide: "Buy via your bank's app when the government opens a new window.",
    redFlags: [],
    tag: "",
    apiSymbol: "GOLDBEES.BSE",
    mfSchemeCode: "",
    businessModel: [
      "Is there real gold? No, it's a promise by the government to pay the gold price.",
      "Why the extra 2.5%? It's an incentive to keep people away from physical gold.",
      "Is it safe? As safe as the Indian Rupee."
    ],
    bubbleVsReality: {
      bubble: "I can wear this gold.",
      reality: "It's just a digital certificate. You can't wear it, but it grows faster than a necklace."
    }
  },
  {
    id: "nifty50",
    name: "Nifty 50 Index Fund",
    humanName: "Betting on India's Top 50 Companies",
    hook: "Your money is split across India's 50 biggest giants like Reliance and HDFC. If India grows, you grow.",
    category: "domestic",
    regulator: "SEBI",
    minInvestment: "Rs 500 (SIP)",
    lockIn: "None",
    tax: "12.5% tax on profits if held for more than a year.",
    verdict: "GO FOR IT",
    verdictReason: "Simple, low cost, and historically the best way to grow wealth over 10+ years.",
    suitedFor: ["Long-term wealth builders", "People who don't want to pick stocks", "Everyone"],
    notSuitedFor: ["People who panic when the market drops 10%", "Those needing money in 1-2 years"],
    exitGuide: "Sell anytime. Money hits your bank in 2 days. Remember, short-term drops are normal.",
    entryGuide: "Use any mutual fund app. Search for Nifty 50 Index Fund and start a monthly SIP.",
    redFlags: [],
    tag: "",
    apiSymbol: "",
    mfSchemeCode: "120716",
    businessModel: [
      "Who picks the companies? The index does. No human expert bias.",
      "What if a company fails? It gets kicked out of the top 50 and a new winner enters.",
      "How much does it cost? Very little. Usually less than 0.2% per year."
    ],
    bubbleVsReality: {
      bubble: "It will double my money every year.",
      reality: "It goes up and down. Some years it might even be negative. Patience is the only key."
    }
  },
  {
    id: "largecap",
    name: "Large Cap Mutual Fund",
    humanName: "The Blue Chip Bucket",
    hook: "A pro manager picks the safest, biggest companies for you. Less risky than small companies.",
    category: "domestic",
    regulator: "SEBI",
    minInvestment: "Rs 500",
    lockIn: "None",
    tax: "12.5% tax on profits over 1.25L per year (long term).",
    verdict: "GO FOR IT",
    verdictReason: "Steady growth with relatively lower risk compared to other stock funds.",
    suitedFor: ["Conservative stock investors", "5-year goals"],
    notSuitedFor: ["People wanting 100% safety", "Very short term"],
    exitGuide: "Click Redeem in your app. Money arrives in 2-3 working days.",
    entryGuide: "Pick a top-rated Large Cap fund on any MF app. Check the Expense Ratio first.",
    redFlags: [],
    tag: "",
    apiSymbol: "",
    mfSchemeCode: "118825",
    businessModel: [
      "What do they buy? Companies that are household names.",
      "Why use a manager? To try and beat the basic index (though it's hard).",
      "Is it safe? Safer than small companies, but still moves with the market."
    ],
    bubbleVsReality: {
      bubble: "Expert managers never lose money.",
      reality: "Even experts lose money when the whole market crashes. They just try to lose less."
    }
  },
  {
    id: "smallcap",
    name: "Small Cap Mutual Fund",
    humanName: "The Rocket Ship (with no brakes)",
    hook: "Invests in tiny companies that could become giants. Can grow 50% or drop 50% very fast.",
    category: "domestic",
    regulator: "SEBI",
    minInvestment: "Rs 500",
    lockIn: "None",
    tax: "Standard stock tax (12.5% long term, 20% short term).",
    verdict: "WAIT & WATCH",
    verdictReason: "Currently very expensive. High risk of a big drop if the market cools down.",
    suitedFor: ["Aggressive investors", "People with 10+ years to wait"],
    notSuitedFor: ["Retirees", "People using their emergency fund", "Faint-hearted"],
    exitGuide: "Redeem anytime, but be ready for Exit Loads (penalty) if you leave within 1 year.",
    entryGuide: "Start a small SIP. Never put all your money here at once.",
    redFlags: [
      { level: "yellow", message: "Valuations are very high right now. You might be buying at the peak." }
    ],
    tag: "",
    apiSymbol: "",
    mfSchemeCode: "118778",
    businessModel: [
      "How do they grow? By finding the next Unicorn before everyone else.",
      "What's the catch? Many small companies fail or never grow.",
      "Why Wait & Watch? Because these funds have run up too fast recently."
    ],
    bubbleVsReality: {
      bubble: "This is the fastest way to get rich.",
      reality: "It's also the fastest way to see your 1 lakh become 60,000 in a month."
    }
  },
  {
    id: "reits",
    name: "REITs India",
    humanName: "Digital Landlord",
    hook: "Own a piece of massive office buildings and malls. You get a share of the rent they collect.",
    category: "domestic",
    regulator: "SEBI",
    minInvestment: "Rs 300 - Rs 500 (1 unit)",
    lockIn: "None (sell on exchange)",
    tax: "Complex. Part is interest, part is dividend. Usually taxed at your slab.",
    verdict: "WAIT & WATCH",
    verdictReason: "New in India. Good for diversification but needs more track record.",
    suitedFor: ["People wanting regular income", "Real estate lovers with small budgets"],
    notSuitedFor: ["People who want to live in their investment", "High growth seekers"],
    exitGuide: "Sell your units on the stock exchange (NSE/BSE) via your broker app.",
    entryGuide: "Search for Embassy REIT or Nexus Select on your stock broker app.",
    redFlags: [
      { level: "yellow", message: "Commercial real estate can stay empty if Work from Home increases." }
    ],
    tag: "",
    apiSymbol: "",
    mfSchemeCode: "",
    businessModel: [
      "How do I get paid? They must distribute 90% of their cash profit as dividends.",
      "Who are the tenants? Usually big IT companies and global firms.",
      "Does the price go up? Yes, if the building value increases."
    ],
    bubbleVsReality: {
      bubble: "It's as safe as a house.",
      reality: "It's a stock. The price on your screen will change every second."
    }
  },
  {
    id: "corpbonds",
    name: "Corporate Bonds",
    humanName: "Lending to Companies",
    hook: "You lend money to companies like Tata or Reliance. They pay you higher interest than banks.",
    category: "domestic",
    regulator: "SEBI / RBI",
    minInvestment: "Rs 10,000 (via platforms)",
    lockIn: "Fixed tenure",
    tax: "Interest added to income and taxed at your slab.",
    verdict: "WAIT & WATCH",
    verdictReason: "Higher interest but if the company goes bust, your money is gone. Stick to AAA rated ones.",
    suitedFor: ["People wanting more than FD", "Experienced investors"],
    notSuitedFor: ["Absolute beginners", "People who can't check company health"],
    exitGuide: "Hard to sell before the term ends. You usually have to wait until the bond matures.",
    entryGuide: "Use platforms like GoldenPi or Wint Wealth to browse available bonds.",
    redFlags: [
      { level: "red", message: "High interest often means high risk. If they offer 12%+, be very careful." }
    ],
    tag: "",
    apiSymbol: "",
    mfSchemeCode: "",
    businessModel: [
      "Why do they need my money? To build factories or pay off old loans.",
      "What if they don't pay? You are a creditor. You get in line to get paid from their assets.",
      "What are ratings? AAA is safest. D means they have already failed."
    ],
    bubbleVsReality: {
      bubble: "It's just like a bank FD.",
      reality: "Companies can fail. Banks are much harder to fail because of RBI."
    }
  },
  {
    id: "equity",
    name: "Direct Equity",
    humanName: "Owning a Piece of a Business",
    hook: "Buying shares of a company directly. You become a part-owner. High risk, high reward.",
    category: "domestic",
    regulator: "SEBI",
    minInvestment: "Price of 1 share",
    lockIn: "None",
    tax: "12.5% long term, 20% short term.",
    verdict: "CHECK RED FLAGS",
    verdictReason: "Great if you know what you're doing. Dangerous if you're following tips.",
    suitedFor: ["People who enjoy reading business news", "Long-term risk takers"],
    notSuitedFor: ["People looking for quick tips", "Those who can't handle 30% drops"],
    exitGuide: "Sell instantly during market hours (9:15 AM to 3:30 PM).",
    entryGuide: "Open a Demat account (Zerodha, Groww, etc.) and buy shares of companies you use.",
    redFlags: [
      { level: "yellow", message: "Avoid Penny Stocks (shares costing Rs 2-5). They are often traps." },
      { level: "red", message: "Never invest based on WhatsApp or Telegram tips." }
    ],
    tag: "",
    apiSymbol: "RELIANCE.BSE",
    mfSchemeCode: "",
    businessModel: [
      "How do I make money? Share price goes up + Dividends.",
      "What's the risk? The company could lose to a competitor or go bankrupt.",
      "Why Check Red Flags? Because individual stocks are much riskier than a group of 50 stocks."
    ],
    bubbleVsReality: {
      bubble: "I can find the next Apple or Google.",
      reality: "Most people lose money trying to find the next big thing. Stick to quality."
    }
  },
  {
    id: "chitfunds",
    name: "Chit Funds",
    humanName: "The Neighborhood Money Circle",
    hook: "A group of people put money in a pot. One person takes the pot every month via an auction.",
    category: "domestic",
    regulator: "State Registrar",
    minInvestment: "Varies",
    lockIn: "Duration of the chit",
    tax: "Dividends are usually not taxed, but check local rules.",
    verdict: "STAY AWAY",
    verdictReason: "Extremely high risk of fraud. Many unregistered chits vanish with your money.",
    suitedFor: ["Small businessmen needing quick loans (maybe)"],
    notSuitedFor: ["Everyone else", "People wanting safe growth"],
    exitGuide: "Very difficult. You usually have to keep paying until the circle completes.",
    entryGuide: "Usually via a local foreman or agent. We recommend avoiding this.",
    redFlags: [
      { level: "red", message: "Unregistered chit funds are illegal and have zero protection." },
      { level: "red", message: "The Foreman can run away with the entire month's collection." }
    ],
    tag: "DANGER",
    apiSymbol: "",
    mfSchemeCode: "",
    businessModel: [
      "How does it work? It's a social credit system. You save and borrow at the same time.",
      "Is it regulated? Only if registered. Most neighborhood ones are not.",
      "Why Stay Away? Because there are better, safer ways to save now."
    ],
    bubbleVsReality: {
      bubble: "It's a great way to save with friends.",
      reality: "Money and friends don't mix well when the pot goes missing."
    }
  },
  {
    id: "usetfs",
    name: "US ETFs via LRS",
    humanName: "Owning the World's Giants",
    hook: "Invest in US companies like Apple, Google, and Tesla directly in Dollars.",
    category: "foreign",
    regulator: "SEC (US) / RBI",
    minInvestment: "$1 onwards",
    lockIn: "None",
    tax: "Taxed at your slab rate in India. 20% TCS (advance tax) for large amounts.",
    verdict: "GO FOR IT",
    verdictReason: "Great for diversification. You earn from stock growth + Dollar getting stronger.",
    suitedFor: ["People with kids planning to study abroad", "Diversification seekers"],
    notSuitedFor: ["Small investors (fees are high)", "Short term"],
    exitGuide: "Sell units, convert Dollars back to Rupees. Takes 3-5 days to hit Indian bank.",
    entryGuide: "Use apps like Vested or IndMoney that specialize in US stocks.",
    redFlags: [
      { level: "yellow", message: "Currency conversion fees can eat 1-2% of your money both ways." }
    ],
    tag: "FOREIGN",
    apiSymbol: "VOO",
    mfSchemeCode: "",
    businessModel: [
      "What am I buying? Usually the S&P 500 (Top 500 US companies).",
      "Why Dollars? If the Rupee falls, your investment value in Rupees goes up.",
      "Is it safe? Yes, US markets are very strictly regulated."
    ],
    bubbleVsReality: {
      bubble: "The US market always goes up.",
      reality: "It can have lost decades where it doesn't move. Don't put all your eggs here."
    }
  },
  {
    id: "intlmf",
    name: "International Mutual Funds",
    humanName: "The Global Bucket",
    hook: "An Indian mutual fund that buys shares in foreign companies for you. No need for a US account.",
    category: "foreign",
    regulator: "SEBI",
    minInvestment: "Rs 500",
    lockIn: "None",
    tax: "Taxed like debt funds (at your income slab rate).",
    verdict: "GO FOR IT",
    verdictReason: "Easiest way to get foreign exposure without the headache of Dollar accounts.",
    suitedFor: ["Beginners wanting global exposure", "Long term savers"],
    notSuitedFor: ["People in the 30% tax bracket (high tax)", "Short term"],
    exitGuide: "Same as Indian mutual funds. Redeem in your app, get money in 4-5 days.",
    entryGuide: "Search for Nasdaq 100 or US Equity funds on your MF app.",
    redFlags: [
      { level: "yellow", message: "SEBI often stops new investments in these funds due to limit issues." }
    ],
    tag: "FOREIGN",
    apiSymbol: "",
    mfSchemeCode: "118741",
    businessModel: [
      "How do they work? They either buy stocks directly or buy a US-based fund.",
      "What's the benefit? You don't need to worry about US tax filings.",
      "Is it expensive? Slightly higher fees than domestic funds."
    ],
    bubbleVsReality: {
      bubble: "I'm investing in the future.",
      reality: "You're paying a high tax for the convenience of global exposure."
    }
  },
  {
    id: "digitalgold",
    name: "Digital Gold",
    humanName: "Gold in your Phone",
    hook: "Buy gold for as little as Rs 1. Stored in a safe vault for you.",
    category: "foreign",
    regulator: "None (Unregulated)",
    minInvestment: "Rs 1",
    lockIn: "None",
    tax: "3% GST on purchase. Capital gains tax on profit.",
    verdict: "WAIT & WATCH",
    verdictReason: "Convenient but unregulated. SGB or Gold ETFs are safer and cheaper.",
    suitedFor: ["Very small savers", "People who want to convert to physical gold later"],
    notSuitedFor: ["Serious investors", "Large amounts"],
    exitGuide: "Sell back to the platform or ask for physical delivery (fees apply).",
    entryGuide: "Available on GPay, PhonePe, and many jewelry apps.",
    redFlags: [
      { level: "red", message: "There is no government regulator for Digital Gold. You depend on the company's honesty." },
      { level: "yellow", message: "Spread (difference between buy and sell price) can be 3-6%." }
    ],
    tag: "FOREIGN",
    apiSymbol: "",
    mfSchemeCode: "",
    businessModel: [
      "Is there real gold? The companies claim to keep it in Brinks or SafeGold vaults.",
      "How do they make money? From the Spread (they sell high, buy low).",
      "Why Wait & Watch? Because SGB is a much better deal for most people."
    ],
    bubbleVsReality: {
      bubble: "It's the easiest way to buy gold.",
      reality: "It's an expensive way to buy gold. You lose 3% instantly to GST."
    }
  },
  {
    id: "crypto",
    name: "Crypto",
    humanName: "Digital Magic Money",
    hook: "Digital tokens like Bitcoin. Not backed by any government or asset. Purely based on demand.",
    category: "foreign",
    regulator: "None",
    minInvestment: "Rs 100",
    lockIn: "None",
    tax: "Flat 30% tax on profits. No loss set-off. 1% TDS on every trade.",
    verdict: "STAY AWAY",
    verdictReason: "Extremely high risk. No regulator. Tax rules are designed to discourage it.",
    suitedFor: ["People who are okay with losing 100% of their money", "Tech hobbyists"],
    notSuitedFor: ["99% of people", "Retirement money", "Emergency funds"],
    exitGuide: "Sell on an exchange and withdraw to bank. Can be blocked if the exchange has issues.",
    entryGuide: "Exchanges like WazirX or CoinDCX. We strongly advise against it for serious savings.",
    redFlags: [
      { level: "red", message: "Zero regulation. If your account is hacked, no one can help you." },
      { level: "red", message: "Prices can drop 90% in a week. It's gambling, not investing." }
    ],
    tag: "FOREIGN",
    apiSymbol: "BTCUSD",
    mfSchemeCode: "",
    businessModel: [
      "What is it? A decentralized ledger. It has value only because others think it does.",
      "Who controls it? No one. That's the feature and the bug.",
      "Why Stay Away? Because it's too unpredictable for life's important goals."
    ],
    bubbleVsReality: {
      bubble: "It's the future of money.",
      reality: "It's currently a highly taxed, unregulated casino."
    }
  }
];
