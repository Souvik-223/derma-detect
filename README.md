# DermaDetect: AI-Powered Skin Lesion Detection



**Early detection saves lives. SkinScan empowers you to take control of your skin health.**

SkinScan is a cutting-edge web application that leverages artificial intelligence to assist in the early detection of skin lesions, including potential indicators of skin cancer. Our platform combines a user-friendly interface with a robust back-end powered by deep learning algorithms, providing a convenient and accessible way to monitor your skin for changes.

![SkinScan Screenshot 1](link_to_screenshot1.png) *(Replace with actual screenshot)*
![SkinScan Screenshot 2](link_to_screenshot2.png) *(Replace with actual screenshot)*

---

## 🚀 Features

- **🧠 AI-Powered Analysis:** Upload an image of a skin lesion, and our deep learning model will analyze it, providing a risk assessment.
- **🎨 User-Friendly Interface:** Intuitive and easy-to-navigate, making skin health monitoring accessible to everyone.
- **📸 Image Upload:** Securely upload images from your device for analysis.
- **📊 Risk Assessment:** Receive a clear and concise risk assessment based on AI's analysis.
- **👨‍⚕️  Consultation Recommendations:** Guidance on next steps, including recommendations to consult with a dermatologist.
- **📈  Progress Tracking:** Track changes in your skin over time with a personalized history.

---

## 🛠 Tech Stack

### **Frontend**
- ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) **Next.js** - React framework for fast and interactive UI.

### **Backend**
- ![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white) **Flask** - Python web framework for handling API requests and data processing.

### **Machine Learning**
- ![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white) **Python** - Core language for model development.
- ![Jupyter Notebook](https://img.shields.io/badge/Jupyter-F37626?style=for-the-badge&logo=jupyter&logoColor=white) **Jupyter Notebook** - Used for model training and experimentation.

### **Cloud Hosting **
- ![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white) **AWS / Google Cloud / Heroku** *(If deployed)*

### **Database **
- ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white) **PostgreSQL / MySQL / MongoDB** *(If using a database)*

![Tech Stack Diagram](link_to_tech_stack_diagram.png) *(Optional - A visual representation of the tech stack)*

---

## 📥 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Souvik-223/derma-detect.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd dermadetect
   ```

3. **Install dependencies:**

   ```bash
   pip install -r requirements.txt  # For backend
   npm install --legacy-peer-deps # For frontend 
   ```

4. **Run the application:**

   ```bash
   flask run  # Starts the backend
   npm run dev  # Starts the frontend
   ```

5. **Access the app:**

   Open `http://localhost:3000` in your browser.

---

## 🎯 Usage

1. Upload an image of a skin lesion.
2. Wait for AI analysis.
3. View the risk assessment.
4.  Get recommendations for a dermatologist consultation.
5.  Track skin changes over time.

---

## 🤖 Model Training

- The AI model is trained using a dataset of skin lesion images.
- Preprocessing includes image augmentation and normalization.
- The model is built using **Convolutional Neural Networks (CNNs)**.
- Evaluation metrics include accuracy, precision, recall, and F1-score.

*(More details about dataset and training process can be added if needed.)*

---

## 🤝 Contributing

We welcome contributions! If you'd like to improve SkinScan:

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Open a pull request.

---

## ⚠️ Disclaimer

**SkinScan is not a substitute for professional medical diagnosis.** Always consult a dermatologist for a comprehensive skin assessment.

---

## 📜 License

This project is licensed under the **MIT License**. See the `LICENSE` file for details.

---

