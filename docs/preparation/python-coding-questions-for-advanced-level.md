# Python Solutions for Advanced Level Problems

Below are the Python solutions for the given advanced-level problems, along with explanations.

---

### 1. Implement a Linked List in Python

A linked list is a linear data structure in which elements (nodes) are stored in a chain-like manner, with each node containing data and a reference to the next node.

```python linenums="1" title="example.py"
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        last = self.head
        while last.next:
            last = last.next
        last.next = new_node

    def print_list(self):
        temp = self.head
        while temp:
            print(temp.data, end=" -> ")
            temp = temp.next
        print("None")

# Example Usage
ll = LinkedList()
ll.append(1)
ll.append(2)
ll.append(3)
ll.print_list()
```

```
1 -> 2 -> 3 -> None
```

---

### 2. Detect a Cycle in a Linked List

A cycle in a linked list occurs when a node’s `next` pointer points back to a previous node, forming a loop. Floyd’s cycle-finding algorithm (Tortoise and Hare algorithm) is used to detect cycles.

```python linenums="1" title="example.py"
def has_cycle(head):
    slow, fast = head, head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False

# Example Usage
node1 = Node(1)
node2 = Node(2)
node3 = Node(3)
node1.next = node2
node2.next = node3
node3.next = node1  # Creating a cycle

print(has_cycle(node1))  # Output: True
```

---

### 3. Implement a Binary Search Tree (BST)

A Binary Search Tree (BST) is a tree data structure where each node has at most two children, with left children containing smaller values and right children containing larger values.

```python linenums="1" title="example.py"
class BSTNode:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

    def insert(self, value):
        if value < self.data:
            if self.left is None:
                self.left = BSTNode(value)
            else:
                self.left.insert(value)
        else:
            if self.right is None:
                self.right = BSTNode(value)
            else:
                self.right.insert(value)

    def inorder(self):
        if self.left:
            self.left.inorder()
        print(self.data, end=" ")
        if self.right:
            self.right.inorder()

# Example Usage
root = BSTNode(10)
root.insert(5)
root.insert(15)
root.insert(3)
root.insert(7)

root.inorder()
```

```
3 5 7 10 15
```

---

### 4. Find the Lowest Common Ancestor in a BST

The Lowest Common Ancestor (LCA) of two nodes in a BST is the deepest node that has both nodes as descendants.

```python linenums="1" title="example.py"
def lca(root, p, q):
    if root is None:
        return None
    if p < root.data and q < root.data:
        return lca(root.left, p, q)
    if p > root.data and q > root.data:
        return lca(root.right, p, q)
    return root

# Example Usage
ancestor = lca(root, 3, 7)
print(ancestor.data)
```

```
5
```

---

### 5. Implement Matrix Multiplication

Matrix multiplication is a mathematical operation that produces a new matrix by multiplying two matrices.

```python linenums="1" title="example.py"
def matrix_multiply(A, B):
    result = [[sum(a * b for a, b in zip(A_row, B_col)) for B_col in zip(*B)] for A_row in A]
    return result

# Example Usage
A = [[1, 2], [3, 4]]
B = [[5, 6], [7, 8]]
print(matrix_multiply(A, B))
```

```
[[19, 22], [43, 50]]
```

---

### 6. Implement an LRU Cache

An LRU (Least Recently Used) Cache is a data structure that removes the least recently accessed items when full.

```python linenums="1" title="example.py"
from collections import OrderedDict

class LRUCache(OrderedDict):
    def __init__(self, capacity: int):
        self.capacity = capacity
        super().__init__()

    def get(self, key: int):
        if key not in self:
            return -1
        self.move_to_end(key)
        return self[key]

    def put(self, key: int, value: int):
        if key in self:
            self.move_to_end(key)
        self[key] = value
        if len(self) > self.capacity:
            self.popitem(last=False)

# Example Usage
cache = LRUCache(2)
cache.put(1, 1)
cache.put(2, 2)
print(cache.get(1)) # Output: 1
cache.put(3, 3)
print(cache.get(2)) # Output: -1 (Evicted)
```

---

### 7. Write a Python Function to Flatten a Nested List

A nested list is a list containing other lists as elements. Flattening a nested list involves converting it into a single-level list.

```python linenums="1" title="example.py"
def flatten_list(nested_list):
    flat_list = []
    for item in nested_list:
        if isinstance(item, list):
            flat_list.extend(flatten_list(item))
        else:
            flat_list.append(item)
    return flat_list

# Example Usage
nested = [1, [2, [3, 4], 5], 6]
print(flatten_list(nested))
```

```
[1, 2, 3, 4, 5, 6]
```

---

### 8. Implement a Decorator in Python

A decorator is a function that modifies another function without changing its structure.

```python linenums="1" title="example.py"
def my_decorator(func):
    def wrapper():
        print("Before function execution")
        func()
        print("After function execution")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

# Example Usage
say_hello()
```

```
Before function execution
Hello!
After function execution
```

---

### 9. Implement a Producer-Consumer Pattern Using Threading

The Producer-Consumer pattern is a common concurrency pattern where a producer thread generates data and a consumer thread processes it.

```python linenums="1" title="example.py"
import threading
import queue
import time

def producer(q):
    for i in range(5):
        print(f"Producing {i}")
        q.put(i)
        time.sleep(1)

def consumer(q):
    while not q.empty() or producer_thread.is_alive():
        item = q.get()
        print(f"Consuming {item}")
        time.sleep(2)

q = queue.Queue()
producer_thread = threading.Thread(target=producer, args=(q,))
consumer_thread = threading.Thread(target=consumer, args=(q,))

producer_thread.start()
consumer_thread.start()

producer_thread.join()
consumer_thread.join()
```

```
Producing 0
Consuming 0
Producing 1
Consuming 1
Producing 2
Consuming 2
Producing 3
Consuming 3
Producing 4
Consuming 4
```

---

### 10. Implement an Async Function to Fetch Data from an API

Asynchronous programming allows non-blocking execution of tasks. The `asyncio` and `aiohttp` libraries help perform asynchronous HTTP requests.

```python linenums="1" title="example.py"
import asyncio
import aiohttp

async def fetch(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            return await response.text()

async def main():
    url = "https://jsonplaceholder.typicode.com/todos/1"
    data = await fetch(url)
    print(data)

# Run the event loop
asyncio.run(main())
```

```
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
```

---


### 11. What is an Iterator?

An **iterator** in Python is an object that implements two methods:

- `__iter__()` – Returns the iterator object itself.
- `__next__()` – Returns the next value from the sequence. If there are no more items, it raises a `StopIteration` exception.

Iterators allow sequential access to elements without exposing the underlying structure. They are commonly used in loops and other iterable-based operations.

Why Use Iterators?

- **Memory Efficient:** Iterators generate values one at a time instead of loading an entire sequence into memory.
- **Lazy Evaluation:** Useful when dealing with large datasets or infinite sequences.
- **Flexibility:** Can be customized to iterate over different kinds of data.

Custom Iterator Example:

Below is a Python implementation of a simple counter iterator that counts up to a given limit.

```python linenums="1" title="example.py"
class CounterIterator:
    def __init__(self, limit):
        self.current = 0
        self.limit = limit
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.current >= self.limit:
            raise StopIteration  # Stop iteration when limit is reached
        self.current += 1
        return self.current

# Example usage
counter = CounterIterator(10)

# using the next
# print(next(counter))
# print(next(counter))

for value in counter:
    print(value)
```

---

### 12. Write a Python program to find the maximum sum of a contiguous subarray within a given list of integers.

Find the largest sum of any continuous subarray in a given list of integers.

```python linenums="1" title="example.py"
def max_subarray(arr):
    max_sum = 0  # Store the highest sum found
    current_sum = 0  # Running sum of the current subarray
    start_index = 0  # Start index of the maximum subarray
    end_index = 0  # End index of the maximum subarray
    temp_start = 0  # Temporary start index for tracking
    
    for i in range(len(arr)):
        current_sum += arr[i]  # Add current element to running sum
        
        # If the current sum is the highest so far, update max_sum and indices
        if current_sum > max_sum:
            max_sum = current_sum
            start_index = temp_start
            end_index = i
        
        # If current sum becomes negative, reset it and move temp_start forward
        if current_sum < 0:
            current_sum = 0
            temp_start = i + 1
    
    # Return the highest sum found and the corresponding subarray
    return max_sum, arr[start_index:end_index+1]

# Example usage:
numbers = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
max_sum, subarray = max_subarray(numbers)
print("Maximum Subarray Sum:", max_sum)
print("Subarray:", subarray)
```