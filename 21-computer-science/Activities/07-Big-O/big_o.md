# Big O Analysis

Express the running times of the following algorithms in Big O notation. Justify your responses.

Some of these are just review. A few apply Big O to algorithms we saw before.

Assume the _worst case_ running time—i.e., consider only the _maximum_ number of instructions the algorithm could take.

What is the running time of...

* Selection sort? o(n^2)

* Insertion sort? o(n^2)

* Linear search? o(n)

* Binary search?o(lg n)

* Finding duplicates in an array?o(n^2)

### BONUSES

If you're mathematically inclined, you might find these interesting. If not, feel free to take a stab anyway, but don't worry too much about proving your solution.

What is the running time for an algorithm that—

* Finds all triplets `(x, y, z)` such that `x + y + z = n`, where `n` is specified by the user?

  * E.g.: `threeSum(list, search)` will find all possible triplets of numbers in `list` that sum to `search`.

* Same question, but for doubles?

  * In general, what is the running time for finding n-tuples in `list` that sum to `search`?
