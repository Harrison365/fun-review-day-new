const {
  removeAgents,
  makeNameTags,
  createPoll,
} = require("./1-human-resources");
const NCFruitBowl = require("../data/challenge1-data");

describe("removeAgents()", () => {
  test("returns an empty array if given an empty array", () => {
    const people = [];
    const expected = [];
    const actual = removeAgents(people);
    expect(actual).toEqual(expected);
  });
  test("returns an array with the employee if given an array with one non-mole", () => {
    const people = [{ name: "Sam", profession: "artist" }];
    const expected = [{ name: "Sam", profession: "artist" }];
    const actual = removeAgents(people);
    expect(actual).toEqual(expected);
  });
  test("returns an array with the employees if given an array with multiple non-moles", () => {
    const people = [
      { name: "Sam", profession: "artist" },
      { name: "Paul", profession: "dancer" },
    ];
    const expected = [
      { name: "Sam", profession: "artist" },
      { name: "Paul", profession: "dancer" },
    ];
    const actual = removeAgents(people);
    expect(actual).toEqual(expected);
  });
  test("returns an empty array if given an array with one mole", () => {
    const people = [{ name: "Mitch", profession: "mole" }];
    const expected = [];
    const actual = removeAgents(people);
    expect(actual).toEqual(expected);
  });
  test("returns an empty array if given an array with only moles", () => {
    const people = [
      { name: "Mitch", profession: "mole" },
      { name: "Anat", profession: "mole" },
    ];
    const expected = [];
    const actual = removeAgents(people);
    expect(actual).toEqual(expected);
  });
  test("returns an array containing no moles if given an array of multiple people", () => {
    const people = [
      { name: "Sam", profession: "artist" },
      { name: "Mitch", profession: "mole" },
      { name: "Anat", profession: "mole" },
      { name: "Paul", profession: "dancer" },
    ];
    const expected = [
      { name: "Sam", profession: "artist" },
      { name: "Paul", profession: "dancer" },
    ];
    const actual = removeAgents(people);
    expect(actual).toEqual(expected);
  });
  test("doesnt mutate original", () => {
    let input = [
      { name: "Sam", profession: "artist" },
      { name: "Mitch", profession: "mole" },
      { name: "Anat", profession: "mole" },
      { name: "Paul", profession: "dancer" },
    ];
    removeAgents(input);
    expect(input).toEqual([
      { name: "Sam", profession: "artist" },
      { name: "Mitch", profession: "mole" },
      { name: "Anat", profession: "mole" },
      { name: "Paul", profession: "dancer" },
    ]);
  });
  test("returned array holds different memory reference from initial array argument provided", () => {
    const input = [
      { name: "Sam", profession: "artist" },
      { name: "Mitch", profession: "mole" },
      { name: "Anat", profession: "mole" },
      { name: "Paul", profession: "dancer" },
    ];
    expect(removeAgents(input)).not.toBe(input);
  });
});

describe("makeNameTags()", () => {
  test("returns an empty array if given an empty array", () => {
    const guests = [];
    const expected = [];
    const actual = makeNameTags(guests);
    expect(actual).toEqual(expected);
  });
  test("generates a name tag for 1 guest", () => {
    const guests = [
      {
        title: "Mr",
        forename: "Sam",
        surname: "Caine",
        age: 30,
        company: "Northcoders",
      },
    ];
    const expected = ["Mr Sam Caine, Northcoders"];
    const actual = makeNameTags(guests);
    expect(actual).toEqual(expected);
  });
  test("generates name tags for multiple guests", () => {
    const guests = [
      {
        title: "Mr",
        forename: "Sam",
        surname: "Caine",
        age: 30,
        company: "Northcoders",
      },
      {
        title: "Mr",
        forename: "Paul",
        surname: "Rogerson",
        age: 28,
        company: "Northcoders",
      },
      {
        title: "Mr",
        forename: "Potato",
        surname: "Head",
        age: 92,
        company: "Toys'R'us",
      },
    ];
    const expected = [
      "Mr Sam Caine, Northcoders",
      "Mr Paul Rogerson, Northcoders",
      "Mr Potato Head, Toys'R'us",
    ];
    const actual = makeNameTags(guests);
    expect(actual).toEqual(expected);
  });
});

describe("createPoll()", () => {
  test("returns an empty object when passed an empty array", () => {
    const items = [];
    const expected = {};
    const actual = createPoll(items);
    expect(actual).toEqual(expected);
  });
  test("counts an item once if it is the only item in the array", () => {
    const items = ["cake"];
    const expected = { cake: 1 };
    const actual = createPoll(items);
    expect(actual).toEqual(expected);
  });
  test("counts each item once if there are only one of them in the array", () => {
    const items = ["cake", "biscuit"];
    const expected = { cake: 1, biscuit: 1 };
    const actual = createPoll(items);
    expect(actual).toEqual(expected);
  });
  test("counts each occurrence of each item in the array", () => {
    const items = NCFruitBowl;
    const expected = {
      apple: 276,
      pear: 223,
      banana: 263,
      orange: 238,
      "lonesome plum": 1,
    };
    const actual = createPoll(items);
    expect(actual).toEqual(expected);
  });
});
