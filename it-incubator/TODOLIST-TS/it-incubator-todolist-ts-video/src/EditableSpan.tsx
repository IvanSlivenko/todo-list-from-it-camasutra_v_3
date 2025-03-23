import React, {useState} from "react";

type EditableSpanPropsType = {
    title: string
    editMode: boolean
}

export function EditableSpan(props: EditableSpanPropsType) {


    return props.editMode ?
        <input type="text" value={props.title}/>
        :
        <span className="span-title">{props.title}</span>


}

