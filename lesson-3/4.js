function extractCurrencyValue(price) {
  if (typeof price !== 'string') {
    return null;
  }
  return parseFloat(price.replace(/[^0-9\.,]/g, ''));
}
extractCurrencyValue(price);
expoets.extractCurrencyValue = extractCurrencyValue;
