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
                CommandNotFound("add");
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

    string old_value = "", old_text, new_text = "";
    ifstream in;           // Creating object for input
    in.open("tasks.txt");  // Create if not exists and Opens tasks.txt.
    getline(in, old_text); // Fetch the first line into the old_text variable
    int index = 1;         // Initialize index with 1
    if (old_text != "")    // If old text is not empty  =>
    {
        in.seekg(0); // then take the pointer to first char in first line
        int next_index = 0;
        bool added = false;
        while (in.eof() == 0) // Loop until the end of the file
        {
            getline(in, old_text); // Extracts text from each line
            if (!added)            // If not added then =>
            {
                unsigned first = old_text.find("[");                          // find the position of '[' bracket
                unsigned last = old_text.find("]");                           // find the position of ']' bracket
                string old_pr = old_text.substr(first + 1, last - first - 1); // finds the priority of that particular task
                int old_priority = 0;
                stringstream x(old_pr);
                x >> old_priority;               // Convert priority from string to integer
                if (old_priority <= priority)    // compare the priority to current task's priority
                {                                // If  old priority is lessthan or equals to current priority
                    new_text += old_text + "\n"; // add old text to new text and add a line break
                    index++;                     // increment the index for next line.
                    continue;
                }
                else
                {                               // If prority if current task is greater than older task then
                    int ind = 0;
                    int last_char = old_text.find('.');                            // find index of '.'
                    string line_index = old_text.substr(0, last_char);             // make substring from positon 0 to position of '.'
                    stringstream z(line_index);
                    z >> ind;                                                      // convert it  integer
                    new_text = new_text + to_string(ind) + ". " + task_to_do + " [" + to_string(priority) + "]\n";  // add current task to new text with priority and index
                    added = true;                                                 // Update added as true
                    old_text = old_text.substr(last_char);                        // get the text after . to the line end
                    new_text = new_text + to_string(++ind) + old_text + "\n";   // add the old text to the next string 
                    next_index = ++ind ;                                         // Update the index to index+2 as two line added to new text
                }
            }
            else
            { 
                int pos = old_text.find('.');                                  // Find position of '.'
                old_text = old_text.substr(pos);                               //  Create a substring  from position to line end
                new_text += to_string(next_index) + old_text + "\n";           // add the old text to new text with index
                next_index++;                                                  // Increment the index
            }
        }
        ofstream out;                                                         // Create an object for rewriting the file tasks.txt
        out.open("tasks.txt");
        // If task is added =>
        if (added)
        {
            // Remove last character from newtext because it is a new line character
            int x = new_text.length() - 1;
            // put all the text in the tasls.txt file using out object
            new_text = new_text.substr(0, x);
            out << new_text;
            // print success message with tahe added task
            cout << "Added task: \"" + task_to_do + "\" with priority " + to_string(priority);
        }
        // if task is not added means task has least priority from older tasks
        else
        {
            // add current task to last of new text
            new_text += to_string(index) + ". " + task_to_do + " [" + to_string(priority) + "]";
            // put all the text in the tasls.txt file using out object
            out << new_text;
            // print success message with tahe added task
            cout << "Added task: \"" + task_to_do + "\" with priority " + to_string(priority);
        }
        out.close();    // remove the output object
    } 
    else // The file is empty, so add the task directly into the file
    {
        ofstream out;                                    // Create an object for rewriting the file tasks.txt
        out.open("tasks.txt");                                                  
        string val = old_value + to_string(index) + ". " + task_to_do + " [" + to_string(priority) + "]";    // create a variable and add task with index and priority
        out << val;                                                                                         // update the tasks.txt  with the variable
        cout << "Added task: \"" + task_to_do + "\" with priority " + to_string(priority);                  // Print success message with task and priority
        out.close();                                                                                        // remove the output object
    }
    in.close();        // remove the input object
}