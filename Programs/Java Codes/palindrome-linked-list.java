class Solution {
public boolean isPalindrome(ListNode head) {

    //if linkedList have only one node or null return
    if(head==null || head.next==null) return true;
    
    //Finding the first middle element in a linkedList.
    ListNode slow=head;
    ListNode fast=head;

    while(fast.next!=null && fast.next.next!=null){
        fast=fast.next.next;
        slow=slow.next;
    }
    
    //getting the reverse part of linkedList and connecting it.
    slow.next=reverseLinkedList(slow.next);
    slow=slow.next;
    
    //checking is palindrome or not.
    ListNode dummy=head;
    while(slow!=null){
        if(dummy.val!=slow.val)
            return false;
        slow=slow.next;
        dummy=dummy.next;
    }
    return true;
    } 

     //reversing LinkedList from middle Next.
     ListNode reverseLinkedList(ListNode head) {
        ListNode pre=null;
        ListNode next=null;
        while(head!=null){
            next=head.next;
            head.next=pre;
            pre=head;
            head=next;
        }
        return pre;
    }
}
