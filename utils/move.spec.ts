import { expect } from "chai";
import { moveBackward, moveForward } from "./move";

describe("moveForward", () => {
  it("works", () => {
    expect(moveForward([1, 2, 3])).to.deep.eq([2, 3, 1]);
  });
});

describe("moveBackward", () => {
  it("works", () => {
    expect(moveBackward([1, 2, 3])).to.deep.eq([3, 1, 2]);
  });
});
