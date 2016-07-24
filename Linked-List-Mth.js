var fs = require('fs');

function processData(input) {
    //Enter your code here
    input = input.split('\n');
    var index = input.splice(0, 1);
    input = input[0].split(' ');
    var findIndex = function(node) {
        count++
        if (count == index) {
            console.log(node.data);
        } else if (node.next) {
            findIndex(node.next)
        } else {
            console.log('NIL');
        }
    };
    if (input.length < index) {
        console.log('NIL')
    } else {
        var ll = new LinkedList();
        for (var i = input.length - 1; i >= 0; i--) {
            ll.insert(input[i])
        }
        var count = 0;
        findIndex(ll.head)
    }
} 


function LinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    
    this.insert = function(val) {
        var n = new Node (val);
        if (this.head === null) {
            this.head = n;
            this.length++
        }
        if (this.tail === null) {
            this.tail = n;
        } else {
            this.tail.next = n;
            this.tail = n;
            this.length++
        }
    }
}
function Node(val) {
    this.data = val;
    this.next = null;
}

processData(fs.readFileSync('./Linked-List-Mth.txt', 'utf8'));