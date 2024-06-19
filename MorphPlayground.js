import {useEffect, useState} from "react";
import {useSpring,animated, config } from "react-spring";

const moonPath =
    "M18 27.5C18 42.6878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 18 12.3122 18 27.5Z";
const circlePath =
    "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";


export function MorphPlayground() {
    const [active, setActive] = useState(false);
    const { x } = useSpring({ config: { duration: 800 }, x: active ? 1 : 0 });


    return (
        <div className="App">
            <svg
                viewBox="0 0 210 297"
                height="250px"
                width="250px"
                onClick={() => setActive(!active)}
            >
                <animated.path
                    d={x.to({
                        range: [0, 1],
                        output: [
                            moonPath,
                            circlePath
                        ],
                    })}
                />
            </svg>
        </div> )
}