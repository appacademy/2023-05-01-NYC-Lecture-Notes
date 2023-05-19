class MyQueue  
  def initialize
      @inner_array = []
  end

  def enqueue(el)
      inner_array.push(el)
      # inner_array.unshift(el)
      return "success!"
  end

  def dequeue
      inner_array.shift
      # inner_array.pop
  end

  def show
      inner_array.dup
  end

  def empty?
      inner_array.empty?
  end

  private
  attr_reader :inner_array
end