import { Axios } from "axios";

// The class starts with an export default to export the ES6 class as it is the only thing to be exported in this module
export default class ExchangeRateClient {
	private axios: Axios;

	constructor(axios: Axios) {
		// Set the base URL and the Axios object on class level
		axios.defaults.baseURL = 'https://open.er-api.com/v6';
		this.axios = axios;
	}

	/**
	 * Calls the API to fetch the latest exchange rates of the from currency and plucks out the rate of the to currency else returns 0
	 */
	public async getLatestExchangeRate(fromCurrency = 'USD', toCurrency = 'AUD'): Promise<number> {
		try {
			const response = await this.axios.get(`/latest/${fromCurrency}`);
			return response.data.rates[toCurrency] || 0;

		} catch (e) {
			// Conditioning just to stop linter 'unknow' error
			if (e instanceof Error) console.log(`Error while getting exchange rate ${e.message}`, e);
			return 0;
		}
	}
}