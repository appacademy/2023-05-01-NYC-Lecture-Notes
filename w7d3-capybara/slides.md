# W7D4 - Capybara

![capy_grass](https://github.com/appacademy/2023-05-01-NYC-Lecture-Notes/blob/main/w7d3-capybara/assets/capy_grass.jpg?raw=true) 

---

## Learning Goals

1. Know what a Capybara is
1. Reinforce testing pyramid and TDD
1. Understand how to test Rails models
1. Understand how to test Rails controllers
1. Become familiar with the Capybara testing library
1. **_Be able to read the specs on Rails 2_**

---

## What is a Capybara?
![capy_with_turtles](https://github.com/appacademy/2023-05-01-NYC-Lecture-Notes/blob/main/w7d3-capybara/assets/capy_with_turtles.jpg?raw=true)

---

## Ugly cousin of the Wombat
![wombat](https://github.com/appacademy/2023-05-01-NYC-Lecture-Notes/blob/main/w7d3-capybara/assets/wombat.jpg?raw=true)

---

## Testing Review

![mommy_capy](https://github.com/appacademy/2023-05-01-NYC-Lecture-Notes/blob/main/w7d3-capybara/assets/mommy_capy.jpg?raw=true)


---

### Why Write Tests?

1. Make sure your code works!
1. Prevent regressions
1. Easier collaboration
1. Built-in documentation

![lazy_capy](https://github.com/appacademy/2023-05-01-NYC-Lecture-Notes/blob/main/w7d3-capybara/assets/lazy_capy.jpg?raw=true)


---


### The Testing Pyramid

```v
   /  End-to-End Tests \
  /  Integration Tests  \
 /      Unit Tests       \

```
![image](https://github.com/appacademy/2023-05-01-NYC-Lecture-Notes/blob/main/w7d3-capybara/assets/capy_pyramid.jpg?raw=true)

---

- What percentage of our total testing should each of these categories be?
    - `Unit testing`: 80-90%
    - `Integration/Feature testing`: 5-15%
    - `End to End/UI testing`: 1-5%
  - The heavy lifting should occur in the unit tests. If we write good, comprehensive unit tests, then we don't have to write as many integration tests, and barely any E2E tests.

  - Keep asking: "WHAT IS THIS THING RESPONSIBLE FOR?"
    - We should never test more than that, and we should never test less than that.

---

### TDD

1. Red
1. Green
1. Refactor

![crosswalk](https://github.com/appacademy/2023-05-01-NYC-Lecture-Notes/blob/main/w7d3-capybara/assets/crosswalk.jpg?raw=true)

---

## Rails Testing

* What are the components we typically create in Rails?
  * Models, Controllers, and Views (features)

![capy_with_monkeys](https://github.com/appacademy/2023-05-01-NYC-Lecture-Notes/blob/main/w7d3-capybara/assets/capys_with_monkeys.jpg?raw=true)

---

## Basic Setup: Adding Testing Gems

* Add RSpec and other testing gems to Gemfile and run `bundle install`
 ```ruby
  # my_app/Gemfile
  group :development, :test do
    gem 'rspec-rails'
    gem 'rails-controller-testing'
    gem 'factory_bot_rails' # easily create test objects
    gem 'faker' # generate random data for testing
  end

  group :test do
    gem 'capybara' # end-to-end feature testing
    gem 'selenium-webdriver'
    gem 'webdrivers'

    gem 'shoulda-matchers' # simple syntax for model tests
    gem 'launchy' # enable save_and_open_page
  end
 ```
---

## Basic Setup: Database, RSpec, and Test Files

* Set up a test database, if necessary
  * `rails db:create` to create development and test databases
  * `rails db:test:load` to sync test DB after migrations
* Install RSpec using `rails generate rspec:install`
  * `.rspec`, `spec/`, `spec_helper.rb`, `rails_helper.rb`
* Auto-Generate Test Files
  * change the `config/application.rb` file

---
## Basic Setup: Configurations 
`application.rb`
``` 
config.generators do |g|
    g.test_framework :rspec, #Tells rails to use rspec for testing
      :fixtures => false, 
      :view_specs => false,
      :helper_specs => false,
      :routing_specs => false,
      :controller_specs => true,
      :request_specs => false
     g.fixture_replacement :factory_bot, :dir => "spec/factories"
  end
  ```
Note: 
  - This slide is optional if you choose not to configure application.rb because you are not using generators 
---

`rails_helper.rb`

```
Shoulda::Matchers.configure do |config|
    config.integrate do |with|
      with.test_framework :rspec
      with.library :rails
    end
  end
```
---

## Demo 1- Show Bluebird Configurations 

---

## Unit Testing: Models

* Small in scope
  * Tests only touch model code
  * Tests can touch the database
* Things to test
  * Validations / error messages
  * Associations
  * Class AND instance methods (not private)
---


## Shoulda Matchers syntax

### validations
```ruby
  it { should validate_presence_of(:username) }
  it { should validate_presence_of(:password_digest) }
  it { should validate_length_of(:password).is_at_least(6) }
```
### associations

```ruby
it { should have_many(:chirps) }
it { should belong_to(:user) }
```
---

## Demo 2 - Model Testing

![stuffed_capy](https://github.com/appacademy/2023-05-01-NYC-Lecture-Notes/blob/main/w7d3-capybara/assets/stuffed_capy.jpg?raw=true)

---

## Integration Testing: Controllers

* Scope:
  * controllers, routes, models, database
  * does not test views
* Useful for testing:
  * status codes
  * rendering
  * under various conditions (e.g. Valid and invalid params)

---

## Rails Controller Testing API

* Request Methods
  * get
  * post
  * patch
  * delete
* Assertions
  * render_template
  * redirect_to
  * have_http_status, be_success

---

## Request Syntax

(http request) :(controller action), (params)

```ruby
get new_user_path
post users_path, params: { user: { username: "harry_potter" } }
```
---

## Demo 3 - Controller Testing
![capy_monkey](https://github.com/appacademy/2023-05-01-NYC-Lecture-Notes/blob/main/w7d3-capybara/assets/capy_monkey.jpg?raw=true)

---

## End-to-End Testing: Features

* Simulates how a real user would interact with app
* Test in a "headless" browser (no actual UI)
* Capybara can open a real browser for debugging (`save_and_open_page`)

![capy_alligator](https://github.com/appacademy/2023-05-01-NYC-Lecture-Notes/blob/main/w7d3-capybara/assets/capy_alligator.jpg?raw=true)

---

## Capybara API

* Navigation
  * `visit`
  * `click_on`
* Forms
  * `fill_in "field", with: "value"`
  * `choose`, `check`, `uncheck`
  * `select "option", from: "select box"`

---

## Capybara API

* Assertions
  * `have_content`
  * `current_path`
  * `page`
* Debugging
  * `save_and_open_page`
* [And much more!](https://www.rubydoc.info/github/teamcapybara/capybara/master/Capybara/RSpecMatchers)

---

## Capybara - RSpec Conventions

Capybara changes the names of some of RSpec's standard methods to reflect it's specific testing purpose.

* `#describe` => `#feature`
* `#it` => `#scenario`
* `#before` => `#background`

---

## Code Demo - Feature Testing (Capybara)

![yuzu_bath](https://github.com/appacademy/2023-05-01-NYC-Lecture-Notes/blob/main/w7d3-capybara/assets/yuzu_bath.jpg?raw=true)

---

# Kahoot

https://create.kahoot.it/details/2930864f-a7c2-47aa-993d-57ead15b7137

---

# Recap
### Documentation is your friend today! 

---

# Today's Projects
# [Goal App](https://github.com/appacademy/curriculum/tree/master/rails/projects/goal_app)
