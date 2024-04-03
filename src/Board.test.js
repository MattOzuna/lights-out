import React from "react";
import {render, asFragment, fireEvent} from "@testing-library/react"
import Board from "./Board.js"

it('should render properly', ()=>{
    render(
        <Board
            nrows={3}
            ncols={3}
            chanceLightStartsOn={0}
        />
    )
})

it('should match snapshot of non winning game', ()=>{
    const {asFragment} = render(
        <Board
            nrows={3}
            ncols={3}
            chanceLightStartsOn={0}
        />
    )
    expect(asFragment()).toMatchSnapshot();
})

it('should match snapshot of winning game', ()=>{
    const {asFragment} = render(
        <Board
            nrows={3}
            ncols={3}
            chanceLightStartsOn={1}
        />
    )
    expect(asFragment()).toMatchSnapshot();
})

it('should light correct Cells when clicked', ()=>{
    const {container} = render(
        <Board
            nrows={3}
            ncols={3}
            chanceLightStartsOn={0}
        />
    );0
    const testCell = container.querySelector(`[id="11"]`)
    fireEvent.click(testCell)
    
    expect(container.querySelector(`[id="11"]`)).toHaveClass('Cell-lit')
    expect(container.querySelector(`[id="12"]`)).toHaveClass('Cell-lit')
    expect(container.querySelector(`[id="10"]`)).toHaveClass('Cell-lit')
    expect(container.querySelector(`[id="01"]`)).toHaveClass('Cell-lit')
    expect(container.querySelector(`[id="21"]`)).toHaveClass('Cell-lit')
    
})
    



