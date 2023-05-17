require 'byebug'

def iter_sum(n)
    sum = 0
    (1..n).each {|i| sum += i}
    return sum
end

# p iter_sum(3)  # 6
# p iter_sum(7)  # 28
# p iter_sum(100) #5050
# p iter_sum(100000)























def rec_sum(n)
    return 0 if n == 0
    return n + rec_sum(n - 1)
end

# p "-------- RECURSION --------"
# p rec_sum(3) # 6
# p rec_sum(7) # 28
# p rec_sum(100) #5050
# p rec_sum(100000) # ??

# rec_sum(3)
# 3 + rec_sum(2)
# 3 + 2 + rec_sum(1)
# 3 + 2 + 1 + rec_sum(0)
# 3 + 2 + 1 + 0 => 6







def iter_reverse(str)
    new_str = ""
    str.each_char do |char|
        new_str = char + new_str
    end
    new_str
end  

# p iter_reverse("cat") #  => "tac"







def rec_reverse(str)
    return str if str.length <= 1
    rec_reverse(str[1..-1]) + str[0]
end

# p rec_reverse("cat")

# => "tac"


# "" + "t" + "a" + "c"
# p rec_reverse("cat")









# Fibonacci examples:
# 0, 1, 1, 2, 3, 5, 8
# Return the nth Fibonacci number
def fibs(n)
    if n == 1
        return 0
    end

    if n == 2
        return 1
    end

    fibs(n - 1) + fibs(n - 2)

end 
# 0, 1, 1, 2, 3, 5, 7, 12, 19
# p fibs(1) #=> 0
# p fibs(2) #=> 1
# p fibs(3) #=> 1
# p fibs(4) #=> 2
# p fibs(5) #=> 3
# p fibs(6) #=> 5

# Find all the Fibonacci numbers up to and including the nth
$count = 0
def all_fibs(n)
    $count += 1
    return [] if n == 0
    return [0] if n == 1
    return [0, 1] if n == 2

    #  [0, 1, 1, 2, 3]       <<  [0, 1][-1]         + [0, 1][-2]
    all_fibs(n - 1) << all_fibs(n - 1)[-1] + all_fibs(n - 1)[-2]
end

# p all_fibs(0) #=> []
# p all_fibs(1) #=> [0]
# p all_fibs(2) #=> [0, 1]
# p all_fibs(3) #=> [0, 1, 1]  
# p all_fibs(4) #=> [0, 1, 1, 2]
# p all_fibs(5) #=> [0, 1, 1, 2, 3]

# p all_fibs(20)
# puts $count





$count = 0
# now with memoization!
def fast_all_fibs(n)
    $count += 1
    # return [] if n == 0
    # return [0] if n == 1
    # return [0, 1] if n == 2
    return [0, 1].take(n) if n <= 2
    prev_arr = fast_all_fibs(n - 1)  # [0, 1]

    prev_arr << prev_arr[-1] + prev_arr[-2]


end

# p fast_all_fibs(0)
# p fast_all_fibs(1)
# p fast_all_fibs(2) 
# p fast_all_fibs(3) 
# p fast_all_fibs(4) 
# p fast_all_fibs(5) 
# p fast_all_fibs(20) 
# p $count




# Pascal's Triangle
#         1
#        1 1
#       1 2 1
#      1 3 3 1
#     1 4 6 4 1
#   1 5 10 10 5 1  <-
# 1 6 15 20 15 6 1

def pascal_row(n)
    return [1] if n == 0
    return [1, 1] if n == 1

    last_row = pascal_row(n - 1)
    next_row = []

    (0...last_row.length - 1).each do |i|
        next_row << last_row[i] + last_row[i + 1]
    end

    [1] + next_row + [1]


end

p pascal_row(0) #  [1]
p pascal_row(1) # [1, 1]
p pascal_row(2) # [1, 2, 1]
p pascal_row(3)
p pascal_row(4)
p pascal_row(5)
p pascal_row(6)

#         1
#        1 1
#       1 2 1
#      1 3 3 1
#     1 4 6 4 1
#   1 5 10 10 5 1
# 1 6 15 20 15 6 1