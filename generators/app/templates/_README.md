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

    > Note: `.setBark()` sets a value for private member we can call
    > `.barkSound` using the argument passed to it.

    > Note: `.getBark()` gets and returns a value for private member we can call
    > `.barkSound`.

    > Note: `.isAGoodBoy` sets a value for private member we can call `.goodBoy`
    > and if it recieves an argument sets `.goodBoy` to that value.

    > Note: `.bark()` will log the current `.barkNoise`.

4.  Call `.bark()`.

5.  If `.isAGoodBoy()` returns true when given no arguments call `.setBark()`
    with the argument 'arf...'.

6.  Else `.setBark()` with the argument `'whimper'`.

7.  Log the results of calling `.getBark()`.

8.  Call `.bark()`.

9.  Call `.isAGoodBoy()` with the argument `true`. 

<br / >

* * *

<br / >

## Objects

This exercise corresponds to [this section of the text](http://eloquentjavascript.net/04_data.html#h_cqg63Sxe3o).

<br / >

* * *

<br / >

## Mutability

This exercise corresponds to [this section of the text](http://eloquentjavascript.net/04_data.html#h_C3n45IkMhg).

<br / >

* * *

<br / >

## Objects as Maps

This exercise corresponds to [this section of the text](http://eloquentjavascript.net/04_data.html#h_mrW9RQxlGk).

<!--
1.  Create a function called `objects`
2.  Within the function create a variable called `barkSound` set to 'BARK!'.
4.  Within the function create an object and store it in the variable `fido`.
5.  `fido` should have a property `.isAgoodBoy` set to true.
6.  `fido` should have a property `.getBark()` that is a function that returns
    the value of `barkSound`.
7.  `fido` should have a property `.setBark()` that is a function that accepts
    an argument and sets `barkSound` to the argument's value.
8.  TODO! 
-->

<br / >

* * *

<br / >

## Arrayology

This exercise corresponds to [this section of the text](http://eloquentjavascript.net/04_data.html#h_GFaxee4PuU).

<br / >

* * *

<br / >

## Strings and Their Properties

This exercise corresponds to [this section of the text](http://eloquentjavascript.net/04_data.html#h_mT4YQfwHp6).

<br / >

* * *

<br / >

## The Arguments Object

This exercise corresponds to [this section of the text](http://eloquentjavascript.net/04_data.html#h_GstIcsgxyb).

<br / >

* * *

<br / >

## The Math Object

This exercise corresponds to [this section of the text](http://eloquentjavascript.net/04_data.html#h_C51DnYk8WZ).

<br / >

* * *

<br / >

## The Global Object

This exercise corresponds to [this section of the text](http://eloquentjavascript.net/04_data.html#h_lRBZxXmo93).

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

<br />

* * *

<br />

## Reversing an Array

### Once More with Recursion

<br />

* * *

<br />

## A List

### A Doubly-Linked List

<br />

* * *

<br />

## Deep Comparison

### Deep Clone
