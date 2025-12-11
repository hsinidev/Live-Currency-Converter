const API_BASE_URL = 'https://api.frankfurter.app';

export async function getExchangeRate(from: string, to: string): Promise<number> {
  if (from === to) {
    return 1;
  }
  try {
    const response = await fetch(`${API_BASE_URL}/latest?from=${from}&to=${to}`);
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const rate = data.rates[to];

    if (typeof rate !== 'number') {
      throw new Error(`Invalid rate format received for ${to}`);
    }
    return rate;
  } catch (error) {
    console.error('Error fetching exchange rate from Frankfurter API:', error);
    throw new Error('Could not fetch exchange rate.');
  }
}
