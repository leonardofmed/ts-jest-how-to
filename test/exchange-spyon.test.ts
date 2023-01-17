/**
 * ! The system under test for this unit test is the service class !
 * 
 * The SpyOn method helps to selectively mock the needed method(s) without the need to mock the whole class.
*/

import ExchangeRateClient from "../src/exchangeRateClient";
import ExchangeRateService from "../src/exchangeRateService";

/**
 * Rather than mocking the whole class, a spy has been attached to the getLatestExchangeRate method of the class’ prototype.
 * This is done because JavaScript works with Prototypal inheritance.
 * This makes it possible to intercept the call to the real class and doctor in the values you want the method to respond with for the test’s context.
 */
const getLatestExchangeRateSpy = jest.spyOn(ExchangeRateClient.prototype, 'getLatestExchangeRate')
	.mockResolvedValueOnce(3.6725)
	.mockResolvedValueOnce(0);

/**
 * In this test code is there is no expectation for the constructor to be called. 
 * As the whole object with the constructor has not been mocked it is not relevant for this way of testing.
*/

describe('ExchangeRateService', () => {
	let service: ExchangeRateService;

	beforeEach(() => {
		service = new ExchangeRateService();
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});

	describe('getLatestExchangeRate', () => {
		it('should get the latest exchange rate', async () => {
			const latestExchangeRate = await service.getLatestExchangeRate('USD', 'AED');
			expect(latestExchangeRate).toBe(3.6725);

			expect(getLatestExchangeRateSpy).toHaveBeenCalled();
			expect(getLatestExchangeRateSpy).toHaveBeenCalledWith('USD', 'AED');
		});

		it('should return 0 as latest exchange rate in case of error on client', async () => {
			const latestExchangeRate = await service.getLatestExchangeRate('USD', 'CAD');
			expect(latestExchangeRate).toBe(0);
			expect(getLatestExchangeRateSpy).toHaveBeenCalled();
		});
	});
});