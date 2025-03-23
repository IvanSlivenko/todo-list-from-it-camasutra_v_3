import React from "react";

type EditableSpanPropsType = {
    title: string
    editMode: boolean
}

export function EditableSpan_test(props: EditableSpanPropsType) {
    return props.editMode ?
        <input type="text" value={props.title}/>
        :
        <span className="span-title">{props.title}</span>

}

type EditableSpanUnitPropsType = {
    unit: string
    editMode: boolean
}

export function EditableSpanUnit(props: EditableSpanUnitPropsType) {
    return props.editMode ?
        <input type="text" value={props.unit}/>
        :
        <span className="span-unit">{props.unit}</span>


}

type EditableSpanPeriodPropsType = {
    period: string
    editMode: boolean
}

export function EditableSpanPeriod(props: EditableSpanPeriodPropsType) {
    return props.editMode ?
        <input type="text" value={props.period}/>
        :
        <span className="span-unit">{props.period}</span>

}

type EditableSpanQuantityPropsType = {
    quantity: number
    editMode: boolean
}

export function EditableSpanQuantity(props: EditableSpanQuantityPropsType) {
    return props.editMode ?
        <input type="text" value={props.quantity}/>
        :
        <span className="span-unit">{props.quantity}</span>

}

type EditableSpanPrisePropsType = {
    prise: number
    editMode: boolean
}

export function EditableSpanPrise(props: EditableSpanPrisePropsType) {
    return props.editMode ?
        <input type="text" value={props.prise}/>
        :
        <span className="span-unit">{props.prise}</span>

}

type EditableSpanSummPropsType = {
    summ: number
    editMode: boolean
}

export function EditableSpanSumm(props: EditableSpanSummPropsType) {
    return props.editMode ?
        <input type="text" value={props.summ}/>
        :
        <span className="span-unit">{props.summ}</span>
}

type EditableSpanUserPropsType = {
    user: string
    editMode: boolean
}

export function EditableSpanUser(props: EditableSpanUserPropsType) {
    return props.editMode ?
        <input type="text" value={props.user}/>
        :
        <span className="span-unit">{props.user}</span>

}