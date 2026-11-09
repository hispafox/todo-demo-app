# Todo Demo

This repository contains a simple full-stack todo application demo built with:

- .NET 10 + ASP.NET Core Web API + SQLite
- React + Vite + TypeScript

## Features

- View all tasks
- Create a new task
- Edit an existing task
- Toggle completion state
- Delete tasks
- Persistent storage in SQLite

## Run locally

### Backend

```bash
dotnet restore
cd TodoApi
dotnet run
```

The API runs on `http://localhost:5041`.

### Frontend

```bash
cd todo-ui
npm install
npm run dev
```

The UI runs on `http://localhost:5173` and calls the backend API.

## Project structure

```text
TodoApi/
todo-ui/
docs/
```

## Notes

The database file is created automatically in the backend project folder for the demo environment.
