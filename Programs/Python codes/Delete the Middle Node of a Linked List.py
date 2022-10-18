# Problem Link - https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/

class Solution:
    def deleteMiddle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        p1 = head
        p2 = head
        p2prev = None
        while p1.next and p1.next.next and p2.next:
            p2prev = p2
            p2 = p2.next
            p1 = p1.next.next
        
        if p1.next:
            p2prev = p2
            p2 = p2.next
        
        if not p2prev:
            return None
        p2prev.next = p2.next
        return head
