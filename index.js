import { addToJSON, deleteTask, taskDone } from "./helpers/taskManager.js";
import { Command } from 'commander';
import { size } from "./helpers/getSize.js";
import { display } from "./helpers/display.js";



const program = new Command();

program
    .name('counter')
    .description('CLI to manage ToDo')
    .version('0.8.0');

program.command('add')
    .description('Add a ToDo')
    .argument('<task>', 'Task Description')
    .action(async (task) => {
        try {
            // Read the JSON file asynchronously
            addToJSON({
                "todos": [
                    {
                        "id": await size(),
                        "task": task,
                        "done": false
                    }
                ]
            }
            )
        } catch (error) {
            console.log(error);

        }
    });

program.command('done')
    .description('Mark Task Done')
    .argument('<taskID>', 'Task ID')
    .action(async (taskID) => {
        try {
            taskDone(taskID)
        } catch (error) {
            console.log(error);

        }
    });

program.command('delete')
    .description('Deletes a task')
    .argument('<taskID>', 'Task ID')
    .action(async (taskID) => {
        try {
            deleteTask(taskID)
        } catch (error) {
            console.log(error);

        }
    });


program.command('display')
    .description('Displays all task')
    .action(async () => {
        try {
            await display()
        } catch (error) {
            console.log(error);

        }
    });


program.parse();


