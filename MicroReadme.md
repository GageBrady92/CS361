# Bird Microservice 
This program find a random bird name and takes latitude and longitude to pull all bird sightings based on distance. Both functions useinformaiton to make API calls and recieve information from a birder Postman site. Using Flask and request to make API calls to achieve functionality to send and receive informaiton.

## Starting out
1. Used Pycharm for the program. 
2. Go to Python Packages and ensure Flask and requests packages are installed
3. Start the program by using python3 bird_microservice.py and python3 testing.py. Testing will make the request and receive the information from microservice.

## Communication Contract
### Request Data
To request data from the microservice, the user will make requests to a port, local and using 5000 in the test. This microservice can return two responses, either a random bird name, or bird sightings based on lattitude and longitude. The port will be followed by the route for the specific function. The microservice uses api/random_bird to get a random name and/or api/birds for sightings as the routes for the functions. 

Example requests
"http://127.0.0.1:5000/api/random_bird",
"http://127.0.0.1:5000/api/birds"

### Receiving Data
When the random bird function is called, the program will first get a random bird name and make sure no errors. Upon 200 success, the response will be plased into a variable in JSON format and shown to the user. User can access the variable for the information.

For the bird sightings, the microservice will take lattitude and longitude from the user and use this to find the relevant information. Currently the microservice will show data for the past 2 days, and 5km from the specified latitude and longitude. These are passed by variable to the microservice, so they can be updated as needed. These reponses are also currently stored in JSON format that a user can utilize.

