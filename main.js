import { LinkedList } from "./linkedList.js";
const list = LinkedList()
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.removeAt(3)
list.insertAt(3,"bear","trout")
console.log(list.toString())