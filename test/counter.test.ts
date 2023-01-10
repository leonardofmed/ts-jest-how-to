import { Counter } from '../src/counter';

jest.mock('../src/counter');

// Create a mock counter instance
//const CounterMock = Counter as jest.Mock<Counter>;

describe("Counter", () => {

    // Before each test, instantiate the counter
    let counter: Counter;
    beforeEach(() => {
        //counter = new CounterMock() as jest.Mocked<Counter>;
        counter = new Counter();
    });

    it("should be an active counter when user enters the page and start with 0", () => {
        expect(counter.counter).toBe(0);
    });

    it.todo("should increment to the counter");

    it.todo("should increment to the multiplier");

});