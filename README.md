# codeCanvas

Convert wireframes and images to React code with AI-powered precision.

[![GitHub stars](https://img.shields.io/github/stars/Anilkumarbandaru/codeCanvas)](https://github.com/Anilkumarbandaru/codeCanvas/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/Anilkumarbandaru/codeCanvas)](https://github.com/Anilkumarbandaru/codeCanvas/issues)

## 📋 Overview

codeCanvas is an innovative tool that transforms design wireframes and images into production-ready React code. Using advanced AI technologies, it analyzes visual inputs and generates clean, responsive components built with Next.js and styled with Tailwind CSS.

![codeCanvas](https://github.com/user-attachments/assets/ed11ee3a-5634-454c-af7e-8e664ff04e12)





## ✨ Features

- **Image-to-Code Conversion**: Upload wireframes, mockups, or UI screenshots and get React components in seconds
- **Next.js Integration**: Seamlessly works with Next.js framework for optimal performance
- **Tailwind Styling**: Generated components use Tailwind CSS for beautiful, responsive designs
- **Component Customization**: Edit and refine AI-generated components directly in the browser
- **Project Management**: Save, organize, and track your design-to-code conversions
- **Version History**: Access previous versions of your generated components
- **User Authentication**: Secure Firebase authentication system
- **Cloud Storage**: Store your projects and designs in the cloud
- **Responsive Design**: All generated code is mobile-friendly and responsive

## 🚀 Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: Neon DB (Postgres)
- **Authentication**: Firebase Auth
- **Storage**: Firebase Storage
- **Deployment**: Vercel (recommended)

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/Anilkumarbandaru/codeCanvas.git

# Navigate to the project directory
cd codeCanvas

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your Firebase and Neon DB credentials to .env.local

# Run the development server
npm run dev
```
## 💻 Environment Variables
- Create a .env.local file with the following variables:
  
  ```bash
  NEXT_PUBLIC_FIREBASE_API_KEY
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
  NEXT_PUBLIC_FIREBASE_PROJECT_ID
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
  NEXT_PUBLIC_FIREBASE_APP_ID
  NEXT_PUBLIC_FIREBASE_MESURMENT_ID

  #Neon DB
  DATABASE_URL

  #Open AI API Key
  OPENROUTER_AI_API_KEY
  ```

## 📱 Usage

- Upload Design: Upload your wireframe or UI design image
- Generate Code: Click "Generate" to transform your design into React code
- Customize: Edit the generated components as needed
- Export: Cpoy the code or save it to your projects
- Implement: Integrate the components into your Next.js & React application

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

- Fork the repository
- Create your feature branch
  
  ```bash
  git checkout -b feature/amazing-feature
  ```
- Commit your changes

  ```bash
  git commit -m 'Add some amazing feature'
  ```

- Push to the branch
  
  ```bash
  git push origin feature/amazing-feature
  ```

- Open a Pull Request

## 📄 License

MIT License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

Anil Kumar Bandaru

- [Email](anilkumarbandaru98@gmail.com)
- [Twitter](https://x.com/AnilKumarb98)
- [LinkedIn](https://www.linkedin.com/in/bandaru-anil-kumar)
- [Website]()
- [Project](https://code-canvas-ak.vercel.app/)
