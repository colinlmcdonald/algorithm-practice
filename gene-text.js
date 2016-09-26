var gene_search = function(gne, seq) {
  var ll = new LinkedList();

  for (var i = 0; i < seq.length; i++) {
    ll.insert(seq[i])
  }
  console.log(ll);

  // for (var i = 0; i < gne.length; i++) {
  //   if (gne[i] === seq[index]) {
  //     if (index === seq.length) {
  //       return true;
  //     }
  //   } else if (gne[i] === seq[index - 1]) {
  //     //if 
  //   } else {
  //     index = 0;
  //   }
  // }

  return false;
};

var LinkedList = function() {
  this.head = null;
  this.tail = null;  
}

LinkedList.prototype.insert = function(ltr) {
  if (this.head === null) {
    this.head = new Node(ltr);
  }
  if (this.tail === null) {
    this.tail = this.head;
  }
  else {
    var temp = this.tail;
    this.tail = new Node(ltr);
    this.tail.prev = temp;
  }
}

var Node = function(ltr) {
  return {
    ltr: ltr,
    next: null,
    prev: null
  }
}

// console.log(gene_search("ACCATGCA", "CAT")); 

console.log(gene_search("CATTTTGGGGA", "TTGG")); 

// console.log(gene_search("GGCACACATG", "CACATG")); 

// console.log(gene_search("CAAAT", "CAT"));
