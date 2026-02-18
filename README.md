# Books API (Exercises Solution)

## Implemented Features
1. Query parameter filtering (author & year)
2. Year validation middleware
3. Pagination (?page=1&limit=10)
4. Authors resource with full CRUD
5. Search endpoint (/api/search?q=keyword)

## Installation
```bash
npm install
npm start
```

## Endpoints

### Books
- GET /api/books?author=martin&year=2008&page=1&limit=5
- POST /api/books
- PUT /api/books/:id
- DELETE /api/books/:id

### Authors
- GET /api/authors
- POST /api/authors
- PUT /api/authors/:id
- DELETE /api/authors/:id

### Search
- GET /api/search?q=code
