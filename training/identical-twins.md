
# Identical twins
```java
class Solution {
	int getIdenticalTwinsCount (int[] arr) {
		HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
		for (int i = 0; i < arr.length; i++) {
			Integer val = map.get(arr[i]);
			if(val == null) {
				map.put(arr[i],1);
			} else {
				map.put(arr[i], ++val);
			}
		}
				
		int count = 0;
		for(Map.Entry<Integer, Integer> y: map.entrySet()){
			int x = (y.getValue() * (y.getValue() - 1)) / 2;
			count += x;
			
		}
		return count;
	}
}
,,,
