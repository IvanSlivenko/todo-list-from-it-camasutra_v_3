import React, {useState} from "react";

type EditableSpanPropsType = {
    title: string
    // editMode: boolean
}

export function EditableSpan(props: EditableSpanPropsType) {
    let [editMode, setEditMode] = useState(false)
    const activateEditMode = ()=>{
        setEditMode(true)
    }

    const activateVievMode = ()=>{
        setEditMode(false)
    }

    return editMode ?
        <input value={props.title} onBlur={activateVievMode}/>
        :
        <span

            className="span-title"
            onDoubleClick={activateEditMode}

        >{props.title}</span>


}

