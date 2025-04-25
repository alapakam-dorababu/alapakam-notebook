# Python Custom Exception

This code demonstrates how to define and use a custom exception in Python to handle negative numbers. Below is a step-by-step explanation of the code:

## Custom Exception Class: `NegativeNumberError`

```python
class NegativeNumberError(Exception):
    def __init__(self, number, message="is negative number"):
        self.number = number
        self.message = message
        super().__init__(self.message)

    def __str__(self):
        return f"{type(self).__name__}: {self.number} {self.message}"
```

### Explanation:
1. **Purpose**: The `NegativeNumberError` class is a custom exception that inherits from Python's built-in `Exception` class.
2. **Initialization**:
   - The constructor (`__init__`) accepts two arguments:
     - `number`: The number that caused the exception.
     - `message`: A custom message (default is `"is negative number"`).
   - It initializes the `number` and `message` attributes and calls the parent class's constructor.
3. **String Representation**:
   - The `__str__` method customizes the string representation of the exception.
   - When the exception is printed, it shows the exception type, the number, and the message.

---

## Function: `print_numbers`

```python
def print_numbers(number):
    try:
        if number < 0:
            raise NegativeNumberError(number, message="is negative number")
    except NegativeNumberError as e:
        print(e)
    else:
        print(f"{number} is a positive number")
```

### Explanation:
1. **Purpose**: The `print_numbers` function checks if a number is negative and handles it using the custom exception.
2. **Logic**:
   - If the number is negative, it raises the `NegativeNumberError` with the number and a message.
   - If the exception is raised, it is caught in the `except` block, and the exception message is printed.
   - If no exception is raised, the function prints that the number is positive.

---

## Example Usage

```python
print_numbers(5)        # Output: 5 is a positive number
print_numbers(-10)      # Output: NegativeNumberError: -10 is negative number
print_numbers(0)        # Output: 0 is a positive number
```

### Explanation:
1. **Case 1**: `print_numbers(5)`
   - The number `5` is positive, so the function prints: `5 is a positive number`.
2. **Case 2**: `print_numbers(-10)`
   - The number `-10` is negative, so the custom exception is raised and caught.
   - The exception message is printed: `NegativeNumberError: -10 is negative number`.
3. **Case 3**: `print_numbers(0)`
   - The number `0` is treated as positive, so the function prints: `0 is a positive number`.

---

## Key Takeaways:
- Custom exceptions allow you to handle specific error cases in a structured way.
- The `try-except` block is used to catch and handle exceptions gracefully.
- This example demonstrates how to create meaningful error messages for better debugging and user experience.

