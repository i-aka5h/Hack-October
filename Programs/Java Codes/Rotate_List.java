class Solution {
public ListNode rotateRight(ListNode head, int k) {

    //if head is null or head.next is null (means only one node) then return head
    if(head==null || head.next==null) return head;
    
    //computing the length of LinkendList
    ListNode cur=head;
    int len=1;
    while(cur.next!=null) {
        cur=cur.next;
        len++;
    }
    
    //connect the last node to first node
    cur.next=head;
    
  //here if k>length example:k=14 and length of the linkedList is 5 then, 5 multiple till 10 will bring it to original list so, we have to preform just for k=4. (14%5=4)
  // if k<lenght then we get the same k value (4%5=4)
    
    k=k%len;
    k=len-k;
    while(k-->0) cur=cur.next; //going till that node
    
    // make the cur.next node head and break the connection
    head=cur.next;
    cur.next=null;
    
    return head;
}
}
