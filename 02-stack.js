class Stack {
  constructor() {
    this.items = {};
    this.top = 0;
  };

  push(data) {
    this.top++;
    this.items[this.top] = data;
  };

  pop() {
    let deletedData;

    if(this.top) {
      deletedData = this.items[this.top];
      delete this.items[this.top];
      this.top--;
      return deletedData;
    };
  };

  getSize() {
    return this.top;
  };

  isEmpty() {
    if(!this.getSize()) {
      return true;
    } else {
      return false;
    };
  };

  peek() {
    if(this.isEmpty()) {
      return null;
    };

    return this.items[this.top];
  };

  print() {
    let result = '';

    for (let i = this.top; i > 0; i--) {
      result += this.items[i] + ' ';
    };
    return result;
  };

};

const stack = new Stack();

stack.push('plato 1');
stack.push('plato 2');
stack.push('plato 3');
stack.push('plato 4');
stack.push('plato 5');


console.log(`Siguiente elemento a salir: ${stack.peek()}`);
console.log(`Elementos borrados: ${stack.pop()}`);
console.log(`Elementos borrados: ${stack.pop()}`);
console.log(stack.print());
console.log(`tamaño del stack: ${stack.getSize()}`);
console.log(`Esta vacía?: ${stack.isEmpty()}`);

console.log(stack);
