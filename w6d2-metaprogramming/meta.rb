require 'byebug'

class Pet
  def initialize(name)
    @name = name
  end

  def self.add_pet
    @@total_pets ||= 0
    @@total_pets += 1
  end

  def self.total_pets
    @@total_pets
  end
end

class Dog < Pet
  puts self
#   attr_reader(:secret)

#   def self.attr_reader(*args)
#     define_method(args[0]) { return instance_varaible_get(args[0]) }
#   end

def do_this_then_that(this, *args)
    self.send(this, *args)
    # self.send(that)
end

  def self.doggie_things
    puts self
  end

  def who_am_i?
    puts self
  end

  def initialize(name)
    super(name)
    @secret = "I'm a goat in disguise"
    self.class.add_pet
    # Dog.add_pet
  end

  def sleep
    puts "sleeping!"
  end

  def eat
    puts "eating!"
  end

  def drink
    puts "drinking!"
  end

  def trick
    puts "BACK FLIP!!"
  end

  def juggle(thing, num)
    num.times do
      puts "juggling #{thing}!"
    end
  end

  private

  attr_reader :secret

  def tell_secret
    puts "My secret is: #{@secret}"
  end
end