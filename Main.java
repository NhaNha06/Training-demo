class Solution {
    public String encode(List<String> strs) {
        String result = null;
        StringBuilder sb = new StringBuilder();

        for (String item : strs) {
            int n = item.length();
            for (char i : item.toCharArray()) {
                int encodeChar = ((int) i + n);
                sb.append(encodeChar + "@");
            }
            sb.append("#");
        }

        if (sb != null)
            result = sb.toString();
        return result;
    }

    public List<String> decode(String str) {
        ArrayList<String> result = new ArrayList<>();
        if (str.isEmpty()) return result;
        String[] stringArr = str.split("#", -1);

        for (int i = 0; i < stringArr.length - 1; i++) {
            String j = stringArr[i];
            String[] tmp = j.split("@");
            int n = (j.isEmpty()) ? 0 : tmp.length;
            StringBuilder tmpJ = new StringBuilder();

            for (String tmpChar : tmp) {
                if (tmpChar.length() > 0) {
                    int tmpInt = Integer.valueOf(tmpChar) - n;
                    char decodeStr = (char) tmpInt;
                    tmpJ.append(decodeStr + "");
                }
            }
            result.add(tmpJ.toString());
        }

        return result;
    }
}
