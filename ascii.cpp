#include <iostream>
using namespace std;

int main(){
  char ascii;
  int numeric;
  cout << "Give character: ";
  cin >> ascii;
  cout << "Its ascii value is: " << (int) ascii << endl;
  cout << "Give a number to convert to ascii: ";
  cin >> numeric;
  cout << "The ascii value of " << numeric << " is " << (char) numeric;
  return 0;
}

/*
OUTPUT
Give character: c
Its ascii value is: 99
Give a number to convert to ascii: 97
The ascii value of 97 is a
*/