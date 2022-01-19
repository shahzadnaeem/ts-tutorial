import * as Hello from "../hello";

const { randomDice } = jest.requireActual<typeof Hello>("../hello");

describe("Dice", () => {
    test("Not even wrong!", () => {
        expect(randomDice()).toBe(7);
    });
});
