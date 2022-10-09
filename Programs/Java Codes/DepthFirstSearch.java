
/**
 * We consider a graph with V vertices numbered from 0 to V-1 and E edges
 * We will first prepare the adjacenecy matrix representation of the graph
 * In Depth First Traversal of a graph we first mark the current node as visited and then try to explore the connected vertices completely and all vertices connected to it and so on before performing search on other vertex
 * 
 * 
 */

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.Stack;

public class DepthFirstSearch {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int V = sc.nextInt(), E = sc.nextInt();

        List<List<Integer>> adj = new ArrayList<>();

        for (int i = 0; i < V; i++) {
            adj.add(new ArrayList<>());
        }

        for (int i = 0; i < E; i++) {
            int a = sc.nextInt(), b = sc.nextInt();
            adj.get(a).add(b);
            adj.get(b).add(a);
        }

        printDFS(adj);
        sc.close();
        System.exit(0);
    }

    private static void printDFS(List<List<Integer>> adj) {
        // this function returns a string which contains the vertices in the order in
        // which they are visited through Depth First Search

        Stack<Integer> st = new Stack<>();

        boolean[] visited = new boolean[adj.size() + 1];
        for (int i = 0; i < adj.size(); i++) {

            if (!visited[i]) {

                StringBuilder ans = new StringBuilder();

                visited[i] = true;
                st.push(i);

                while (!st.isEmpty()) {
                    int node = st.pop();
                    ans.append(node + "->");
                    for (int x : adj.get(node)) {
                        if (!visited[x]) {
                            visited[x] = true;
                            st.push(x);
                        }
                    }
                }

                String a = ans.toString();
                System.out.println(a.substring(0, a.length() - 2));

            }

        }

    }

    private static void dfs(ArrayList<ArrayList<Integer>> adj, ArrayList<Integer> ans, int node, boolean[] visited) {
        // In this function we perform Depth First Search on the graph and store the
        // value of nodes in the ArrayList<Integer> ans
        if (!visited[node]) {
            visited[node] = true;

            ans.add(node);

            for (int x : adj.get((node))) {
                if (!visited[x]) {
                    dfs(adj, ans, x, visited);
                }
            }

        }
    }

}
