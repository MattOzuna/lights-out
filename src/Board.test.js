import React from "react";
import {render, asFragment} from "@testing-library/react"
import Board from "./Board.js"
import testBoard from "./_testCommon.js";

it('should render properly', ()=>{
    render(
        <Board
            nrows={3}
            ncols={3}
            chanceLightStartsOn={0}
        />
    )
})

it('should match snapshot', ()=>{
    const {asFragment} = render(
        <Board
            nrows={3}
            ncols={3}
            chanceLightStartsOn={0}
        />
    )
    expect(asFragment()).toMatchSnapshot();
})



