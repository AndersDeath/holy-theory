# Binary tree in order traversal

```java
class Solution {
	
	
	List<Integer> getInOrderTraversal(Node root) {
    	List<Integer> list = new ArrayList<Integer>();
		Stack<Node> stack = new Stack<>();
		Node node = root;
		
		while(node != null || !stack.isEmpty()) {
			while(node != null) {
				stack.push(node);
				node = node.left;
			}
			list.add(stack.peek().data);
			node = stack.pop().right;
		}
		
		return list;
	}
}
```
* [Go back](../readme.md)
