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
            chanceLightStartsOn={1}
        />
    )
    expect(asFragment()).toMatchSnapshot();
})

it('should match snapshot of winning game', ()=>{
    const {asFragment} = render(
        <Board
            nrows={3}
            ncols={3}
            chanceLightStartsOn={0}
        />
    )
    expect(asFragment()).toMatchSnapshot();
})

it('should light correct Cells when clicked', ()=>{
    //Create a board with all cells lit
    const {container} = render(
        <Board
            nrows={3}
            ncols={3}
            chanceLightStartsOn={1}
        />
    );0

    //all cells should be lit
    expect(container.querySelector(`[id="00"]`)).toHaveClass('Cell-lit')
    expect(container.querySelector(`[id="01"]`)).toHaveClass('Cell-lit')
    expect(container.querySelector(`[id="02"]`)).toHaveClass('Cell-lit')
    expect(container.querySelector(`[id="10"]`)).toHaveClass('Cell-lit')
    expect(container.querySelector(`[id="11"]`)).toHaveClass('Cell-lit')
    expect(container.querySelector(`[id="12"]`)).toHaveClass('Cell-lit')
    expect(container.querySelector(`[id="20"]`)).toHaveClass('Cell-lit')
    expect(container.querySelector(`[id="21"]`)).toHaveClass('Cell-lit')
    expect(container.querySelector(`[id="22"]`)).toHaveClass('Cell-lit')


    //click the middle cell with coord 1-1 matching its Id
    const testCell = container.querySelector(`[id="11"]`)
    fireEvent.click(testCell)
    
    //the middle cella and all surrounding cells should not have the class cell-lit
    //the corner cells should still be lit
    expect(container.querySelector(`[id="11"]`)).not.toHaveClass('Cell-lit')
    expect(container.querySelector(`[id="12"]`)).not.toHaveClass('Cell-lit')
    expect(container.querySelector(`[id="10"]`)).not.toHaveClass('Cell-lit')
    expect(container.querySelector(`[id="01"]`)).not.toHaveClass('Cell-lit')
    expect(container.querySelector(`[id="21"]`)).not.toHaveClass('Cell-lit')
    expect(container.querySelector(`[id="00"]`)).toHaveClass('Cell-lit')
    expect(container.querySelector(`[id="02"]`)).toHaveClass('Cell-lit')
    expect(container.querySelector(`[id="20"]`)).toHaveClass('Cell-lit')
    expect(container.querySelector(`[id="22"]`)).toHaveClass('Cell-lit')
    
})
    



