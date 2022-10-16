#include <bits/stdc++.h>

#define CP_UTF8 65001

using namespace std;

void Help();
void Add(int, string);
void CommandNotFound(string error = "")
{
    string errormsg = "";
    if (error == "add")
    {
        errormsg = "Error: Command not Found \n";
        errormsg += "> Please make sure to follow correct format => \"./task add [PRIORITY] [\"YOUR TASK\"]\"\n";
        errormsg += "> Nothing added!\n";
    }

    else
    {
        errormsg = "Error: Please Enter a Valid Command!!\n";
    }

    cout << errormsg << "> See the list of commands here :" << endl;
    Help();
}

int main(int arg, char *args[])
{
    if (arg < 2)
        Help();
    else
    {
        string work = args[1];
        if (work == "help")
            arg == 2 ? Help() : CommandNotFound();
        else if (work == "add")
        {
            if (arg == 4)
            {
                int priority = 0;
                string pr = (args[2]);
                stringstream x(pr);
                x >> priority;
                string task_to_do = args[3];
                Add(priority, task_to_do);
            }
            else
            {
                CommandNotFound("add");
            }
        }
        else
        {
            CommandNotFound();
        }
    }
    return 0;
}


// --- Help Method ---
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

// --- Add Method ---
void Add(int priority, string task_to_do)
{
    cout << "Inside Add Method" << endl;
    cout << "Task => " << task_to_do << endl;
    cout << "Priority => " << priority << endl;
}