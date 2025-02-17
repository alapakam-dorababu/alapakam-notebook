# Algorithms

This page provides an overview of essential sorting algorithms, including Insertion Sort, Bubble Sort, Selection Sort, and Merge Sort. Each algorithm is explained with its step-by-step approach, benefits, and implementation in Python.

### 1. Insertion Sort

Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, insertion sort provides several advantages.

Steps:

- **Step 1:** Start with the second element (index 1) and compare it with the first element (index 0). If it's smaller, swap them.  
- **Step 2:** Move to the third element (index 2) and compare it with the elements before it. Insert it in the correct position in the sorted part of the list.  
- **Step 3:** Repeat this process for each subsequent element until the entire list is sorted.  

```python linenums="1" title="example.py"
 def insertion_sort(my_list):
    """
    This function implements the insertion sort algorithm to sort a list in ascending order.

    Parameters:
    my_list (list): The input list to be sorted in-place.

    Returns:
    None: The function sorts the input list in-place and doesn't return any value.
    """
    for i in range(1, len(my_list)):
        current_value = my_list[i]
        current_position = i

        while current_position > 0 and current_value < my_list[current_position - 1]:
            my_list[current_position] = my_list[current_position - 1]
            current_position = current_position - 1
        
        my_list[current_position] = current_value

# Example usage:
my_list = [12, 11, 13, 5, 6]
insertion_sort(my_list)
print(my_list)
```

---

### 2. Bubble Sort

- Traverse from left and compare adjacent elements, placing the larger one to the right.
- The largest element is moved to the rightmost end first.
- The process continues to find the second largest, third largest, and so on until the list is sorted.

```python linenums="1" title="example.py"
def bubble_sort(my_list):
    """
    This function implements the bubble sort algorithm to sort a list in ascending order.
    """
    for i in range(len(my_list)):
        for j in range(len(my_list) - i - 1):
            if my_list[j] > my_list[j + 1]:
                my_list[j], my_list[j + 1] = my_list[j + 1], my_list[j]

# Example usage:
my_list = [8, 7, 1, 4, 5, 0]
bubble_sort(my_list)
print(my_list)
```

---

### 3. Selection Sort

This algorithm repeatedly selects the smallest (or largest) element from the unsorted portion of the list and swaps it with the first element of the unsorted part. This process is repeated until the entire list is sorted.

```python linenums="1" title="example.py"
def selection_sort(my_list):
    """
    This function implements the selection sort algorithm to sort a list in ascending order.
    """
    for i in range(len(my_list)):
        min_value_index = my_list.index(min(my_list[i:]))
        my_list[i], my_list[min_value_index] = my_list[min_value_index], my_list[i]

# Example usage:
my_list = [8, 7, 1, 4, 5, 0]
selection_sort(my_list)
print(my_list)
```

---

### 4. Merge Sort

Merge Sort is a popular sorting algorithm that follows the divide-and-conquer paradigm.

Steps:

1. **Divide:** Split the unsorted list into `n` sub-lists, each containing one element.  
2. **Conquer:** Recursively sort the sub-lists created in the previous step.  
3. **Merge:** Merge the sorted sub-lists to produce new sorted sub-lists until there is only one remaining, which is the sorted list.

```python linenums="1" title="example.py"
def merge_sort(my_list):
    """
    Sorts a list in ascending order using the merge sort algorithm.
    """
    if len(my_list) > 1:
        mid = len(my_list) // 2
        left_list = my_list[:mid]
        right_list = my_list[mid:]

        merge_sort(left_list)
        merge_sort(right_list)

        i = j = k = 0

        while i < len(left_list) and j < len(right_list):
            if left_list[i] < right_list[j]:
                my_list[k] = left_list[i]
                i += 1
            else:
                my_list[k] = right_list[j]
                j += 1
            k += 1

        while i < len(left_list):
            my_list[k] = left_list[i]
            i += 1
            k += 1

        while j < len(right_list):
            my_list[k] = right_list[j]
            j += 1
            k += 1

# Example usage:
my_list = [5, 1, 0, 9, 3, 8, 6]
merge_sort(my_list)
print(my_list)
```

