// Get all the images
image_array = [
    'Y1.jpg',
    'Y2.jpg',
    'Y3.jpg',
    'Y4.jpg',
    'Y6.jpg',
    'Y7.jpg',
    'Y8.jpg',
    'Y9.jpg',
    'Y10.jpg',
  ]
  
  function get_random_image(){

    image_array = []
    for (var i = 0; i < 10; i++) {
        var count = 0;
        var loopEnd = Math.floor(Math.random() * 20 + 1);
        for (var j = 0; j < loopEnd; j++) {
            count++;
        }
        image_array.push(`Y${loopEnd}.jpg`)
    console.log(image_array)
    // Get a random index
    random_index = Math.floor(Math.random() * image_array.length);
  
    // Get an image at the random_index
    selected_image = image_array[random_index]
  
    // Display the image
    document.getElementById('rand_image').src = `./images/${selected_image}`
  }
  }