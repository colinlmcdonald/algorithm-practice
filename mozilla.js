var list = document.getElementById('parent-list');

list.addEventListener('click', function(event) {
  alert(event.target.innerText);
})

function alertContents(node) {
  node.addEventListener('click', function() {
    alert(this.innerText);
  })
}

function checkChildren(children) {
  for (var i = 0; i < children.length; i++) {
    alertContents(children[i]);
    if (children[i].children.length) {
      checkChildren(children[i].children);
    }
  }
}
for (var i = 0; i < list.children.length; i++) {
  alertContents(list.children[i]);
  if (list.children[i].children) {
    checkChildren(list.children[i].children);
  }
}

var item = document.createElement('li');
item.innerText = 'poopoopeepee';
list.appendChild(item);

var isMatchingParens = function(arr) {
  
  arr.forEach(function(str) {
    var stack = [];
    var check = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    for (var i = 0; i < str.length; i++) {
      var ltr = str[i];
      if (check[ltr]) {
        if (stack.pop() !== check[ltr]) {
          console.log('NO');
          return;
        }
      } else {
        stack.push(ltr)
      }
    }
    if (stack.length) {
      console.log(stack);
      console.log('NO')
    } else {
    console.log('YES');
      
    }
  })
}

// isMatchingParens(['[{[()]}', '{{[[(())]]}}'])
// //,  