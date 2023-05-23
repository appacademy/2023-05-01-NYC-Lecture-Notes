# W4D2
## Principles of OOP 
---

![oop](https://scontent.fphl1-1.fna.fbcdn.net/v/t1.6435-9/85242034_2489568841306176_1159877049523896320_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=973b4a&_nc_ohc=S0AQK1TJTsMAX8nPlBl&_nc_ht=scontent.fphl1-1.fna&oh=00_AfDEO7S2thKLlIzrxEdXtgBIOC0f1oHmRF2GId65cswccg&oe=6494018C)

---

## Learning Objectives
- Know how class inheritance works
- Know how to override a parent class's method, and when and how to use super
- Know when and why private and protected methods are used
- Know how to use modules

---

## Agenda
- Abstraction & Encapsulation
- Public, Private, and Protected
- Inheritance
- Modules
- Polymorphism

---

## The 4 Principles of OOP
1. Abstraction
2. Encapsulation
3. Inheritance
4. Polymorphism

---

## Abstraction
- **Abstraction:** The act of taking a larger, interconnected system and breaking it down into smaller components
- “An abstraction denotes the essential characteristics of an object that distinguish it from all other kinds of objects and thus provide crisply defined conceptual boundaries, relative to the perspective of the viewer.”

---

![clock](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/ruby/oop/clock.jpg)


---

## Encapsulation 
- **Encapsulation:** Hiding and restricting access to the internal representation of an object and only allowing users to interact with the object through public methods
- All the data and logic for an object to work should be _encapsulated_ in that object.
- Bundle data with the methods that operate on that data
- Restricts access and reduces the possibility of users affecting your object in an unintended way, as you have defined the valid interactions

---

![clock-innards](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/ruby/oop/clock_innards.jpg)

---

#### Interface vs. Implementation

+ Two sides of the same coin. 
+ Encapsulation is from the object's perspective and is concerned with the internal implementation of an object and what it exposes to the users.
+ Abstraction is from the perspective of other objects or the user and is concerned with how we design the API endpoints - the interface.

---

## Clock Demo

---

## Public, Private, and Protected
- Expose limited interface
- Indicate to others how to use your code
- Make code more atomic 
- Can more easily refactor without changing the interface

---

## Calling Methods Explicitly vs Implicitly
- **Implicitly** is without a receiver
- **Explicitly** is with a receiver (like `self` or another instance of the class)
```ruby
    class Test
        def example_method
            self.some_method # called explicitly on `self`
            some_method # called with implicit `self`
        end
        def some_method
        end
    end
```

---

## Public
- API endpoints for user - _interface_
- This is the default if no other keyword is specified
- Can be called anywhere inside or outside the class definition
- Can be called explicitly or implicitly

---

## Private
- Can only be called *within the class definition*
- Must be called implicitly (**except setters**)
- Always will be called on `self`
- Helper methods should usually be `private`

---

## Protected
- Middle ground between `public` & `private`
- Can only be called *within the class definition*
- Can be called implicitly or explicitly
- Can be used on other instances of the class

---

## Where will we error? 

```ruby 
class Test
    def test_method(other_instance)
        public_method                   # a
        self.public_method              # b
        other_instance.public_method    # c
    end

    def public_method
        puts "This is a public method"
    end
end

a = Test.new
b = Test.new
a.test_method(b)
a.public_method                         # d
```

---

## Where will we error? 

```ruby 
class Test
    def test_method(other_instance)
        private_method                  # a
        self.private_method             # b
        other_instance.private_method   # c
    end

    private
    def private_method
        puts "This is a private method"
    end
end

a = Test.new
b = Test.new
a.test_method(b)
a.private_method                        # d
```

---

## Where will we error? 

```ruby 
class Test
    def test_method(other_instance)
        protected_method                  # a
        self.protected_method             # b
        other_instance.protected_method   # c
    end

    protected
    def protected_method
        puts "This is a protected method"
    end
end

a = Test.new
b = Test.new
a.test_method(b)
a.protected_method                        # d
```

---

## Code Demo - oop.rb

---

## Inheritance

```ruby
class SubClass < SuperClass
end
```
- DRY up code by creating subtypes of existing classes
- 'Child classes' (subclasses) will have access to methods defined on their 'Parent class' (superclass)
- Subclass can only have **ONE** superclass, but superclass can have multiple subclasses

---

## Inheritance Demo

---

### Inheritance Pitfalls


+ Inheritance creates implicit dependencies.
    + Inherited methods and variables are not listed in the subclass code.
    + Multiple inheritance and mixins: potential for conflict.
+ Don't overwrite the interface!
    + Okay to change the implementation (but stay DRY)
    + Okay to add to the interface

---

## `super`

```ruby
class SuperClass
    def some_method
        puts "in SuperClass#some_method"
    end
end

class SubClass < SuperClass
    def some_method
        super
        puts "in SubClass#some_method"
    end
end
s = Subclass.new
s.some_method # Will print "in SuperClass#some_method" then "in SubClass#some_method"
```

---
## Super

- methods on subclass override those of the parent. you can invoke the parent's overridden definition of a method using `super`.
- `super` method tells Ruby to call the inherited method by the same name as the current method
- Often used in `initialize` if we want some shared initialization behavior for our subclass


---

## Three ways to call Super 

- `super` with no parentheses passes **all arguments** this method received to the superclass' method
- `super(arg)` with specific arguments passes **just those arguments** to the superclass's method
- `super()` with empty parentheses passes **no arguments** to the superclass' method

---

## Super Demo - add @fur_color to Cat class 

---

![oop](https://res.cloudinary.com/practicaldev/image/fetch/s--qrfXMGRI--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/x4uyhuar61encgujoeob.jpg)

---

## Modules
- Sometimes we have shared functionality that doesn't make sense to group under a shared parent
- Modules allow us to write functionality we can add to classes
- A module is like a class that can't be initialized - we can never have an instance of a module
- While a class can only inherit from one superclass, it can include any number of modules
- Modules don't necessitate any relationship between the classes that use them
- Modules keep our code DRY

---

## Module Demo

---

## Polymorphism

- Subclasses can override the behavior of superclass
- Each inheriting class can do something different when calling a method by the same name
- We can treat an object as the generic version, and have specific behavior determined by the particular subclass of the instance

---

## Today's Project

- Sample Chess UML Diagram:
    - `Pawn` has a `#moves` public method, not a `#move_dirs`
    - `NullPiece` has an `#empty?` method
- If you're not sure what a method is supposed to do, ask!

---

![chessUML](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/ruby/oop/chess.jpg)

---

## Thank You!
