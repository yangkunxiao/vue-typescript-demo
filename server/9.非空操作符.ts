type ListNode = {
    data:string | number,
    next?: ListNode
}

function setNode (node: ListNode,value:number){

}

setNode({
    data:3,
    next:{
        data:'4'
    }
},4)

//可空操作符

interface Boys {
    age:number,
    sex?: string,
    name:string
}

const person:Boys = {
    age:10,
    name:'kaka'
}