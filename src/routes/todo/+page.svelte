<script lang="ts">
	let tasks: string[] = $state([]);

	function addTask(event: SubmitEvent): void {
		event.preventDefault();
		const form = event.target as HTMLFormElement;
		const taskInput = form.task as HTMLInputElement;
		const task = taskInput.value.trim();

		if (task) {
			tasks.push(task); // Ajout de la tâche
			form.reset();
		}
	}

	function removeTask(index: number): void {
		tasks.splice(index, 1);
	}
</script>

<h1>TODO List</h1>

<form onsubmit={addTask}>
	<input type="text" name="task" placeholder="Nouvelle tâche..." required />
	<button type="submit">Ajouter</button>
</form>

<ul>
	{#each tasks as task, index}
		<li>
			{task}
			<button onclick={() => removeTask(index)}>Supprimer</button>
		</li>
	{/each}
</ul>
