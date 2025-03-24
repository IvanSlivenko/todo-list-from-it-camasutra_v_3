import React, {KeyboardEvent, useState} from "react";

type EditableSpanPropsType = {
    title: string
    // editMode: boolean
}

export function EditableSpan_test(props: EditableSpanPropsType) {
    let [editMode, setEditMode] = useState(false)
    const activateEditMode = () => {
        setEditMode(true)
    }

    const activateVievMode = () => {
        setEditMode(false)
    }

    return editMode ?
        <span>
            <input value={props.title} onBlur={activateVievMode}/>
            <button onClick={activateVievMode}>=</button>
        </span>

        :
        <span className="span-title">{props.title}
            <button onClick={activateEditMode}>...</button></span>
}

type EditableSpanUnitPropsType = {
    unit: string
    // editMode: boolean
}

export function EditableSpanUnit(props: EditableSpanUnitPropsType) {
    let [editModeUnit, setEditModeUnit] = useState(false)
    const activateEditModeUnit = () => {
        setEditModeUnit(true)
    }
    const activateVievModeUnit = () => {
        setEditModeUnit(false)
    }
    return editModeUnit ?
        <span>
            <input type="text" value={props.unit}/>
            <button onClick={activateVievModeUnit}>=</button>
        </span>

        :
        <span className="span-unit">{props.unit}
            <button onClick={activateEditModeUnit}>...</button></span>
}

type EditableSpanPeriodPropsType = {
    period: string
    // editMode: boolean
}

export function EditableSpanPeriod(props: EditableSpanPeriodPropsType) {
    let [editModePeriod, setEditModePeriod] = useState(false)
    const activateEditModePeriod = () => {
        setEditModePeriod(true)
    }
    const activateVievModePeriod = () => {
        setEditModePeriod(false)
    }
    return editModePeriod ?
        <span>
            <input type="text" value={props.period}/>
            <button onClick={activateVievModePeriod}>=</button>
        </span>

        :
        <span
            onDoubleClick={activateEditModePeriod}
            className="span-unit"
        >
            {props.period}
        </span>
}

type EditableSpanQuantityPropsType = {
    quantity: number
    // editMode: boolean
}

export function EditableSpanQuantity(props: EditableSpanQuantityPropsType) {
    let [editModeQuantity, setEditModeQuantity] = useState(false)
    const activateEditModeQuantity = () => {
        setEditModeQuantity(true)
    }
    return editModeQuantity ?
        <input type="text" value={props.quantity}/>
        :
        <span
            onDoubleClick={activateEditModeQuantity}
            className="span-unit">{props.quantity}</span>

}

type EditableSpanPrisePropsType = {
    prise: number
    // editMode: boolean
}

export function EditableSpanPrise(props: EditableSpanPrisePropsType) {
    let [editModePrise, setEditModePrise] = useState(false)
    const activateEditModePrise = () => {
        setEditModePrise(true)
    }
    return editModePrise ?
        <input type="text" value={props.prise}/>
        :
        <span
            onDoubleClick={activateEditModePrise}
            className="span-unit">{props.prise}</span>

}

type EditableSpanSummPropsType = {
    summ: number
    // editMode: boolean
}

export function EditableSpanSumm(props: EditableSpanSummPropsType) {
    let [editModeSumm, setEditModeSumm] = useState(false)
    const activateEditModeSumm = () => {
        setEditModeSumm(true)
    }
    return editModeSumm ?
        <input type="text" value={props.summ}/>
        :
        <span
            onDoubleClick={activateEditModeSumm}
            className="span-unit">{props.summ}</span>
}

type EditableSpanUserPropsType = {
    user: string
    // editMode: boolean
}

export function EditableSpanUser(props: EditableSpanUserPropsType) {
    let [editModeUser, setEditModeUser] = useState(false)
    const activateEditModeUser = () => {
        setEditModeUser(true)
    }
    return editModeUser ?
        <input type="text" value={props.user}/>
        :
        <span
            onDoubleClick={activateEditModeUser}
            className="span-unit">{props.user}</span>

}