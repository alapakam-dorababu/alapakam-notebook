---
date: 2025-02-13
categories:
  - Interview
tags:
  - Python
  - Interview
authors: [alapakam]
title: Python Oops Interview Questions
---

# Python OOPs Interview Questions

Here are some commonly asked Python Object-Oriented Programming (OOP) interview questions that will help you prepare for technical discussions. These questions cover fundamental concepts such as **classes, objects, inheritance, polymorphism, encapsulation, and abstraction**. Understanding these concepts will enhance your ability to design efficient and maintainable Python applications.

<!-- more -->

### 1. How do you create a class in Python?

In Python, you can create a class using the `class` keyword, followed by the class name. The class body contains attributes (variables) and methods (functions) that define the behavior of the class. Here's a basic example:

```python
class MyClass:
    # Class attribute
    class_variable = "I am a class variable"

    # Constructor method (initializer)
    def __init__(self, attribute1, attribute2):
        # Instance attributes
        self.attribute1 = attribute1
        self.attribute2 = attribute2

    # Instance method
    def display_attributes(self):
        print(f"Attribute 1: {self.attribute1}")
        print(f"Attribute 2: {self.attribute2}")

# Creating an instance of the class
my_instance = MyClass(attribute1="Value1", attribute2="Value2")

# Accessing class attribute
print(MyClass.class_variable)

# Accessing instance attributes
my_instance.display_attributes()

```

In this example:

- `MyClass` is the name of the class.   
- `class_variable` is a class attribute, shared by all instances of the class.   
- `__init__` is a special method called the constructor or initializer. It is invoked when an instance of the class is created and is used to initialize instance attributes.   
- `display_attributes` is an instance method that displays the values of instance attributes.   
   
To create an instance of the class, you instantiate it by calling the class name as if it were a function. The `self` parameter in the constructor and instance methods refers to the instance of the class.

When you run the script, you'll see the output:   

```python
I am a class variable
Attribute 1: Value1
Attribute 2: Value2

```

This is a basic example, and you can define more complex classes with additional attributes and methods. Classes are a fundamental part of object-oriented programming (OOP) in Python, providing a way to structure and organize code around the concept of objects.

---

### 2. What is a class and object in Python?

In Python, a class is a blueprint for creating objects, and an object is an instance of a class. Classes provide a way to structure and model real-world entities or concepts in a programming environment, and objects are instances of those classes that represent specific instances or entities.

#### Class:

- A class is a user-defined data type that defines a blueprint for creating objects.   
- It encapsulates data (attributes) and functionality (methods) related to a specific concept or entity.   
- Classes are created using the `class` keyword, followed by the class name and a block of code containing attributes and methods.   
   
Example of a simple class:

```python
class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def bark(self):
        print("Woof!")

# Creating an instance (object) of the Dog class
my_dog = Dog(name="Buddy", age=3)

```

In this example, the `Dog` class has attributes ( `name` and `age`) and a method ( `bark`). The `__init__` method is a special method (constructor) that initializes the attributes when an object is created.

#### Object:

- An object is an instance of a class. It is a concrete realization of the blueprint defined by the class.   
- Objects have their own unique identity and can have different values for the attributes defined in their class.   
- Methods defined in the class can be invoked on objects, allowing them to perform actions or behavior associated with the class.   
   
Example of using the `Dog` class to create objects:  

```python
# Creating two instances (objects) of the Dog class
dog1 = Dog(name="Buddy", age=3)
dog2 = Dog(name="Max", age=2)

# Accessing attributes and invoking methods on objects
print(dog1.name)    # Output: Buddy
print(dog2.age)     # Output: 2

dog1.bark()         # Output: Woof!
dog2.bark()         # Output: Woof!

```

In this example, `dog1` and `dog2` are two distinct objects created from the `Dog` class. They each have their own values for the `name` and `age` attributes, and they can invoke the `bark` method defined in the class.

Classes and objects are fundamental concepts in object-oriented programming (OOP), providing a way to structure code, promote code reusability, and model real-world entities in a modular and organized manner.   

---

### 3. How does inheritance work in python? Explain it with an example?

Inheritance is a fundamental concept in object-oriented programming (OOP) that allows a new class (subclass/derived class) to inherit attributes and methods from an existing class (superclass/base class). In Python, you can achieve inheritance using the `class` keyword and specifying the base class in parentheses after the subclass name.

There are several types of inheritance:

1. **Single Inheritance:**

    - In single inheritance, a subclass inherits from only one base class.   
   
    ```python
    class Animal:
        def speak(self):
            print("Animal speaks")

    class Dog(Animal):
        def bark(self):
            print("Dog barks")

    my_dog = Dog()
    my_dog.speak()  # Inherited from Animal
    my_dog.bark()

    ```

2. **Multiple Inheritance:**

    - In multiple inheritance, a subclass can inherit from more than one base class.   
   
    ```python
    class Bird:
        def chirp(self):
            print("Bird chirps")

    class Dog:
        def bark(self):
            print("Dog barks")

    class Griffin(Bird, Dog):
        def fly(self):
            print("Griffin flies")

    my_griffin = Griffin()
    my_griffin.chirp()
    my_griffin.bark()
    my_griffin.fly()

    ```

3. **Multilevel Inheritance:**

    - In multilevel inheritance, a subclass inherits from another subclass, forming a chain.   
   
    ```python
    class Animal:
        def speak(self):
            print("Animal speaks")

    class Dog(Animal):
        def bark(self):
            print("Dog barks")

    class Puppy(Dog):
        def play(self):
            print("Puppy plays")

    my_puppy = Puppy()
    my_puppy.speak()  # Inherited from Animal
    my_puppy.bark()   # Inherited from Dog
    my_puppy.play()

    ```

4. **Hierarchical Inheritance:**

    - In hierarchical inheritance, multiple subclasses inherit from a single base class.   
   
    ```python
    class Shape:
        def draw(self):
            print("Shape is drawn")

    class Circle(Shape):
        def draw_circle(self):
            print("Circle is drawn")

    class Square(Shape):
        def draw_square(self):
            print("Square is drawn")

    my_circle = Circle()
    my_square = Square()

    my_circle.draw()       # Inherited from Shape
    my_circle.draw_circle()

    my_square.draw()       # Inherited from Shape
    my_square.draw_square()

    ```
5. **Hybrid Inheritance:**

    - Hybrid inheritance is a combination of multiple types of inheritance.   
   
    ```python
    class Animal:
        def speak(self):
            print("Animal speaks")

    class Mammal(Animal):
        def milk(self):
            print("Mammal produces milk")

    class Dog(Mammal):
        def bark(self):
            print("Dog barks")

    class Bird(Animal):
        def chirp(self):
            print("Bird chirps")

    class Parrot(Bird, Mammal):
        def fly(self):
            print("Parrot flies")

    my_parrot = Parrot()
    my_parrot.speak()   # Inherited from Animal
    my_parrot.chirp()   # Inherited from Bird
    my_parrot.milk()    # Inherited from Mammal
    my_parrot.fly()

    ```

    In these examples, you can see different types of inheritance in action. The subclasses inherit attributes and methods from the base classes, allowing for code reuse and the organization of classes in a hierarchical structure. Each type of inheritance has its use cases, and the choice depends on the specific design requirements of your application.   

---

### 4. How do you access parent members in the child class?

In Python, you can access members (attributes and methods) of the parent class in a child class using the `super()` function. The `super()` function returns a temporary object of the superclass, allowing you to call its methods and access its attributes. This is particularly useful when you want to extend the functionality of the parent class in the child class.

Here's an example demonstrating how to access parent members in a child class:   

```python
class Parent:
    def __init__(self, name):
        self.name = name

    def display_info(self):
        print(f"Parent class - Name: {self.name}")

class Child(Parent):
    def __init__(self, name, additional_info):
        super().__init__(name)  # Calling the constructor of the parent class
        self.additional_info = additional_info

    def display_info(self):
        super().display_info()  # Calling the method of the parent class
        print(f"Child class - Additional Info: {self.additional_info}")

# Creating an instance of the child class
child_instance = Child(name="John", additional_info="Likes coding")

# Accessing members of the parent class through the child class
child_instance.display_info()

```

In this example:

- The `Parent` class has a constructor `__init__` that initializes an attribute `name` and a method `display_info` to display information about the object.

- The `Child` class is a subclass of `Parent` and extends its functionality. It has its own constructor that calls the constructor of the parent class using `super().__init__(name)`. It also overrides the `display_info` method to provide additional information while calling the parent method using `super().display_info()`.   
   
When you run this script, the output will be:  

```python
Parent class - Name: John
Child class - Additional Info: Likes coding

```

Using `super()` allows you to access and utilize the members of the parent class in a clean and maintainable way. This ensures that changes in the parent class do not require modifications in the child class as long as the interface remains consistent.   

--- 
  
### 5. Is it possible to call parent class without its instance creation?

Yes, it is possible to call a method or attribute of a parent class without creating an instance of the parent class by using the class name directly. This is often referred to as "calling the method or attribute in a static or class context." However, it is important to note that this approach has some limitations and considerations.

Here's an example:   

```python
class Parent:
    class_variable = "I am a class variable in the Parent class"

    @classmethod
    def class_method(cls):
        print("Class method in the Parent class")

class Child(Parent):
    pass

# Calling a class method of the parent class without instance creation
Parent.class_method()

# Accessing a class variable of the parent class without instance creation
print(Parent.class_variable)

```

In this example, the `Parent` class has a class method `class_method` and a class variable `class_variable`. These can be called using the class name ( `Parent`) without creating an instance of the class.

Keep in mind the following:

1. **Class Method:** To call a class method without instance creation, the method in the parent class should be defined with the `@classmethod` decorator. The first parameter is conventionally named `cls` (referring to the class itself).

2. **Class Variable:** Class variables are associated with the class rather than instances. They can be accessed using the class name directly.   
   
While calling class methods and accessing class variables without creating instances is possible, it's crucial to understand the context in which this is appropriate. It is often more common and recommended to create instances of classes and call methods on instances to work with instance-specific data.

```python
# Creating an instance of the Child class
child_instance = Child()

# Calling a class method through an instance
child_instance.class_method()

# Accessing a class variable through an instance
print(child_instance.class_variable)

```

In most cases, working with instances allows you to benefit from the object-oriented programming paradigm, encapsulation, and polymorphism, providing a cleaner and more modular code structure.   

---

### 6. How is an empty class created in python?

In Python, you can create an empty class by using the `pass` statement within the class definition. The `pass` statement is a null operation that serves as a placeholder where syntactically some code is required but no action is desired.

Here's an example of creating an empty class:   

```python
class EmptyClass:
    pass

```
In this example, `EmptyClass` is a class with no attributes or methods. It's essentially an empty shell. You might wonder why you would create an empty class. One common use case is when you want to define a class hierarchy and plan to add attributes or methods to the class later. It serves as a starting point for future development.   

```python
class Animal:
    pass

# Subclassing the empty class to add specific behavior
class Dog(Animal):
    def bark(self):
        print("Woof!")

# Creating an instance of the Dog class
my_dog = Dog()
my_dog.bark()  # Outputs: Woof!

```

In this example, `Animal` is an empty class that serves as a base class. The `Dog` class inherits from `Animal` and adds a specific behavior ( `bark`). By starting with an empty class, you provide a structure for potential future enhancements without having to fill it with content immediately.

While creating an empty class with `pass` can be a valid starting point in some cases, it's essential to consider the design implications and whether a more structured approach, such as defining attributes and methods upfront, is more appropriate for your specific requirements.   

---

### 7. Differentiate between new and override modifiers?

In Python, the terms "new" and "override" are often associated with method resolution and method overriding in the context of inheritance. 

#### New Method (Method Resolution Order - MRO):

- When a subclass provides a method with the same name as a method in its superclass, and this method is not intended to override the superclass method, it is considered a "new method."

- In Python, the Method Resolution Order (MRO) determines the order in which base classes are searched when looking for a method. The MRO is influenced by the order in which base classes are listed in the class definition and the inheritance hierarchy.

- To define a new method, you simply provide a method with a new name in the subclass. This method does not override any method in the superclass.   

Example:  

```python
class Animal:
    def speak(self):
        print("Animal speaks")

class Dog(Animal):
    def bark(self):
        print("Dog barks")

my_dog = Dog()
my_dog.speak()  # Calls the speak method from the Animal class
my_dog.bark()   # Calls the bark method from the Dog class

```
   
#### Override Method:

- Method overriding occurs when a subclass provides a method with the same name as a method in its superclass, intending to replace or extend the behavior of the superclass method.

- The overridden method in the subclass should have the same method signature (name and parameters) as the method in the superclass.

- The purpose of method overriding is to customize or extend the behavior of the inherited method.   

Example:   

```python
class Animal:
    def speak(self):
        print("Animal speaks")

class Dog(Animal):
    def speak(self):  # Overrides the speak method from the Animal class
        print("Dog barks")

my_dog = Dog()
my_dog.speak()  # Calls the overridden speak method from the Dog class

```

In summary, a "new method" is a method introduced in the subclass with a different name, and it does not override any method in the superclass. On the other hand, "override" refers to the process of replacing or extending the behavior of a method in the superclass by providing a method with the same name in the subclass. The choice between introducing a new method or overriding an existing one depends on the desired behavior in the specific context of the class hierarchy.   

---

### 8. Why is finalize used?

In Python, the `__del__` method, also known as the "finalizer" or "destructor," is used for garbage collection and cleanup. However, it's important to note that relying on `__del__` for cleanup purposes has some limitations and may not be the best practice in all scenarios.

#### \_\_del\_\_ Method:

The `__del__` method is automatically called by the Python interpreter when an object is about to be destroyed, typically when there are no more references to the object. It can be used to perform cleanup actions such as releasing resources (closing files, network connections, etc.) associated with the object.

Example: 

```python
class MyClass:
    def __init__(self, name):
        self.name = name
        print(f"{self.name} created")

    def __del__(self):
        print(f"{self.name} destroyed")

# Creating instances of the class
obj1 = MyClass("Object 1")
obj2 = MyClass("Object 2")

# Deleting references to the objects
del obj1
del obj2

```
Output: 

```python
Object 1 created
Object 2 created
Object 1 destroyed
Object 2 destroyed

```

#### Limitations and Alternatives:

1. **Timing of Execution:**

    - The timing of when `__del__` is called is not guaranteed. It depends on the garbage collector, and the exact time of execution may be unpredictable. This makes it less reliable for critical cleanup tasks.

2. **Circular References:**

    - `__del__` may not be called in the presence of circular references (objects referencing each other), as the garbage collector might not be able to determine the correct order of destruction.

3. Context Managers ( **`with` statement):**

    - For resource cleanup, it is often better to use context managers (implemented using the `with` statement) or the `try`- `finally` block to ensure that cleanup code is executed regardless of exceptions or other issues.   
   
Example using context manager:   

```python
class FileHandler:
    def __enter__(self):
        print("Opening file")
        # Additional setup, if needed
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        print("Closing file")
        # Additional cleanup, if needed

# Using the context manager
with FileHandler() as file_handler:
    # Code block where file is open and used
    print("File is being used")
# File is automatically closed upon exiting the block

```

Using context managers provides a more controlled and deterministic way to manage resources and cleanup operations.

In summary, while `__del__` can be used for cleanup, it has limitations and may not be the best approach for critical resource management. Context managers, along with the `with` statement, and the `try`- `finally` block are often preferred for more reliable and predictable cleanup in Python.   

---

### 9. What is init method in python?

In Python, the `__init__` method is a special method (also known as a constructor) that is automatically called when an object is created from a class. It is used to initialize the attributes of the object and perform any setup or initialization needed for the object to be in a valid state.

The `__init__` method is part of the object initialization process, and it is commonly used to set initial values for the instance variables (attributes) of the class. It is invoked automatically when you create an instance of the class using the class name followed by parentheses.   

Here's a simple example of using the `__init__` method:   

```python
class MyClass:
    def __init__(self, name, age):
        # Initialize instance variables
        self.name = name
        self.age = age

# Creating an instance of the class and calling __init__ automatically
my_instance = MyClass(name="John", age=30)

# Accessing instance variables
print(f"Name: {my_instance.name}, Age: {my_instance.age}")

```

In this example:

- The `__init__` method takes three parameters: `self` (the instance being created), `name`, and `age`.

- Inside the `__init__` method, the instance variables `name` and `age` are initialized with the values passed as arguments when creating the object ( `MyClass(name="John", age=30)`).   
   
When you create an instance of the class ( `my_instance`), the `__init__` method is automatically called, and the instance variables are initialized. This ensures that the object is set up correctly from the moment of its creation.

It's important to note that the `self` parameter is a convention in Python and refers to the instance of the class. It is the first parameter in every instance method, including `__init__`. The use of `self` allows you to access and modify the attributes of the object within the method.   

---

### 10. How will you check if a class is a child of another class?

In Python, you can check if a class is a child (subclass) of another class using the `issubclass()` function or by checking the relationship directly using the `__bases__` attribute. Both methods provide a way to determine the inheritance relationship between two classes. 

#### Using issubclass() Function:

The `issubclass()` function checks if a class is a subclass of another class. It takes two arguments: the potential subclass and the potential superclass.  

```python
class Parent:
    pass

class Child(Parent):
    pass

# Check if Child is a subclass of Parent
is_child_of_parent = issubclass(Child, Parent)

if is_child_of_parent:
    print("Child is a subclass of Parent")
else:
    print("Child is not a subclass of Parent")

```

#### Using __bases__ Attribute:

The `__bases__` attribute of a class provides a tuple of its base classes. You can check if a specific class is present in this tuple to determine if it's a child of another class.   

```python
class Parent:
    pass

class Child(Parent):
    pass

# Check if Child is a subclass of Parent
is_child_of_parent = Parent in Child.__bases__

if is_child_of_parent:
    print("Child is a subclass of Parent")
else:
    print("Child is not a subclass of Parent")

```

Both approaches will give you the information you need about the inheritance relationship between two classes. The `issubclass()` function is often preferred for its readability and explicitness in expressing the relationship.   
   
