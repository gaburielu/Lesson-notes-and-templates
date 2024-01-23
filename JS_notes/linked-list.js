class node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  prepend(value) {
    this.head = new node(value, this.head);
    this.size++;
  }

  append(value) {
    let tail = new node(value);
    let current;
    if (!this.head) {
      this.prepend(value);
      return;
    } else {
      current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = tail;
    }
    this.size++;
  }

  size() {
    return this.size;
  }

  head() {
    return this.head;
  }

  tail() {
    let current;
    if (!this.head) {
      return;
    } else {
      current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
      }
      return current;
    }
  }

  at(index) {
    let current;
    let currentIndex = 0;
    if (index > this.size || this.size == 0) {
      return null;
    }
    if (this.head) {
      current = this.head;
      while (currentIndex <= this.size) {
        if (index == currentIndex) {
          return current;
        }
        current = current.nextNode;
        currentIndex++;
      }
    }
  }

  insertAt(value, index) {
    let newNode = new node(value);
    let count = 0;
    let current, previous;
    if (index === 0) {
      this.prepend(value);
      return;
    } else if (index > this.size) {
      this.append(value);
      return;
    } else if (index < 0) {
      return null;
    }

    current = this.head;
    while (count < index) {
      previous = current;
      count++;
      current = current.nextNode;
    }
    newNode.nextNode = current;
    previous.nextNode = newNode;
    this.size++;
  }

  removeAt(index) {
    if (index < 0 || index > this.size) {
      return;
    }
    let current = this.head;
    let count = 0;
    let previous;

    if (index === 0) {
      this.head = current.nextNode;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.nextNode;
      }
      previous.nextNode = current.nextNode;
    }
    this.size--;
  }

  pop() {
    this.removeAt(this.size - 1);
  }

  contains(value) {
    let current;
    if (this.head) {
      current = this.head;
      while (current) {
        if (current.value == value) {
          return true;
        }
        current = current.nextNode;
      }
    }
    return false;
  }

  find(value) {
    let current;
    let currentIndex = 0;
    if (this.head) {
      current = this.head;
      while (current) {
        if (current.value == value) {
          return currentIndex;
        }
        current = current.nextNode;
        currentIndex++;
      }
    }
    return -1;
  }

  toString() {
    let string = "Empty Linked List";
    let current;
    if (!this.head) {
      return string;
    } else {
      string = `( ${this.head.value} ) -> `;
      current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
        string += `( ${current.value} ) -> `;
      }
      string += "null";
    }
    return string;
  }
}

let listTest = new linkedList();
listTest.append("A");
listTest.append("B");
listTest.append("C");
listTest.append("D");
listTest.prepend("Z");
listTest.prepend("Negative");
listTest.insertAt("outlier", 3);
listTest.removeAt(10);
// listTest.pop();

console.log(listTest.toString());
console.log(listTest.size);
// console.log(listTest.find("DE"));
