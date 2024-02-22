# test-praktek-backend

## Endpoints

| URL             | Method | Description           |
| --------------- | ------ | --------------------- |
| `/health`       | GET    | Check health          |
| `/customer`     | GET    | Get list of customers |
| `/customer/:id` | GET    | Get a customer        |
| `/customer`     | POST   | Add a customer        |
| `/customer/:id` | PUT    | Update a customer     |
| `/customer/:id` | DELETE | Delete a customer     |
| `/topmenu`      | GET    | Get list of top menus |
| `/topmenu/:id`  | GET    | Get a top menu        |
| `/menu`         | GET    | Get list of menus     |
| `/menu/:id`     | GET    | Get a menu            |

### Example

1. Get a customer

`GET` `http://localhost:4000/customer/4`

```
{
    "status": true,
    "statusCode": 200,
    "data": [
        {
            "id":4,
            "name":"Kris Roher",
            "level":"warga",
            "favorite_menu":"Surf & Turf Gift Basket",
            "total_transaction":632200
        }
    ]
}
```

2. Create a customer

`POST` `http://localhost:4000/customer`

```
{
    "name": "Yanda Agil",
    "level": 3,
    "favorite_menu": 4,
    "total_transaction": 100000
}
```

3. Update a customer

`PUT` `http://localhost:4000/customer/19`

```
{
    "name": "Yanda",
    "level": 1,
    "favorite_menu": 2,
    "total_transaction": 120000
}
```

4. Delete a customer

`DELETE` `http://localhost:4000/customer/19`

```
{
    "status": true,
    "statusCode": 200,
}
```

## Database

`tes-praktek.sql`
