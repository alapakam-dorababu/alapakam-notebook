
# Python Interview Questions for Freshers

If you are a fresher preparing for a Python interview, here are some important questions to help you get started. These questions cover the **basics of Python, syntax, data types, control structures, functions, OOP concepts, and common libraries**. Mastering these topics will give you a strong foundation for technical discussions and coding assessments.

<!-- more -->

### 1. What is Python? What are the benefits of using Python?

Python is a high-level, interpreted programming language known for its readability, simplicity, and versatility. It was created by Guido van Rossum and first released in 1991. Python supports multiple programming paradigms, including procedural, object-oriented, and functional programming, making it suitable for a wide range of applications.   

Benefits of using Python:

1. **Readability:** Python's syntax is designed to be clear and readable, which reduces the cost of program maintenance and development. The use of whitespace (indentation) for block delimiters enhances code readability.

2. **Versatility:** Python is a general-purpose language that can be used for web development, data analysis, artificial intelligence, machine learning, scientific computing, automation, scripting, and more. It has a vast standard library and numerous third-party packages that extend its functionality.

3. **Ease of Learning:** Python is considered an easy language for beginners to learn. Its simplicity and readability contribute to a shorter learning curve compared to some other programming languages.

4. **Community and Support:** Python has a large and active community of developers. This community contributes to the language's growth, provides support through forums and online resources, and develops a wide range of libraries and frameworks.

5. **Compatibility:** Python is platform-independent and can run on various operating systems, including Windows, macOS, and Linux. This makes it easy to write code that can be deployed on different platforms without modification.

6. **Extensibility:** Python can be extended using C or C++ modules, allowing developers to optimize performance-critical parts of their code while still benefiting from Python's high-level features.

7. **Integration:** Python easily integrates with other languages and systems, making it a preferred choice for embedding scripting components in larger applications.

8. **Open Source:** Python is open source, which means its source code is freely available. This fosters collaboration and allows developers to contribute to the language's improvement.

9. **Large Standard Library:** Python comes with a comprehensive standard library that includes modules and packages for various tasks, reducing the need for developers to write code from scratch.

10. **Dynamically Typed:** Python is dynamically typed, meaning variable types are interpreted at runtime. This can enhance development speed but requires careful attention to variable types during testing to avoid runtime errors.   

---

### 2. What is a dynamically typed language?

In a dynamically typed programming language, the type of a variable is interpreted or determined at runtime, rather than at compile time. This means that you don't have to explicitly declare the data type of a variable when you define it; the interpreter will figure out the type based on the value assigned to the variable.

In dynamically typed languages, variables can change their type during the execution of a program. For example, a variable initially assigned an integer value can later be assigned a string value without explicitly changing its type. This flexibility can make coding faster and more concise but may also introduce the potential for runtime errors if not used carefully.   
   
Python is an example of a dynamically typed language. Here's a simple Python example:   

```python linenums="1" title="example.py"
x = 5  # x is an integer
print(x)

x = "Hello, World!"  # x is now a string
print(x)

```

In the above example, `x` starts as an integer and is later assigned a string value. The interpreter dynamically adjusts the type of `x` based on the assigned value. This dynamic typing feature can make Python code more flexible and expressive but requires developers to be mindful of variable types to avoid unexpected behaviors.   

---

### 3. What is an Interpreted language?

An interpreted language is a type of programming language for which most of its implementations execute instructions directly, without the need for a separate compilation step. In an interpreted language, the source code is typically executed line by line or statement by statement by an interpreter at runtime.   
   
Here are key characteristics of interpreted languages:

1. **No Compilation Step:** Unlike languages that are compiled (e.g., C++ or Java), interpreted languages do not go through a separate compilation process. Instead, the source code is directly executed by an interpreter.

2. **Run-Time Execution:** The interpreter reads the source code and translates it into machine code or intermediate code on-the-fly during program execution. This makes it possible to execute the program without generating a standalone executable file beforehand.

3. **Portability:** Interpreted languages are often more portable than compiled languages because the interpreter can be implemented for different platforms. As long as there is an interpreter available for a specific platform, the same source code can be executed without modification.

4. **Ease of Development:** Interpreted languages are generally considered more flexible and conducive to rapid development. Developers can write, test, and modify code more quickly, as there is no need for a lengthy compilation process before testing changes.

5. **Dynamic Typing:** Many interpreted languages, such as Python and JavaScript, are dynamically typed, allowing for more flexibility in variable usage but requiring careful attention to data types during runtime.

6. **Interactive Mode:** Interpreted languages often support interactive modes, allowing developers to execute statements or commands directly and receive immediate feedback. This can be useful for testing and exploration.   
   
Examples of interpreted languages include:

- **Python:** The Python interpreter reads and executes Python code directly.

- **JavaScript:** JavaScript is primarily an interpreted language in web browsers, although Just-In-Time (JIT) compilation is also employed in some cases.

- **Ruby:** Ruby is often interpreted, but there are also implementations that use Just-In-Time compilation.   
   
   
While interpreted languages offer advantages in terms of development speed and portability, they may have slightly slower execution speeds compared to languages that are compiled to machine code. The trade-offs between interpreted and compiled languages depend on the specific requirements of a project.   

---

### 4. What is PEP 8 and why is it important?

PEP 8, or "Python Enhancement Proposal 8," is the style guide for Python code. Created by Guido van Rossum, Barry Warsaw, and Nick Coghlan, PEP 8 provides conventions for writing clean, readable, and consistent Python code. The goal is to ensure that Python code is not only functional but also easy to understand by developers who may work on the codebase in the future.   
   
Key points outlined in PEP 8 include:
   
1. **Indentation:** PEP 8 specifies the use of 4 spaces per indentation level. This promotes consistent and readable indentation in Python code.

2. **Whitespace in Expressions and Statements:** PEP 8 provides guidelines on the use of whitespace around operators and after commas, colons, and semicolons. Consistent whitespace usage improves code readability.

3. **Import Formatting:** Guidelines for formatting import statements, including the recommended order and grouping of imports. This helps maintain a clear and organized structure for imports.

4. **Comments:** PEP 8 provides recommendations for writing comments, including their style, placement, and content. Well-written comments enhance code understanding.

5. **Naming Conventions:** Guidelines for naming variables, functions, classes, and modules. Consistent naming conventions make the code more self-explanatory and maintainable.

6. **Function and Method Arguments:** Recommendations on formatting and naming function and method arguments. Consistent practices improve code consistency and readability.

7. **Whitespace in Function and Method Calls:** Guidelines for the use of whitespace in function and method calls, enhancing the visual clarity of code.

8. **Maximum Line Length:** PEP 8 suggests limiting line lengths to 79 characters for code and 72 for docstrings. This promotes code readability, especially when viewing code side by side in split-screen environments.

9. **Programming Recommendations:** PEP 8 includes general programming recommendations, such as preferring exceptions to returning `None` and using implicit boolean evaluation.

10. **Consistency:** The overarching goal of PEP 8 is to promote consistency in Python code, making it easier for developers to collaborate and maintain codebases.   
   
Why PEP 8 is important:

1. **Readability:** Code is read more often than it is written. Following PEP 8 enhances the readability of Python code, making it easier for developers to understand and maintain.

2. **Consistency:** Consistent coding styles across projects and teams contribute to a more cohesive and maintainable codebase.

3. **Collaboration:** When multiple developers work on a project, adhering to a common style guide like PEP 8 ensures a uniform coding style, reducing confusion and potential conflicts.

4. **Tool Support:** Many tools and linters support PEP 8, helping developers automatically check and enforce the style guide. This aids in catching issues early in the development process.   
   
   
By following PEP 8, developers contribute to the creation of clean, readable, and consistent Python code, fostering good coding practices within the Python community.   

---

### 5. What is Scope in Python?

In Python, the term "scope" refers to the region or context in a program where a particular identifier (like a variable or a function) is recognized and can be accessed. Python has different types of scopes, and the rules governing how variables are assigned and accessed depend on the scope in which they are defined. The two main types of scopes in Python are:

1. **Local Scope:**

    - A local scope refers to the region within a function where a variable is defined.   
    - Variables created inside a function have a local scope and are only accessible within that function.   
    - Once the function execution is complete, the local variables are destroyed, and their scope ends.   
   
    ```python linenums="1" title="example.py"
    def example_function():
        x = 10  # Local variable
        print(x)

    example_function()  # Prints 10
    # Accessing x here would result in an error since it's a local variable

    ```

2. **Global Scope:**   
    - A global scope refers to the outermost level of a Python program, outside any function.   
    - Variables defined at this level have a global scope and can be accessed from any part of the program.   
    - Global variables persist throughout the lifetime of the program.   
   
    ```python linenums="1" title="example.py"
    y = 20  # Global variable

    def another_function():
        print(y)

    another_function()  # Prints 20
    # Accessing y here is allowed since it's a global variable

    ```

    In addition to local and global scopes, Python also has a concept of "enclosing" or "nested" scopes, which occurs when there are nested functions. In this case, a variable can be in the local scope of one function and in the enclosing scope of another:   

    ```python linenums="1" title="example.py"
    def outer_function():
        z = 30  # Enclosing scope variable

        def inner_function():
            print(z)

        inner_function()  # Prints 30

    outer_function()
    # Accessing z here would result in an error since it's in the enclosing scope of inner_function

    ```

    Python follows the LEGB (Local, Enclosing, Global, and Built-in) rule to determine the order in which it looks for a variable. It first looks in the local scope, then the enclosing scope (if any), followed by the global scope, and finally the built-in scope where Python's built-in functions and objects reside. Understanding scope is crucial for writing code that behaves as expected and for avoiding naming conflicts between different parts of a program.   

---
   
### 6. What are lists and tuples? What is the key difference between the two?

In Python, lists and tuples are both data structures used to store ordered collections of items. However, there are key differences between the two:

#### Lists:

1. **Mutability:**   
    - Lists are mutable, meaning their elements can be modified after the list is created.   
    - You can add, remove, or modify elements in a list.

2. **Syntax:**   
    - Defined using square brackets `[]`.

3. **Methods:**   
    - Lists have more built-in methods for manipulation, such as `append()`, `extend()`, `remove()`, `pop()`, etc.

4. **Use Case:**   
    - Lists are suitable when you need a collection that can be modified, such as adding or removing elements during the program's execution.

5. **Example:**   
   
    ```python linenums="1" title="example.py"
    my_list = [1, 2, 3, 'hello', [4, 5]]
    my_list.append(6)
    print(my_list)  # Output: [1, 2, 3, 'hello', [4, 5], 6]

    ```

#### Tuples:

1. **Immutability:**   
    - Tuples are immutable, meaning their elements cannot be changed or modified after the tuple is created.   
    - Once a tuple is defined, you cannot add, remove, or modify elements.

2. **Syntax:**   
    - Defined using parentheses `()`.

3. **Methods:**   
    - Tuples have fewer built-in methods compared to lists since they are immutable.

4. **Use Case:**   
    - Tuples are suitable when you have a fixed collection of elements that should not be modified, such as coordinates, configurations, or data that should remain constant.

5. **Example:**

    ```python linenums="1" title="example.py"
    my_tuple = (1, 2, 3, 'hello', (4, 5))
    # Attempting to modify a tuple will result in an error:
    # my_tuple[0] = 10  # Raises TypeError: 'tuple' object does not support item assignment

    ```

#### Key Difference:

The primary difference between lists and tuples lies in their mutability. Lists are mutable, meaning you can change their content, while tuples are immutable and their content cannot be changed once they are created. Choosing between them depends on the specific requirements of your program—if you need a collection that can be modified, use a list; if you want an unchangeable collection, use a tuple.   

---

### 7. What are the common built-in data types in Python?

Python supports several built-in data types, each serving a specific purpose in programming. Here are some of the common built-in data types in Python:

1. **Numeric Types:**   
    - **int:** Integer type represents whole numbers without a fractional component.   
    - **float:** Float type represents numbers with a decimal point or in exponential form.

2. **Sequence Types:**   
    - **str:** String type represents sequences of characters, and it is used for text data.   
    - **list:** List type represents ordered, mutable sequences of elements.   
    - **tuple:** Tuple type represents ordered, immutable sequences of elements.

3. **Set Types:**   
    - **set:** Set type represents an unordered collection of unique elements.   
    - **frozenset:** Frozenset is an immutable version of a set.

4. **Mapping Type:**   
    - **dict:** Dictionary type represents a collection of key-value pairs. It is an unordered and mutable collection.

5. **Boolean Type:**   
    - **bool:** Boolean type represents either True or False.

6. **None Type:**   
    - **NoneType:** The type of the special constant `None`, which is often used to signify the absence of a value or a null value.

7. **Binary Types:**   
    - **bytes:** Bytes type represents sequences of bytes and is immutable.   
    - **bytearray:** Bytearray type is similar to bytes but is mutable.

8. **Iterator Types:**   
    - **iter:** The iterator type represents an iterator object that produces values on demand using the `next()` function.

9. **Range Type:**   
    - **range:** Range type represents an immutable sequence of numbers and is often used in loops.

10. **Complex Type:**   
    - **complex:** Complex type represents complex numbers with a real and imaginary part.   
   
These built-in data types provide a foundation for working with different kinds of data in Python. Understanding these types and how to use them is essential for effective programming in the language. Additionally, Python allows developers to create custom data types using classes and objects, enabling flexibility and extensibility in data modeling.   

---

### 8. What is pass in Python?

In Python, `pass` is a null statement or a no-operation statement. It serves as a placeholder where syntactically some code is required, but no action is desired or necessary. The `pass` statement is a way to have an empty code block that doesn't do anything.   
Here's an example where `pass` might be used:   

```python linenums="1" title="example.py"
def my_function():
    # TODO: Implement this function later
    pass

```

In the above example, the `pass` statement is used as a temporary placeholder indicating that the function is not yet implemented. It allows the code to be syntactically correct without having any functional code inside the function.
   
Similarly, `pass` can be used in other situations where a statement is required by Python syntax but no action is needed or intended. For example, in a loop or an if statement:   

```python linenums="1" title="example.py"
for i in range(5):
  # TODO: Add loop body later
  pass

if condition:
  # TODO: Handle the condition later
  pass

```

In both cases, `pass` serves as a placeholder that allows the code to be syntactically correct. It is often used during development when you want to create the structure of your code first and fill in the details later. It is also used in situations where having an empty block is acceptable or when a code block is not needed for a particular branch of logic.   

---

### 9. What are modules and packages in Python?

In Python, modules and packages are mechanisms for organizing and structuring code to improve modularity, maintainability, and reusability.

#### Modules:

A module is a file containing Python code that defines variables, functions, and classes. It allows you to logically organize your Python code into separate files. You can use the functions, variables, and classes defined in a module by importing the module into another Python script.   
Example of a module (let's call it `my_module.py`):   

```python linenums="1" title="example.py"
# my_module.py

def greet(name):
    return f"Hello, {name}!"

def add(a, b):
    return a + b

if __name__ == "__main__":
    print("This is a standalone script.")

```

You can then use this module in another script:


```python linenums="1" title="example.py"
# another_script.py
import my_module

print(my_module.greet("Alice"))  # Output: Hello, Alice!
print(my_module.add(3, 5))       # Output: 8

```
#### Packages:

A package is a way of organizing related modules into a single directory hierarchy. Packages include a special `__init__.py` file to indicate that the directory should be treated as a package, and it may contain sub-packages or modules.

Example of a package structure:   

```
my_package/
|-- __init__.py
|-- module1.py
|-- module2.py
|-- subpackage/
    |-- __init__.py
    |-- module3.py


```

Here, `my_package` is a package, and `module1.py`, `module2.py`, and `subpackage` are modules. You can import modules from a package just like importing regular modules.

Example usage:   

```python linenums="1" title="example.py"
# main_script.py
from my_package import module1, subpackage.module3

print(module1.square(4))          # Output: 16
print(subpackage.module3.divide(8, 2))  # Output: 4.0

```

In this example, `module1` is part of the `my_package`, and `module3` is part of the `subpackage` within `my_package`.   
In summary, modules help organize code within a file, while packages organize related modules into a directory hierarchy. Both contribute to code organization, reusability, and maintainability in larger Python projects.   

---

### 10. What are global, protected and private attributes in Python?

In Python, the concepts of global, protected (or "protected internal"), and private attributes are related to variable and method visibility and access control within classes. These access specifiers are not enforced by the Python interpreter, but they serve as conventions to indicate the intended use and visibility of attributes.

1. **Global Attributes:**   
    - Global attributes are variables defined outside of any class or function, making them accessible throughout the entire module or script.   
    - These attributes can be accessed from any part of the code, but their global scope means that their values can be modified from anywhere.   
   
    Example:  

    ```python linenums="1" title="example.py"
    global_variable = 10

    def my_function():
        print(global_variable)

    my_function()  # Output: 10

    ```

2. **Protected Attributes (Convention):**   
    - In Python, there is no strict enforcement of protected attributes, but a convention is followed by prefixing the attribute name with a single underscore `_`.   
    - A single leading underscore indicates that the attribute should be treated as a protected internal attribute, and it signals to other developers that it is intended for internal use within the class or its subclasses.   
   
    Example:   

    ```python linenums="1" title="example.py"
    class MyClass:
        def __init__(self):
            self._protected_variable = 20

        def get_protected_variable(self):
            return self._protected_variable

    obj = MyClass()
    print(obj.get_protected_variable())  # Output: 20

    ```

3. **Private Attributes (Convention):**

    - Similarly, private attributes are not strictly enforced in Python, but a convention is followed by prefixing the attribute name with a double underscore `__`.   
    - A double leading underscore signals that the attribute is intended to be private, and it should not be accessed directly from outside the class.   
   
    Example:   

    ```python linenums="1" title="example.py"
    class MyClass:
        def __init__(self):
            self.__private_variable = 30

        def get_private_variable(self):
            return self.__private_variable

    obj = MyClass()
    print(obj.get_private_variable())  # Output: 30
    # Accessing __private_variable directly would result in an AttributeError

    ```
    It's important to note that these naming conventions are not enforced by the Python interpreter; they are recommendations for developers to follow. Python trusts developers to adhere to these conventions for better code organization and to avoid unintended access to internal class attributes. Developers can still access and modify these attributes if they choose to do so, as Python prioritizes readability and simplicity over strict access control.   

---

### 11. What is the use of self in Python?

In Python, `self` is a conventionally used name for the first parameter of a method in a class. It refers to the instance of the class itself and is used to access and manipulate the instance's attributes and methods. When defining a method within a class, the first parameter is always `self`, although you can choose any valid variable name. The use of `self` is not restricted by the Python interpreter; it is a widely adopted convention for clarity and consistency.

Here's a simple example to illustrate the use of `self`:   

```python linenums="1" title="example.py"
class MyClass:
    def __init__(self, value):
        self.value = value

    def get_value(self):
        return self.value

    def set_value(self, new_value):
        self.value = new_value

# Creating an instance of MyClass
obj = MyClass(42)

# Accessing and modifying the attribute using self
print(obj.get_value())  # Output: 42

obj.set_value(100)
print(obj.get_value())  # Output: 100

```

In this example, `self` is used within the methods `__init__`, `get_value`, and `set_value` to refer to the instance of the `MyClass` class. When an object is created ( `obj = MyClass(42)`), the `self` parameter in the `__init__` method represents the newly created object ( `obj`). Similarly, when calling `obj.get_value()`, the `self` parameter refers to the `obj` instance.

Using `self` allows you to differentiate between instance variables (attributes specific to an instance of the class) and local variables within a method. It helps in maintaining the state of individual objects and supports the object-oriented paradigm in Python. While `self` is a convention, it is recommended to follow it for clarity and to make your code more readable to other Python developers.   

---

### 12. What is \_\_init\_\_?

`__init__` is a special method in Python classes, also known as the "constructor" method. It stands for "initialize" and is automatically called when an object of a class is created. The primary purpose of `__init__` is to initialize the attributes of the object with the values passed as arguments during the object creation.

Here's a basic example:  

```python linenums="1" title="example.py"
class MyClass:
    def __init__(self, value):
        self.value = value

# Creating an instance of MyClass
obj = MyClass(42)

# Accessing the attribute initialized in __init__
print(obj.value)  # Output: 42

```

In this example, the `__init__` method takes two parameters: `self` (which refers to the instance being created) and `value` (which is a parameter passed during the object creation). Inside `__init__`, `self.value` is assigned the value passed as an argument. When an instance of `MyClass` is created ( `obj = MyClass(42)`), the `__init__` method is automatically called, initializing the `value` attribute for the object.   
The `__init__` method is not mandatory in a class, but it is commonly used to set up the initial state of an object. It is one of the special methods in Python, denoted by double underscores ( `__`), and is part of a group of methods known as "magic" or "dunder" methods.   
In summary, `__init__` is a special method in Python classes that is automatically called when an object is created. It is used to initialize the attributes of the object, providing a convenient way to set up the initial state of instances.   

---

### 13. What is break, continue and pass in Python?

In Python, `break`, `continue`, and `pass` are control flow statements that affect the flow of execution within loops or conditional statements.

1. **`break` Statement:**

    - The `break` statement is used to exit a loop prematurely, stopping its execution even if the loop condition is not fully satisfied.   
    - It is commonly used with the `while` and `for` loops.   
   
    Example using `break` with a `while` loop:   

    ```python linenums="1" title="example.py"
    i = 0
    while i < 5:
        print(i)
        if i == 3:
            break
        i += 1

    ```

    Output:

    ```
    0
    1
    2
    3

    ```

    In this example, the loop stops when `i` becomes equal to 3 due to the `break` statement.

2. **`continue` Statement:**

    - The `continue` statement is used to skip the rest of the code inside a loop for the current iteration and move to the next iteration.   
    - It allows you to skip specific iterations without terminating the entire loop.   
   
    Example using `continue` with a `for` loop:   

    ```python linenums="1" title="example.py"
    for i in range(5):
        if i == 2:
            continue
        print(i)


    ```

    Output:   

    ```
    0
    1
    3
    4

    ```

    In this example, the loop skips the iteration when `i` is equal to 2 and continues with the next iteration.

3. **`pass` Statement:**

    - The `pass` statement is a no-operation statement, and it is used as a placeholder where syntactically some code is required but no action is desired.   
    - It is often used when a statement is syntactically needed but no specific action needs to be taken.   
   
    Example using `pass`:   

    ```python linenums="1" title="example.py"
    for i in range(5):
        if i == 2:
            pass
        else:
            print(i)


    ```

    Output:   

    ```
    0
    1
    3
    4

    ```

    In this example, the `pass` statement is used to indicate that no action should be taken when `i` is equal to 2.   
    These control flow statements provide flexibility in managing the flow of code execution within loops and conditional statements in Python.   

---

### 14. What are unit tests in Python?

Unit testing is a software testing technique where individual units or components of a program are tested in isolation to ensure that each unit works as intended. In Python, the built-in `unittest` module provides a framework for writing and running unit tests. Unit tests are an essential part of the development process, helping to identify and fix bugs early, verify that each unit of code behaves correctly, and ensure the maintainability of the codebase.

Key concepts related to unit testing in Python:

1. **Test Case:**
   
    - A test case is a set of conditions or variables under which a tester will determine whether a system or one of its components behaves as expected. In Python, a test case is defined as a class that subclasses `unittest.TestCase`.   
   
    Example of a simple test case:   

    ```python linenums="1" title="example.py"
    import unittest

    class MyTestCase(unittest.TestCase):
        def test_addition(self):
            self.assertEqual(1 + 1, 2)

        def test_subtraction(self):
            self.assertEqual(3 - 1, 2)

    if __name__ == "__main__":
        unittest.main()


    ```

2. **Test Fixture:**

    - A test fixture is the preparation needed to perform one or more tests. It includes setting up the necessary resources, such as creating objects or initializing variables, before running the test cases.   
   
    Example of using `setUp` and `tearDown` methods in a test case:   

    ```python linenums="1" title="example.py"
    import unittest

    class MyTestCase(unittest.TestCase):
        def setUp(self):
            # Set up resources or initialize variables before each test
            self.my_list = [1, 2, 3]

        def tearDown(self):
            # Clean up resources or perform cleanup after each test
            self.my_list = None

        def test_list_length(self):
            self.assertEqual(len(self.my_list), 3)

    if __name__ == "__main__":
        unittest.main()

    ```

3. **Assertions:**

    - Assertions are statements that assert or confirm a fact. In unit testing, assertions are used to check whether the expected outcomes match the actual outcomes.   
   
    Common assertions in the `unittest` module include:
       
    - `assertEqual(a, b)`: Checks if `a` and `b` are equal.   
    - `assertNotEqual(a, b)`: Checks if `a` and `b` are not equal.   
    - `assertTrue(x)`: Checks if `x` is true.   
    - `assertFalse(x)`: Checks if `x` is false.   
    - And more.   
   
    Example:  

    ```python linenums="1" title="example.py"
    import unittest

    class MyTestCase(unittest.TestCase):
        def test_addition(self):
            self.assertEqual(1 + 1, 2)

        def test_subtraction(self):
            self.assertNotEqual(3 - 1, 0)

    if __name__ == "__main__":
        unittest.main()


    ```

4. **Test Runner:**

    - The test runner is responsible for discovering and running the tests defined in the test cases. In Python, the `unittest` module provides a built-in test runner, and you can run tests from the command line or by using an integrated development environment (IDE) with test support.   
   
    Example of running tests from the command line:   

    ```
    python my_test_module.py

    ```

    Unit testing is a crucial practice in software development that promotes code reliability and helps catch potential issues early in the development process. It allows developers to verify that each unit of code performs as intended and continues to work correctly as the code evolves.   

---

### 15. What is docstring in Python?

n Python, a docstring (documentation string) is a string literal that occurs as the first statement in a module, function, class, or method definition. It serves as documentation for that specific object, providing information about its purpose, usage, parameters, return values, and more. Docstrings are not just comments but are accessible during runtime using the `help()` function or by examining the `__doc__` attribute of the object.

There are three common styles for writing docstrings in Python:

1. **One-line Docstring:**

    - Used for brief descriptions.   
    - Enclosed within triple double quotes ( `'''` or `"""`).   
    - Typically used for simple functions or methods.

    ```python linenums="1" title="example.py"
    def add(a, b):
        """Return the sum of two numbers."""
        return a + b

    ```

2. **Multi-line Docstring:**

    - Used for more detailed documentation.   
    - Enclosed within triple double quotes.   
    - May include information about parameters, return values, and usage examples.   
   
    ```python linenums="1" title="example.py"
    def multiply(a, b):
        """
        Multiply two numbers.

        Parameters:
        - a (int): The first number.
        - b (int): The second number.

        Returns:
        int: The product of a and b.
        """
        return a * b


    ```

3. **Google-style Docstring:**

    - A popular convention using triple double quotes.   
    - Includes sections like Parameters, Returns, Raises, Examples, etc., with a specific format.   
    - Often used in more complex projects or when adhering to specific documentation standards.   
   
    ```python linenums="1" title="example.py"
    def divide(dividend, divisor):
        """
        Divide two numbers.

        Args:
            dividend (float): The number to be divided.
            divisor (float): The number by which the dividend is divided.

        Returns:
            float: The result of the division.

        Raises:
            ValueError: If the divisor is 0.
        """
        if divisor == 0:
            raise ValueError("Cannot divide by zero.")
        return dividend / divisor

    ```

    Using docstrings is considered good practice in Python, as it helps improve code readability and maintainability. It also enables developers to generate documentation automatically using tools like Sphinx. Writing clear and informative docstrings makes it easier for others (and your future self) to understand and use your code effectively.   

---   

### 16. What is slicing in Python?

In Python, slicing is a technique that allows you to extract a portion of a sequence (like a string, list, or tuple) by specifying a range of indices. Slicing is done using the slicing operator `[:]`, and it provides a concise way to create a new sequence containing a subset of the elements from the original sequence.

The general syntax for slicing is as follows:  

```
sequence[start:stop:step]

```

- `start`: The starting index of the slice (inclusive). If omitted, it defaults to the beginning of the sequence.   
- `stop`: The ending index of the slice (exclusive). If omitted, it defaults to the end of the sequence.   
- `step`: The step or stride between elements in the slice. If omitted, it defaults to 1.   
   
Here are some examples of slicing in Python:

1. **Slicing a List:**   
   
```python linenums="1" title="example.py"
my_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# Extract elements from index 2 to 5 (exclusive)
sliced_list = my_list[2:5]
print(sliced_list)  # Output: [2, 3, 4]

# Extract every second element from index 1 to 8 (exclusive)
sliced_list_step = my_list[1:8:2]
print(sliced_list_step)  # Output: [1, 3, 5, 7]

# Omitting start and stop indices
full_slice = my_list[:]
print(full_slice)  # Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


```

2. **Slicing a String:**   
   
```python linenums="1" title="example.py"
my_string = "Hello, World!"

# Extract characters from index 7 to 12 (exclusive)
sliced_string = my_string[7:12]
print(sliced_string)  # Output: World

# Reverse the string using a step of -1
reversed_string = my_string[::-1]
print(reversed_string)  # Output: !dlroW ,olleH

```

3. **Slicing a Tuple:**   

```python linenums="1" title="example.py"
my_tuple = (10, 20, 30, 40, 50)

# Extract elements from index 1 to 4 (exclusive)
sliced_tuple = my_tuple[1:4]
print(sliced_tuple)  # Output: (20, 30, 40)

# Omitting start and stop indices
full_tuple = my_tuple[:]
print(full_tuple)  # Output: (10, 20, 30, 40, 50)

```
   
Slicing provides a powerful and concise way to work with subsequences in Python, making it easier to manipulate and analyze data within sequences.   
   
