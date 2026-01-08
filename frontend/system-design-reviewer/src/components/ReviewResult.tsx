interface Props {
  result: Record<string, string> | null;
}

export default function ReviewResult({result}: Props) {
    if(!result) return null;

    return (
        <div
            style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
                {Object.entries(result).map(([reviewer, text]) => (
                    <div key={reviewer}>
                        <h3>{reviewer}</h3>
                        <p>{text}</p>
                    </div>
                ))}
            </div>
    );
}