// Task6
function collectionManager() {
  let items = [];

  function additem(item) {
    items.push(item);
    console.log(`${item} is added succesfully`);
    return items;
  }

  function removeitem(item) {
    items = items.filter((curritem) => curritem !== item);
    console.log(`${item} is removed succesfully`);
    return items;
  }

  function listitems() {
    return items;
  }

  return {
    additem,
    removeitem,
    listitems,
  };
}

const itemMethods = collectionManager();
itemMethods.additem("cat");
itemMethods.additem("dog");
itemMethods.removeitem("cat");
const items = itemMethods.listitems();
console.log(items);
