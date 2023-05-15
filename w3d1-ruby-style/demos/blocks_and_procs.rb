require 'byebug'

class Array
  def my_each_block(&prc)
    # debugger
    i = 0

    while i < self.length
      # prc.call(self[i])
      yield(self[i])

      i += 1
    end

    self
  end

  def my_each_proc(prc)
    # debugger
    self.my_each_block(&prc)
    # i = 0

    # while i < self.length
    #   prc.call(self[i])

    #   i += 1
    # end

    # self
  end
end

[1, 2, 3].my_each_block { |el| puts el }
prc = Proc.new { |el| puts el }
[1, 2, 3].my_each_proc(prc)