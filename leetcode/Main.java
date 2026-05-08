public class Main {
    public static int removeDuplicates(int[] nums) {
        int k = 1;
        //number of element current

        for (int i = 1; i < nums.length; i++) {
            //if nums[i] (from 1) == result[k - 1] (from 0) ->i++ else replace it in array
            if (nums[i] != nums[k - 1]) {
                nums[k] = nums[i];
                k++;
            } 
                
        }
        nums = result;

        return k;
    }

    public static void main(String[] args) {
        int[] nums = [1,1,2];
        int[] result = removeDuplicates(nums);
        for (int i : result)
            System.out.println(i);
    }
}
//[0,0,1,1,1,2,2,3,3,4] input
//[1,1,2]