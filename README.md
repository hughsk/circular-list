# circular-list #

A circular linked list, quickly whipped up based on the implementation in
[jcoglan's article](http://blog.jcoglan.com/2007/07/23/writing-a-linked-list-in-javascript/).

Useful in place of an array when you don't need indexing but you do need to be
able add/remove elements really quickly.

## Installation ##

``` bash
npm install circular-list
```

## Usage ##

### `LinkedList = require('circular-list')` ###

The linked list class definition.

### `var list = new LinkedList` ###

Creates a new linked list, which you can add/remove nodes from.

### `var node = new LinkedList.Node(data)` ###

Nodes are used to represent an item in the list. These are just wrappers so
you don't have to modify the original object. They contain `first` and `last`
properties so that they can be traversed, and a `data` property which contains
the original value passed to the node.

### `list.append(node)` ###

Appends a node to the end of a list.

### `list.insert(before, after)` ###

Inserts the `after` node after `before` in the list.

### `list.remove(node)` ###

Removes a node from the list.

### `list.each(iterator)` ###

Iterates over the list, calling `iterator(node.data)` for each node.
