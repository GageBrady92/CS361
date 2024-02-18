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

## Example Output
Testing get_random_bird_name function...
  >> Random Bird Name: Gray-streaked Honeyeater

Testing get_recent_observations function...
  >> Recent Observation: Blue Jay Cyanocitta cristata NY - Ithaca, 212 Tareyton 2024-02-18 11:28 2
  >> Recent Observation: American Crow Corvus brachyrhynchos NY - Ithaca, 212 Tareyton 2024-02-18 11:28 1
  >> Recent Observation: Black-capped Chickadee Poecile atricapillus NY - Ithaca, 212 Tareyton 2024-02-18 11:28 3
  >> Recent Observation: American Goldfinch Spinus tristis NY - Ithaca, 212 Tareyton 2024-02-18 11:28 1
  >> Recent Observation: Downy Woodpecker Dryobates pubescens 159 W Remington Rd, Cayuga Heights US-NY 42.46901, -76.49852 2024-02-18 11:00 1
  >> Recent Observation: Snow Goose Anser caerulescens Hog Hole (Allan H. Treman State Marine Park) 2024-02-18 10:39 1
  >> Recent Observation: Canada Goose Branta canadensis Hog Hole (Allan H. Treman State Marine Park) 2024-02-18 10:39 165
  >> Recent Observation: Mallard Anas platyrhynchos Hog Hole (Allan H. Treman State Marine Park) 2024-02-18 10:39 150
  >> Recent Observation: Redhead Aythya americana Hog Hole (Allan H. Treman State Marine Park) 2024-02-18 10:39 100
  >> Recent Observation: Greater Scaup Aythya marila Hog Hole (Allan H. Treman State Marine Park) 2024-02-18 10:39 49
  >> Recent Observation: Common Goldeneye Bucephala clangula Hog Hole (Allan H. Treman State Marine Park) 2024-02-18 10:39 2
  >> Recent Observation: Hooded Merganser Lophodytes cucullatus Hog Hole (Allan H. Treman State Marine Park) 2024-02-18 10:39 20

## UML Diagram

![image](https://github.com/GageBrady92/CS361/assets/114173520/c3b12148-3ceb-4f5c-a11d-084b4baa02ce)

