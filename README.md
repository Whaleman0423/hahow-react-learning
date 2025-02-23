# React Hahow 課程學習記錄

這是一個用於記錄 React 學習過程的 Repository，包含課程範例程式碼及作業。


## 相關指令

### 安裝 expo
```
npm install -g expo-cli
```

若有權限限制，可在前面添加 sudo 或執行以下 (Mac)
```
sudo chown -R $(whoami) $(npm config get cache)
```

### 建制專案
```
expo init <project_name, ex. first_project>
<!-- or -->
npx create-expo-app --template blank <project_name, ex. first_project>
```

### 運行專案
1. 進入專案資料夾
```
cd <folder_name, ex. 2-1, hw/hw_2-1...>
```

2. 安裝專案套件
```
npm install
```

3. 運行專案
```
npm start
<!-- or -->
npx expo start
```


