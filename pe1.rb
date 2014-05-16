require 'pry'

puts "Add up the multiples up until which number?"
max = gets.to_i

puts ""
puts "First multiple?"
first_multiple = gets.to_i
puts ""

puts "Second multiple?"
second_multiple = gets.to_i
puts ""

count = 0

multiples = []

while count < max
  if count % first_multiple == 0 || count % second_multiple == 0
    multiples.push(count)
  end

  count += 1
end

sum = multiples.reduce(:+)

puts ""
puts "The sum of all the multiples is #{sum}."

