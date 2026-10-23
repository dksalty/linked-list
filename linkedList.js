import { Node } from "./node";
export function LinkedList() {
  let headNode = null;

  const append = (value) => {
    let newNode = Node(value);
    if (headNode === null) {
      headNode = newNode;
    } else {
      let currentNode = headNode;
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = newNode;
    }
  };

  const prepend = (value) => {
    let newNode = Node(value);
    if (headNode === null) {
      headNode = newNode;
    } else {
      newNode.nextNode = headNode;
      headNode = newNode;
    }
  };

  const size = () => {
    let count = 0;
    if (headNode === null) {
      return count;
    } else {
      let currentNode = headNode;
      while (currentNode !== null) {
        count++;
        currentNode = currentNode.nextNode;
      }
    }
    return count;
  };

  const head = () => {
    if (headNode === null) {
      return undefined;
    }
    return headNode;
  };

  const tail = () => {
    if (headNode === null) {
      return undefined;
    } else {
      let currentNode = headNode;
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      return currentNode;
    }
  };

  const at = (index) => {
    let count = 0;
    if (headNode === null) {
      return undefined;
    } else {
      let currentNode = headNode;
      while (currentNode !== null) {
        if (index === count) {
          return currentNode;
        }
        count++;
        currentNode = currentNode.nextNode;
      }
    }
    return undefined;
  };

  const pop = () => {
    if (headNode === null) {
      return undefined;
    } else {
      let oldHead = headNode;
      headNode = headNode.nextNode;
      return oldHead.value;
    }
  };

  const contains = (value) => {
    let currentNode = headNode;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  };

  const findIndex = (value) => {
    let count = 0;
    let currentNode = headNode;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return count;
      }
      count++;
      currentNode = currentNode.nextNode;
    }
    return -1;
  };

  const toString = () => {
    if (headNode === null) {
      return "";
    } else {
      let currentNode = headNode;
      let string = "";
      while (currentNode !== null) {
        string += `( ${currentNode.value} ) -> `;
        currentNode = currentNode.nextNode;
      }
      string += " null";
      return string;
    }
  };

  const insertAt = (index, ...values) => {
    if (values.length === 0) {
      return;
    }
    let firstNode;
    let newNode;
    let previousNode;
    values.forEach((value) => {
      newNode = Node(value);
      if (previousNode === undefined) {
        previousNode = newNode;
        firstNode = previousNode;
      } else {
        previousNode.nextNode = newNode;
        previousNode = newNode;
      }
    });
    let count = 0;
    if (index === 0) {
      previousNode.nextNode = headNode;
      headNode = firstNode;
    } else {
      let currentNode = headNode;
      while (currentNode !== null) {
        if (count === index - 1) {
          previousNode.nextNode = currentNode.nextNode;
          currentNode.nextNode = firstNode;
          return;
        }
        count++;
        currentNode = currentNode.nextNode;
      }
    }
  };
  const removeAt = (index) => {
    if (headNode === null) {
      return;
    }
    if (index === 0) {
      headNode = headNode.nextNode;
      return;
    }
    let count = 0;
    let currentNode = headNode;
    while (currentNode !== null) {
      if (currentNode.nextNode === null) {
        return;
      }
      if (count === index - 1) {
        currentNode.nextNode = currentNode.nextNode.nextNode;
        return;
      }
      count++;
      currentNode = currentNode.nextNode;
    }
  };
  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    findIndex,
    toString,
    insertAt,
    removeAt,
  };
}
