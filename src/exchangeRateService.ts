import ExchangeRateClient from "./exchangeRateClient";
import axios from 'axios';

export default class ExchangeRateService {
	private client: ExchangeRateClient;
	constructor() {
		this.client = new ExchangeRateClient(axios);
	}

	/**
	 * Simple calls the client's method with the same name
	 */
	async getLatestExchangeRate(fromCurrency = 'USD', toCurrency = 'AUD') {
		return this.client.getLatestExchangeRate(fromCurrency, toCurrency);
	}
}