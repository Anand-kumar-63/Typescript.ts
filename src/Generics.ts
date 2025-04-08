
// genercis
function hey<Type> (value:Type) :Type{
    return value;
}

// to deal with multiple datatypes
function getfirstElement<t>(Array:t[]):t{
    return Array[0];
}

const getvalue = getfirstElement([1,2,3,3,4])
console.log(getvalue);
const getstringvalue = getfirstElement(["anan","bfewjb","fjcbjcb"]);
console.log(getstringvalue);

// 
const tag = document.querySelector<HTMLInputElement>(".tag")
tag?.value

//  generic looping
const map = new Map<string,Map<string,number>>([])
//  
type Apiresponsetype<Data> = {
    data:Data,
    isError:boolean
} 
type userresponse = Apiresponsetype<{name:string,email:string}>
type statusresponse = Apiresponsetype<{status:number}>

const user22:userresponse={
    data:{
        name:"anand",
        email:"anand@gmail.com"
    },
    isError:false
}
 
const user11:statusresponse={
    data:{
        status:1
    },
    isError:false
}

//
type Erp<data extends object = {status:number}> ={
    data : data,
    isError:false
}
const response:Erp<{}>={
    data:{
        Status:1
    },
    isError:false
}


