class MooresAlgo {
    public static int majorityElement(int[] nums) {
        int count = 0;
        int candidate = 0;

        for (int num : nums) {
            if (count == 0) {
                candidate = num;
            }
            if (num == candidate)
                count += 1;
            else
                count -= 1;
        }

        return candidate;
    }

    public static void main(String args[]) {
        int a[] = new int[] { 1, 2, 1,1,1, 4, 3,3, 1};
        int ans = majorityElement(a);
        System.out.println("Highest Repeating Element = "+ans);
    }

}
