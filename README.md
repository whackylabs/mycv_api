# API

### Register
Endpoint:
**POST /register**

Request:
```json
{
    "email": "chunkylover53@aol.com",
    "password": "chunkylover53"
}
```

Response:
```json
{
    "id": "6589a2a9950300a4f9ce59f9",
    "email": "chunkylover53@aol.com"
}
```

### Login
Endpoint:
**POST /login**

Request:
```json
{
    "email": "chunkylover53@aol.com",
    "password": "chunkylover53"
}
```

Response:
```json
{
    "id": "6589a2a9950300a4f9ce59f9",
    "email": "chunkylover53@aol.com",
    "token": "..."
}
```

### Forgot password
Endpoint:

**POST /reset_password**

Request:
```json
{
    "email": "chunkylover53@aol.com"
}
```

Response:

*200 - OK*

### Create a resume

**POST /mycv**

Request:

*Authorization: Bearer <token>*
```json
{
    "title": "Homer Simpson"
}
```

Response:
```json
{
    "userId": "6589a2a9950300a4f9ce59f9",
    "title": "Homer Simpson",
    "_id": "6589a55b950300a4f9ce5a02",
    "sections": [],
    "createdAt": "2023-12-25T15:52:59.778Z",
    "updatedAt": "2023-12-25T15:52:59.778Z",
    "__v": 0
}
```

### Get the list of resumes
Endpoint:

**GET /mycv**

Request:

*Authorization: Bearer <token>*

Response:
```json
[
    "6589a446950300a4f9ce59fd",
    "6589a4b5950300a4f9ce5a00",
    "6589a55b950300a4f9ce5a02"
]
```

### Edit resume
Endpoint:

**PUT mycv/:id**

Request:

*Authorization: Bearer <token>*
```json
{
  "title": "Homer Simpson",
  "subtitle": "Technical Supervisor",
  "contact": {
    "email": "chunkylover53@aol.com",
    "phone": "(636) 555 3226",
    "website": "http://www.homerswebpage.com/",
    "location": "742 Evergreen Terrace. Springfield"
  },
  "sections": [{
      "title": "Experience",
      "items": [
        {
          "title": "Homer J Simpson",
          "subtitle": "Springfield Nuclear Power Plant",
          "location": "Springfield, USA",
          "startDate": "1989",
          "endDate": "Present",
          "desc": "Strengthened safety procedures that resulted in 75% fewer accidents."
        }
      ]
    }, {
      "title": "Education",
      "items": [
        {
          "subtitle": "Springfield High School",
          "location": "Springfield, USA",
          "desc": "S Diploma College Prep"
        }
      ]
    }, {
      "title": "Awards",
      "items": [
        {
          "subtitle": "Montgomery Burns Award for Outstanding Service in the Field of Excellence",
          "startDate": "1992"
        }
      ]
    }
  ]
}
```
Response:
```json
{
    "_id": "6589a446950300a4f9ce59fd",
    "userId": "6589a2a9950300a4f9ce59f9",
    "title": "Homer Simpson",
    "sections": [
        {
            "title": "Experience",
            "items": [
                {
                    "title": "Homer J Simpson",
                    "subtitle": "Springfield Nuclear Power Plant",
                    "location": "Springfield, USA",
                    "startDate": "1989",
                    "endDate": "Present",
                    "desc": "Strengthened safety procedures that resulted in 75% fewer accidents.",
                    "_id": "6589a61d950300a4f9ce5a07",
                    "createdAt": "2023-12-25T15:56:13.741Z",
                    "updatedAt": "2023-12-25T15:56:13.741Z"
                }
            ],
            "_id": "6589a61d950300a4f9ce5a06",
            "createdAt": "2023-12-25T15:56:13.741Z",
            "updatedAt": "2023-12-25T15:56:13.741Z"
        },
        {
            "title": "Education",
            "items": [
                {
                    "subtitle": "Springfield High School",
                    "location": "Springfield, USA",
                    "desc": "S Diploma College Prep",
                    "_id": "6589a61d950300a4f9ce5a09",
                    "createdAt": "2023-12-25T15:56:13.741Z",
                    "updatedAt": "2023-12-25T15:56:13.741Z"
                }
            ],
            "_id": "6589a61d950300a4f9ce5a08",
            "createdAt": "2023-12-25T15:56:13.741Z",
            "updatedAt": "2023-12-25T15:56:13.741Z"
        },
        {
            "title": "Awards",
            "items": [
                {
                    "subtitle": "Montgomery Burns Award for Outstanding Service in the Field of Excellence",
                    "startDate": "1992",
                    "_id": "6589a61d950300a4f9ce5a0b",
                    "createdAt": "2023-12-25T15:56:13.741Z",
                    "updatedAt": "2023-12-25T15:56:13.741Z"
                }
            ],
            "_id": "6589a61d950300a4f9ce5a0a",
            "createdAt": "2023-12-25T15:56:13.741Z",
            "updatedAt": "2023-12-25T15:56:13.741Z"
        }
    ],
    "createdAt": "2023-12-25T15:48:22.371Z",
    "updatedAt": "2023-12-25T15:56:13.741Z",
    "__v": 0,
    "contact": {
        "email": "chunkylover53@aol.com",
        "phone": "(636) 555 3226",
        "website": "http://www.homerswebpage.com/",
        "location": "742 Evergreen Terrace. Springfield",
        "_id": "6589a61d950300a4f9ce5a05"
    },
    "subtitle": "Technical Supervisor"
}
```