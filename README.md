<!-- SWAGGER-DOC-START -->
<!-- Generator: Widdershins v4.0.1 -->

<h1 id="app-example">App example v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The app's API description

Base URLs:

<h1 id="app-example-app">app</h1>

## AuthorController_create

<a id="opIdAuthorController_create"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /author \
  -H 'Content-Type: application/json'

```

```http
POST /author HTTP/1.1

Content-Type: application/json

```

```javascript
const inputBody = '{
  "name": "John",
  "surname": "Doe",
  "email": "doe@example.com",
  "phoneNumber": "+1234567890"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/author',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /author`

*Create an author*

> Body parameter

```json
{
  "name": "John",
  "surname": "Doe",
  "email": "doe@example.com",
  "phoneNumber": "+1234567890"
}
```

<h3 id="authorcontroller_create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateAuthorDto](#schemacreateauthordto)|true|none|

<h3 id="authorcontroller_create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|The author has been successfully created|None|

<aside class="success">
This operation does not require authentication
</aside>

## AuthorController_findAll

<a id="opIdAuthorController_findAll"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /author

```

```http
GET /author HTTP/1.1

```

```javascript

fetch('/author',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /author`

*Find all authors or by using a filter*

<h3 id="authorcontroller_findall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|Search by author name|
|names|query|array[string]|false|Search by authors names|
|surname|query|string|false|Search by author surname|
|surnames|query|array[string]|false|Search by authors surnames|
|email|query|string|false|Search by author email|
|emails|query|array[string]|false|Search by authors emails|
|phoneNumber|query|string|false|Search by phone number|
|phoneNumbers|query|array[string]|false|Search by phone numbers|
|skip|query|number|false|Number of records to skip for pagination|
|take|query|number|false|Limit the number of records returned|

<h3 id="authorcontroller_findall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Return authors|None|

<aside class="success">
This operation does not require authentication
</aside>

## AuthorController_update

<a id="opIdAuthorController_update"></a>

> Code samples

```shell
# You can also use wget
curl -X PATCH /author/{id} \
  -H 'Content-Type: application/json'

```

```http
PATCH /author/{id} HTTP/1.1

Content-Type: application/json

```

```javascript
const inputBody = '{
  "name": "John",
  "surname": "Doe",
  "email": "doe@example.com",
  "phoneNumber": "+1234567890"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/author/{id}',
{
  method: 'PATCH',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PATCH /author/{id}`

*Update an author*

> Body parameter

```json
{
  "name": "John",
  "surname": "Doe",
  "email": "doe@example.com",
  "phoneNumber": "+1234567890"
}
```

<h3 id="authorcontroller_update-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Author ID|
|body|body|[UpdateAuthorDto](#schemaupdateauthordto)|true|none|

<h3 id="authorcontroller_update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The author has been successfully updated|None|

<aside class="success">
This operation does not require authentication
</aside>

## AuthorController_remove

<a id="opIdAuthorController_remove"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /author/{id}

```

```http
DELETE /author/{id} HTTP/1.1

```

```javascript

fetch('/author/{id}',
{
  method: 'DELETE'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /author/{id}`

*Delete an author*

<h3 id="authorcontroller_remove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Author ID|

<h3 id="authorcontroller_remove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The author has been successfully deleted|None|

<aside class="success">
This operation does not require authentication
</aside>

## BookController_create

<a id="opIdBookController_create"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /book \
  -H 'Content-Type: application/json'

```

```http
POST /book HTTP/1.1

Content-Type: application/json

```

```javascript
const inputBody = '{
  "name": "A Modern Utopia",
  "content": "A novel",
  "authorId": "123e4567-e89b-12d3-a456-426614174000"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/book',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /book`

*Create a new book*

> Body parameter

```json
{
  "name": "A Modern Utopia",
  "content": "A novel",
  "authorId": "123e4567-e89b-12d3-a456-426614174000"
}
```

<h3 id="bookcontroller_create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateBookDto](#schemacreatebookdto)|true|none|

<h3 id="bookcontroller_create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|The book has been successfully created|None|

<aside class="success">
This operation does not require authentication
</aside>

## BookController_findAll

<a id="opIdBookController_findAll"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /book

```

```http
GET /book HTTP/1.1

```

```javascript

fetch('/book',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /book`

*Finds all books or by using a filter*

<h3 id="bookcontroller_findall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|Search by title|
|names|query|array[string]|false|Search by titles|
|authorName|query|string|false|Search by author surname|
|authorNames|query|array[string]|false|Search by authors surnames|
|content|query|string|false|Search by book genre|
|contents|query|array[string]|false|Search by book genres|
|skip|query|number|false|Number of records to skip for pagination|
|take|query|number|false|Limit the number of records returned|

<h3 id="bookcontroller_findall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Return books|None|

<aside class="success">
This operation does not require authentication
</aside>

## BookController_update

<a id="opIdBookController_update"></a>

> Code samples

```shell
# You can also use wget
curl -X PATCH /book/{id} \
  -H 'Content-Type: application/json'

```

```http
PATCH /book/{id} HTTP/1.1

Content-Type: application/json

```

```javascript
const inputBody = '{
  "name": "The Hobbit",
  "content": "A novel",
  "authorId": "123e4567-e89b-12d3-a456-426614174000"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/book/{id}',
{
  method: 'PATCH',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PATCH /book/{id}`

*Update a book*

> Body parameter

```json
{
  "name": "The Hobbit",
  "content": "A novel",
  "authorId": "123e4567-e89b-12d3-a456-426614174000"
}
```

<h3 id="bookcontroller_update-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Book ID|
|body|body|[UpdateBookDto](#schemaupdatebookdto)|true|none|

<h3 id="bookcontroller_update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The book has been succesfully updated|None|

<aside class="success">
This operation does not require authentication
</aside>

## BookController_remove

<a id="opIdBookController_remove"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /book/{id}

```

```http
DELETE /book/{id} HTTP/1.1

```

```javascript

fetch('/book/{id}',
{
  method: 'DELETE'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /book/{id}`

*Delete a book*

<h3 id="bookcontroller_remove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Book ID|

<h3 id="bookcontroller_remove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The book has been successfully deleted.|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_CreateAuthorDto">CreateAuthorDto</h2>
<!-- backwards compatibility -->
<a id="schemacreateauthordto"></a>
<a id="schema_CreateAuthorDto"></a>
<a id="tocScreateauthordto"></a>
<a id="tocscreateauthordto"></a>

```json
{
  "name": "John",
  "surname": "Doe",
  "email": "doe@example.com",
  "phoneNumber": "+1234567890"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Author's name|
|surname|string|true|none|Author's surname|
|email|string|true|none|Author's email|
|phoneNumber|string|true|none|Author's phone number|

<h2 id="tocS_UpdateAuthorDto">UpdateAuthorDto</h2>
<!-- backwards compatibility -->
<a id="schemaupdateauthordto"></a>
<a id="schema_UpdateAuthorDto"></a>
<a id="tocSupdateauthordto"></a>
<a id="tocsupdateauthordto"></a>

```json
{
  "name": "John",
  "surname": "Doe",
  "email": "doe@example.com",
  "phoneNumber": "+1234567890"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Author's name|
|surname|string|false|none|Author's surname|
|email|string|false|none|Author's email|
|phoneNumber|string|false|none|Author's phone number|

<h2 id="tocS_CreateBookDto">CreateBookDto</h2>
<!-- backwards compatibility -->
<a id="schemacreatebookdto"></a>
<a id="schema_CreateBookDto"></a>
<a id="tocScreatebookdto"></a>
<a id="tocscreatebookdto"></a>

```json
{
  "name": "A Modern Utopia",
  "content": "A novel",
  "authorId": "123e4567-e89b-12d3-a456-426614174000"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Title of the book|
|content|string|true|none|Content of the book|
|authorId|string|true|none|Author ID|

<h2 id="tocS_UpdateBookDto">UpdateBookDto</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebookdto"></a>
<a id="schema_UpdateBookDto"></a>
<a id="tocSupdatebookdto"></a>
<a id="tocsupdatebookdto"></a>

```json
{
  "name": "The Hobbit",
  "content": "A novel",
  "authorId": "123e4567-e89b-12d3-a456-426614174000"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Title of the book|
|content|string|false|none|Description of the book|
|authorId|string|false|none|Description of the book|


<!-- SWAGGER-DOC-END -->