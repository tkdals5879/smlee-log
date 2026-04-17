import { useCount } from "@/store/count";

export default function Viewer() {
    const count = useCount();

    return (
        <div>
            <p>{count}</p>
        </div>
    )
}