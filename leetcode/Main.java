public class Main {
    public static int removeDuplicates(int[] nums) {
        //create new array, result array [0] = nums[0]
        int[] result = new int[nums.length];
        result[0] = nums[0];

        int k = 0, cnt = 0;

        for (int i = 1; i < nums.length; i++) {
            //if nums[i] (from 1) == result[count] (from 0) ->i++ 
            if (nums[i] == result[cnt]) {
                
            }
            else {
                result[++cnt] = nums[i];
                k++;
            }
            //else result[++cnt] = nums[i], k++ respectively
            
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