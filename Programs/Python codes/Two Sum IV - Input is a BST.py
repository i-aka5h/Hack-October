#Problem link - https://leetcode.com/problems/two-sum-iv-input-is-a-bst/

lis = []
        flag = [False]
        def treetraverse(root):
            if(root == None or flag[0] == True):
                return
            if(k - root.val in lis):
                flag[0] = True
                return
            lis.append(root.val)
            treetraverse(root.left)
            treetraverse(root.right)
        
        treetraverse(root)
        return flag[0]
