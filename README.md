# _Beep-Boop_
#### By _**Florin Mirica**_
GitHub link: https://github.com/florinmirica/Beep-Bop

## Description

_This is a program that takes a user input(number) and lists all numbers from 0 to the user's number, with the following exceptions, prioritized in this order:_
* 1.Numbers divisible by 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that."
* 2.Numbers that contain a 1 are replaced (all digits) with "Boop!"
* 3.Numbers that contain a 0 are replaced (all digits) with "Beep!"

## Specifications
* A. Program replaces 0 with "Beep!"
  ex:Input:0; Output: ["Beep"]
* B. Program replaces 1 with "Boop"  
  ex:Input:1; Output: ["Boop"]
* C. Program replaces numbers divisible by 3 with "I'm sorry, Dave. I'm afraid I can't do that."
  ex:Input:3; Output: [I'm sorry, Dave. I'm afraid I can't do that Boop! 2 I'm sorry, Dave. I'm afraid I can't do that ]
* D. Program returns the number itself preceded by all numbers from 0 to the number if it does not contain 0,1 and is not divisible by 3.
  ex: Input:5; Output:[I'm sorry, Dave. I'm afraid I can't do that Boop! 2 I'm sorry, Dave. I'm afraid I can't do that 4 5]
* E. Program returns "Beep" if the number contains 0, does not contain 1 and is not divisible by 3.
  ex: Input:20; Output:["Beep"]
* F. Program returns "Boop" if the number contains 1 and is not divisible by 3.
  ex: Input:1; Output:["Boop"]
* G. A number is passed in from the user input.
  ex: Input:5; Output:[I'm sorry, Dave. I'm afraid I can't do that Boop! 2 I'm sorry, Dave. I'm afraid I can't do that 4 5]

## Setup/Installation Requirements

* Clone repository using "git clone (repository link) ."
* Navigate to "Beep-Boop" directory
* Open in Atom or any other text editor

## Known bugs

No known bugs

## Support and contact details

miricaflorin@hotmail.com

## Language used:

HTML, JavaScript, CSS, jQuery

Copyright (c) 2019 Florin Mirica
