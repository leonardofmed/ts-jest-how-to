import { Counter } from '../src/counter';

jest.mock('../src/counter');

const CounterMock = Counter as jest.Mock<Counter>;

describe("The Counter", () => {

    it.todo("should be an active counter when user enters the page", () => {

    });

    it.todo("should increment to the counter");

    it.todo("should increment to the multiplier");

});