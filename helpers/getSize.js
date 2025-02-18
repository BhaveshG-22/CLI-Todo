import fs from "fs/promises";


export const size = async () => {
    try {
        const data = await fs.readFile('./todos.json', 'utf8');
        if (!data) return 1;
        const jsonData = JSON.parse(data)
        return jsonData.todos.length + 1
    }
    catch (err) {
        console.error(err);
        return 1;
    }


}