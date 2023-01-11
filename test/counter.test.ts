import { Counter } from '../src/counter';

//jest.mock('../src/counter'); // Counter is now a mock constructor
//const CounterMock = Counter as jest.Mock<Counter>;

describe("Counter", () => {

    // Before each test, instantiate the counter
    let counter: Counter;
    let spy;
    let mockCounterElement: HTMLButtonElement;
    let mockMultipleElement: HTMLButtonElement;
    beforeEach(() => {
        //counter = new CounterMock() as jest.Mocked<Counter>;
        counter = new Counter();
        spy = jest.spyOn(document, 'getElementById');

        mockCounterElement = document.createElement("button");
        spy.mockReturnValue(mockCounterElement);
        mockMultipleElement = document.createElement("button");
        spy.mockReturnValue(mockMultipleElement);

        counter.setupCounter(mockCounterElement);
        counter.setupMultiple(mockMultipleElement);
    });

    it("should be an active counter when user enters the page and start with 0", () => {
        expect(counter.counter).toBe(0);
    });

    it("should increment to the counter after click", () => {
        mockCounterElement.click(); // Set the main counter to 1
        expect(counter.counter).toBe(1);
    });

    it("should have double the counter value in multiplier element", () => {
        mockCounterElement.click(); // Set the main counter to 1
        expect(mockMultipleElement.innerHTML).toBe("multiple is 2");
    });

});