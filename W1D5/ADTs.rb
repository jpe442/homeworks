class Stack
  def initialize
    @stack = []
  end

  def add(el)
    @stack.push(el)
  end

  def remove
    @stack.pop
  end

  def show
    p @stack
  end
end

# Now let's write a Queue class. We will need the following instance methods:
# enqueue(el), dequeue, and show.
class Queue

  def initialize
    @queue = []
  end

  def enqueue(el)
    @queue.push(el)
  end

  def dequeue
    @queue.shift
  end

  def show
    p @queue
  end

end

# As you saw in the videos for tonight, a map can be implemented
# using a 2D array. Let's write a Map class (following a similar
# pattern to Stack and Queue) that implements a map using only arrays.
#
# Remember, a map stores information in key-value pairs, where the keys are always
# unique. When implemented with arrays, a map might look something like this:
# my_map = [[k1, v1], [k2, v2], [k3, v2], ...].
#
# Our Map class should have the following instance methods:
# assign(key, value), lookup(key), remove(key), show.
# Note that the assign method can be used to either create a new key-value pair
# or update the value for a pre-existing key. It's up to you to check whether
# a key currently exists!

class Map

  def initialize
    @map = []
  end

  def assign(key, value)
    remove(key) if key?(key)
    @map << [key,value]
  end

  def lookup(key)
    @map.each {|pair| p pair[1] if pair[0] == key}
  end

  def remove(key)
    @map.each {|pair| @map.delete(pair) if pair[0] == key}
  end

  def key?(key)
    @map.any? {|pair| pair[0] == key}
  end

  def show
    @map.each {|pair| p pair}
  end
end
