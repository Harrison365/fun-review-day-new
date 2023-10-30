const { deeplyEquals, flat, deepEntries } = require("./4-recursion");

describe("deepEntries", () => {
  it("returns an empty array when passed an empty object", () => {
    const actual = deepEntries({});
    const expected = [];
    expect(actual).toEqual(expected);
  });
  it("returns an array containing an array of the key and value for an object with only one key value pair", () => {
    const actual = deepEntries({ name: "Paul" });
    const expected = [["name", "Paul"]];
    expect(actual).toEqual(expected);
  });
  it("returns an array containing arrays of the keys and values for objects with multiple key value pairs", () => {
    const actual = deepEntries({ name: "Paul", age: 28 });
    const expected = [
      ["name", "Paul"],
      ["age", 28],
    ];
    expect(actual).toEqual(expected);
  });
  it("returns an array containing arrays of the keys and values for objects with nested key value pairs", () => {
    const actual = deepEntries({ name: "Paul", cat: { name: "Dave" } });
    const expected = [
      ["name", "Paul"],
      ["cat", [["name", "Dave"]]],
    ];
    expect(actual).toEqual(expected);
  });
  it("returns an array containing arrays of the keys and values for objects with extremely nested key value pairs", () => {
    const actual = deepEntries({
      name: "Paul",
      cat: {
        name: "Dave",
        address: {
          city: "Manchester",
          postCode: "M30 W11",
        },
      },
    });
    const expected = [
      ["name", "Paul"],
      [
        "cat",
        [
          ["name", "Dave"],
          [
            "address",
            [
              ["city", "Manchester"],
              ["postCode", "M30 W11"],
            ],
          ],
        ],
      ],
    ];
    expect(actual).toEqual(expected);
  });
});

describe("deeplyEquals", () => {
  it("returns a boolean indicating whether two primitive values are equal", () => {
    let actual = deeplyEquals(1, 1);
    expect(actual).toBe(true);
    actual = deeplyEquals(1, 2);
    expect(actual).toBe(false);
    actual = deeplyEquals("hello", "hello");
    expect(actual).toBe(true);
    actual = deeplyEquals("hello", "hi");
    expect(actual).toBe(false);
    actual = deeplyEquals(true, true);
    expect(actual).toBe(true);
    actual = deeplyEquals(true, false);
    expect(actual).toBe(false);
    actual = deeplyEquals(1, "1");
    expect(actual).toBe(false);
    actual = deeplyEquals("false", false);
    expect(actual).toBe(false);
    actual = deeplyEquals(null, false);
    expect(actual).toBe(false);
  });
  it("returns a boolean indicating whether two objects have the same key value pairs", () => {
    let input1 = { name: "Paul" };
    let input2 = { name: "Paul" };
    let actual = deeplyEquals(input1, input2);
    expect(actual).toBe(true);
    input1 = { name: "Paul" };
    input2 = { name: "Mitch" };
    actual = deeplyEquals(input1, input2);
    expect(actual).toBe(false);
    input1 = { name: "Paul" };
    input2 = { age: "Paul" };
    actual = deeplyEquals(input1, input2);
    expect(actual).toBe(false);
    input1 = { name: "Paul", age: 28 };
    input2 = { name: "Paul", age: 28 };
    actual = deeplyEquals(input1, input2);
    expect(actual).toBe(true);
    input1 = { name: "Mitch", happy: true };
    input2 = { name: "Mitch", happy: false };
    actual = deeplyEquals(input1, input2);
    expect(actual).toBe(false);
  });
  it("returns a boolean indicating whether two nested arrays or objects are equal", () => {
    let input1 = { name: "Paul", cat: { name: "Dave" } };
    let input2 = { name: "Paul", cat: { name: "Dave" } };
    let actual = deeplyEquals(input1, input2);
    expect(actual).toBe(true);
    input1 = { name: "Paul", cat: { name: "Dave" } };
    input2 = { name: "Paul", cat: { name: "Mitch" } };
    actual = deeplyEquals(input1, input2);
    expect(actual).toBe(false);
    input1 = { name: "Paul", cat: { name: "Dave" } };
    input2 = { name: "Paul", cat: { catName: "Dave" } };
    actual = deeplyEquals(input1, input2);
    expect(actual).toBe(false);
    input1 = [1, 2, { a: "hello" }];
    input2 = [1, 2, { a: "hello" }];
    actual = deeplyEquals(input1, input2);
    expect(actual).toBe(true);
    input1 = [1, 2, { a: "hello" }];
    input2 = [1, 2, { a: "goodbye" }];
    actual = deeplyEquals(input1, input2);
    expect(actual).toBe(false);
  });
  it("returns a boolean indicating whether two nested objects containing arrays are equal", () => {
    let input1 = {
      name: "Paul",
      cat: { name: "Dave", favouriteNumbers: [1, 2, 3] },
    };
    let input2 = {
      name: "Paul",
      cat: { name: "Dave", favouriteNumbers: [1, 2, 3] },
    };
    let actual = deeplyEquals(input1, input2);
    expect(actual).toBe(true);
    input1 = {
      name: "Paul",
      cat: { name: "Dave", favouriteNumbers: [1, 2, 3] },
    };
    input2 = {
      name: "Paul",
      cat: { name: "Dave", favouriteNumbers: [1, 2, 4] },
    };
    actual = deeplyEquals(input1, input2);
    expect(actual).toBe(false);
  });
});

describe("flat", () => {
  it("returns a flat array unmodified", () => {
    let expected = [1, 2];
    let input = [1, 2];
    let actual = flat(input);
    expect(actual).toEqual(expected);
    expected = ["hello", 2, "you"];
    input = ["hello", 2, "you"];
    actual = flat(input);
    expect(actual).toEqual(expected);
  });
  it("returns a flattened nested array", () => {
    let expected = [1, 2];
    let input = [1, [2]];
    let actual = flat(input);
    expect(actual).toEqual(expected);
    expected = ["hello", 2, "you"];
    input = ["hello", [2, "you"]];
    actual = flat(input);
    expect(actual).toEqual(expected);
  });
  it("returns a flattened extremely nested array", () => {
    let expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let input = [1, [2, 3, [4, [5], 6]], 7, [8, [9], 10]];
    let actual = flat(input);
    expect(actual).toEqual(expected);
    expected = ["hello", 2, { name: "Mitch" }, true, false, undefined];
    input = ["hello", [2, { name: "Mitch" }, [true, false, undefined]]];
    actual = flat(input);
    expect(actual).toEqual(expected);
  });
});
