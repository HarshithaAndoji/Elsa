
---

## 🧑‍💻 Portfolio Website

A full-stack Portfolio Website built using **React.js** for the frontend and **Node.js with Express** for the backend. This project features a contact form that sends emails using **Nodemailer** via a Gmail SMTP server. Both frontend and backend are deployed on separate platforms, demonstrating full-stack deployment capability.

---

### 🚀 Tech Stack

#### Frontend:

* **React.js**
* **HTML5 & CSS3**
* **JavaScript (ES6+)**
* **Email.js (removed, using backend-based email now)**
* **GitHub Pages** (for deployment)

#### Backend:

* **Node.js**
* **Express.js**
* **Nodemailer**
* **dotenv**
* **Render.com** (for deployment)

---

### 🌐 Live Demo

* **Frontend**: [Your GitHub Pages Link](https://github.com/HarshithaAndoji/Elsa)
* **Backend**: [Render API Endpoint](https://elsa-rosn.onrender.com)

---

### 📬 Features

* Responsive portfolio layout
* Contact form that:

  * Validates user input
  * Sends data to Node.js backend
  * Sends an email to the portfolio owner's inbox using Nodemailer and Gmail
* Separate backend API hosted on Render

---

### ⚙️ How to Run Locally

#### Backend

```bash
git clone https://github.com/HarshithaAndoji/Elsa
cd your-backend-repo
npm install
```

Create a `.env` file and add:

```
EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=your_app_password
PORT=5000
```

Then run:

```bash
npm start
```

#### Frontend

```bash
git clone https://github.com/HarshithaAndoji/Elsa
cd your-frontend-repo
npm install
npm start
```

Make sure the frontend uses the correct backend URL in API calls is https://elsa-rosn.onrender.com

---

### 🚀 Deployment

#### Backend on Render

1. Create a new web service on [Render](https://render.com).
2. Connect your GitHub repo.
3. Set build command: `npm install`
4. Set start command: `node index.js` (or your main server file)
5. Set environment variables `EMAIL_USER` and `EMAIL_PASS` in the Render dashboard.

> You can also manually deploy with:
>
> ```bash
> npm run build
> npm run deploy
> ```

#### Frontend on GitHub Pages

1. Add `"homepage": "https://harshithaandoji.github.io/Elsa/"` in `package.json`.
2. Install `gh-pages`:

   ```bash
   npm install gh-pages --save-dev
   ```
3. Add these scripts to `package.json`:

   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
4. Deploy:

   ```bash
   npm run deploy
   ```

---

