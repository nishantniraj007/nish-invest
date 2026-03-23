export const getAllocation = (amount, timeline, risk) => {
  let total = 0;
  if (amount === "Under Rs 50,000") total = 25000;
  else if (amount === "Rs 50,000 to Rs 5 lakh") total = 275000;
  else total = 1000000;

  // Logic mapping
  if (timeline === "Within 6 months") {
    return [
      { bucket: "Safe Bank FD", amount: total, reason: "Since you need money soon, safety is #1. Don't risk it in stocks." }
    ];
  }

  if (timeline === "In 1-3 years") {
    if (risk === "Cannot sleep if it drops") {
      return [
        { bucket: "Safe Bank FD / Post Office", amount: total, reason: "Keep it 100% safe. Your peace of mind is worth more than 1% extra interest." }
      ];
    }
    return [
      { bucket: "Short Term Bonds", amount: Math.round(total * 0.7), reason: "Steady growth with low risk." },
      { bucket: "Large Company Shares (Index)", amount: Math.round(total * 0.3), reason: "A small bit of growth to beat inflation." }
    ];
  }

  if (timeline === "In 7+ years" || timeline === "I don't know") {
    if (risk === "Cannot sleep if it drops") {
      return [
        { bucket: "PPF / Gold Bonds", amount: Math.round(total * 0.6), reason: "Safe long-term growth backed by the government." },
        { bucket: "Large Company Shares (Index)", amount: Math.round(total * 0.4), reason: "Slow and steady growth over many years." }
      ];
    }
    if (risk === "OK with some ups and downs") {
      return [
        { bucket: "Nifty 50 Index Fund", amount: Math.round(total * 0.6), reason: "The core engine for your long-term wealth." },
        { bucket: "PPF / Gold Bonds", amount: Math.round(total * 0.3), reason: "The safety net for your money." },
        { bucket: "Small Company Shares", amount: Math.round(total * 0.1), reason: "A small 'booster' for higher growth." }
      ];
    }
    return [
      { bucket: "Nifty 50 Index Fund", amount: Math.round(total * 0.5), reason: "Main growth engine." },
      { bucket: "Small Company Shares", amount: Math.round(total * 0.3), reason: "High growth potential for your long timeline." },
      { bucket: "Gold Bonds (SGB)", amount: Math.round(total * 0.2), reason: "Insurance against market crashes." }
    ];
  }

  return [{ bucket: "Safe Bank FD", amount: total, reason: "When in doubt, keep it in the bank." }];
};
