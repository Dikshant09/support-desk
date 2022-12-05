# Note
Heroku stopped their free tier and so my heroku app is down now, but I have uploaded on Render. <br>
So now this is the updated and working link <a href = "https://support-desk-d5y5.onrender.com/">Support Desk</a>

# Support Desk
- Support desk is a fully-functional MERN Stack App
- RESTful API is implemented.
- In this one can create, view, close tickets, add notes and do all crud operations.
- It’s authenticated by the JSON web token.

## Requirements

- Node v10+
- Configured .env file
- MongoDB Account

## How to run

1. Confirm `.env` configuration

Ensure the API keys are configured in `.env` in this directory. It should include the following keys:

<b>Backend .env configuration</b>
```yaml
# MongoDB Connection String - see https://www.mongodb.com/docs/manual/reference/connection-string/
MONGO_URI = 'mongodb+srv://.......' 

# Port 
PORT = 8000 or any free port

# JWT Secret
JWT_SECRET = xxxxxx 

# Path of front-end implementation. 
REACT_FRONTEND_URL = 'https://front_end_app_url.com'
```
<b>Frontend .env configuration</b>

```yaml

# Path of backend-end implementation. 
REACT_APP_BASE_URL = 'https://backend_end_app_url.com'

```

2. Install dependencies and start the server

```
npm install
npm start
```
My frontend implementation
- [Github](https://github.com/Dikshant09/supportdesk-frontend)
- [Live](https://support-desk-d5y5.onrender.com/)

My backend implementation
- [Github](https://github.com/Dikshant09/supportdesk-backend)
- [Live](https://support-desk-api-gee5.onrender.com/api/tickets/)
