#Problem Link - https://leetcode.com/problems/binary-tree-right-side-view/

class Solution:
    def rightSideView(self, root):
        result, nodes = [], deque()
        nodes.append(root)
        if root!=None:
            while len(nodes)>0:
                result.append(nodes[-1].val)
                childNodes = []
                while len(nodes)>0:
                    temp = nodes.popleft()
                    childNodes.extend([temp.left, temp.right])
                nodes.extend([node for node in childNodes if node!=None])
        return result
