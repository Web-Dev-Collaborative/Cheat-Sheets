# The Array data structure

> The #data-structures series is a collection of posts about reimplemented data structures in JavaScript.






Get the code on Github
----------------------



Definition
----------

> An Array data structure, or simply an Array, is a data structure consisting of a collection of elements (values or variables), each identified by at least one array index or key. The simplest type of data structure is a linear array, also called one-dimensional array. **From [Wikipedia](https://en.wikipedia.org/wiki/Array_data_structure)**

Arrays are among the oldest and most important data structures and are used by every program. They are also used to implement many other data structures.

Complexity
----------

| Average |   |   |   |
| --- | --- | --- | --- |
| Access | Search | Insertion | Deletion |
| O(1) | O(n) | O(1) | O(n) |

To get a full overview of the time and space complexity of the Array data structure, have a look to this excellent [Big O cheat sheet](http://bigocheatsheet.com/).

The code
--------

    function MyArray() {
      this.array = [];
    }
    
    MyArray.prototype.add = function(data) {
      this.array.push(data);
    };
    MyArray.prototype.remove = function(data) {
      this.array = this.array.filter(function(current) {
        return current !== data;
      });
    };
    MyArray.prototype.search = function(data) {
      var foundIndex = this.array.indexOf(data);
      if(~foundIndex) {
        return foundIndex;
      }
    
      return null;
    };
    MyArray.prototype.getAtIndex = function(index) {
      return this.array[index];
    };
    MyArray.prototype.length = function() {
      return this.array.length;
    };
    MyArray.prototype.print = function() {
      console.log(this.array.join(' '));
    };
    
    var array = new MyArray();
    array.add(1);
    array.add(2);
    array.add(3);
    array.add(4);
    array.print(); // => 1 2 3 4
    console.log('search 3 gives index 2:', array.search(3)); // => 2
    console.log('getAtIndex 2 gives 3:', array.getAtIndex(2)); // => 3
    console.log('length is 4:', array.length()); // => 4
    array.remove(3);
    array.print(); // => 1 2 4
    array.add(5);
    array.add(5);
    array.print(); // => 1 2 4 5 5
    array.remove(5);
    array.print(); // => 1 2 4
    

* * *

* * *

* * *

the-array-data-structure/)
