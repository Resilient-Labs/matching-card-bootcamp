
export class Queue{
  constructor() {
    this.queue = []; 
    this.length = 0; 
  }

  push(item) {
    if (!this.queue.includes(item)) {
      this.queue.push(item); 
      this.length++; 
    }
  } 

  reset() {
    this.queue = []; 
    this.length = 0; 
  }

  dismountFirstTwo() {
    const firstTwo = this.queue.slice(0, 2);
    this.queue.shift(); 
    this.queue.shift();
    this.length -= 2;
    return firstTwo;
  }
}