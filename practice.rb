# # Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
# def print_numbers_divisible_by_three
#   index = 1
#   while index <= 1000
#     if index % 3 == 0
#       puts index
#     end
#     index += 1
#   end
# end
# print_numbers_divisible_by_three


# # Write a method that accepts an array of strings and prints out every other string.
# def print_every_other_item(strings)
#   index = 0
#   strings.each do |string|
#     if index % 2 == 0
#       puts string
#     end
#     index += 1
# #   end
# # end
# # print_every_other_item(["a", "b", "c", "d", "e"])


# # # Write a method that accepts an array of numbers and returns the sum.
# # def compute_sum(numbers)
# #   sum = 0
# #   numbers.each do |number|
# #     sum += number
# #   end
# #   return sum
# # end
# # puts compute_sum([2, 4, 5])


# # # Start with the hash: city_populations = {chi: 2700000}
# # # Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
# # # The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}
# # city_populations = {chi: 2700000}
# # city_populations[:nyc] = 8400000
# # city_populations[:sf] = 800000
# # p city_populations



# # # Write a method that prints out every number from 1 to 100. 


# # # Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).


# # # Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.


# # # Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
# # # For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].


# # # Start with the hash: item_amounts = {chair: 5, table: 2}
# # # Someone just bought two chairs. Change the hash such that the chair amount is 3.
# # # The final result should be: {chair: 3, table: 2}
# # hash = {chair: 5, table: 2}

# # hash [:chair] = 3

# # p hash

# # # Start with the hash: item_amounts = {chair: 5, table: 2}
# # # You received 7 desks to sell. Change the hash to include desks.
# # # The final result should be: {chair: 5, table: 2, desk: 7}


# # # Write a method that accepts a number and returns its factorial.
# # # For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.


# # # Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array. 
# # # For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

# # # Write a function that takes in an array of numbers and returns its sum.

# # def summation(array)
# #   sum = 0
# #   array.each do |ele|
# #     sum += ele
# #   end
# #   return p sum
# # end

# # summation([1, 4, 5, 5])

# # # Write a function that takes in an array of strings and returns the smallest string.
# # def smallestString(array)
# #   smallest = array[0].length
# #   word = array[0]
# #   array.each do |element|
# #     if smallest > element.length
# #       smallest = element.length
# #       word = element
# #     end
# #   end
# #   return p word
# # end
# # smallestString(["string1", "biggerword", "string"])

# # #Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order.
# # def reverseNumbers(array)
# #   index = array.length - 1
# #   array2 = []
# #   while index > -1
# #     array2 << array[index]
# #     index -= 1
# #   end
# #   return p array2
# # end
# # reverseNumbers([2,4,5,6])


# arr = [ [1, 2, 3], [4, 5 ,6], [7, 8 ,9]]
# def diagonalDifference(arr)
#   # Write your code here
#   row = 0
#   column = 0
#   downDiagSum = 0
#   upDiagSum = 0
#   while row < arr.length
#     downDiagSum += arr[row][column]
#     row += 1
#     column += 1
#   end
#   row = 0
#   column = 2
#   while row < arr.length
#     upDiagSum += arr[row][column]
#     row += 1
#     column -= 1
#   end

#   return (upDiagSum - downDiagSum).abs
# end

# p diagonalDifference(arr)

# arr = [2, 5, 0, -4, 2, -4, 2, 0]
# negative = 0
# zero = 0
# positive = 0
# arr.each do |value|
#   if value < 0
#     negative += 1
#   elsif value > 0
#     positive += 1
#   else
#     zero += 1
#   end
# end

# p (positive.to_f / arr.length)
# p (zero.to_f / arr.length)
# p (positive.to_f / arr.length)

# def staircase(n)
#   number_hashes = 1
#   number_spaces = n - 1
#   # string = " "
#   n.times do
#     string = " " * number_spaces + "#" * number_hashes
#     puts string
#     number_hashes += 1
#     number_spaces -= 1
#   end
# end
# staircase(40)

# find largest value in the array
# find how often largest value occurs in the array

# candles = [4, 4, 1, 3]
# maxValue = candles[0]

# def birthdayCakeCandles(candles)
#   # Write your code here
#   maxValue = candles.max
#   p candles.count(maxValue)
# end
# birthdayCakeCandles(candles)

arr = [1, 3, 5, 7, 9]
minimum_sum = nil
maximum_sum = nil
index = 0
def miniMaxSum(arr)
  # Write your code here

end
