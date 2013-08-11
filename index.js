module.exports = LinkedList
LinkedList.Node = Node

function Node(data) {
  this.prev = null
  this.next = null
  this.data = data
}

function LinkedList() {
  this.length = 0
  this.first = null
  this.last = null
}

LinkedList.prototype.append = function(node) {
  if (this.first === null) {
    this.first = node.prev = node
    this.last = node.next = node
  } else {
    node.prev = this.last
    node.next = this.first
    this.first.prev = node
    this.last.prev = node
    this.last = node
  }

  this.length += 1
}

LinkedList.prototype.insert = function(node, inserted) {
  inserted.prev = node
  inserted.next = node.next
  node.next.prev = inserted
  node.next = inserted
  if (inserted.prev === this.last) this.last = inserted

  this.length += 1
}

LinkedList.prototype.remove = function(node) {
  if (this.length > 1) {
    node.prev.next = node.next
    node.next.prev = node.prev
    if (node === this.first) this.first = node.next
    if (node === this.last) this.last = node.prev
  } else
  if (this.first === node) {
    this.first = null
    this.last = null
  }
  node.prev = null
  node.next = null

  this.length -= 1
}

LinkedList.prototype.each = function(node) {
  var p = this.first
  var n = this.length

  while (n--) {
    cb(p.data)
    p = p.next
  }
}
