import { Node } from "./node"
export function LinkedList(){
let headNode = null
const append = (value) => {
if(headNode === null){
headNode = Node(value)
}
if(headNode === Node(value)){
headNode.nextNode = currentNode
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