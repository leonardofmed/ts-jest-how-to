/**
 * ! The system under test for this unit test is the service class !
 * 
 * A module factory is a function that returns the mock. 
 * In Jest the jest.mock(path, moduleFactory) does the job by taking the module factory as the second parameter. 
 * A module factory must be a function that returns a function.
*/

import ExchangeRateClient from "../src/exchangeRateClient";
import ExchangeRateService from "../src/exchangeRateService";

/**
 * This mock will return two promise resolved values of 3.6725 and 0 respectively for the two consecutive calls.
 * One important thing to take note of here is the const’s name is prefixed with mock.
 * This prefix is a requirement in Jest, since calls to jest.mock() are hoisted on the top of the file.
 * If you name this mock variable beginning with fake or spy it will not work throwing a ReferenceError.
 * @link https://jestjs.io/docs/es6-class-mocks#calling-jestmock-with-the-module-factory-parameter
 */
const mockGetLatestExchangeRate = jest.fn().mockResolvedValueOnce(3.6725).mockResolvedValueOnce(0);

/**
 * The module factory is used to mock the client class, and the factory returns a jest mock implementation function. 
 * This function returns a dummy object having the getLatestExchangeRate method which is assigned the mock function.
 * The main thing to remember here is, the whole client class has been mocked with a Module factory function. 
 * This factory function returns a dummy object with a method that has the mock function assigned to it.
 */
jest.mock('../src/exchangeRateClient', () => {
	return jest.fn().mockImplementation(() => {
		return { getLatestExchangeRate: mockGetLatestExchangeRate };
	});
});

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
			/**
			 * The test is to get the latest rate of 1 USD to AED and it is expected to be 3.6725. 
			 * The value 3.6725 is the same as the first resolve value of the mock.
			 */
			const latestExchangeRate = await service.getLatestExchangeRate('USD', 'AED');
			expect(latestExchangeRate).toBe(3.6725);
			expect(ExchangeRateClient).toHaveBeenCalled();

			/**
			 * the constructor mock for the client is expected to have been called. 
			 * Similarly, the mock function is also expected to have been called and to have been called with the currency pair of USD to AED.
			 */
			expect(mockGetLatestExchangeRate).toHaveBeenCalled();
			expect(mockGetLatestExchangeRate).toHaveBeenCalledWith('USD', 'AED');
		});

		/**
		 * Another test verifying the error scenario. In case of any errors, a 0 is returned.
		 * The main difference is the value returned is asserted to be 0. 
		 * The expected 0 is the second resolved value of the mock function. 
		 * In the end, the mock function is again expected to have been called.
		 */
		it('should return 0 as latest exchange rate in case of error on client', async () => {
			const latestExchangeRate = await service.getLatestExchangeRate('USD', 'CAD');
			expect(latestExchangeRate).toBe(0);
			expect(mockGetLatestExchangeRate).toHaveBeenCalled();
		});
	});
});