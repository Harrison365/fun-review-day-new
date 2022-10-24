// 1

function removeAgents(people) {
  const cleanPeople = people.filter((person) => {
    if (person.profession != "mole") return person;
  });

  return cleanPeople;
}
//you would ned to test for putity of function if it were .map, not filter (as filter returns a new array and doesn't mutate the original)

// 2

function makeNameTags(arr) {
  let newArr = arr.map((person) => {
    return `${person.title} ${person.forename} ${person.surname}, ${person.company}`;
  });

  return newArr;
}

// 3

function createPoll(items) {
  const poll = {};
  items.forEach((item) => {
    if (poll[item]) poll[item]++;
    else poll[item] = 1;
  });

  return poll;
}

module.exports = { removeAgents, makeNameTags, createPoll };
