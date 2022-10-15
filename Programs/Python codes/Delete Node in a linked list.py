# Leetcode Question 237
# Delete Node in a linked list
# O(1) approach

class Solution(object):
    def deleteNode(self, node):
        node.val=node.next.val
        node.next=node.next.next
