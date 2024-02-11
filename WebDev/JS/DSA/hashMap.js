class hashMap {
  constructor() {
    this.capacity = 16;
    this.table = new Array(this.capacity).fill(null);
    this.size = 0;
    this.load = this.size / this.capacity;
  }

  hash(string) {
    let hashSum = 0;
    for (let i = 0; i < string.length; i++) {
      hashSum = 17 * hashSum + string.charCodeAt(i);
    }
    return hashSum % this.capacity;
  }

  set(k, v) {
    let index = this.hash(k);
    while (this.table[index] && index < this.capacity) {
      index++;
    }
    if (index === this.capacity - 1) {
      index = 0;
      while (this.table[index]) {
        index++;
      }
    }
    this.table[index] = v;
    this.size++;
    this.resize();
  }

  setByIndex(i,v){
    let index = i;
    while (this.table[index] && index < this.capacity) {
      index++;
    }
    if (index === this.capacity - 1) {
      index = 0;
      while (this.table[index]) {
        index++;
      }
    }
    this.table[i] = v;
    this.size++;
  }

  get(k) {
    let index = this.hash(k);
    if (this.table[index]) {
      return this.table[index];
    }
    return null;
  }

  has(k) {
    let index = this.hash(k);
    if (this.table[index]) {
      return true;
    }
    return false;
  }

  remove(k) {
    let index = this.hash(k);
    if (this.table[index]) {
      this.table[index] = null;
      return true;
    }
    return false;
  }

  length() {
    return this.size;
  }

  clear() {
    this.table.fill(null);
    this.size = 0;
    this.resize();
  }

  keys() {
    let key = [];
    for (let i = 0; i < this.capacity; i++) {
      if (this.table[i]) {
        key.push(i);
      }
    }
    return key;
  }

  values() {
    let valuesArray = [];
    for (let i = 0; i < this.capacity; i++) {
      if (this.table[i]) {
        valuesArray.push(this.table[i]);
      }
    }
    return valuesArray;
  }

  entries() {
    let entriesArray = [];
    for (let i = 0; i < this.capacity; i++) {
      if (this.table[i]) {
        let string = `[${i}, ${this.table[i]}]`;
        entriesArray.push(string);
      }
    }
    return entriesArray;
  }

  resize() {
    this.load = this.size / this.capacity;
    let array = this.table;
    if (this.load > 0.75) {
      this.capacity = this.capacity * 2;
      this.size = 0;
      this.table = new Array(this.capacity).fill(null);
      for(let i = 0; i < this.capacity;i++){
        if (array[i]) {
          let index = i * 2;
          while (this.table[index] && index < this.capacity) {
            index++;
          }
          if (index === this.capacity - 1) {
            index = 0;
            while (this.table[index]) {
              index++;
            }
          }
          this.table[index] = array[i];
          this.size++;
        }
      }
      this.load = this.size / this.capacity;
    }
  }
}

const table = new hashMap();

table.set("First Name", "Gabriel");
table.set("Last Name", "Gonzales");
table.set("Age", "27");
table.set("City", "Kota Kinabalu");
table.set("Sex", "Male");
table.set("Hometown", "Tamparuli");
// console.log(table.remove("x"));
// console.log(table.has("Hometown"));
// console.log(table.get("Hometown"));
console.log(table.entries());
// table.clear();
console.log(table);
table.set("job", "Engineer");
table.set("hobby", "Reading");
table.set("language", "JavaScript");
table.set("color", "Blue");
table.set("fruit", "Banana");
table.set("car", "Tesla");
table.set("animal", "Lion");
table.set("sport", "Soccer");
table.set("music", "Classical");
table.set("movie", "Inception");

console.log(table);
console.log(table.entries());
