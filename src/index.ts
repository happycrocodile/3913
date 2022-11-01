import React from "react";
import _ from "lodash";

type Value = number | "auto" | "inherit" | "initial" | "unset";

interface Props extends React.HTMLAttributes<HTMLElement> {
    style?: React.CSSProperties,
    bottom?: Value,
    start?: Value,
    end?: Value,
    top?: Value
};

interface Style {
    marginTop: Value | null,
    marginLeft: Value | null,
    marginBottom: Value | null,
    marginRight: Value | null
};

export const Margin: React.FC<Props> = ({ bottom, top, start, end, children, style, ...props }) => {

    let size: number = 10;

    let index: Style = {
        marginBottom: bottom ? (typeof bottom === "number" ? bottom * size : bottom) : null,
        marginTop: top ? (typeof top === "number" ? top * size : top) : null,
        marginLeft: start ? (typeof start === "number" ? start * size : start) : null,
        marginRight: end ? (typeof end === "number" ? end * size : end) : null
    };

    if (style) Object.assign(index, style);

    return React.createElement("div", { ...props, style: index }, children);
}

export default Margin;
