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

    public static int strStr (String haystack, String needle) {
        int result = 0;
        
        if (!haystack.contains(needle) || needle.length() > haystack.length())
            return -1;

        for (int i = 0; i < haystack.length(); i++) {
            if (haystack.charAt(i) == needle.charAt(0)) {
                String comp = haystack.substring(i, haystack.length());
                if (comp.startsWith(needle)) {
                    result = i;
                    break;
                }
            }
        }

        return result;
    }

    public static boolean hasDuplicate (int[] arr) {
        //require O(n), just plain array, no map, no set or object-as-hash
        int n = arr.length;

        int[] markArr = new int[101];
        for (int i = 0; i <= 100; i++) {
            markArr[i] = -1;
        }

        //element is 0 <= x <= 100 
        for (int i = 0; i < n; i++) {
            markArr[arr[i]]++;
            if (markArr[arr[i]] > 0)
                return true;
        }

        return false;
    }

    public static void main(String[] args) {
        int[] nums = {1,100,2,4,7,8,5,40,64,38};
        System.out.println(hasDuplicate(nums));
        // int k = removeElement(nums, 4);
        // System.out.println(k);
        // for (int i : nums) 
        //     System.out.print(i + " ");
        // String haysString = "sadbutsad", needlString = "sad";
        // int res = strStr(haysString, needlString);
        // System.out.println(res);

    }
}
//[0,0,1,1,1,2,2,3,3,4] input
//[1,1,2]