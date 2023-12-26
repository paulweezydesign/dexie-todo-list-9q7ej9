import { db } from './db';

export async function populate() {
  const todoListId = await db.todoLists.add({
    title: 'To Do Today',
  });
  await db.todoItems.bulkAdd([
    {
      todoListId,
      title: 'do some stuff',
    },
    {
      todoListId,
      title: 'do more stuff',
    },
    {
      todoListId,
      title: 'Take a nap',
    },
  ]);
}
