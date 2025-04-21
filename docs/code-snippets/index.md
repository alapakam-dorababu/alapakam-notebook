# 🐍 Interactive Python in Markdown with Pyodide

Run Python code directly in your browser! Click the **▶ Run** button below any code block.

## Basic Example

```python
# Simple arithmetic
x = 7
y = 3
print(f"{x} + {y} = {x + y}")
print(f"{x} * {y} = {x * y}")
```

## Loops and Functions

```python
# Countdown function
def countdown(n):
    for i in range(n, 0, -1):
        print(f"T-minus {i}...")
    print("Blastoff!")

countdown(5)
```

## Loops and Functions 2

```python
# Countdown function
def countdown2(n):
    for i in range(n, 0, -1):
        print(f"T-minus {i}...")
    print("Blastoff!")

countdown2(5)
```

## Working with Lists

```python
# List operations
fruits = ["apple", "banana", "cherry"]
print("My fruits:", fruits)

# Add a fruit
fruits.append("orange")
print("Added orange:", fruits)

# Slicing
print("First two:", fruits[:2])
```

## Math Operations

```python
# Using math module
import math

radius = 5
area = math.pi * radius ** 2
print(f"Area of circle with radius {radius}: {area:.2f}")
```


<!-- Include Pyodide JavaScript library from the CDN -->
<script src="https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js"></script>

<!-- Include a custom JavaScript file (pyodide-loader.js) from your assets folder -->
<script src="../assets/js/pyodide-loader.js"></script>

<!-- Include a custom CSS file (pyodide-loader.css) for styling, from your assets folder -->
<link rel="stylesheet" href="../assets/css/pyodide-loader.css">

