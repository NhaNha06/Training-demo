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

        return k;
    }

    public static int removeElement(int[] nums, int val) {
        int k = 0;

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != val) {
                nums[k++] = nums[i];
            }
            
        }
        return k;
    }

    

    public static void main(String[] args) {
        int[] nums = {1,1,2,4,7,8,5,4,1,4,3};
        int k = removeElement(nums, 4);
        System.out.println(k);
        for (int i : nums) 
            System.out.print(i + " ");
    }
}
//[0,0,1,1,1,2,2,3,3,4] input
//[1,1,2]