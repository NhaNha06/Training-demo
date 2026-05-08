class Solution {
    /*
     * Definition for singly-linked list.
     */

    public class ListNode {
        int val;
        ListNode next;

        ListNode() {
        }

        ListNode(int val) {
            this.val = val;
        }

        ListNode(int val, ListNode next) {
            this.val = val;
            this.next = next;
        }
    }

    // public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
    // ListNode result;

    // if (list1 == null && list2 == null) {
    // result = null;
    // return result;
    // }

    // if (list1 == null) {
    // result = list2;
    // return result;
    // }

    // if (list2 == null) {
    // result = list1;
    // return result;
    // }

    // /**
    // * Gộp 2 list với nhau, sort
    // *
    // */

    // // find head, tail of list1
    // ListNode head = list1, tail = null;
    // while (list1.next != null) {
    // list1 = list1.next;
    // }

    // tail = list1;

    // // tail.next of list1 = list2
    // tail.next = list2;

    // // bubble sort or any sort function
    // result = head;

    // while (result.next != null) {
    // while (result.val > result.next.val) {
    // int tmp = result.next.val;
    // result.next.val = result.val;
    // result.val = tmp;
    // result = result.next;
    // }
    // }

    // return head;
    // }

    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        if (list1 != null && list2 != null) {
            if (list1.val > list2.val) {
                list1.next = mergeTwoLists(list1.next, list2);
                return list1;
            }
            else {
                list2.next = mergeTwoLists(list1, list2.next);
                return list2;
            }
        }

        if (list1 == null)
            return list2;
        else
            return list1;
    }
}
