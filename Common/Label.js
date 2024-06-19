import {LabelContainer, Txt} from "./CommonStyles";

export default function Label({children}) {
    return (
        <LabelContainer>
            <Txt>{children}</Txt>
        </LabelContainer>
    )
}