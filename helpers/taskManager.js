import fs from "fs/promises";
import { display } from "./display.js";
import chalk from "chalk";

const log = console.log;

export const addToJSON = async (newTaskObj) => {

    let data = await fs.readFile('./todos.json', 'utf8')
    let newTaskToAdd = newTaskObj.todos[0]
    if (data.length == 0) {
        newTaskObj = JSON.stringify(newTaskObj, null, 2);
        await fs.writeFile("./todos.json", newTaskObj)
    } else {
        try {

            let updatedJson = JSON.parse(data)
            updatedJson.todos[updatedJson.todos.length] = newTaskToAdd
            updatedJson = JSON.stringify(updatedJson, null, 2);
            await fs.writeFile("./todos.json", updatedJson)
        } catch (error) {
            console.log(error);

        }
    }

    console.log(chalk.green('✅ Task Added Successfully!! --> %s  ✅'), newTaskToAdd.task);
    await display()
}


export const taskDone = async (taskID) => {
    let data = await fs.readFile('./todos.json', 'utf8')
    data = JSON.parse(data)

    data = data.todos
    if (taskID > data.length) {
        console.log(chalk.red('🚧 Invalid Request , %s does not exists 🚧'),taskID);

        await display()
        return
    }

    let updatedTask
    let newData = data.map((e) => {
        if (e.id == taskID) {

            e.done = true
            updatedTask = e.task

        }
        return e

    })

    newData = { "todos": newData }
    newData = JSON.stringify(newData, null, 2);
    await fs.writeFile("./todos.json", newData)

    console.log(chalk.yellowBright('🟡 Task Completed--> %s  🟡'), updatedTask);
    await display()
}

export const deleteTask = async (taskID) => {
    let data = await fs.readFile('./todos.json', 'utf8')
    data = JSON.parse(data)


    data = data.todos

    if (taskID > data.length) {
        console.log(chalk.red('🚧 Invalid Request , %s does not exists 🚧'),taskID);

        await display()
        return
    }

    let newID = 1;
    let deletedTask

    let newData = await data.map((e) => {
        if (e.id != taskID) {
            let newEntry = { id: newID++, task: e.task, done: e.done }
            return newEntry
        } else {
            deletedTask = e.task
            return {}
        }
    })


    if (newData.length <= 1) {
        log(`
    ${chalk.red("🛑 List Empty 🛑")}
    ${chalk.green("✅ Please add Tasks by : add <Task> ✅")}
    `);
    } else {
        console.log(chalk.red('🛑 Task Deleted--> %s  🛑'), deletedTask);
    }

    newData = { "todos": newData }
    newData = JSON.stringify(newData, null, 2);
    newData = newData.replace("{},", "")
    newData = newData.replace("{}", "")
    newData = newData.replace(`,
{}`, "")
    await fs.writeFile("./todos.json", newData)
    await display()
}

