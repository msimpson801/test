import { useSelector, useDispatch } from 'react-redux'
import {toggleColor} from "../Common/colourSlice";
import {ParentContainer} from "../Common/CommonStyles";
import ParentRedux from "./ParentRedux";

export default function ReduxPlayground() {

    return (
        <>
            {/*<ParentContainer>*/}
                <ParentRedux/>
            {/*</ParentContainer>*/}
        </>
    )
}
