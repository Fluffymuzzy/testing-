# TESTING
## Installation
Cloning a repository
```bash
git clone https://github.com/Fluffymuzzy/testing-
```
Go to the project folder
```sh
cd testing-
```
Run
```sh
npm i
```
Use Docker Compose to build and run containers
```sh
docker-compose up --build
```
The --build flag ensures that the images will be rebuilt. If you want to run containers in the background, add -d
```sh
docker-compose up --build -d
```
Run 
```sh
npx prisma generate
```
After
```sh
npx prisma migrate dev --name init
```
## Important
An error may occur

If you're using `windows`, add:
```
generator client {
  provider = "prisma-client-js"
  binaryTargets = ["native", "debian-openssl-3.0.x"]
}
```

to `schema.prisma.ts` file

If you're using `MAC`, add:
```
generator client {
  provider = "prisma-client-js"
  binaryTargets = ["native", "debian-openssl-3.0.x", "linux-arm64-openssl-3.0.x"]
}
```
And rebuild project: 
```sh
docker-compose up --build -d
```
To populate the database with the initial data, run the following command:
```sh
docker-compose exec app npm run seed
```
### Pagination
To test pagination, add the `skip` and `take` parameters to the request URL:

- `skip` specifies the number of records to skip from the beginning of the list.
- `take` specifies the maximum number of records to return in the response.

Example URL to retrieve books with pagination:

http://localhost:3000/book?skip=0&take=5

Example URL to retrieve authors with pagination:

http://localhost:3000/author?skip=0&take=5

You can also combine pagination and filtering in one query:

http://localhost:3000/book?content=A novel&skip=0&take=2

### Filters
To filter books or authors by specific fields, add filtering parameters to the request URL. You can filter by `name`, `content`, and `authorName`.

Example URL to filter a books by content:

http://localhost:3000/book?content=A novel

OR

http://localhost:3000/book?contents[]=A novel&contents[]=A high-fantasy epic

To filter by author name:

http://localhost:3000/author?name=John

OR

http://localhost:3000/author?names[]=John&names[]=Mark

You can filter the author by `name`, `surname`, `phoneNumber`, `email` or array of fields. You can also add pagination to the query, following the example above, as with books.

