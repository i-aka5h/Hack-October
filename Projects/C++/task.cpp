#include <bits/stdc++.h> // Library to include everything

#define CP_UTF8 65001 // defining a value which should not be changed

using namespace std; // using namespace std

// --- Method Declaration ---
void Help();
void List();
void Report();
void Add(int, string);
void Delete(int);
void Done(int);

// --- CommandNotFound Method ---
void CommandNotFound(string error = "")
{
    string errormsg = ""; // declare error message 
    // setting up eror message according to the reciebved argument
    if (error == "help")
    {
        errormsg = "Error: Command not Found \n";
        errormsg += "> Please make sure to follow correct format => \"./task help\" or \"./task\"\n";
    }
    else if (error == "ls")
    {
        errormsg = "Error: Command not Found \n";
        errormsg += "> Please make sure to follow correct format => \"./task ls\"\n";
    }
    else if (error == "report")
    {
        errormsg = "Error: Command not Found \n";
        errormsg += "> Please make sure to follow correct format => \"./task report\"\n";
    }
    else if (error == "add")
    {
        errormsg = "Error: Command not Found \n";
        errormsg += "> Please make sure to follow correct format => \"./task add [PRIORITY] [\"YOUR TASK\"]\"\n";
        errormsg += "> Nothing Added!\n";
    }
    else if (error == "del")
    {
        errormsg = "Error: Command not Found \n";
        errormsg += "> Please make sure to follow correct format => \"./task del [INDEX]\"\n";
        errormsg += "> Nothing Deleted!\n";
    }
    else if (error == "done")
    {
        errormsg = "Error: Command not Found \n";
        errormsg += "> Please make sure to follow correct format => \"./task done [INDEX]\"\n";
        errormsg += "> Nothing Marked Done!\n";
    }
    else
    { // If no argument is provioded then
        errormsg = "Error: Please Enter a Valid Command!!\n";
    }
    // Printing error message and calling the Help Method
    cout << errormsg << "> See the list of commands here :" << endl;
    Help();
}

// --- Main Method ---
int main(int arg, char *args[])
{
    if (arg < 2) // if arguments are less tan two then call the Help Function
        Help();
    else
    {
        string work = args[1]; // take the first argument as the work variable
        if (work == "help")
        { // if work == "help" and total arguments are 2 then call Help else call CommandNotFound with argument help
            arg == 2 ? Help() : CommandNotFound("help");
        }
        else if (work == "ls")
        { // if work == "ls" and total arguments are 2 then call List else call CommandNotFound with argument ls
            arg == 2 ? List() : CommandNotFound("ls");
        }
        else if (work == "report")
        { // if work == "report" and total arguments are 2 then call Report else call CommandNotFound with argument report
            arg == 2 ? Report() : CommandNotFound("report");
        }
        else if (work == "add")
        { // if work == "add" and total arguments are 4 then
            if (arg == 4)
            { // get the priority and the task and call Add Method with required arguments
                int priority = 0;
                string pr = (args[2]);
                stringstream x(pr);
                x >> priority;
                string task_to_do = args[3];
                Add(priority, task_to_do);
            }
            else // else call CommandNotFound with argument add
                CommandNotFound("add");
        }
        else if (work == "del")
        { // if work == "del" and total arguments are 3 then
            if (arg == 3)
            { // get the index and call Delete Method with required arguments
                int index = 0;
                string ind = (args[2]);
                stringstream x(ind);
                x >> index;
                Delete(index);
            }
            else // else call CommandNotFound with argument add
                CommandNotFound("del");
        }
        else if (work == "done")
        { // if work == "done" and total arguments are 3 then
            if (arg == 3)
            { // get the index and call Done Method with required arguments
                int index = 0;
                string ind = (args[2]);
                stringstream x(ind);
                x >> index;
                Done(index);
            }
            else // else call CommandNotFound with argument add
                CommandNotFound("done");
        }
        else
        { // else call CommandNotFound
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

// --- List Method ---
void List()
{
    ifstream in;          // Create input object
    in.open("tasks.txt"); // open tasks.txt file
    string st;
    getline(in, st);                                   //  get first line in st variable
    if (st == "")                                      // If it is empty then there are no tasks
        cout << "There are no pending tasks!" << endl; // print message with no pending tasks
    else
    {
        cout << st << "\n";   // print first task
        while (in.eof() == 0) // Loop until file ends
        {
            getline(in, st);    // get each line
            cout << st << "\n"; // print the task on current line
        }
    }
    in.close(); // Remove input object
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
                { // If prority if current task is greater than older task then
                    int ind = 0;
                    int last_char = old_text.find('.');                // find index of '.'
                    string line_index = old_text.substr(0, last_char); // make substring from positon 0 to position of '.'
                    stringstream z(line_index);
                    z >> ind;                                                                                      // convert it  integer
                    new_text = new_text + to_string(ind) + ". " + task_to_do + " [" + to_string(priority) + "]\n"; // add current task to new text with priority and index
                    added = true;                                                                                  // Update added as true
                    old_text = old_text.substr(last_char);                                                         // get the text after . to the line end
                    new_text = new_text + to_string(++ind) + old_text + "\n";                                      // add the old text to the next string
                    next_index = ++ind;                                                                            // Update the index to index+2 as two line added to new text
                }
            }
            else
            {
                int pos = old_text.find('.');                        // Find position of '.'
                old_text = old_text.substr(pos);                     //  Create a substring  from position to line end
                new_text += to_string(next_index) + old_text + "\n"; // add the old text to new text with index
                next_index++;                                        // Increment the index
            }
        }
        ofstream out; // Create an object for rewriting the file tasks.txt
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
        out.close(); // remove the output object
    }
    else // The file is empty, so add the task directly into the file
    {
        ofstream out; // Create an object for rewriting the file tasks.txt
        out.open("tasks.txt");
        string val = old_value + to_string(index) + ". " + task_to_do + " [" + to_string(priority) + "]"; // create a variable and add task with index and priority
        out << val;                                                                                       // update the tasks.txt  with the variable
        cout << "Added task: \"" + task_to_do + "\" with priority " + to_string(priority);                // Print success message with task and priority
        out.close();                                                                                      // remove the output object
    }
    in.close(); // remove the input object
}

//  --- Delete Method ---
void Delete(int index)
{
    int line_no = 1;      // define line variable
    ifstream in;          // create input object
    in.open("tasks.txt"); // Open tasks.txt
    string old_text, new_text = "";
    bool found = false;
    while (in.eof() == 0) // Loop until not reach to the end of the file
    {
        getline(in, old_text); // get the current line
        if (line_no < index)   // if line number < index then
        {
            new_text += old_text + "\n"; // add this line to new_text with new line character
            line_no++;                   // Increment line number
        }
        else if (line_no == index) // If line number == index
        {                          // set found == true
            found = true;          // Increment the line number
            line_no++;
        }
        else // line number > index
        {
            int ind = 0;                                       // create new ind variable for index
            int last_char = old_text.find('.');                // find  index of '.'
            string line_index = old_text.substr(0, last_char); // find index number using substring from 0 to position of '.'
            stringstream z(line_index);
            z >> ind;                                               // convert to string
            ind -= 1;                                               // decrement the index by one
            old_text = old_text.substr(last_char);                  // get text after the '.'
            new_text = new_text + to_string(ind) + old_text + "\n"; // append it to new+text with index calculated in previous step and task
        }
    }
    if (found) // If found then
    {
        ofstream out;                  // Create output object
        out.open("tasks.txt");         // open tasks.txt
        int x = new_text.length() - 1; // remove last character  from new_text
        new_text = new_text.substr(0, x);
        out << new_text;                             // Update the content in file to new_text
        cout << "Deleted task #" + to_string(index); // Print duccess message with task index
        out.close();                                 // remove output object
    }
    else                                                                                             // If not found prints error message with the index given
        cout << "Error: Invalid Index\n> Task with given Index does not exist.\n> Nothing deleted."; //
    in.close();                                                                                      // Remove input object
}

// --- Done Method ---
void Done(int index)
{
    int line_no = 1;                // Set line to 1
    ifstream in;                    // cerate a input object
    in.open("tasks.txt");           // open tasks.txt
    string old_text, new_text = ""; // define old text, and new text variables
    bool found = false;             // define found =false
    while (in.eof() == 0)           // loop until end of the file
    {
        getline(in, old_text); // get first line of file
        if (line_no < index)   // if line number < index then
        {
            new_text += old_text + "\n"; // ad dline text to next line
            line_no++;                   // increment the line number
        }
        else if (line_no == index) // if line number == index then
        {
            int x = old_text.length() - 7;                       // define x = length of line -7
            string task = old_text.substr(3, x);                 // define task = substring of old_text form 3 to x
            ofstream compfile;                                   // create compfile object to write
            compfile.open("completed_tasks.txt", ios_base::app); // open completed .txt
            compfile << task;                                    // add the task to end of the file
            found = true;                                        // set found = true
            line_no++;                                           // increment line_number
            compfile.close();                                    // remove output object
        }
        else
        {
            int ind = 0;                                            // set index to zero
            int last_char = old_text.find('.');                     // set last character position to position of '.'
            string line_index = old_text.substr(0, last_char);      // get the previous index
            stringstream z(line_index);                             // convert into integer
            z >> ind;                                               // transfer value to index variable
            ind -= 1;                                               // decrement index by 1;
            old_text = old_text.substr(last_char);                  // get the text of the line
            new_text = new_text + to_string(ind) + old_text + "\n"; //  append  old text with index to the new_text
        }
    }
    if (found) // If found
    {
        ofstream out;                  // create output object
        out.open("tasks.txt");         // open tasks.txt
        int x = new_text.length() - 1; // remove last character from new_text
        new_text = new_text.substr(0, x);
        out << new_text;                                      // write new_textto output object
        cout << "Task with id #" << index << " Marked Done."; // print success message with index
        out.close();                                          // remove output object
    }
    else                                                                                                       // If not found
        cout << "Error: Invalid Index\n> No Pending Task available with given Index.\n> Nothing Marked Done."; // print error message wit
    in.close();                                                                                                // Remove the Output Object
}

// --- Report Method ---
void Report()
{
    ifstream in1, in2;                                                 // create two input object
    in1.open("tasks.txt");                                             // tasks.txt
    in2.open("completed_tasks.txt");                                   // open completed_tasks.txt
    string pending_text, completed_text, pending = "", completed = ""; // create variable for pending tasks, completed tasks, pending and completed
    int pending_line_no = 0, complete_line_no = 0;                     // set line numbers for completed  and pending tasks
    getline(in1, pending_text);                                        // get first line of tasks in pending_text variable
    if (pending_text != "")                                            // if pending_ext is not empty
    {
        in1.seekg(0);          // point the pointer to first character of first line
        while (in1.eof() == 0) // loop until file ends
        {
            ++pending_line_no;              // increment the line number
            getline(in1, pending_text);     // get the current line text in pending_text variable
            pending += pending_text + "\n"; // append the pending_text to pending and add a newline character
        }
    }
    cout << "Pending : " << to_string(pending_line_no) << endl; // print total number of pending tasks
    cout << pending << endl;                                    // in next line print pending variable
    in1.close();                                                // remove the input 1 object
    getline(in2, completed_text);                               // get firstline of completed tasks.
    if (completed_text != "")                                   // if completed_text is not empty then
    {
        in2.seekg(0);          // point the pointer to first character of first line
        while (in2.eof() == 0) // loop until file ends
        {
            ++complete_line_no;                 // increment the line number
            getline(in2, completed_text);       // get the current line text in completed_text variable
            completed += completed_text + "\n"; // append the completed_text to completed and add a newline character
        }
    }
    cout << "Completed : " << to_string(complete_line_no) << endl; // print total number of completed tasks
    cout << completed << endl;                                     // in next line print completed variable
    in2.close();                                                   // close the input object 2
}

// --- End of File ---