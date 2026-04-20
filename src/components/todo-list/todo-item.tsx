import { Button } from "../ui/button";
import { Link } from "react-router";
import type { Todo } from "@/types";
import { useUpdateTodoMutation } from "@/hooks/quries/mutations/use-update-todo-mutation";
import { useDeleteTodoMutation } from "@/hooks/quries/mutations/use-delete-todo-mutation";
import { useTodoDataById } from "@/hooks/quries/use-todo-data-by-id";

export default function TodoItem({ id }: { id: string }) {
    const { data: todo } = useTodoDataById(id, "LIST")
    if (!todo) throw new Error("Todo Data Undefined")
    const { content, isDone } = todo;

    const { mutate: deleteTodo, isPending: isDeleteTodoPending } = useDeleteTodoMutation();
    const { mutate: updateTodo } = useUpdateTodoMutation();
    const handleDeleteClick = () => {
        deleteTodo(id)
    };

    const handleCheckBoxClick = () => {
        updateTodo({
            id,
            isDone: !isDone,
        })
    };


    return (
        <div className="flex items-center justify-between border p-2 rounded-[10px]">
            <div className="flex gap-5">
                <input type={"checkbox"} disabled={isDeleteTodoPending} checked={isDone} onClick={handleCheckBoxClick} />
                <Link to={`/todoList/${id}`}>
                    {content}
                </Link>
            </div>
            <Button onClick={handleDeleteClick} disabled={isDeleteTodoPending} variant={"destructive"}>삭제</Button>
        </div>
    )
}