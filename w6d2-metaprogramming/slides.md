# W6D2

## Metaprogramming

---

## Learning Objectives

- Define metaprogramming
- Identify `self` in:
  + class definitions
  + class methods
  + instance methods
- Describe the difference between class variables and class instance variables
- Know how to use `send` and `define_method`

---

![doge](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/master/sql/w6d2-metaprogramming/meta-doge.jpg?token=GHSAT0AAAAAACDSGGJIFZ3JOECN2QR4MNIGZD7GTVA)

---

## Agenda

* What is metaprogramming?
* Metaprogramming demos

---

## What is Metaprogramming?

* What is _programming_?


---

### What is Metaprogramming?

* The essence of programming is defining behaviour
* Metaprogramming is defining behaviour that will define future behaviour

---

### What is Metaprogramming?

* Often used to dynamically define a suite of similar methods based on undetermined future input to reduce duplicate code

Examples:

* `attr_reader`/`attr_writer`
* `belongs_to`/`has_many`
* `validates` 


---

### What is Metaprogramming?

* In practice, metaprogramming in Ruby makes use of a collection of methods to help the developer define behavior
* Today we'll explore just a small sample of those methods
* You may have unanswered questions or want to explore more on your own later

---

Let's walk through some demos!