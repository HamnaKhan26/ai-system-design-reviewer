import { useState } from "react";

interface Props {
    onSubmit: (designDescription: string) => void;
}

export default function DesignInput({onSubmit}: Props) {
    const [text, setText] = useState("");

    return (
        <div>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter your system design description here..."
                rows={10}
                style={{ width: "100%" }}
            />
            <button onClick={() => onSubmit(text)}>Review Design</button>
        </div>
    )
}