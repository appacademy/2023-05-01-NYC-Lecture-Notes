

# O(1)
def first_thing(array)
  array.first
end























# O(1)
def three_hundred_thousand_puts(name)
  300000.times { puts "hello, #{name}" }
end
























# O(n)
def print_all(array)
  array.each { |el| puts el }
end






















#  O(2n + 1) => O(n)
# O(1) for space
def most_common_char(word)
  counts = Hash.new(0)          # O(1)
  word.chars.each { |char| counts[char] += 1 }     # O(n)
  count.max_by { |_, num| num }        # O(1)
end

# "aaaaaabbbbbbbbaaaacccccccc"
# count = {a: 10, b: 7, c: 19}























# 
class Array
  def include?(value)
    self.each do |el|
      return true if (el == value) 
    end
    
    false
  end
end
















# O(log(n)) time
# O(log(n)) space

 def bsearch(nums, target, start = 0, finish = nums.length)
  return nil if start == finish

  mid = (finish - start) / 2 + start
  case target <=> nums[mid]
  when -1
    bsearch(nums, target, start, mid)
  when 0
    mid
  when 1
    bsearch(nums, target, mid + 1, finish)
  end
end















# time complexity: 0(n log(n))
#  space complexity: O(n log(n))
class Array
  def merge_sort
    return self if count < 2

    middle = count / 2

    left, right = self.take(middle), self.drop(middle)
    sorted_left, sorted_right = left.merge_sort, right.merge_sort

    self.class.merge(sorted_left, sorted_right)
  end

  def self.merge(left, right)
    merged_array = []
    until left.empty? || right.empty?
      merged_array << ((left.first < right.first) ? left.shift : right.shift)
    end

    merged_array + left + right
  end
end







# time O(n^2)
# space O(n^2)
def all_pair_sums(array)
  sums = []

  array.each do |el1|
    array.each do |el2|
      sums << el1 + el2
    end
  end

  sums
end





















class Array
  def subsets
    return [[]] if empty?
    subs_without_first = drop(1).subsets
    subs_with_first = subs_without_first.map { |sub| [first] + sub }
    subs_with_first + subs_without_first
  end
end

# [].subsets    =   [[]]  1  2^0
# [1].subsets => [[1], []]  2
# [1,2].subsets  => [[1, 2], [1], [2], []]   4
# # [1,2, 3].subsets  => [[1, 2, 3], [1, 2], [1, 3], [1], [2, 3], [2], [3], []]    8
















def permutations(array)
  return [array] if array.length <= 1

  perms_without_first = permutations(array.drop(1))

  perms_without_first.inject([]) do |all_perms, perm|
    all_perms + (0..perm.size).map do |i| 
      perm.take(i) + [array.first] + perm.drop(i)
    end
  end
end
