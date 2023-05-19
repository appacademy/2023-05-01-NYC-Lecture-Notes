require 'byebug'

class Stack
  def initialize
    @secret_codes = []
  end

  def push(value)
    secret_codes << value
    return self
  end

  def pop
    secret_codes.pop
  end

  def peek
    secret_codes.last
  end

  def size
    secret_codes.length
  end

  def empty?
    secret_codes.empty?
  end

  # def expose
  #   @secret_cods
  # end

  def inspect
    # debugger
    "#<Stack:#{self.object_id} hellloooooo>"
  end

 private
 attr_reader :secret_codes
end