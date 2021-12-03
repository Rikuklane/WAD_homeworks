# WAD_homeworks
Repository for Web Application Development homeworks.

## Project info

### Team members
 - Richard Kuklane
 - Georg Šumailov
 - Andre Viibur

### Homework 1
* https://courses.cs.ut.ee/LTAT.05.004/2021_fall/uploads/Main/Homework_1.pdf
* Deadline: 26.sept

### Homework 2
* https://courses.cs.ut.ee/LTAT.05.004/2021_fall/uploads/Main/Homework_2.pdf
* Deadline: 24.okt
* ![JSON validation proof](https://user-images.githubusercontent.com/73464092/138440260-fadf2e9b-8e55-4adb-bbe5-f6f2049328a0.png)

### Homework 3
* https://courses.cs.ut.ee/LTAT.05.004/2021_fall/uploads/Main/Homework_3.pdf
* Deadline: 21.nov

### Homework 4
* https://courses.cs.ut.ee/LTAT.05.004/2021_fall/uploads/Main/Homework_4.pdf
* Deadline: 11.dec

## DB import
* Open the pgAdmin tool
* Right-click on Databases, then, Create -> Database (name it "wad" for example)
* Copy ```dbexportwad.pgsql``` from project repository to your PostgreSQL bin folder (usually it is ```C:\Program Files\PostgreSQL\14\bin```)
* Open CMD as an admin and navigate to your PostgreSQL bin folder
* Type ```psql -U postgres wad < dbexportwad.pgsql```
* Type in the password (the one specified during pgAdmin installation)
* All done!


## Project setup
```
npm install
```
### Compiles and hot-reloads for development
```
npm run serve
```
### Compiles and minifies for production
```
npm run build
```
### Lints and fixes files
```
npm run lint
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
