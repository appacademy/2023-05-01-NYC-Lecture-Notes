require_relative 'animal'
require 'byebug'

class Dog < Animal

  def fetch(item)
    puts "*#{name} excitedly fetches #{item} and wants you to throw it again*"
  end

  def make_noise
    puts "#{name} says bark"
  end
  
  private
  attr_reader :name
  

end

fido = Dog.new('fido')
p fido.introduce