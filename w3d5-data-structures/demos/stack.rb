class Stack
  def initialize
    @secret_codes = []
  end

  def push(value)
    secret_codes << value
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

  # def inspect
  #   "#<Stack:#{self.object_id}>"
  # end

 private
 attr_reader :secret_codes
end