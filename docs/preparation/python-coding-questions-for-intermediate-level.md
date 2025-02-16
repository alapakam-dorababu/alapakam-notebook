# Python Solutions for Intermediate Level Problems

Below are the Python solutions for the given intermediate-level problems, along with explanations.

---

### 1. Check if two strings are anagrams

An anagram is a word or phrase formed by rearranging the letters of a different word or phrase. This function checks if two strings are anagrams by sorting their characters and comparing them.

```python linenums="1" title="example.py"
def are_anagrams(str1, str2):
    return sorted(str1) == sorted(str2)

print(are_anagrams("listen", "silent"))  # Output: True
```

---

### 2. Find all pairs in a list that sum up to a given number

This function finds all pairs of numbers in a list that add up to a given target sum.

```python linenums="1" title="example.py"
def find_pairs(lst, target):
    pairs = []
    seen = set()
    for num in lst:
        diff = target - num
        if diff in seen:
            pairs.append((diff, num))
        seen.add(num)
    return pairs

print(find_pairs([1, 2, 3, 4, 5, 6], 7))  # Output: [(3, 4), (2, 5), (1, 6)]
```

---

### 3. Implement binary search

Binary search is an efficient algorithm for finding an item from a sorted list. This function implements binary search iteratively.

```python linenums="1" title="example.py"
def binary_search(lst, target):
    left, right = 0, len(lst) - 1
    while left <= right:
        mid = (left + right) // 2
        if lst[mid] == target:
            return mid
        elif lst[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

print(binary_search([1, 2, 3, 4, 5, 6], 4))  # Output: 3
```

---

### 4. Find the intersection of two lists

This function finds the common elements between two lists.

```python linenums="1" title="example.py"
def list_intersection(lst1, lst2):
    return list(set(lst1) & set(lst2))

print(list_intersection([1, 2, 3], [2, 3, 4]))  # Output: [2, 3]
```

---

### 5. Reverse words in a sentence

This function reverses the order of words in a given sentence.

```python linenums="1" title="example.py"
def reverse_words(sentence):
    return " ".join(sentence.split()[::-1])

print(reverse_words("Hello World"))  # Output: "World Hello"
```

---

### 6. Sort a dictionary by values

This function sorts a dictionary by its values in ascending order.

```python linenums="1" title="example.py"
def sort_dict_by_value(d):
    return dict(sorted(d.items(), key=lambda item: item[1]))

print(sort_dict_by_value({"a": 3, "b": 1, "c": 2}))  # Output: {'b': 1, 'c': 2, 'a': 3}
```

---

### 7. Find the most frequent element in a list

This function finds the most frequently occurring element in a list.

```python linenums="1" title="example.py"
def most_frequent(lst):
    return max(set(lst), key=lst.count)

print(most_frequent([1, 2, 3, 1, 2, 1]))  # Output: 1
```

---

### 8. Implement a queue using a list

A queue follows the First-In-First-Out (FIFO) principle. This class implements a simple queue using a Python list.

```python linenums="1" title="example.py"
class Queue:
    def __init__(self):
        self.queue = []
    def enqueue(self, item):
        self.queue.append(item)
    def dequeue(self):
        return self.queue.pop(0) if self.queue else None

q = Queue()
q.enqueue(1)
q.enqueue(2)
print(q.dequeue())  # Output: 1
```

---

### 9. Implement a stack using a list

A stack follows the Last-In-First-Out (LIFO) principle. This class implements a simple stack using a Python list.

```python linenums="1" title="example.py"
class Stack:
    def __init__(self):
        self.stack = []
    def push(self, item):
        self.stack.append(item)
    def pop(self):
        return self.stack.pop() if self.stack else None

s = Stack()
s.push(1)
s.push(2)
print(s.pop())  # Output: 2
```

---

### 10. Merge two sorted lists

This function merges two sorted lists into a single sorted list.

```python linenums="1" title="example.py"
def merge_sorted_lists(lst1, lst2):
    return sorted(lst1 + lst2)

print(merge_sorted_lists([1, 3, 5], [2, 4, 6]))  # Output: [1, 2, 3, 4, 5, 6]
```


