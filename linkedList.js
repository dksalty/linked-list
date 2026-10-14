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
let newNode = Node(value)
if(headNode === null){
headNode = newNode
}
else{
newNode.nextNode = headNode
headNode = newNode
}
}
const size = () => {
let count = 0;
if(headNode === null){
    return count
}
else {
let currentNode = headNode
while(currentNode !== null){
count++   
currentNode = currentNode.nextNode
}
}
return count
}
const head = () => {
if(headNode === null){
    return undefined
}
return headNode
}
const tail = () => {
if(headNode === null){
    return undefined
}

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