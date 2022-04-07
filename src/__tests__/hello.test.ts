import * as Hello from "../hello";

// Jest automatically mocks imports, so to get access to actual functions
// we have to do the following - must be an easier way
// NOTE: Yes, there is an easier way - turn OFF automock in jest.config.ts

// const { randomDice, say } = jest.requireActual<typeof Hello>("../hello");

//

const lessThan7 = (n: Number) => n < 7;

describe("Dice", () => {
  test("Not even wrong!", () => {
    expect(Hello.randomDice()).toBeLessThan(7);
  });

  test("Check Age", () => {
    expect(Hello.Age).toBe(23);
  });
});
