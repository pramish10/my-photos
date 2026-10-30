import { Loader2Icon } from 'lucide-react';
import React from 'react'

const Loading = ({className = " ",size = "md" , fullScreen = false,inline = false}) => {

    const sizeMap = {  

        xs : "size-4",
        sm : "size-6",
        md : "size-8"
    
    };

    const sizeClass = sizeMap[size] || sizeMap.md;

    if(inline){
        return <Loader2Icon className={'${sizeClass} aniamte-spin ${className || "text-current"}'}/>
            



    }

return (

    <div>Loading</div>
    
  )
}

export default Loading  