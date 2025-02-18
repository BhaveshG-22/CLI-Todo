import fs from "fs/promises";
import chalk from "chalk"
import chalkTable from "chalk-table"

const options = {
    leftPad: 10,
    columns: [
        { field: "id", name: chalk.cyan("ID") },
        { field: "task", name: chalk.magenta("Task") },
        { field: "done", name: chalk.green("Done") },
    ]
};

export const display = async () => {
    try {
        let taskData = await fs.readFile('./todos.json', 'utf8')
        if (taskData) { taskData = JSON.parse(taskData).todos }
        const table = chalkTable(options, taskData ? taskData : []);
        console.log(table);
    } catch (error) {
        console.log(error);

    }
}

export const ListEmpty = async () => {
    try {

    } catch (error) {
        console.log(error);

    }
}

