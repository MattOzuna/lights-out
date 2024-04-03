import React from "react";
import Cell from "./Cell";
import {render, asFragment} from "@testing-library/react"

it('should render properly', ()=>{
    render(
        <table>
            <tbody>
                <tr>
                    <Cell />
                </tr>
            </tbody>
        </table>
        )
})

it('should match snapshot of a lit Cell', ()=>{
    const {asFragment} = render(        
    <table>
        <tbody>
            <tr>
                <Cell isLit={true}/>
            </tr>
        </tbody>
    </table>)
    expect(asFragment()).toMatchSnapshot()
})

it('should match snapshot of a not lit Cell', ()=>{
    const {asFragment} = render(        
    <table>
        <tbody>
            <tr>
                <Cell isLit={false}/>
            </tr>
        </tbody>
    </table>)
    expect(asFragment()).toMatchSnapshot()
})



