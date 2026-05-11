// class Solution {
//     public String encode(List<String> strs) {
//         String result = null;
//         StringBuilder sb = new StringBuilder();

//         for (String item : strs) {
//             int n = item.length();
//             for (char i : item.toCharArray()) {
//                 int encodeChar = ((int) i + n);
//                 sb.append(encodeChar + "@");
//             }
//             sb.append("#");
//         }

//         if (sb != null)
//             result = sb.toString();
//         return result;
//     }

//     public List<String> decode(String str) {
//         ArrayList<String> result = new ArrayList<>();
//         if (str.isEmpty()) return result;
//         String[] stringArr = str.split("#", -1);

//         for (int i = 0; i < stringArr.length - 1; i++) {
//             String j = stringArr[i];
//             String[] tmp = j.split("@");
//             int n = (j.isEmpty()) ? 0 : tmp.length;
//             StringBuilder tmpJ = new StringBuilder();

//             for (String tmpChar : tmp) {
//                 if (tmpChar.length() > 0) {
//                     int tmpInt = Integer.valueOf(tmpChar) - n;
//                     char decodeStr = (char) tmpInt;
//                     tmpJ.append(decodeStr + "");
//                 }
//             }
//             result.add(tmpJ.toString());
//         }

//         return result;
//     }
// }

class Solution {
    public int[] productExceptSelf(int[] nums) {
        // store prefix and surfix in each array
        int n = nums.length, preP = 1, sufP = 1;
        int[] pre = new int[n];
        int[] suf = new int[n];
        int[] result = new int[n];

        for (int i = 0; i < n; i++) {
            pre[i] = preP;
            preP *= nums[i];
        }

        for (int i : pre)
            System.out.print(i + " ");
        System.out.println();

        for (int i = n - 1; i >= 0; i--) {
            suf[i] = sufP;
            sufP *= nums[i];
        }

        for (int i : suf)
            System.out.print(i + " ");
        System.out.println();

        for (int i = 0; i < n; i++) {
            result[i] = pre[i] * suf[i];
        }

        return result;
        // expected: [48,24,12,8]
    }

    public int findMax(int[] nums) {
        int max = nums[0];
        for (int i : nums) {
            if (i > max)
                max = i;
        }

        return max;

    }

  
    
}


