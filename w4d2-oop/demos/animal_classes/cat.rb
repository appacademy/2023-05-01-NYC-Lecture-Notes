require_relative 'animal'

class Cat < Animal
    def initialize(name, fur_color)
        super(name, fur_color)
        # Animal#initialize(name, fur_color)
        # @fur_color = fur_color
    end

    def make_noise
    puts "#{name} says meow"
  end

  private
  attr_reader :name
end

garfield = Cat.new('garfield', 'orange')
p garfield