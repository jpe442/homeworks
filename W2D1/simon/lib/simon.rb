class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []

  end

  def play
    until @game_over
      take_turn
    end
    game_over_message
    reset_game
  end

  def take_turn
    show_sequence
    require_sequence
    unless @game_over
      round_success_message
      @sequence_length += 1
    end
  end

  def show_sequence
    add_random_color
    seq.each {|color| p color}
    sleep(4)
    system("clear")
  end

  def require_sequence
    puts "Enter the sequence"
    print ":"
    input = gets.chomp
    @game_over = true unless equiv(input, @seq)
  end

  def add_random_color
    seq << COLORS[rand(4)]
  end

  def round_success_message
    puts "ROUND COMPLETE"
  end

  def game_over_message
    puts "GAME OVER"
  end

  def reset_game
    @game_over = false
    @sequence_length = 1
    @seq = []
  end

  private

  def equiv(input, seq)
    return false if input.split(",") != @seq
    true
  end
end

if __FILE__ == $PROGRAM_NAME
  puts "Simon Game"
  g = Simon.new
  g.play
end
