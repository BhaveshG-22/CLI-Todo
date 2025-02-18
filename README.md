---

# 📝 TaskMaster CLI  
A simple and efficient **filesystem-based TODO manager** built using **Node.js**.  

🚀 **Developed as part of Harkirat’s cohort Assignment #2** with no AI assistance—just official docs and hands-on coding!  

---

## ✨ Features  
✅ Add a TODO  
✅ Delete a TODO  
✅ Mark a TODO as done  
✅ Persistent storage using JSON  
✅ Beautiful CLI UI with **Chalk & Commander**  
✅ Fully functional help menu  

---

## 📦 Installation  

Ensure you have **Node.js** installed. Then, clone this repository and install dependencies:  

```bash
git clone https://github.com/yourusername/taskmaster-cli.git  
cd taskmaster-cli  
npm install  
```

---

## 🚀 Usage  

### 📌 Add a Task  
```bash
node index.js add "Finish assignment"
```

### ✅ Mark a Task as Done  
```bash
node index.js done <taskID>
```

Example:  
```bash
node index.js done 1
```

### ❌ Delete a Task  
```bash
node index.js delete <taskID>
```

Example:  
```bash
node index.js delete 1
```

### 📜 Display All Tasks  
```bash
node index.js display
```

### ℹ️ Help Menu  
```bash
node index.js --help
```

---

## 🖼 Screenshots  

Include the following screenshots for better documentation:  

1. **Help Menu (`node index.js --help`)** - Showcases available commands.

![Screenshot 2025-02-18 at 6 40 58 AM](https://github.com/user-attachments/assets/80c9d021-69cd-4be7-bf76-773b91303ca6)

   
2. **Adding a Task (`node index.js add "task-name"`)** - Demonstrates how tasks are added.

![Screenshot 2025-02-18 at 6 43 01 AM](https://github.com/user-attachments/assets/15046cb7-3505-4fa8-ae2e-b8116c6fbf98)

  
3. **Displaying Tasks (`node index.js display`)** - Shows the task list in the formatted CLI UI.

![Screenshot 2025-02-18 at 6 41 31 AM](https://github.com/user-attachments/assets/e50410c4-5ff4-4a86-b3c5-085b51ab5a57)


4. **Marking a Task as Done (`node index.js done <taskID>`)** - Displays a task being marked as done.

![Screenshot 2025-02-18 at 6 44 57 AM](https://github.com/user-attachments/assets/2ffcfba8-d3e9-43e5-8fa0-081bd0293b38)

   
5. **Deleting a Task (`node index.js delete <taskID>`)** - Shows a task being deleted.

![Screenshot 2025-02-18 at 6 45 46 AM](https://github.com/user-attachments/assets/e2f43d40-4a15-4c9c-a9b6-98691724265a)



---

## 🛠 Tech Stack  
- **Node.js**  
- **Chalk** (for styling terminal output)  
- **Commander** (for command-line interface)  
- **File System (fs)** (for JSON-based storage)  

---

## 📂 Project Structure  
```
📦 taskmaster-cli  
 ┣ 📂 helpers/  
 ┃ ┣ 📜 display.js  
 ┃ ┣ 📜 taskManager.js  
 ┃ ┣ 📜 getSize.js  
 ┣ 📜 index.js  
 ┣ 📜 package.json  
 ┣ 📜 todos.json (Stores tasks)  
 ┗ 📜 README.md  
```

---

## 🤝 Contributions  
Feel free to fork and improve the tool! Open a PR if you have suggestions. 🚀  

---

## 📜 License  
This project is **open-source** under the **MIT License**.  

---
