import { hashNameAndPushIntoBlockChain } from "../../src/simpsmrcont/assembly";

describe("Simple Smart Contract Test.", () => {


  it("Should hash string 'Brian'", () => {
    expect(hashNameAndPushIntoBlockChain('Brian')).toBe(64452582, "Hash for 'Brian' should be 64452582");
  });
});
