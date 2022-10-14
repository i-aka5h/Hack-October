// Kadane Algorithm for Circular Array Sum

public class KadanesAlgo {
    static int Kadane(int a[], int n) {
        int currentsum = 0;
        int maxsum = Integer.MIN_VALUE;
        for (int i = 0; i < n; i++) {
            currentsum += a[i];
            if (currentsum < 0) {
                currentsum = 0;
            }
            maxsum = Math.max(maxsum, currentsum);
        }
        return maxsum;
    }

    public static void main(String[] args) {
        int a[] = { 1, -3, 6, 3, -6, 1, -2, 10 };
        int n = a.length;
        int wrapsum;
        int nonwrapsum = Kadane(a, n);
        int totalsum = 0;
        for (int i = 0; i < n; i++) {
            totalsum += a[i];
            a[i] = -a[i];

        }
        wrapsum = totalsum + Kadane(a, n);
        System.out.println(Math.max(wrapsum, nonwrapsum));
    }
}
