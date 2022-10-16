#include <iostream>

using namespace std;

int main(int arg, char *args[])
{
    cout << "arg: " << arg << endl;
    cout << "args: " << endl;
    for (int i = 1; i < arg; i++)
        cout << "arg" << i << ": " << args[i] << endl;

    return 0;
}