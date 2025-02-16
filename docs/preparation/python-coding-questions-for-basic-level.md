# Python Solutions for Basic Level Problems

Below are the Python solutions for the given basic-level problems, along with explanations.

---

### 1. Swap Two Variables Without Using a Third Variable

Swapping two variables without using an extra variable is a common interview question. It can be achieved using tuple unpacking in Python.

```python linenums="1" title="example.py"
def swap_variables(a, b):
    a, b = b, a
    return a, b

# Example usage:
x, y = 5, 10
x, y = swap_variables(x, y)
print(f"After swapping: x = {x}, y = {y}")
```

---

### 2. Reverse a String Without Using Built-in Functions

Reversing a string without using built-in functions like `[::-1]` is a common problem to test looping concepts and string manipulation.

#### Example 1:

```python linenums="1" title="example.py"
def reverse_string(s):
    reversed_str = ""
    for char in s:
        reversed_str = char + reversed_str
    return reversed_str

# Example usage:
input_str = "hello"
print(f"Reversed string: {reverse_string(input_str)}")
```

#### Example 2:

```python linenums="1" title="example.py"
def reverse_string(s):
    reversed_list = []
    for char in s:
        reversed_list.insert(0, char)  # Insert at the beginning
    return ''.join(reversed_list)

print(reverse_string("hello"))  # Output: "olleh"
```

---

### 3. Check if a String is a Palindrome

A palindrome is a word, phrase, or number that reads the same forward and backward. The function below checks for palindrome ignoring case sensitivity.

```python linenums="1" title="example.py"
def is_palindrome(s):
    s = s.lower()  # Convert to lowercase for case-insensitive comparison
    return s == reverse_string(s)

# Example usage:
input_str = "Madam"
print(f"Is '{input_str}' a palindrome? {is_palindrome(input_str)}")
```

---

### 4. Find the Factorial of a Number Using Recursion

The factorial of a number is the product of all positive integers up to that number. It is calculated using recursion in this function.

```python linenums="1" title="example.py"
def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)

# Example usage:
num = 5
print(f"Factorial of {num} is {factorial(num)}")
```

---

### 5. Count the Occurrences of Each Character in a String

This function counts the frequency of each character in a given string using a dictionary.

```python linenums="1" title="example.py"
def count_characters(s):
    char_count = {}
    for char in s:
        if char in char_count:
            char_count[char] += 1
        else:
            char_count[char] = 1
    return char_count

# Example usage:
input_str = "programming"
print(f"Character counts: {count_characters(input_str)}")
```

---

### 6. Find the Largest and Smallest Number in a List

This function finds the largest and smallest numbers in a list using the built-in `max()` and `min()` functions.

```python linenums="1" title="example.py"
def find_largest_smallest(numbers):
    largest = max(numbers)
    smallest = min(numbers)
    return largest, smallest

# Example usage:
numbers = [3, 1, 4, 1, 5, 9, 2, 6]
largest, smallest = find_largest_smallest(numbers)
print(f"Largest: {largest}, Smallest: {smallest}")
```

---

### 7. Remove Duplicates from a List

This function removes duplicates from a list using a `set`, which stores only unique elements.

```python linenums="1" title="example.py"
def remove_duplicates(lst):
    return list(set(lst))

# Example usage:
numbers = [1, 2, 2, 3, 4, 4, 5]
print(f"List after removing duplicates: {remove_duplicates(numbers)}")
```

---

### 8. Find the Second Largest Number in a List

This function finds the second-largest number by first removing duplicates and then sorting the list.

```python linenums="1" title="example.py"
def second_largest(numbers):
    unique_numbers = list(set(numbers))  # Remove duplicates
    unique_numbers.sort()
    return unique_numbers[-2]

# Example usage:
numbers = [10, 20, 4, 45, 99, 99]
print(f"Second largest number: {second_largest(numbers)}")
```

---

### 9. Check if a Number is Prime

A prime number is a number greater than 1 that has no divisors other than 1 and itself. This function checks if a given number is prime.

```python linenums="1" title="example.py"
def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

# Example usage:
num = 29
print(f"Is {num} a prime number? {is_prime(num)}")
```

---

### 10. Print Fibonacci Series Up to n Terms

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. This function generates the series up to `n` terms.

```python linenums="1" title="example.py"
def fibonacci_series(n):
    fib_sequence = []
    a, b = 0, 1
    for _ in range(n):
        fib_sequence.append(a)
        a, b = b, a + b
    return fib_sequence

# Example usage:
n_terms = 10
print(f"Fibonacci series up to {n_terms} terms: {fibonacci_series(n_terms)}")
```


