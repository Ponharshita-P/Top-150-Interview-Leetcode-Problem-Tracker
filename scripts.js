const problems = [
    { problem: 'Merge Sorted Array', complexity: 'Easy' },
    { problem: 'Remove Element', complexity: 'Easy' },
    { problem: 'Remove Duplicates from Sorted Array', complexity: 'Easy' },
    { problem: 'Remove Duplicates from Sorted Array II', complexity: 'Medium' },
    { problem: 'Majority Element', complexity: 'Easy' },
    { problem: 'Rotate Array', complexity: 'Medium' },
    { problem: 'Best Time to Buy and Sell Stock', complexity: 'Easy' },
    { problem: 'Best Time to Buy and Sell Stock II', complexity: 'Medium' },
    { problem: 'Jump Game', complexity: 'Medium' },
    { problem: 'Jump Game II', complexity: 'Medium' },
    { problem: 'H-Index', complexity: 'Medium' },
    { problem: 'Insert Delete GetRandom O(1)', complexity: 'Medium' },
    { problem: 'Product of Array Except Self', complexity: 'Medium' },
    { problem: 'Gas Station', complexity: 'Medium' },
    { problem: 'Candy', complexity: 'Hard' },
    { problem: 'Trapping Rain Water', complexity: 'Hard' },
    { problem: 'Roman to Integer', complexity: 'Easy' },
    { problem: 'Integer to Roman', complexity: 'Medium' },
    { problem: 'Length of Last Word', complexity: 'Easy' },
    { problem: 'Longest Common Prefix', complexity: 'Easy' },
    { problem: 'Reverse Words in a String', complexity: 'Medium' },
    { problem: 'Zigzag Conversion', complexity: 'Medium' },
    { problem: 'Find the Index of the First Occurrence in a String', complexity: 'Easy' },
    { problem: 'Text Justification', complexity: 'Hard' },
    { problem: 'Valid Palindrome', complexity: 'Easy' },
    { problem: 'Is Subsequence', complexity: 'Easy' },
    { problem: 'Two Sum II - Input Array Is Sorted', complexity: 'Medium' },
    { problem: 'Container With Most Water', complexity: 'Medium' },
    { problem: '3Sum', complexity: 'Medium' },
    { problem: 'Minimum Size Subarray Sum', complexity: 'Medium' },
    { problem: 'Longest Substring Without Repeating Characters', complexity: 'Medium' },
    { problem: 'Substring with Concatenation of All Words', complexity: 'Hard' },
    { problem: 'Minimum Window Substring', complexity: 'Hard' },
    { problem: 'Valid Sudoku', complexity: 'Medium' },
    { problem: 'Spiral Matrix', complexity: 'Medium' },
    { problem: 'Rotate Image', complexity: 'Medium' },
    { problem: 'Set Matrix Zeroes', complexity: 'Medium' },
    { problem: 'Game of Life', complexity: 'Medium' },
    { problem: 'Ransom Note', complexity: 'Easy' },
    { problem: 'Isomorphic Strings', complexity: 'Easy' },
    { problem: 'Word Pattern', complexity: 'Easy' },
    { problem: 'Valid Anagram', complexity: 'Easy' },
    { problem: 'Group Anagrams', complexity: 'Medium' },
    { problem: 'Two Sum', complexity: 'Easy' },
    { problem: 'Happy Number', complexity: 'Easy' },
    { problem: 'Contains Duplicate II', complexity: 'Easy' },
    { problem: 'Longest Consecutive Sequence', complexity: 'Medium' },
    { problem: 'Summary Ranges', complexity: 'Easy' },
    { problem: 'Merge Intervals', complexity: 'Medium' },
    { problem: 'Insert Interval', complexity: 'Medium' },
    { problem: 'Minimum Number of Arrows to Burst Balloons', complexity: 'Medium' },
    { problem: 'Valid Parentheses', complexity: 'Easy' },
    { problem: 'Simplify Path', complexity: 'Medium' },
    { problem: 'Min Stack', complexity: 'Medium' },
    { problem: 'Evaluate Reverse Polish Notation', complexity: 'Medium' },
    { problem: 'Basic Calculator', complexity: 'Hard' },
    { problem: 'Linked List Cycle', complexity: 'Easy' },
    { problem: 'Add Two Numbers', complexity: 'Medium' },
    { problem: 'Merge Two Sorted Lists', complexity: 'Easy' },
    { problem: 'Copy List with Random Pointer', complexity: 'Medium' },
    { problem: 'Reverse Linked List II', complexity: 'Medium' },
    { problem: 'Reverse Nodes in k-Group', complexity: 'Hard' },
    { problem: 'Remove Nth Node From End of List', complexity: 'Medium' },
    { problem: 'Remove Duplicates from Sorted List II', complexity: 'Medium' },
    { problem: 'Rotate List', complexity: 'Medium' },
    { problem: 'Partition List', complexity: 'Medium' },
    { problem: 'LRU Cache', complexity: 'Medium' },
    { problem: 'Maximum Depth of Binary Tree', complexity: 'Easy' },
    { problem: 'Same Tree', complexity: 'Easy' },
    { problem: 'Invert Binary Tree', complexity: 'Easy' },
    { problem: 'Symmetric Tree', complexity: 'Easy' },
    { problem: 'Construct Binary Tree from Preorder and Inorder Traversal', complexity: 'Medium' },
    { problem: 'Construct Binary Tree from Inorder and Postorder Traversal', complexity: 'Medium' },
    { problem: 'Populating Next Right Pointers in Each Node II', complexity: 'Medium' },
    { problem: 'Flatten Binary Tree to Linked List', complexity: 'Medium' },
    { problem: 'Path Sum', complexity: 'Easy' },
    { problem: 'Sum Root to Leaf Numbers', complexity: 'Medium' },
    { problem: 'Binary Tree Maximum Path Sum', complexity: 'Hard' },
    { problem: 'Binary Search Tree Iterator', complexity: 'Medium' },
    { problem: 'Count Complete Tree Nodes', complexity: 'Easy' },
    { problem: 'Lowest Common Ancestor of a Binary Tree', complexity: 'Medium' },
    { problem: 'Binary Tree Right Side View', complexity: 'Medium' },
    { problem: 'Average of Levels in Binary Tree', complexity: 'Easy' },
    { problem: 'Binary Tree Level Order Traversal', complexity: 'Medium' },
    { problem: 'Binary Tree Zigzag Level Order Traversal', complexity: 'Medium' },
    { problem: 'Minimum Absolute Difference in BST', complexity: 'Easy' },
    { problem: 'Kth Smallest Element in a BST', complexity: 'Medium' },
    { problem: 'Validate Binary Search Tree', complexity: 'Medium' },
    { problem: 'Number of Islands', complexity: 'Medium' },
    { problem: 'Surrounded Regions', complexity: 'Medium' },
    { problem: 'Clone Graph', complexity: 'Medium' },
    { problem: 'Evaluate Division', complexity: 'Medium' },
    { problem: 'Course Schedule', complexity: 'Medium' },
    { problem: 'Course Schedule II', complexity: 'Medium' },
    { problem: 'Snakes and Ladders', complexity: 'Medium' },
    { problem: 'Minimum Genetic Mutation', complexity: 'Medium' },
    { problem: 'Word Ladder', complexity: 'Hard' },
    { problem: 'Implement Trie (Prefix Tree)', complexity: 'Medium' },
    { problem: 'Design Add and Search Words Data Structure', complexity: 'Medium' },
    { problem: 'Word Search II', complexity: 'Hard' },
    { problem: 'Letter Combinations of a Phone Number', complexity: 'Medium' },
    { problem: 'Combinations', complexity: 'Medium' },
    { problem: 'Permutations', complexity: 'Medium' },
    { problem: 'Combination Sum', complexity: 'Medium' },
    { problem: 'N-Queens II', complexity: 'Hard' },
    { problem: 'Generate Parentheses', complexity: 'Medium' },
    { problem: 'Word Search', complexity: 'Medium' },
    { problem: 'Convert Sorted Array to Binary Search Tree', complexity: 'Easy' },
    { problem: 'Sort List', complexity: 'Medium' },
    { problem: 'Construct Quad Tree', complexity: 'Medium' },
    { problem: 'Merge k Sorted Lists', complexity: 'Hard' },
    { problem: 'Maximum Subarray', complexity: 'Medium' },
    { problem: 'Maximum Sum Circular Subarray', complexity: 'Medium' },
    { problem: 'Search Insert Position', complexity: 'Easy' },
    { problem: 'Search a 2D Matrix', complexity: 'Medium' },
    { problem: 'Find Peak Element', complexity: 'Medium' },
    { problem: 'Search in Rotated Sorted Array', complexity: 'Medium' },
    { problem: 'Find First and Last Position of Element in Sorted Array', complexity: 'Medium' },
    { problem: 'Find Minimum in Rotated Sorted Array', complexity: 'Medium' },
    { problem: 'Median of Two Sorted Arrays', complexity: 'Hard' },
    { problem: 'Kth Largest Element in an Array', complexity: 'Medium' },
    { problem: 'IPO', complexity: 'Hard' },
    { problem: 'Find K Pairs with Smallest Sums', complexity: 'Medium' },
    { problem: 'Find Median from Data Stream', complexity: 'Hard' },
    { problem: 'Add Binary', complexity: 'Easy' },
    { problem: 'Reverse Bits', complexity: 'Easy' },
    { problem: 'Number of 1 Bits', complexity: 'Easy' },
    { problem: 'Single Number', complexity: 'Easy' },
    { problem: 'Single Number II', complexity: 'Medium' },
    { problem: 'Bitwise AND of Numbers Range', complexity: 'Medium' },
    { problem: 'Palindrome Number', complexity: 'Easy' },
    { problem: 'Plus One', complexity: 'Easy' },
    { problem: 'Factorial Trailing Zeroes', complexity: 'Medium' },
    { problem: 'Sqrt(x)', complexity: 'Easy' },
    { problem: 'Pow(x, n)', complexity: 'Medium' },
    { problem: 'Max Points on a Line', complexity: 'Hard' },
    { problem: 'Climbing Stairs', complexity: 'Easy' },
    { problem: 'House Robber', complexity: 'Medium' },
    { problem: 'Word Break', complexity: 'Medium' },
    { problem: 'Coin Change', complexity: 'Medium' },
    { problem: 'Longest Increasing Subsequence', complexity: 'Medium' },
    { problem: 'Triangle', complexity: 'Medium' },
    { problem: 'Minimum Path Sum', complexity: 'Medium' },
    { problem: 'Unique Paths II', complexity: 'Medium' },
    { problem: 'Longest Palindromic Substring', complexity: 'Medium' },
    { problem: 'Interleaving String', complexity: 'Medium' },
    { problem: 'Edit Distance', complexity: 'Medium' },
    { problem: 'Best Time to Buy and Sell Stock III', complexity: 'Hard' },
    { problem: 'Best Time to Buy and Sell Stock IV', complexity: 'Hard' },
    { problem: 'Maximal Square', complexity: 'Medium' }
];


const problemList = document.getElementById('problem-list');
const randomBtn = document.getElementById('random-btn');
const progressBar = document.getElementById('progress-bar');
const sortDropdown = document.getElementById('sort-dropdown');
const filterDropdown = document.getElementById('filter-dropdown');

let filteredProblems = problems.slice(); // Copy of problems array for filtering

// Function to create table rows for each problem
function createProblemRows() {
    problemList.innerHTML = ''; // Clear previous rows

    filteredProblems.forEach((item, index) => {
        const row = document.createElement('tr');
        
        const numberCell = document.createElement('td');
        numberCell.textContent = index + 1;
        row.appendChild(numberCell);
        
        const problemCell = document.createElement('td');
        problemCell.textContent = item.problem;
        row.appendChild(problemCell);
        
        const complexityCell = document.createElement('td');
        complexityCell.textContent = item.complexity;
        row.appendChild(complexityCell);
        
        const checkBoxCell = document.createElement('td');
        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.id = `problem-${index}`;
        checkBox.checked = localStorage.getItem(`problem-${index}`) === 'true'; // Set checked state from localStorage
        checkBoxCell.appendChild(checkBox);
        row.appendChild(checkBoxCell);
        
        problemList.appendChild(row);
    });
}

// Function to calculate and update progress bar
// Function to calculate and update progress bar
function updateProgressBar() {
    const totalProblems = problems.length;
    const completedProblems = document.querySelectorAll('input[type="checkbox"]:checked').length;

    // Update the progress bar width
    progressBar.style.width = `${(completedProblems / totalProblems) * 100}%`;

    // Update the progress text above the progress bar
    const progressText = document.getElementById('progress-text');
    progressText.textContent = ` Your Progress : ${completedProblems} / ${totalProblems}`;
}

// Function to save checkbox state to localStorage
function saveCheckboxState() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox, index) => {
        localStorage.setItem(`problem-${index}`, checkbox.checked);
    });
}


// Function to save checkbox state to localStorage
function saveCheckboxState() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox, index) => {
        localStorage.setItem(`problem-${index}`, checkbox.checked);
    });
}

// Function to pick a random problem
function pickRandomProblem() {
    const randomIndex = Math.floor(Math.random() * problems.length);
    alert(`Try solving: ${problems[randomIndex].problem}`);
}

// Add event listener to the button
randomBtn.addEventListener('click', pickRandomProblem);

// Add event listener to checkboxes to update progress and save state
problemList.addEventListener('change', function(e) {
    if (e.target.matches('input[type="checkbox"]')) {
        updateProgressBar();
        saveCheckboxState();
    }
});

// Initialize the problem list and progress bar on page load
createProblemRows();
updateProgressBar();

// Sorting and Filtering

// Sort Dropdown Event Listener
sortDropdown.addEventListener('change', function() {
    const sortBy = sortDropdown.value;
    sortProblems(sortBy);
});

// Function to sort problems based on complexity
function sortProblems(sortBy) {
    if (sortBy === 'problemNumber') {
        filteredProblems.sort((a, b) => a.problem.localeCompare(b.problem));
    } else if (sortBy === 'complexity') {
        filteredProblems.sort((a, b) => a.complexity.localeCompare(b.complexity));
    }

    createProblemRows();
}

// Filter Dropdown Event Listener
filterDropdown.addEventListener('change', function() {
    const filterBy = filterDropdown.value;
    filterProblems(filterBy);
});

// Function to filter problems based on complexity
function filterProblems(filterBy) {
    if (filterBy === 'all') {
        filteredProblems = problems.slice();
    } else {
        filteredProblems = problems.filter(problem => problem.complexity === filterBy);
    }

    createProblemRows();
}
