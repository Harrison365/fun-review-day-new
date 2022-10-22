// 1

function removeAgents(people) {
  const cleanPeople = people.filter((person) => {
    if (person.profession != "mole") return person;
  });

  return cleanPeople;
}
//you would ned to test for putity of function if it were .map, not filter (as filter returns a new array and doesn't mutate the original)

// 2

function makeNameTags() {}

// 3

function createPoll() {}

module.exports = { removeAgents, makeNameTags, createPoll };
