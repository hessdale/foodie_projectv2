# Foodie

## Introduction

Welcome to your second large project! This is going to be a fun one that will extend your knowledge of all things front-end.  
Here are you will find the documentation for each available API endpoint for you to work with.

## `Important`

To properly identify you the user, I have assigned to you your own API key.  
Make sure you have this at the ready as **you need it to make request**

### `Sending your API key`

Sending your API key with the foodie API is done using **headers**.  
Don't worry, it is fairly simple. Let's see an example:

```
// Making a GET request

axios.request({
    url: `https://foodie.bymoen.codes/api/validate`,
    headers: {
        'x-api-key': `your_api_key_here`
    }
}).then((response) => {
    // Success code here
}).catch((error) => {
    // Failure code here
});
```

Notice within the request object I have passed a new key **headers** as an object.  
In the foodie API, you pass a header named `x-api-key` which will be used to identify you.  
**You must pass this header on every API request to the foodie API**

<br>
<br>

# Endpoints

## `Validate`

**URL: https://foodie.bymoen.codes/api/validate**  
Supported HTTP Methods: **GET**

### `GET`

Returns a message that will validate your usage of the x-api-key header. Only to by used once to test if your key is working and you are sending the request header properly.
<br>
This endpoint is for testing only, and is not used within the actual Foodie applicaiton.

<br>
<br>

## `Client`

**URL: https://foodie.bymoen.codes/api/client**  
Supported HTTP Methods: **GET, POST, PATCH, DELETE**

### `GET`

Returns information about a single client, will error if the client_id does not exist.

**Required Params:**

```
{
    client_id: (number)
}
```

**Data Returned**

```
{
    created_at: (string),
    email: (string),
    first_name: (string),
    last_name: (string),
    id: (number),
    image_url: (string),
    username: (string)
}
```

<br>
<br>

### `POST`

Creates a new client that can now use the system. Also returns a valid login token meaning the user is now logged in after sign up.  
Will error if there is a duplicate username or password (the user already exists)

**Required Data:**

```
{
    email: (string),
    first_name: (string),
    last_name: (string),
    image_url: (string),
    username: (string),
    password: (string)
}
```

**Data Returned**

```
{
    client_id: (number),
    token: (string)
}
```

<br>
<br>

### `PATCH`

Modify an existing user if you have a valid token. Note that the token is sent as a header.

**Required Headers:**

```
{
    token: (string)
}
```

**Optional Data:** Send 1 or more of these to update the client that owns the given token

```
{
    email: (string),
    first_name: (string),
    last_name: (string),
    image_url: (string),
    username: (string),
    password: (string)
}
```

**No Data Returned**

<br>
<br>

### `DELETE`

Delete an existing user if you have a valid token and password. Note that the token is sent as a header.

**Required Headers:**

```
{
    token: (string)
}
```

**Required Data:**

```
{
    password: (string)
}
```

**No Data Returned**

<br>
<br>

## `Client-Login`

**URL: https://foodie.bymoen.codes/api/client-login**  
Supported HTTP Methods: **POST, DELETE**

### `POST`

Log a client in. Will error if the email / password don't exist in the system.

**Required Data:**

```
{
    email: (string),
    password: (string)
}
```

**Data Returned**

```
{
    client_id: (number),
    token: (string)
}
```

<br>
<br>

### `DELETE`

Delete an existing token. Will error if the token sent does not exist.

**Required Headers:**

```
{
    token: (string)
}
```

**No Data Returned**

<br>
<br>

## `Restaurant`

**URL: https://foodie.bymoen.codes/api/restaurant**  
Supported HTTP Methods: **GET, POST, PATCH, DELETE**

### `GET`

Returns information about a single restaurant, will error if the restaurant_id does not exist.

**Required Params:**

```
{
    restaurant_id: (number)
}
```

**Data Returned**

```
{
    email: (string),
    name: (string),
    address: (string),
    phone_number: (string in the form of ###-###-####),
    bio: (string),
    city: (string, one of Calgary, Vancouver or Toronto),
    profile_url: (string),
    banner_url: (string),
    restaurant_id: (number)
}
```

<br>
<br>

### `POST`

Creates a new restaurant that can now use the system. Also returns a valid login token meaning the restaurant is now logged in after sign up.  
Will error if there is a duplicate email or phone number(the user already exists)

**Required Data:**

```
{
    email: (string),
    name: (string),
    address: (string),
    phone_number: (string in the form of ###-###-####),
    bio: (string),
    city: (string, one of Calgary, Vancouver or Toronto)
    profile_url: (string),
    banner_url: (string),
    password: (string)
}
```

**Data Returned**

```
{
    restaurant_id: (number),
    token: (string)
}
```

<br>
<br>

### `PATCH`

Modify an existing restaurant if you have a valid token. Note that the token is sent as a header.

**Required Headers:**

```
{
    token: (string)
}
```

**Optional Data:** Send 1 or more of these to update the restaurant that owns the given token

```
{
    email: (string),
    name: (string),
    address: (string),
    phone_number: (string in the form of ###-###-####),
    bio: (string),
    city: (string, one of Calgary, Vancouver or Toronto)
    profile_url: (string),
    banner_url: (string),
    password: (string)
}
```

**No Data Returned**

<br>
<br>

### `DELETE`

Delete an existing restaurant if you have a valid token and password. Note that the token is sent as a header.

**Required Headers:**

```
{
    token: (string)
}
```

**Required Data:**

```
{
    password: (string)
}
```

**No Data Returned**
<br>
<br>

## `Restaurants`

**URL: https://foodie.bymoen.codes/api/restaurants**  
Supported HTTP Methods: **GET**

### `GET`

Returns information about all restaurants.

**Data Returned**

```
[
    {
        email: (string),
        name: (string),
        address: (string),
        phone_number: (string in the form of ###-###-####),
        bio: (string),
        city: (string, one of Calgary, Vancouver or Toronto)
        profile_url: (string),
        banner_url: (string),
        restaurant_id: (number)
    },
]
```

<br>
<br>

## `Restaurant-Login`

**URL: https://foodie.bymoen.codes/api/restaurant-login**  
Supported HTTP Methods: **POST, DELETE**

### `POST`

Log a restaurant in. Will error if the email / password don't exist in the system.

**Required Data:**

```
{
    email: (string),
    password: (string)
}
```

**Data Returned**

```
{
    restaurant_id: (number),
    token: (string)
}
```

<br>
<br>

### `DELETE`

Delete an existing token. Will error if the token sent does not exist.

**Required Headers:**

```
{
    token: (string)
}
```

**No Data Returned**

<br>
<br>

## `Menu`

**URL: https://foodie.bymoen.codes/api/menu**  
Supported HTTP Methods: **GET, POST, PATCH, DELETE**

<br>
<br>

### `GET`

Returns all menu items associated with a restaurant.

**Required Params:**

```
{
    restaurant_id: (number)
}
```

**Data Returned**

```
[
    {
        description: (string),
        id: (number),
        image_url: (string),
        name: (string),
        price: (number)
    },
]
```

<br>
<br>

### `POST`

Add a new menu item to a restaurant. Must be logged in as the restaurant to send the correct token.  
Note that the token is sent as a header.

**Required Headers:**

```
{
    token: (string),
}
```

**Required Data:**

```
{
    description: (string),
    image_url: (string),
    name: (string),
    price: (number)
},
```

**No Data Returned**

<br>
<br>

### `PATCH`

Modify an existing menu item if you have a valid token and menu_id. Note that the token is sent as a header.

**Required Headers:**

```
{
    token: (string)
}
```

**Required Data:**

```
{
    menu_id: (number)
},
```

**Optional Data:** Send 1 or more of these to update the menu item owned by the token bearer

```
{
    description: (string),
    image_url: (string),
    name: (string),
    price: (number)
}
```

**No Data Returned**

<br>
<br>

### `DELETE`

Delete an existing menu item if you have a valid token. Note that the token is sent as a header.

**Required Headers:**

```
{
    token: (string)
}
```

**Required Data:**

```
{
    menu_id: (number)
}
```

**No Data Returned**
<br>
<br>

## `Client-Order`

**URL: https://foodie.bymoen.codes/api/client-order**  
Supported HTTP Methods: **GET, POST**

<br>
<br>

### `GET`

Returns all orders associated with a particular client.  
Can be customized to show all, only confirmed, or only completed orders.  
Note that the token is sent as a header.

**Required Headers:**

```
{
    token: (string)
}
```

**Optional Params:**

```
{
    is_confirmed: (string, either "true" or "false"),
    is_complete: (string, either "true" or "false"),
}
```

**Data Returned**

```
[
    {
        is_complete: (boolean),
        is_confirmed: (boolean),
        name: (string),
        price: (number),
        menu_item_id: (number),
        order_id: (number)
    },
]
```

<br>
<br>

### `POST`

Create a new order for a restaurant to see.  
Note that one order must be associated with one restaurant only.  
Note that the token is sent as a header.

**Required Headers:**

```
{
    token: (string),
}
```

**Required Data:**

```
{
    menu_items: (array of numbers),
    restaurant_id: (string)
},
```

**Data Returned**

```
{
    order_id: (number)
}
```

<br>
<br>

## `Restaurant-Order`

**URL: https://foodie.bymoen.codes/api/restaurant-order**  
Supported HTTP Methods: **GET, PATCH**

<br>
<br>

### `GET`

Returns all orders associated with a particular restaurant.  
Can be customized to show all, only confirmed, or only completed orders.  
Send no params if you want all orders associated with a restaurant regardless of status.
Note that the token is sent as a header.

**Required Headers:**

```
{
    token: (string)
}
```

**Optional Params:**

```
{
    is_confirmed: (string, either "true" or "false"),
    is_complete: (string, either "true" or "false"),
}
```

**Data Returned**

```
[
    {
        is_complete: (boolean),
        is_confirmed: (boolean),
        name: (string),
        price: (number),
        menu_item_id: (number),
        order_id: (number)
    },
]
```

<br>
<br>

### `PATCH`

Modify an existing order.  
Orders can be confirmed and then completed only by the restaurant associated with the order.  
Note if you try to complete and order that has not been confirmed, it will automatically be confirmed as well.  
Note that the token is sent as a header.

**Required Headers:**

```
{
    token: (string),
}
```

**Required Data:**

```
{
    order_id: (number)
},
```

**Optional Data:**

```
{
    is_confirmed: (string, either "true" or "false"),
    is_complete: (string, either "true" or "false"),
},
```

**No Data Returned**

<br>
<br>
