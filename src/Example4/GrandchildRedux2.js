import Star from "../Common/Star";
import Label from "../Common/Label";
import RerenderText from "../Common/RerenderText";
import {Card} from "../Common/CommonStyles";
import {useDispatch, useSelector} from "react-redux";
import Button from "../Common/Button";
import {toggleColor} from "../Common/colourSlice";

export default function GrandchildRedux2() {


    return (
        <Card>
            <Label>Grandchild</Label>
            <RerenderText/>
        </Card>
    )
}
