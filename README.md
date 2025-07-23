# DSA - JavaScript

A comprehensive collection of Data Structures and Algorithms implementations in JavaScript, covering fundamental programming concepts including Big O analysis, common patterns, recursion, and search algorithms.

## 📁 Project Structure

```
DSA-JavaScript/
├── Big O/                    # Time complexity analysis examples
│   ├── add1.js              # O(n) - Loop-based sum calculation
│   ├── add2.js              # O(1) - Mathematical formula approach
│   └── add3.js              # O(n) - Recursive sum with stack overflow demo
├── Patterns/                 # Common algorithmic patterns
│   ├── anagram.js           # String anagram validation algorithms
│   ├── charCount.js         # Character frequency counting
│   ├── countUniques.js      # Unique value counting in sorted arrays
│   ├── maxSubArraySum.js    # Sliding window pattern for subarray problems
│   ├── sameArray.js         # Frequency counter pattern implementation
│   └── sumZero.js           # Multiple pointers pattern for pair finding
├── Recursion/               # Recursive algorithm implementations
│   ├── capitalizeWords.js   # String manipulation using recursion
│   ├── collectOddValues.js  # Array filtering with recursive approach
│   ├── collectStrings.js    # Object traversal and string collection
│   ├── countDown.js         # Basic recursion with countdown example
│   ├── factorial.js         # Mathematical factorial calculation
│   ├── fibonacciSeries.js   # Fibonacci sequence generation
│   ├── isPalindrome.js      # Palindrome checking algorithm
│   ├── power.js             # Exponentiation using recursion
│   ├── productOfArray.js    # Array product calculation
│   └── reverseString.js     # String reversal implementation
├── Search/                  # Search algorithm implementations
│   ├── binarySearch.js      # O(log n) - Binary search on sorted arrays
│   └── linearSearch.js      # O(n) - Linear search implementation
├── index.html               # Main HTML file for testing
├── stopwatch.js             # Utility stopwatch object implementation
└── style.css                # Basic styling for the project
```

## 🚀 Getting Started

1. Clone or download this repository
2. Open `index.html` in your browser
3. Modify the script source in `index.html` to test different algorithms
4. Open browser console to see the output

## 📚 Content Overview

### Big O Analysis
Learn about time complexity through practical examples:
- **Linear Time O(n)**: Loop-based and recursive approaches
- **Constant Time O(1)**: Mathematical optimization techniques
- **Performance Comparison**: Real-world timing measurements

### Algorithmic Patterns
Master essential problem-solving patterns:
- **Frequency Counter**: Efficient object/map usage for counting
- **Multiple Pointers**: Two-pointer technique for array problems
- **Sliding Window**: Optimal subarray/substring problem solving

### Recursion
Comprehensive recursive programming concepts:
- **Base Cases**: Proper termination conditions
- **Helper Functions**: Internal recursive helper patterns
- **Pure Recursion**: Self-contained recursive solutions
- **Mathematical Operations**: Factorial, power, Fibonacci
- **Data Manipulation**: String/array processing

### Search Algorithms
Fundamental search implementations:
- **Linear Search**: Sequential element finding
- **Binary Search**: Efficient searching in sorted data

## 🎯 Key Features

- **Multiple Approaches**: Each problem includes different solution methods
- **Performance Analysis**: Time complexity comparisons with actual measurements
- **Test Cases**: Comprehensive test scenarios for each algorithm
- **Clean Code**: Well-commented, readable implementations
- **Educational Focus**: Detailed explanations and problem statements

## 🔧 Usage Examples

### Testing Algorithms
```javascript
// Modify the script source in index.html
<script src="Patterns/anagram.js"></script>

// Or test individual functions in browser console
console.log(validAnagram('listen', 'silent')); // true
```

### Performance Testing
```javascript
// Use the built-in performance measurements
let t1 = performance.now();
let result = someAlgorithm(input);
let t2 = performance.now();
console.log(`Execution time: ${(t2 - t1) / 1000} seconds`);
```

## 📖 Learning Path

1. **Start with Big O**: Understand time complexity concepts
2. **Master Patterns**: Learn frequency counter and multiple pointers
3. **Practice Recursion**: Build intuition with simple examples
4. **Implement Search**: Understand linear vs binary search trade-offs
5. **Compare Solutions**: Analyze different approaches for the same problem

## 🛠️ Development

The project uses vanilla JavaScript with no external dependencies. Each file is self-contained and can be run independently by including it in the HTML file.

### File Organization
- Each algorithm includes multiple implementation methods
- Test cases are provided as comments in each file
- Performance measurements are included where relevant
- Code is organized by algorithmic concept/pattern

## 🎓 Educational Value

This repository serves as a practical learning resource for:
- Computer Science students studying algorithms
- Developers preparing for technical interviews
- Anyone interested in understanding algorithmic thinking
- JavaScript developers wanting to improve problem-solving skills