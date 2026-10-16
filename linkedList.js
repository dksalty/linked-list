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
else {
    let currentNode = headNode
while(currentNode.nextNode !== null){
currentNode = currentNode.nextNode
}
return currentNode
}
}

const at = (index) => {
let count = 0;
if (headNode === null){
    return undefined
}
else {
let currentNode = headNode
while(currentNode !== null){
if(index === count){
return currentNode
}
count++
currentNode = currentNode.nextNode
}}
return undefined
}

const pop = () => {
if(headNode === null){
    return undefined
}

else {
let oldHead = headNode
headNode = headNode.nextNode
return oldHead.value
}
}

const contains = (value) => {
let currentNode = headNode
while(currentNode !== null){
if(currentNode.value === value){
return true
}
currentNode = currentNode.nextNode
}
return false
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