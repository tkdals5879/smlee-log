import { Button } from "@/components/ui/button";
import Viewer from "@/components/ui/counter/viewer";
import Controller from "@/components/ui/counter/controller";

export default function CounterPage() {

    return (
        <div>
            <h1 className="text-2xl font-bold">Counter</h1>
            <Viewer />
            <Controller />
        </div>
    )
}