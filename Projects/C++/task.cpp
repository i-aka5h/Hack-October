#include <iostream>
#include <sstream>
#include <fstream>
#include <string>
#include <windows.h>

#define CP_UTF8 65001

using namespace std;

void Help();

int main(int arg, char *args[])
{
    if (arg < 2)
        Help();
    else
    {
        string work = args[1];
        if (work == "help")
        {
            cout << "help" << endl;
        }
        else
        {
            cout << "add" << endl;
        }
    }
    return 0;
}

// Help Function...
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

void Add(int priority, string task_to_do)
{
    cout << "Inside Add Method" << endl;
}