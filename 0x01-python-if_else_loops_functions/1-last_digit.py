#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)
new= f"null"
last = number % 10 if number > 0 else number % -10
if last != 0:
    new= f"and is greater than 5" if last > 5 \
            else f"and is less than 6 and not 0"
else:
    new= "and is 0"

print(f"Last digit of {number:d} is {last:d} {new}")
