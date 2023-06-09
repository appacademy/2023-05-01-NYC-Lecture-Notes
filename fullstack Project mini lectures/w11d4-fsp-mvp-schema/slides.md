## W11D4 MVPs and Database Schema

---

## Main Points
- How to set up a repo and include the mvps
- Everyone's repo should be, on the top level, a rails app. Your rails app should not be under a directory.
- Creating design documents for MVP List and Database Schema

---

## MVP (Minimum Viable Product)

+ The MVP of your project should be a full-stack app, including:
  + Hosting on Render
  + User Authentication
  + Production README
  + 4 others from the MVP list (total of 7)
---

### MVP List
+ The order you plan on implementing your features 
  - with detailed sub-points!
+ Include expected time to implement. 
  - Be generous with the time estimates!
+ One feature must be a full CRUD cycle
+ 2 days for major features (posts, comments, users, etc)
+ 1 day for minor features (likes, follows, profiles, etc)
+ Include bonus (stretch) features that you will implement given enough time
---

### Repo Wiki setup and MVP Demo
+ [BlueBird Sample Wiki](https://github.com/appacademy/bluebird/wiki)

---

### Questions

---

## Database Schema - What information?
1. Tables
2. Names of Columns and data types 
3. Validations and indices
4. Standard vs. Joins Tables

---

## Style
- schema is written in a table format
- table name's are `back_ticked`
- table header column names are **bolded**
- columns names are lowercased and snaked_cased and back_ticked

---

## `users`
column name     | data type | details
----------------|-----------|-----------------------
`id `             | integer   | not null, primary key
`username  `      | string    | not null, indexed, unique
`password_digest` | string    | not null
`session_token`   | string    | not null, indexed, unique

---

## Where does this go?
- In the repo for your FSP
- Go to Wiki tab
- Create a main page
- Create schema and mvp pages
- Paste in your markdown

---

## Schema Demo
- [Markdown Table Generator](https://www.tablesgenerator.com/markdown_tables)
- [BlueBird Wiki](https://github.com/appacademy/bluebird/wiki)

---

## One Last Tip
### ActiveStorage is coming
- No image_urls saved in database
- But we do need them on the frontend

---

### Due Date
Friday W11D5
* rails app
* github repo 
* add PA as collaborator
* MVP list
* Schema tables written in markdown (use editor!)
* uploaded to your project repo's wiki page
* [markdown-table-generator](https://www.tablesgenerator.com/markdown_tables)
* [markdown-cheatsheet](https://www.markdownguide.org/cheat-sheet/)
* [bluebird](https://github.com/appacademy/bluebird/wiki)
