# 🗞️ React Native News App

A simple and modern **React Native News App** that fetches and displays news articles. This app demonstrates best practices in search, sort, and filter features using **debounced queries**, clean UI components, and responsive design.

---

## ✨ Features

- 📜 **News List Screen**: Displays a list of articles with title, author, and published date.
- 🔍 **Search with Debounce**: Users can search for news articles. API requests are only triggered **500ms after** the user stops typing, improving performance and reducing API load.
- 🔽 **Sorting**: Users can sort articles by:
  - Published Date
  - Author
  - Title
- 📅 **Date Range Filtering**: Filter news based on a selected date range.
- 📱 **Responsive Design**: Optimized for mobile viewports with scrollable content.

---

## 🧠 How It Works

- **Debounced Search**: Using a debounce hook or utility, the app waits for 500 milliseconds after the user stops typing before sending the API request.
- **Sorting**: Articles can be sorted using dropdown or toggle options.
- **Filtering**: A date picker or date range modal is used to filter articles by publish date.
- **Data Fetching**: News articles are fetched from a REST API (or GraphQL if integrated), filtered, sorted, and displayed in a FlatList.

---

## 🛠️ Tech Stack

- **React Native**
- **TypeScript** (optional)
- **Axios**
- **React Navigation**
- **Debounce Utility** (e.g., lodash.debounce or custom hook)
- **Date Picker Library** (e.g., `@react-native-community/datetimepicker`)
- **React Query** for state management

---

## 📸 App Screenshots

> 📷 Add your screenshots to a `screenshots/` folder in the root and include them like below:

### News List with Search
![NewsList](https://github.com/user-attachments/assets/f9ee11c3-0536-47e7-acb2-310f52245f3d)

### Date Filter Modal
![FilterModal](https://github.com/user-attachments/assets/e5417b50-aac8-403c-97f4-7bc61250ff88)

### Sorted by Author
![SortModal](https://github.com/user-attachments/assets/328f0c97-d7e2-4b26-a6d0-f0fc7f31035f)

### Video Demo 
https://drive.google.com/file/d/1xSK3Gh-lMQjJnwTdrdZAmPX5fCNyAqA7/view?usp=sharing
---

## 📦 Installation

```bash
git clone https://github.com/MuhamedGheeta/News_App_Task.git
cd News_App_Tas
npm install
# or
yarn install

## 📦 create .env file in project root
put 
API_BASE_URL='https://newsapi.org/v2/everything'
API_KEY='db9437fd400444749a9937e24bf957fa'
------------
run app
