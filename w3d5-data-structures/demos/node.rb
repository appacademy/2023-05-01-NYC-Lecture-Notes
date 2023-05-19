
class Node

    attr_reader :value, :children

    def initialize(value, children = [])
        @value = value
        @children = children
    end

    # def children_values
    #     @children.map { |child| child.value }
    # end

    # def inspect
    #     "#<Node:#{self.object_id} @value=#{self.value} @children=#{children_values}"
    # end

end

    #     a
    #    / \
    #   b   c
    #  /\   /\
    # d  e f  g

    d = Node.new('d')
    e = Node.new('e')
    f = Node.new('f')
    g = Node.new('g')
    b = Node.new('b', [d, e])
    c = Node.new('c', [f, g])
    a = Node.new('a', [b, c])
    