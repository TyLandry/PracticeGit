/**
 * LinkedList implementation that addresses the O(n²) limitation of ArrayList.
 *
 * An ArrayList's add and remove operations each take O(n) time due to element
 * shifting. Performing n such operations therefore costs O(n²) overall.
 *
 * A doubly-linked LinkedList achieves O(1) add and remove at both the head
 * and the tail by maintaining direct pointers to those nodes, eliminating the
 * need to shift any elements.
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /**
   * Adds a value to the end of the list in O(1) time.
   * @param {*} value
   */
  add(value) {
    const node = new Node(value);
    if (this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  /**
   * Adds a value to the front of the list in O(1) time.
   * @param {*} value
   */
  addFirst(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size++;
  }

  /**
   * Removes and returns the last value in O(1) time.
   * @returns {*} the removed value, or null if the list is empty
   */
  remove() {
    if (this.tail === null) {
      return null;
    }
    const value = this.tail.value;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.size--;
    return value;
  }

  /**
   * Removes and returns the first value in O(1) time.
   * @returns {*} the removed value, or null if the list is empty
   */
  removeFirst() {
    if (this.head === null) {
      return null;
    }
    const value = this.head.value;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.size--;
    return value;
  }

  /**
   * Returns the number of elements in the list.
   * @returns {number}
   */
  getSize() {
    return this.size;
  }

  /**
   * Converts the list to an array for display purposes.
   * @returns {Array}
   */
  toArray() {
    const result = [];
    let current = this.head;
    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }
}
