# class describes properties/states and behavior of instance/object.

class Fish
  @@all_fish = []

  def self.all_fish
    @@all_fish.dup
  end

  # it is function that provides utility to any given instance, independent of its current properties.
  def self.random_state_being
    [true, false].sample
  end

  # simple example of a factory method
  def self.make_nemo
    # self == Fish
    self.new("Nemo", self.random_state_being)
  end

  def self.make_random_fish
    name = ""
    5.times do
      name << ("a".."z").to_a.sample
    end

    self.new(name, self.random_state_being)
  end

  def initialize(name, lost)
    @name = name
    @lost = lost

    @@all_fish << self
  end

  # def name
  #   @name
  # end

  # attr_reader :name

  # def name=(val)
  #   @name = val
  # end

  # attr_writer :name
  attr_accessor :name

  def lost?
    @lost
  end

  def find
    @lost = false
  end

end