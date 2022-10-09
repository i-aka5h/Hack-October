
/**
 * We consider a graph with V vertices numbered from 0 to V-1 and E edges
 * We will first prepare the adjacenecy matrix representation of the graph
 * In Bredth First Traversal of a graph we first mark the current node as visited and then try to explore the unvisited vertices directly connected to the current vertex through edges
 * 
 */
import java.util.*;

public class BreadthFirstSearch {

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

        bfs2(adj);
        sc.close();
        System.exit(0);
    }

    private static ArrayList<Integer> bfs(List<List<Integer>> adj) {
        // returns the nodes in the order in which they are traversed in Breadth First
        // Search algorithm in the form of ArrayList<Integer>
        int V = adj.size();
        boolean[] visited = new boolean[V];
        ArrayList<Integer> ans = new ArrayList<>();
        Queue<Integer> q = new ArrayDeque<>();
        for (int i = 0; i < V; i++) {
            if (!visited[i]) {
                q.add(i);
                while (!q.isEmpty()) {
                    int n = q.remove();
                    visited[n] = true;
                    ans.add(n);
                    for (int x : adj.get(n)) {
                        if (!visited[x]) {
                            q.add(x);
                        }
                    }
                }
            }
        }
        return ans;
    }

    private static void bfs2(List<List<Integer>> adj) {
        // prints the nodes in the order of their traversal in BFS algorithm
        Queue<Integer> q = new ArrayDeque<>();

        boolean[] visited = new boolean[adj.size()];

        for (int i = 0; i < adj.size(); i++) {

            if (!visited[i]) {

                StringBuilder ans = new StringBuilder();
                q.add(i);
                while (!q.isEmpty()) {
                    int node = q.remove();
                    if (!visited[node]) {
                        visited[node] = true;
                        ans.append(node + "->");
                    }

                    for (int x : adj.get(node)) {
                        if (!visited[x]) {
                            q.add(x);
                        }
                    }
                }

                System.out.println(ans.toString().substring(0, ans.toString().length() - 2));

            }
        }

    }
}
