# 🚀 Day 3 - FizzBuzz Madness & 🔺 Triangle Art

Welcome to Day 3 of my JavaScript journey! 🎉  
Today was all about **loops**, **patterns**, and bringing back the legendary classic: **FizzBuzz** — but with ✨vibes✨.

---

## 🔁 Mini Project 1: `miniFizzbuzz()` with `while` loop

A basic yet satisfying take on FizzBuzz using a `while` loop. The user selects a max number, and the loop prints out:

- `"FizzBuzz🎉"` if divisible by 3 and 5  
- `"Fizz!!!!!!"` if divisible by 3  
- `"Buzzz!!!!!!"` if divisible by 5  
- The number itself otherwise

✅ Includes replay functionality (`yes/no`)  
🧠 Helps understand conditional logic and loops

---

## 🔁 Mini Project 2: `forLoopFizzbuzz()` with `for` loop

Same logic, new vibes. Uses a `for` loop instead of a `while` loop. Also adds input validation to prevent NaN explosions.  

✅ Even better replay feature  
🚫 Prevents invalid numbers  
🎯 Loop mastery level: unlocked

---

## 🔺 Mini Project 3: Centered Triangle

```js
const height = 10;

for(let i = 1; i <= height; i++){
    const spaces = ' '.repeat(height - i);
    const hashes = '#'.repeat(2 * i - 1);
    console.log(spaces + hashes + spaces);
}

```
✨ Prints a symmetrical triangle (a.k.a. pyramid) made of #.
Great for learning how to balance repeat(), spacing, and index logic.

Output (height = 5):

    #    
   ###   
  #####  
 ####### 
#########

A coding flex. Clean and centered like a Pinterest quote.

## 🧱 Mini Project 4: Left-Aligned Triangle

for (let i = 1; i <= 12; i++) {
    console.log('#'.repeat(i));
}

This one's a stairway to heaven — or at least to code clarity.
🔥 Super simple but great for understanding loops and string multiplication.


#
##
###
####
#####
... up to 12 rows


## 📚 Key Concepts Learned

while loops vs for loops

if/else if/else conditionals

prompt-sync input validation

Loop-based pattern printing

Using .repeat() and .toLowerCase()

## 🎮 Wanna Try It Yourself?

- Install prompt-sync first:

```
npm install prompt-sync

```

Then run any file with:

```
node triangle.js
```

## 💭 Reflections
FizzBuzz used to scare me 😱
Now I make it dance 💃🏽

Triangles used to confuse me 🔺
Now I print them with pride ✍🏽