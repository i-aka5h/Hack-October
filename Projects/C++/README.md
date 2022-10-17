# Task Management CLI Application using C++



## Getting started

1. Install CPP: You should have build support for cpp on your system. [MinGW](https://sourceforge.net/projects/mingw/)

2. Install Node Js from [Node Js](https://nodejs.org/en/)

3. Install Git from [Git](https://git-scm.com/downloads)

4. Clone the Project 

5. In the root directory of this project run `npm i` then `npm start` to execute the program

6. Run the Below Commands to do the tasks.

7. That's All.


# 1. The app can be run in the console with `./task`.

## Usage

### 1. Help

Executing the command without any arguments, or with a single argument help prints the CLI usage.

```
$ ./task help
Usage :-
$ ./task add 2 hello world    # Add a new item with priority 2 and text "hello world" to the list
$ ./task ls                   # Show incomplete priority list items sorted by priority in ascending order
$ ./task del INDEX            # Delete the incomplete item with the given index
$ ./task done INDEX           # Mark the incomplete item with the given index as complete
$ ./task help                 # Show usage
$ ./task report               # Statistics
```

### 2. List all pending items

Use the ls command to see all the items that are not yet complete, in ascending order of priority.

Every item should be printed on a new line. with the following format

```
[index] [task] [priority]
```

Example:

```
$ ./task ls
1. change light bulb [2]
2. water the plants [5]
```

index starts from 1, this is used to identify a particular task to complete or delete it.

### 3. Add a new item

Use the add command. The text of the task should be enclosed within double quotes (otherwise only the first word is considered as the item text, and the remaining words are treated as different arguments).

```
$ ./task add 5 "the thing i need to do"
Added task: "the thing i need to do" with priority 5
```

### 4. Delete an item

Use the del command to remove an item by its index.

```
$ ./task del 3
Deleted item with index 3
```

Attempting to delete a non-existent item should display an error message.

```
$ ./task del 5
Error: item with index 5 does not exist. Nothing deleted.
```

### 5. Mark a task as completed

Use the done command to mark an item as completed by its index.

```
$ ./task done 1
Marked item as done.
```

Attempting to mark a non-existed item as completed will display an error message.

```
$ ./task done 5
Error: no incomplete item with index 5 exists.
```

### 6. Generate a report

Show the number of complete and incomplete items in the list. and the complete and incomplete items grouped together.

```
$ ./task report
Pending : 2
1. this is a pending task [1]
2. this is a pending task with priority [4]

Completed : 3
1. completed task
2. another completed task
3. yet another completed task
```
