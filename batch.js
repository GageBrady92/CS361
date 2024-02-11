// Get all the images
image_array = []

  
  function get_random_batch(){
    // Get a random index
    image_array = []
    for (var i = 0; i < 10; i++) {
        var count = 0;
        var loopEnd = Math.floor(Math.random() * 20 + 1);
        for (var j = 0; j < loopEnd; j++) {
            count++;
        }
        image_array.push(`Y${loopEnd}.jpg`)
    }
    console.log(image_array)
  
    // // Display the image
    // document.getElementById('rand_image').src = `./images/${selected_image}`
  }