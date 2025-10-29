# HNG13_TASK2-React

A React project created for HNG 13 Task 2.

## 🚀 Project Overview

This project is a frontend application built with React (and any supporting libraries) that fulfils the second task in the HNG 13 stream. The codebase uses modern tooling and is structured for clarity and maintainability.

## 🧰 Tech Stack

- React 19  
- JavaScript or TypeScript (whichever you used)  
- CSS or styled-components or whichever styling approach  
- Any other tooling your repo uses (e.g., ESLint, Prettier, React Router)  
- Configuration files: `package.json`, `.gitignore`, etc.  
- Directory structure:
    ``` bash
    public/
    ├── file.svg
    ├── globe.svg
    ├── next.svg
    ├── vercel.svg
    └── window.svg
    src/
        ├── actions/
            ├── auth/
                └── auth.ts
            └── ticketing/
                └── ticketing.ts
        ├── app/
            ├── (dashboardy)/
                ├── dashboard/
                    └── page.tsx
                ├── ticket-management/
                    └── page.tsx
                ├── error.tsx
                └── layout.tsx
            ├── login/
                └── page.tsx
            ├── sign-up/
                └── page.tsx
            ├── favicon.ico
            ├── globals.css
            ├── layout.tsx
            └── page.tsx
        ├── components/
            ├── auth/
                ├── login-form.tsx
                └── signup-form.tsx
            ├── Header/
                └── HeaderHome.tsx
            ├── home/
                ├── About.tsx
                └── Hero.tsx
            ├── ticket-management/
                ├── CreateTicketDialog.tsx
                ├── CreateTicketForm.tsx
                ├── DeleteTicketDialog.tsx
                ├── EditTicketDialog.tsx
                ├── EditTicketForm.tsx
                ├── SearchBar.tsx
                ├── StatusBadge.tsx
                ├── TicketCard.tsx
                └── TicketGrid.tsx
            ├── ui/
                ├── badge.tsx
                ├── breadcrumb.tsx
                ├── button.tsx
                ├── card.tsx
                ├── dialog.tsx
                ├── field.tsx
                ├── input-group.tsx
                ├── input.tsx
                ├── label.tsx
                ├── select.tsx
                ├── separator.tsx
                ├── sheet.tsx
                ├── sidebar.tsx
                ├── skeleton.tsx
                ├── textarea.tsx
                └── tooltip.tsx
            ├── universal/
                ├── BreadCrumb.tsx
                └── Footer.tsx
            └── app-sidebar.tsx
        ├── hooks/
            ├── use-mobile.ts
            └── use-monitorSidebar.tsx
        ├── lib/
            ├── validations/
                ├── auth.ts
                └── ticket.ts
            ├── toasts.tsx
            └── utils.ts
        ├── utils/
            └── supabase/
                ├── client.ts
                ├── middleware.ts
                └── server.ts
        ├── icons.tsx
        └── proxy.ts
    .gitignore
    components.json
    eslint.config.mjs
    next.config.ts
    package-lock.json
    package.json
    postcss.config.mjs
    README.md
    tsconfig.json
    ```
  
## 📦 Installation

1. Clone the repository  
 ```bash
 git clone https://github.com/tolu1123/HNG13_TASK2-React-.git
 cd HNG13_TASK2-React-
```
2. Install dependencies
   ``` bash
   npm install
   ```
3. 📦 Build & Production
  To build the project for production:
  ``` bash
  npm run build
  ```
4. Local development
  ``` bash
  npm run dev
  ```

  Thank you for checking out this project. Happy coding! 🎉
