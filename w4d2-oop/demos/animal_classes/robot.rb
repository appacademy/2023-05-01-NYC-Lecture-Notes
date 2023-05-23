require_relative 'walkable'

class Robot
    include Walkable

    def initialize(name)
        @name = name
    end
end
