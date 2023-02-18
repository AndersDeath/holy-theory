# Binary tree preorder traversal

```java
class Solution {
	
	void utility(Node root, List<Integer> traversal) {
		if(root == null) {
			return;
		}
		
		traversal.add(root.data);
		utility(root.left, traversal);
		utility(root.right, traversal);
	}
	
	List<Integer> getPreorderTraversal(Node root) {
		List<Integer> traversal = new ArrayList<Integer>();
		utility(root, traversal);
		return traversal;
	}
}
```
* [Go back](../readme.md)
