#include <iostream>
#include <windows.h>

#define CP_UTF8 65001

using namespace std;

void Help();

int main(int arg, char *args[])
{
    cout << "arg: " << arg << endl;
    if(arg<2){
        Help();
    }
    cout << "args: " << endl;
    for (int i = 1; i < arg; i++)
        cout << "arg" << i << ": " << args[i] << endl;

    return 0;
}


void Help()
{

    cout << "Usage :-\n";
    cout << "$ ./task add 2 hello world    # Add a new item with priority 2 and text \"hello world\" to the list\n";
    cout << "$ ./task ls                   # Show incomplete priority list items sorted by priority in ascending order:\n";
    cout << "$ ./task del INDEX            # Delete the incomplete item with the given index\n";
    cout << "$ ./task done INDEX           # Mark the incomplete item with the given index as complete\n";
    cout << "$ ./task help                 # Show usage\n";
    cout << "$ ./task report               # Statistics\n";
}
