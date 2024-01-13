package coding.java;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.TreeSet;

public class ArrayListDemo {

  public static void main(String[] args) {
    Map<String, Integer> map = new HashMap<>();
    map.put("123", 123);
    map.put("124", 124);
    map.put("125", 125);
    for(Map.Entry<String, Integer> entry: map.entrySet()) {
      System.out.println(entry.getKey());
      System.out.println(entry.getValue());
    }
  }
  
}
