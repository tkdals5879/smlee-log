import { useTodoDataById } from "@/hooks/quries/use-todo-data-by-id";
import { useParams } from "react-router"

export default function TodoDetailPage() {

    const params = useParams();
    const id = params.id;

    const { data, isLoading, error } = useTodoDataById(String(id), "DETAIL");

    if (isLoading) return <div>loading...</div>
    if (error || !data) return <div>error!</div>

    return <div>{data.content}</div>
}