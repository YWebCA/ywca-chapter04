# Chapter 3: <small>Functions</small>

Welcome to *Eloquent JavaScript*, Chapter 3!

These are the instructions for the exercises in Chapter 4. Render them in
Mardown for maximum readablility. Remember that all your work will be done in
the `./index.js` file (as well as the included end-of-chapter exercises files),
and you can check your work by running

    $ ywca test chapter04 --color | less

from your `ywebca` directory. When all your tests are green, run

    $ hostname > check.txt
    $ pwd >> check.txt
    $ ywca test chapter04 >> check.txt

and attach `check.txt` to the appropriate card on Trello.

### End of Chapter Exercises

* [The Sum of a Range](#the-sum-of-a-range)
* [Reversing an Array](#reversing-an-array)
* [A List](#a-list)
* [Deep Comparison](#deep-comparison)

<br / >

* * *

<br / >

## Data Sets

These exercises correspond to [this section of the text](http://eloquentjavascript.net/04_data.html#h_HjL/otjEJn).

<table>
  <thead>
    <tr>
      <th>Exercise #</th>
      <th>Goal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Data Sets 1</th>
      <td>
        <ol>
          <li>Create a function named <code>dataOne</code>.</li>
          <li>
            <code>dataOne</code> should accept one parameter that will be
            an array.
          </li>
          <li>
            <code>dataOne</code> should log the 3rd, 5th, 8th and last element
            of the array.
          </li>
        </ol>
        <blockquote>
          Note: The last element of an array can be found at the index
          <code>Array.length - 1</code>.
        </blockquote>
      </td>
    </tr>
    <tr>
      <th>Data Sets 2</th>
      <td>
        <ol>
          <li>Create a function named <code>dataTwo</code>.</li>
          <li>
            <code>dataTwo</code> should accept one parameter that will be
            an array.
          </li>
          <li>
            <code>dataTwo</code> should use a for loop to log each element of
            the array.
          </li>
        </ol>
        <blockquote>
          Note: You may either use <code>Array.length</code> or the
          <code>in</code> keyword to do this.
        </blockquote>
      </td>
    </tr>
  </tbody>
</table>

<br / >

* * *

<br / >

## Properties

This exercise corresponds to [this section of the text](http://eloquentjavascript.net/04_data.html#h_vGyI2y8HA6).

1.  Create a function named `properties`.

2.  `properties` should accept one parameter.

3.  The argument passed will have the properties `.barkSound`, `.legs`, and
    `.isAGoodBoy`.

4.  Log the following properties of the argument: `.legs` and `.isAGoodBoy`.

<br / >

* * *

<br / >

## Methods

This exercise corresponds to [this section of the text](http://eloquentjavascript.net/04_data.html#h_fkrGgDyRWc).

1.  Create a function named `properties`.

2.  `properties` should accept one parameter.

3.  The argument passed will have the methods `.setBark()`, `.getBark()`,
    `.bark()`, and `.isAGoodBoy()`.

    > Note: `.setBark()` sets a value for a private member `.barkSound` which we
    > can only access using `.setBark()` and `.getBark()`.

    > Note: `.getBark()` gets and returns a value for private member
    > `.barkSound`.

    > Note: `.isAGoodBoy()` sets a value for private member `.goodBoy`. If
    > `.isAGoodBoy()` recieves an argument, it sets `.goodBoy` to that value.

    > Note: `.bark()` will log the current `.barkNoise`.

4.  Call `.bark()`.

5.  If `.isAGoodBoy()` returns true when given no arguments, call `.setBark()`
    with the argument `'arf...'`.

6.  Else `.setBark()` with the argument `'whimper'`.

7.  Log the results of calling `.getBark()`.

8.  Call `.bark()`.

9.  Call `.isAGoodBoy()` with the argument `true`. 

<br / >

* * *

<br / >

## Objects

This exercise corresponds to [this section of the text](http://eloquentjavascript.net/04_data.html#h_cqg63Sxe3o).

1.  Create a function called `objects`.

2.  Within the function create a variable called `barkSound` set to `'BARK!'`.

3.  Within the function create an object and store it in the variable `fido`.
    `fido` should...

    1.  have a property `.isAgoodBoy` set to true.

    2.  have a property `.getBark()` that is a function that returns the value
        of `barkSound`.

    3.  have a property `.setBark()` that is a function that accepts
        an argument and sets `barkSound` to the argument's value.

    4.  have a property `.tricks` that is an array set to
        `['roll over', 'fetch', 'play Beethoven's 5th]`.

4. Return `fido`.

<br / >

* * *

<br / >

## Mutability

This exercise corresponds to [this section of the text](http://eloquentjavascript.net/04_data.html#h_C3n45IkMhg).

1.  Create a function called `mutability`.

2.  `mutability` should accept two arguments. They will both be objects.

3.  Both objects will have the properties `.color`, `.quantity`, and `.isA`.

4.  If both objects are the same (as in `==`), then `console.log()`
    either object.

5.  Otherwise, for each property that is equal, `console.log`
    `"{property} matches"`.

6.  If none of the properties match, `console.log` both objects.

<br / >

* * *

<br / >

## Objects as Maps

This exercise corresponds to [this section of the text](http://eloquentjavascript.net/04_data.html#h_mrW9RQxlGk).

1. Create a function called `maps`.

2. `maps` will receive a map of user accounts.

    > Note: The keys for this map will be the names of users.

    > Note: The values for this map will be a map account information.

    > Note: The map of account information will have the keys `"payed"`,
      `"owed"`, and `"due"`, where `"payed"` and `"due"` will be dates and
      `"owed"` will be a number value.

4.  Each day accounts are processed for users whose first name start with a
    different letter. Today's letter is `'T'`.

5.  We are looking to notify any user whose account is paid up. We will
    `console.log` when `"owed"` is `0`.

6.  Use a `for (in)` loop to iterate through the users.

7.  When the the user name starts with a `'T'` and their `"owed"` is `0`,
    `console.log` `"{user name} owes $0"`.

<br / >

* * *

<br / >

## Arrayology

This exercise corresponds to [this section of the text](http://eloquentjavascript.net/04_data.html#h_GFaxee4PuU).

1.  Create a function called `arrayology`.

2.  `arrayology` will recieve an array of strings.

3.  Two of the strings in the array will have the value of `'fnord'`.

4.  Use everything you know from the chapter section to remove all of the values
    that occur between the `'fnord'`s from the array.

5.  Return the altered array.

> Note: this function should have no side effects.

<br / >

* * *

<br / >

## Strings and Their Properties

This exercise corresponds to [this section of the text](http://eloquentjavascript.net/04_data.html#h_mT4YQfwHp6).

1.  Create a function called `strings`.

2.  `strings` will receive a string.

3.  The string will contain the characters `'fnord'` once or twice.

4.  When there are two `'fnord'`s, return the string that is all the characters
    in between them.

5.  When there is one `'fnord'`, return the string that is all the characters
    after it.

<br / >

* * *

<br / >

## The Arguments Object

This exercise corresponds to [this section of the text](http://eloquentjavascript.net/04_data.html#h_GstIcsgxyb).

1.  Create a function called `arguments`.

2.  `arguments` expects to receive a varying number of arguments.

3.  `arguments` should use a loop to find the sum of all the arguments it
    recieves.

4.  `arguments` should return that sum. 

<br / >

* * *

<br / >

## The Math Object

This exercise corresponds to [this section of the text](http://eloquentjavascript.net/04_data.html#h_C51DnYk8WZ).

1.  Create a function called `math`.

2.  `math` will receive an argument that is a string or a number.

3.  If the argument is a string, return `Math.PI`.

4.  If the argument is a number, return a random number between `0` and
    the argument.

<br / >

* * *

<br / >

# End of Chapter Exercises

## The Sum of a Range

The instructions for this exercise can be found in [this section of the text](http://eloquentjavascript.net/04_data.html#h_8ZspxiCEC/).

Work your solution in `./range.js`.

Once you have completed the specifications in the book...

### Caeser Cipher

A Ceaser cipher is a simple encryption technique. It maps the alphabet onto a
shifted version of the alphabet, using a single letter as a key: the letter to
map to `A`. For example,

    THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG

shifted with `D` produces

    WKH TXLFN EURZQ IRA MXPSV RYHU WKH ODCB GRJ

Please see [the Wikipedia article](https://en.wikipedia.org/wiki/Caesar_cipher)
for more information.

Create a function called `encrypt` that accepts two parameters: a string
to encrypt and a letter key. `encrypt` should return a string that has
been encrypted.

Create another function called `decrypt` that accepts two parameters: a string
to decrypt and the key the string has been shifted with. `decrypt` should return
the decrypted string.

> Note: to avoid the pain of dealing with ASCII values, create a helper array
> that contains each letter of the alphabet in alphabetical order.

<br />

* * *

<br />

## Reversing an Array

The instructions for this exercise can be found in [this section of the text](http://eloquentjavascript.net/04_data.html#h_nSTX34CM1M).

Work your solution in `./array.js`.

Once you have completed the specifications in the book...

### Once More with Recursion

Create a function called `reverseArrayRecur` that accepts one parameter
(an array) and returns that array reversed. This function should use recursion
to build its result.

<br />

* * *

<br />

## A List

The instructions for this exercise can be found in [this section of the text](http://eloquentjavascript.net/04_data.html#h_nSTX34CM1M).

Work your solution in `./list.js`.

Once you have completed the specifications in the book...

### A Doubly-Linked List

In a doubly-linked list, each node points to both its previous node and its
next. Write a function called `arrayToDLL` that takes an array parameter and
returns a doubly-linked list. Each node of the list should have three members:
`value`, `prev`, and `next`.

Write four helper functions (you may want to do this before writing
`arrayToDLL`) that handle doubly-linked lists:

*  `push( list, value )` adds a node with the value given to the end of the list.
*  `pop( list )` removes a node from the end of the list and returns its value.
*  `shift( list )` removes a node from the beginning of the list and returns
    its value.
*  `unshift( list, value )` adds a node with the value given to the beginning of
   the list.

> Note: Remember that a list knows when it gets to the end when its `next` or
> `prev` value is `null`. Make sure that holds when you add or remove nodes from
> the end!

<br />

* * *

<br />

## Deep Comparison

The instructions for this exercise can be found in [this section of the text](http://eloquentjavascript.net/04_data.html#h_IJBU+aXOIC).

Work your solution in `./compare.js`.

Once you have completed the specifications in the book...

### Deep Clone

Much like JavaScript doesn't come with a pre-built deep comparison function, it
doesn't come with a deep copy function either. So let's write one.

`deepClone` should accept an object. It will return a copy of that object.
`deepClone` must be recursive in order to work properly.
