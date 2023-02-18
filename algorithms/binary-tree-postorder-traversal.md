# Binary tree postorder traversal

```java
class Solution {
	
	void utility(Node root, List<Integer> traversal) {
		if(root == null) {
			return;
		}
		
		utility(root.left, traversal);
		utility(root.right, traversal);
		traversal.add(root.data);

	}
	
	List<Integer> getPostorderTraversal(Node root) {
		List<Integer> traversal = new ArrayList<Integer>();
		utility(root, traversal);
		return traversal;
	}
}

```
* [Go back](../readme.md)
