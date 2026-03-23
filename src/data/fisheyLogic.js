export const scamList = [
  "Sahara",
  "Rose Valley",
  "Speak Asia",
  "Saradha",
  "PACL",
  "Pearls",
  "City Limouzines",
  "IMA Jewels",
  "Heera Gold",
  "QNet",
  "Amway (Prize Chits Act issues)",
  "Social Trade",
  "GainBitcoin",
  "BitConnect",
  "StockGuru",
  "NSEL",
  "EMU Farming",
  "Goat Farming scams",
  "Solar Panel investment scams",
  "Rice Puller scams"
];

export const checkScamName = (name) => {
  if (!name) return { status: 'neutral', message: "Enter a name to check." };
  const found = scamList.some(scam => name.toLowerCase().includes(scam.toLowerCase()));
  if (found) {
    return { status: 'red', message: "RED ALERT: This name matches known historical scams or suspicious entities. Stay away!" };
  }
  return { status: 'yellow', message: "Not in our known scam list, but always verify on the official SEBI or RBI website before sending money." };
};

export const checkReturns = (percent) => {
  const val = parseFloat(percent);
  if (isNaN(val)) return { status: 'neutral', message: "Enter a number." };
  if (val < 12) return { status: 'green', message: "This is within a realistic range for legal investments in India." };
  if (val >= 12 && val <= 18) return { status: 'yellow', message: "Warning: High returns usually mean high risk. Very few legal things pay this much consistently." };
  return { status: 'red', message: "RED ALERT: Anything promising more than 18% guaranteed is almost certainly a scam. No legal business can sustain this." };
};

export const checkWithdrawal = (answer) => {
  if (answer === 'yes') return { status: 'green', message: "Good. Real investments let you take your money back (even if there is a small penalty)." };
  if (answer === 'no') return { status: 'red', message: "RED ALERT: If you can't get your money back when you want, it's a trap. Don't put money in a one-way street." };
  return { status: 'yellow', message: "Unclear. If they are vague about how to get your money back, they are hiding something." };
};

export const checkPressure = (answer) => {
  if (answer === 'yes') return { status: 'red', message: "RED ALERT: Scammers use 'Limited Time' to stop you from thinking. No good investment disappears in 24 hours." };
  return { status: 'green', message: "Good. Take your time. The right investment will still be there tomorrow." };
};

export const checkUPI = (upi) => {
  if (!upi) return { status: 'neutral', message: "Enter UPI ID." };
  const validSuffixes = ['@okaxis', '@oksbi', '@okicici', '@okhdfcbank', '@brk', '@valid'];
  const isValid = validSuffixes.some(suffix => upi.toLowerCase().endsWith(suffix));
  if (isValid) return { status: 'green', message: "This looks like a standard bank UPI ID." };
  return { status: 'yellow', message: "Warning: This UPI ID looks unusual. Scammers often use personal or strange-looking IDs. Verify the name on the payment screen." };
};
