import java.util.Arrays;

public class Main {
    public static int removeDuplicates(int[] nums) {
        int k = 1;
        // number of element current

        for (int i = 1; i < nums.length; i++) {
            // if nums[i] (from 1) == result[k - 1] (from 0) ->i++ else replace it in array
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

    public static int strStr(String haystack, String needle) {
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

    public static boolean hasDuplicate(int[] arr) {
        // require O(n), just plain array, no map, no set or object-as-hash
        int n = arr.length;

        int[] markArr = new int[101];
        for (int i = 0; i <= 100; i++) {
            markArr[i] = -1;
        }

        // element is 0 <= x <= 100
        for (int i = 0; i < n; i++) {
            markArr[arr[i]]++;
            if (markArr[arr[i]] > 0)
                return true;
        }

        return false;
    }

    public static int searchInsert(int[] nums, int target) {
        // use binary search -> if cannot find return index of right - 1
        int left = 0, right = nums.length - 1;

        while (left <= right) {
            int mid = (int) Math.floor((left + right) / 2);

            if (nums[mid] == target)
                return mid;
            if (target > nums[mid])
                left = mid + 1;
            else
                right = mid - 1;
        }

        return left;

    }

    public static int lengthOfLastWord(String s) {
        // String[] tmpString = s.trim().split("\\s+");
        // return tmpString[tmpString.length - 1].length();

        s = s.trim();
        int n = s.length();
        int count = 0;
        for (int i = 0; i < n; i++) {
            if (s.charAt(i) != ' ')
                count++;
            else
                count = 0;
        }
        return count;
    }

    public static int[] plusOne(int[] digits) {
        int n = digits.length;
        int[] result = new int[n + 1];

        // in case of 1 digits from 0 - 9
        if (n == 1) {
            if (digits[0] == 9) {
                result[0] = 1;
                result[1] = 0;
                return result;
            } else {
                digits[0] += 1;
                return digits;
            }
        }

        // in case of many digit
        if (digits[n - 1] == 9) {
            for (int i = n - 1; i >= 0; i--) {
                if (digits[i] == 9) {
                    digits[i] = 0;
                } else {
                    digits[i] += 1;
                    break;
                }

            }

        } else {
            digits[n - 1] += 1;
        }

        // in case of plus 999 or 99999 etc.
        if (digits[0] == 0) {
            result[0] = 1;
            for (int i = 0; i < n; i++)
                result[i + 1] = digits[i];
        } else {
            int[] res = new int[n];
            for (int i = 0; i < n; i++)
                res[i] = digits[i];
            return res;
        }

        return result;
    }

       

    //34. Leet code (kiem ten bài)
    public static int[] findRange(int[] arr, int target, int idx) {
        int[] res = new int[2];
        int start = idx, end = idx;
        // 1 2 3 5

        for (int i = 0; i < idx; i++) {
            if (arr[i] == target) {
                start = i;
                break;
            }
        }

        for (int i = arr.length - 1; i > idx; i--) {
            if (arr[i] == target) {
                end = i;
                break;
            }
        }

        res[0] = start;
        res[1] = end;
        return res;

    }

    public static int[] searchRange(int[] arr, int target) {

        int left = 0, right = arr.length - 1;
        int[] res = { -1, -1 };

        while (left <= right) {
            int mid = (left + right) / 2;
            if (arr[mid] == target)
                return findRange(arr, target, mid);
            else if (arr[mid] < target)
                right = mid - 1;
            else
                left = mid + 1;
        }
        return res;

    }
    
    //875. Koko Eating Bananas

    public static boolean canFinish(int speed, int[] piles, int hour) {
        int total = 0;
        for (int i : piles) {
            total += Math.ceil(i / (speed * 1.0));
        }
        return total <= 8;
    }

    public static int minEatingSpeed(int[] piles, int hour) {
        int max = piles[0];
        for (int i : piles) {
            if (i > max)
                max = i;
        }
        
        int left = 0, right = max;
        while (left < right) {
            int mid = (left + right) / 2;
            if (canFinish(mid, piles, hour))
                right = mid;
            else
                left = mid + 1;
          
        }
        return left;
    }

    public static void merge (int[] first, int[] second) {

        //VIET HAM MERGE SAU DO LAM FIND THE MEDIAN
        //vd bai find the median of sorted array
        

    }

    public static char findTheDifference(String s, String t) {
        char[] arrS = s.toCharArray();
        char[] arrT = t.toCharArray();

        Arrays.sort(arrS);
        Arrays.sort(arrT);

        for (int i = 0; i < s.length(); i++) {
            if (arrS[i] != arrT[i])
                return arrT[i];
        }

        return arrT[t.length() - 1];
    }

    public static void main(String[] args) {
        String s = "", t = "y";
        System.out.println(findTheDifference(s, t));
    }
}
// [0,0,1,1,1,2,2,3,3,4] input
// [1,1,2]

