import {useRenderCount} from "./useRenderCount";
import {AnimatedText} from "./CommonStyles";
export default function RerenderText() {
    const renderCount = useRenderCount()

    return <AnimatedText key={renderCount}>Rendering</AnimatedText>
}

