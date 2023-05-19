# - ADT/Data Structure used for implemntation: Stack
# - using Recursion

# Basic idea of DFS is Recursion and using a stack.
# We want to call this method recursively for all
# the nodes of the tree by traversing to the
# bottom as fast as possible

    #     a
    #    / \
    #   b   c
    #  /\   /\
    # d  e f  g

def DFS(root, target)
    # stack starts with root node (NOT AN ARRAY)
    # return node if node is target, the base case

    # iterate through node's children
        # call DFS on each child node
        # if result is not nil, return node
        # (this means we found the node and we want to return the node)
            # We DONT want to return nil because that could return too
            # early when we didnt check other nodes yet

    # return nil if target not found
end

#-------- DEMO WITHOUT NIL --------

# Stack Frame 1 (root = a, target = d)
    # BC: Is a's value == d?
        # NOPE! Recursively call DFS on each of a's child
        # Result DFS(b) NO LONGER WAITING, Returned Node d
        # Is node d == nil? NO
            # RETURN node d

        # WAITING
        # Result DFS(c) ???
        # NEVER GETS HERE :(
    # Stack Frame FINISHED and popped off stack

# Stack Frame 2 (root = b, target = d)
    # BC: Is b's value == d?
        # NOPE! Recursively call DFS on each of b's child
        # Result DFS(d) NO LONGER WAITING, Returned Node d
        # Is node d == nil? NO
            # RETURN node d

        # WAITING
        # Result DFS(e) ???
        # NEVER GETS HERE :(
    # Stack Frame FINISHED and popped off stack

# Stack Frame 3 (root = d, target = d)
    # BC: Is d's value == d?
        # YES! Return d node!

    # Stack Frame FINSIHED and popped off stack



#-------- DEMO WITH NIL --------

# Stack Frame 1 (root = a, target = e)
    # BC: Is a's value == e?
        # NOPE! Recursively call DFS on each of a's child
        # Result DFS(b) NO LONGER WAITING, result = node e
        # is result == nil? NO
        # RETURN result of Node e

        # WAITING
        # Result DFS(c) ???
        # NEVER GETS HERE :(
    
    # Stack Frame FINISHED and popped off stack

# Stack Frame 2 (root = b, target = e)
    # BC: Is b's value == e?
        # NOPE! Recursively call DFS on each of b's child
        # Result DFS(d) NO LONGER WAITING, result = nil
        # is result == nil? YES
        # Nothing happened, NO RETURN HAPPENED

        # Result DFS(e) NO LONGER WAITING, result = node e
        # is result == nil? NO
        # RETURN result of Node e

    # Stack Frame FINISHED and popped off stack

# Stack Frame 3a (root = d, target = e)
    # BC: Is d's value == e?
        # NOPE! Recursively call DFS on each of d's child
        # NO CHILDREN, Keep it moving
        # RETURN Nil since no target found here
    
    # Stack Frame FINISHED and popped off stack

# Stack Frame 3b (root = e, target = e)
    # BC: Is e's value == e?
        # YES! RETURN NODE e

    # Stack Frame FINISHED and popped off stack