---
layout: default
title: "Lab Check-Off Questions"
permalink: labquestions/index.html
published: true
---


{% include nav.html %}

{% include quicklinks.html %}

<script>
    {% include_relative assets/cs10.js %}
</script>

# Lab Check-Off Questions

<div class="page-section" markdown="1">

## Directions

**All lab check-off deadlines are at 11:59PM.**
(However, you need to get checked off by a TA or lab assistant, so you last chance to get checked off is during lab or office hours.)

To get checked off, you should prepare answers to the specific questions for each lab. You shouldn't feel compelled to memorize every single detail of lab. The goal here to make sure you're on track with CS10 and you should be comfortable with the higher level concepts for each question. For each lab the first questions are the biggest ideas, and the later questions are for your own benefit and review.

**Remember:** Even if you miss a check-off deadline, you can still get 50% credit for any lab check off at any time during the semester.

</div>

---

<div class="page-section" markdown="1">

## Quick Links

* [Lab 1](#lab1) (Week 1)
* [Lab 2](#lab2) (Week 2)
* [Lab 3](#lab3)
* [Lab 4](#lab4) (Week 3)
* [Lab 5](#lab5)
* [Lab 6](#lab6) (Week 4)
* [Lab 7](#lab7) (Week 5)
* [Lab 8](#lab8)
* [Lab 9](#lab9) (Week 6)
* [Lab 10](#lab10) (Week 7)
* [Lab 11](#lab11)
* [Lab 12](#lab12) (Week 8)
* [Lab 13](#lab13) (Week 9)
* [Lab 14](#lab14) (Week 10)
* [Lab 15](#lab15) (Week 11)
* [Lab 16](#lab16)
* [Lab 17](#lab17) (Week 12)
* [Lab 18](#lab18) (Week 13)
</div>

---

<div class="page-section" markdown="1">

# Week 1: Lab 1: No check-off needed!

## Lab 1: Welcome to Snap<em>!</em>   {#lab1}
* No questions for this lab!

---

# Week 2: Labs 2 and 3

## Lab 2: Build Your Own Blocks {#lab2}

**Required**

* Show your field of flowers (last page of lab).
* Why should you Build Your Own Blocks? Give a reason that someone may create a custom block.
* What are some different ways to achieve repetition? Name at least 2.
* Show your random-walk sprite.
* Show your `draw square-leaved flower...` block.

**More Self-Check Questions**

* Did you customize your flower block in any ways? Be creative.
* Show your customized bug dance.

---

## Lab 3: Conditionals and Variables {#lab3}

**Required**

* What is a Boolean? Explain why we use them, and give examples of functions that report a Boolean value.
* Show us the `traffic signal _`, `letter grade _`, and `state of water _` blocks.
* Explain the difference between a **command** and a **reporter** block.
* Show us the `is _ between _ and _ ?` block.
* What does [this mystery reporter](http://beautyjoy.github.io/bjc-r/cur/programming/functions/mystery-reporter-netsblox.html?topic=berkeley_bjc%2Fintro_pair%2F3-conditionals-netsblox.topic&course=cs10_sp18.html&novideo&noreading&noassignment) report when run with the inputs "hello" and 5.

**More Self-Check Questions**

* Why do we use the `if` and `if-else` blocks?
* When do you use a command block, and when do use use a reporter block?

---

# Week 3: Labs 4 and 5

## Lab 4: Functions {#lab4}

**Required**

* Name a few of the input types. Why is it important that we specify input types?
* How are global variables different from script variables?
* Show and Explain your Valid-Date Block
* Show and Explain your  "sum of two smallest" block.
* Explain the bug(s) in "(Problem 3) Sum of numbers between x and y."

**More Self-Check Questions**

* Why is the check block useful? And how does it work?
* Why is the broadcast block useful? Give an example of a good situation to use one.

## Lab 5: Lists 1 {#lab5}

**Required**

* What is a list? Why would we use a list of 10 elements instead of just making 10 variables?
* What do `map`, `keep`, and `combine` each do? What are their inputs and outputs? What are these types of functions called?
* Show us your `acronym` block.
* Show us your `expand _` block.
* What's the difference between the `for each` loop and the `for (i)` loop we've used in previous labs?

** More Self-Check Questions **

* Look back at the `swap items` block. Why do we need a "temp" variable?
* When would we want to use a loop versus a higher order function?

---

# Week 4: Lab 6

## Lab 6: Algorithms {#lab6}

**Required**

* What is an algorithm? Please give an example both in real life and from class.
* Please show both your “Find the number X in Unsorted List” and “Find the number X in Sorted List” blocks and describe the difference in the algorithms used.
* Are algorithms which are (on average) faster always "better"? Why or why not?
* What might some "trade-offs" to different computer science algorithms be?
* How can abstraction and algorithms relate in computer science?

**More Self-Check Questions**

* What is memoization? When is it useful?
* If you have an unsorted list, do you think it will be faster to use your “Find the number X in Unsorted List” block, or sort the list and use your “Find the number X in Sorted List”? Remember that sorting takes time.

---

# Week 5: Labs 7 and 8

## Lab 7: Algorithm Complexity {#lab7}

**Required**

* Please show me your Non-Gauss and Gauss Add all numbers in. Which was faster? Why?
* Of all the runtimes you have discovered thus far, can you rank them from “fastest” to “slowest”? Why is runtime important for the programs that we create?
* Name the logarithmic time algorithm that we implemented in Lab 6. Explain why this algorithm runs in logarithmic time.
* What is the difference between “Worst-Case” and “Best Case” Runtimes when running the Are the numbers of (LIST) distinct? block? Why?
* What happened with the time it took for your computer to counter up the numbers between 1 and x when you started doubling the numbers? Tripling the numbers? What do you think would happen with the time I multiplied your top number by 8?

**More Self-Check Questions**`

* Why are constant time algorithms so rare?
* Why are logarithmic time algorithms sought after?


## Lab 8: Testing Code and 2048 {#lab8}

**Required**

* How does the **test** block work? What is its domain/range?
* Show us the output of your **test** block on **merge column**. Explain why this output makes sense, and how the test block is checking this block.
* How will writing tests help you for the 2048 assignment?
* How do **merge up** and **merge column** work? What are the domain/range of each block?
* What is the domain and range of the **update display** block?

**More Self-Check Questions**

* What tests could you have written for HW2 (Encryptify)?
* Explain how each of the HW3 blocks (that you are going to fill in as your  hw assignment) are supposed to work, to your lab partner(s).

---

# Week 6: Lab 9

## Lab 9: Concurrency {#lab9}

**Required**

* What is a race condition?
* Is it always true that splitting a task among 10 “workers” is better than splitting it among 5 “workers”?
* What is the difference between determinism and nondeterminism, in the context of concurrency?
* How does Snap! handle concurrency?
* What happened as you added more people in the card sorting activity?

**More Self-Check Questions**

* What were some strategies your team thought of in the card sorting activity? How do these relate to how a computer handles concurrency?
* Give an example of when concurrency might cause a problem in a computer program.

---

# Week 7: Labs 10 and 11

## Lab 10: Tic-Tac-Toe, Boards {#lab10}

**Required**

* Show your final “ttt” block implementation.
* How did one of the questions we asked ourselves before starting tic-tac-toe help us design the program?
* Why did we have variables like “Size”, “Start”, and “Display Width” when designing our board?
* Show your working board game by moving the sprite around the board.
* Explain an advantage of using an underlying board structure when designing a game.

**More Self-Check Questions**

* Show your neat end-game feature that you added to the maze game.

## Lab 11: Trees and Fractals Using Recursion {#lab11}

**Required**

* Please show me your “crazy-tree” block.
* Why is it important that the inputs to a recursive call be smaller than the original inputs to the function?
* Why is it important that the sprite face the same direction at the end of a recursive function as it faced initially?
* What defines a recursive block? What are the two necessary “cases” that a recursive block must consider? Name and define them.
* Please show me your “snowflake” block.

**More Self-Check Questions**

* Please shoe me your "C-Curve" block.

---

# Week 8: Lab 12

## Lab 12: Recursive Reporters {#lab12}

**Required**

* Why do we map the first item of the set in front of a recursive call of `subsets _` over the rest of the list?
* Explain why the second version of `subsets _` only makes 7 calls instead of 64.
* Explain how the `sort _` block works, how the `merge _` block works, and how they work together.
* Show us the recursive `numbers _` block.
* Show us the recursive `ends-e _` block.

**More Self-Check Questions**

* Why might we want to write a function recursively instead of iteratively or using a HOF?
* How might we be able to use recursive reporters to improve runtime?

---

# Week 9: Lab 13

## Functions as Data and HOFs {#lab13}

**Required**

* How can we use functions as data in Snap? What does the gray border do?
* What do the `call` and `run` blocks do? What’s the difference between them?
* Show us your `list all factorions between _ and _` block. How does this compare to the `list all pandigital numbers between _ and _` block?
* Show us your `is _ pandigital?` block and explain how you made it.
* Explain your `min value of _ over all numbers in _` block. How could we make a version that maximizes instead of minimizing?


**More Self-Check Questions**

* How can we store functions as variables or lists? When might it be useful to have a list containing functions?
* What is the domain and range of the `compose` block? How would you construct the `compose-from-list` block?

------

# Week 10: Lab 14

## Lab 14: Finch Lab {#lab14}

**Required**

You can get checked off for this lab as long as you show up to lab and work on it. No questions!

---

# Week 11: Labs 15 and 16

## Lab 15: Besides Blocks: Welcome to Python {#lab15}

**Required**

* What is the difference between the "python", "python file.py", and "python -i file.py" terminal commands?
* What is the difference between the "print" and "return" python commands?
* Show your "reverse_string(string)" function. If you did it iteratively, explain the recursive solution. If you did it recursively, explain the iterative solution.
* Show your "palindrome(string)" function.
* Show your c-curve function and its output.


**More Self-Check Questions**

* What is the difference between the "=", "!=", and "==" python commands?
* What is the domain and range for the "+" function in python?


## Lab 16: Besides Blocks: Data Structures in Python {#lab16}

**Required**

* What is the difference between = and == in python?
* Show us the result of running the autograder.
* What is a dictionary?
* What does 0-indexing mean?

**Self-Check Questions**

* How to open the Python interpreter and run a script.
* How do you make a dictionary, enter a dictionary, and check what is inside your current dictionary?
* How do you define a function in python?

---

# Week 12: Lab 17

## Lab 17: Besides Blocks: Text Processing in Python {#lab17}

**Required**

* What are the arguments of the `open` function and what does it return?
* Show us your `izzle` function.
* How do we choose how something is sorted when using the `sorted` function in Python?
* Show us your `top_n_words` and `print_top_n_words` functions.
* Show us your `apply_language_game` function.

**More Self-Check Questions**

* Complete the remove punctutaion section at the bottom of the Counting Words page.
* Write the `top_n_words_except` function at the bottom of the Top Words page.

------

# Week 13: Lab 18

## Lab 18: Besides Blocks: Data and Python {#lab18}

**Required**

* What are some important commands that you can use to keep only certain rows in a table?
* Describe the three main steps of working with data as per this lab.
* What commands did you use to find the price of the most expensive listing in San Francisco?
* Show us your scatter plot? What are some things you notice from this plot?

------

<!-- Keep the /div at the bottom -->
</div>
