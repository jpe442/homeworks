
FISH = ['fish', 'fiiish',
  'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

def sluggish_octopus
  longest_fish = FISH.first

  FISH.each_with_index do |fish1, i|
    FISH.each_with_index do |fish2, j|
      longer = nil
      next if j < i
      case fish1 <=> fish2
        when -1
          longer = fish2
        when 0
          longer = fish1
        when 1
          longer = fish1
      end

      unless longest_fish.length >= longer.length
        longest_fish = longer
      end
    end
  end
  longest_fish
end


  # Find the longest fish in O(n log n) time. Hint: You saw a sorting algorithm
  # that runs in O(n log n) in the Sorting Demo.
  # Remember that Big O is classified by the dominant term.
class Array
  FISH = ['fish', 'fiiish',
    'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

  def dominant_octopus
    mid = FISH.length/2

    sorted_left = FISH.take(mid).dominant_octopus
    sorted_right = FISH.drop(mid).dominant_octopus

    Array.merge(sorted_left, sorted_right).last

  end

  def self.merge(left, right)
    merged = []

    until left.empty? || right.empty?
      case left.first <=> right.first
      when -1
        merged << left.shift
      when 0
        merged << left.shift
        merged << right.shift
      when 1
        merged << right.shift
      end
    end

    merged + left + right
  end

def clever_octopus
  longest_fish = FISH.first

  FISH.each do |fish|
    unless longest_fish.length > fish.length
      longest_fish = fish
    end
  end

  longest_fish
end

def slow_dance(direction, tiles_array)
  tiles_array.each_with_index do |tile, index|
    return index if tile == direction
  end
end

tiles_hash = {
    "up" => 0,
    "right-up" => 1,
    "right"=> 2,
    "right-down" => 3,
    "down" => 4,
    "left-down" => 5,
    "left" => 6,
    "left-up" => 7
}

def fast_dance(direction, tiles_hash)
  tiles_hash[direction]
end
