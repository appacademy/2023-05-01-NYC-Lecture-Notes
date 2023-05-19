# - ADT/Data Structure used for implementation: Queue/array

# Basic idea of BFS is iteration and using a queue. We want
# to loop through all the nodes of the tree layer by layer fashion

    #     a
    #    / \
    #   b   c
    #  /\   /\
    # d  e f  g

def BFS(root, target)
    # create queue
    # add the root node to our queue

    # loop through queue until empty
        # remove the first node from the queue (dequeue)
        # check if removed node is the target
            # if this node is target, return node
            # if this node is not target, add node's children to queue

    # return nil if we made it through the entire tree without finding a target
end

# Arguments:
    # Root = a
    # Target = d

# Queue = [e, f, g]

# Loop
    # Before iteration:
        # Queue = [a]
    # Iteration 1:
        # Is queue empty? NO
        # Remove first node from queue: a
        # Is a == d? NO
        # a's children added to queue
        # queue = [b, c]
    # Iteration 2:
        # Is queue empty? NO
        # Remove first node from queue: b
        # Is b == d? NO
        # b's children added to queue
        # queue = [c, d, e]
    # Iteration 3:
        # Is queue empty? NO
        # Remove first node from queue: c
        # Is c == d? NO
        # c's children added to queue
        # queue = [d, e, f, g]
    # Iteration 4:
        # Is queue emmpty? NO
        # Remove first node from queue: d
        # Is d == d? YES
        # RETURN NODE D