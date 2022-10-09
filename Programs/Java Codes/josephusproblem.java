import java.util.*;

class josephusproblem{


static void Josh(List<Integer> person, int k, int index)
{
	
	// Base case , when only one person is left
	if (person.size() == 1) {
	System.out.println(person.get(0));
	return;
	}

	// find the index of first person which will die
	index = ((index + k) % person.size());

	// remove the first person which is going to be killed
	person.remove(index);

	// recursive call for n-1 persons
	Josh(person, k, index);
}

// Driver code
public static void main(String [] args)
{
	int n = 14; // specific n and k values for original
	// josephus problem
	int k = 2;
	k--; // (k-1)th person will be killed
	int index
	= 0; // The index where the person which will die

	List<Integer> person = new ArrayList<>();
	
	// fill the person vector
	for (int i = 1; i <= n; i++) {
	person.add(i);
	}

	Josh(person, k, index);
}
}

