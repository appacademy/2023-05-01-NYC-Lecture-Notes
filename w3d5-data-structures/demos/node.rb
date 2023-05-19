


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
    