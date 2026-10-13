import { Node } from "./node"
export function LinkedList(){
let headNode = null
const append = (value) => {
let newNode = Node(value)
if(headNode === null){
headNode = newNode
}
else {
let currentNode = headNode;
while(currentNode.nextNode !== null){
currentNode = currentNode.nextNode
}
currentNode.nextNode = newNode 
 }
}
const prepend = (value) => {

}
const size = () => {

}
const head = () => {
if(headNode === null){
    return undefined
}
}
const tail = () => {

}
const at = (index) => {

}
const pop = () => {

}
const contains = (value) => {

}
const findIndex = (value) => {

}
const toString = () => {

}
const insertAt = (index, ...values) => {

}
const removeAt = (index) => {

}
return {
append,
prepend,
size, 
head,
tail,
at,
pop,
contains,
findIndex,
toString,
insertAt,
removeAt
}
}