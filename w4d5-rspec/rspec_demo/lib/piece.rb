class Piece
  attr_reader :color
  attr_accessor :pos

  def initialize(color, board, pos)
    raise "Invalid color" unless [:white, :black].include?(color)
    # raise "Invalid position" unless pos.all? {|coord| coord.between?(0, 7)}
    raise "Invalid position" unless board.valid_pos?(pos)

    @color, @pos = color, pos
  end

  def symbol
    raise NotImplementedError
  end

  def to_s
    " #{symbol} "
  end

  def empty?
    false
  end

end