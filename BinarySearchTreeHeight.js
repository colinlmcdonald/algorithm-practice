var fs = require('fs');
// Start of function Node
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}; // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
    this.insert = function(root, data) {
        if (root === null) {
            this.root = new Node(data);
            
            return this.root;
        }
        
        if (data <= root.data) {
            if (root.left) {
                this.insert(root.left, data);
            } else {
                root.left = new Node(data);
            }
        } else {
            if (root.right) {
                this.insert(root.right, data);
            } else {
                root.right = new Node(data);
            }
        }
        return this.root;
    };
    
    // Start of function getHeight
    this.getHeight = function(root) {
      var subroutine = function(root, height) {
        if (root === null) {
          return height;
        } else {
          height++
          var left = subroutine(root.left, height);
          var right = subroutine(root.right, height);
          return right > left ? right : left
        }

      };

      return subroutine(root, -1)
    };
};

var data = fs.readFileSync('./BinarySearchTreeHeight.txt', 'utf8')
function processData(data) {
  var tree = new BinarySearchTree()
  var root = null;
  data = data.split('\n');
  data.forEach(function(n) {
    root = tree.insert(root, n)
  })
  console.log(tree.getHeight(root));
}
processData(data)