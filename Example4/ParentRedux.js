import {useState} from "react";
import Button from "../Common/Button";
import Label from "../Common/Label";
import RerenderText from "../Common/RerenderText";
import Star from "../Common/Star";
import {Card} from "../Common/CommonStyles";
import ChildRedux3 from "./ChildRedux3";
import {useDispatch, useSelector} from "react-redux";
import {toggleColor} from "../Common/colourSlice";
import styled from '@emotion/styled'
import ChildRedux1 from "./ChildRedux1";
import ChildRedux2 from "./ChildRedux2";
import Heart from "../Common/Heart";
import Triangle from "../Common/Triangle";
import Sun from "../Common/Sun";


const Container = styled.div`
  display: flex;
`

const ParentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export default function ParentRedux() {
    // const colour  = useSelector((state) => state.colour.value)
    const dispatch = useDispatch()

    return (
        <ParentContainer>
            <Card minWidth={"500px"}>
                <Sun colour={"#FFCE00FF"}/>
                <Label>Parent</Label>
                <Button onClick={() => dispatch(toggleColor())} colour={"#647df9"}>Update parent colour</Button>
                <RerenderText/>
            </Card>
            <Container>
                <ChildRedux1/>
                <ChildRedux2/>
                <ChildRedux3/>
            </Container>
        </ParentContainer>
    )
}
