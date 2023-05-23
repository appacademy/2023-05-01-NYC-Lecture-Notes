require_relative 'walkable'

class Animal
    include Walkable

  attr_writer :name

  def initialize(name, fur_color)
    @name = name
    @fur_color = fur_color
  end

  def introduce
    puts "#{name} bork bork"
  end

  def eat(food)
    puts "*#{self.name} eats the #{food}*"
  end

  def sniff(other_dog)
    puts "*#{self.name} sniffs #{other_dog.name}'s butt. interesting.*"
  end

  def rename(new_name)
    self.name = new_name
  end

  def make_noise(noise)
    #thorw error if subclass doens't define this method
  end

end