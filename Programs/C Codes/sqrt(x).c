/**
 * Given a non-negative integer x, return the square root of x rounded down to the nearest integer. 
 * The returned integer should be non-negative as well.
*/

int mySqrt(int x){
    long long int sqrt;
    if(x<1) return x;
    else for (long long int i=1; i*i<=x; i++ ) sqrt=i;
    return sqrt;
}

// Try this solution for leetcode problem no 69. 
// Runtime 38ms, faster that 93% submissions