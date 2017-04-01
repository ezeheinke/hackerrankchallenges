# Problem
A left rotation operation on an array of size  shifts each of the array's elements  unit to the left. For example, if  left rotations are performed on array , then the array would become .

Given an array of  integers and a number, , perform  left rotations on the array. Then print the updated array as a single line of space-separated integers.

# Explanation

To rotate left we have to take the values from stating till rotations. And reverse this part and concatenate it with the remaning values also reversed:

23456 -> shift 2 left.

23 -> 32 
456 -> 654

32654 -> 45623


Same thing if we have to rotate right. But from 0 to size - rotations.

78945 -> shift 2 right

789 -> 987
45 -> 54

98754 -> 45789
