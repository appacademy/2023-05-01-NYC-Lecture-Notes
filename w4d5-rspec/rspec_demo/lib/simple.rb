def say_hello
  "Hello World!"
end

def color_symbol(color)
  raise "Must be symbol" unless color.is_a?(Symbol)

  color
end