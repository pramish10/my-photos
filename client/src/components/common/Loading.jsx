import React from 'react'

const Loading = ({className = " ",size = "md" , fullScreen = false,inline = false}) => {

    const sizeMap = {  

        xs : "size-4",
        sm : "size-6",
        md : "size-8"
    
    };

    const sizeClass = sizeMap[size] || sizeMap.md;

    if(inline){
        return <Loader2Icon></Loader2Icon> 




    }

return (

    <div>Loading</div>
    
  )
}

export default Loading  