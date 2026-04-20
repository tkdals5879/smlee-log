import { API_URL } from "@/lib/constants";
import type { Todo } from "@/types";

export async function createTodo(content: string) {
  const response = await fetch(`${API_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content,
      isDone: false,
    }),
  });
  if (!response.ok) throw new Error("Create Todo Failed");

  const data: Todo = await response.json();
  return data;
}
