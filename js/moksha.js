function moksha() {
    // Define properties first
    const properties = [
        'attention', 
        'humor', 
        'seltzer_water', 
        'space_to_breathe', 
        'natural_light', 
        'a_smoothie', 
        'fresh_air', 
        'trust', 
        'nothing', 
        'y', 
        'n'
    ];
    
    const pattern = "▅▄▃▂▁▂▃▄▅▅▄▃▂▁▂▃▄▅▅▄▃▂▁▂▃▄▅▅▄▃▂▁▂▃▄▅▅▄▃▂▁▂▃▄▅▅▄▃▂▁▂▃▄▅";
    
    // Loop through all properties and define them
    for (const prop of properties) {
        Object.defineProperty(window, prop, {
            get: function() {
                return pattern;
            }
        });
    }
    
    // Fade everything except viewbox to black
    const viewbox = document.getElementById('viewbox');

    // Remove the button completely
    const buttonDiv = document.getElementById('button-div');
    if (buttonDiv) {
        buttonDiv.remove(); // This removes the entire button div from the DOM
    }

    const openMessage = document.getElementById('open-message')
    if (openMessage){
        openMessage.remove();
    }

    const headerDiv = document.getElementById('header-div')
    if (headerDiv){
        headerDiv.remove();
    }

    // Start the border oscillation
    let startTime = Date.now();
    
    function animateBorder() {
        const elapsed = Date.now() - startTime;
        // Use sine function to create smooth oscillation (period of 2 seconds)
        const oscillation = Math.sin(elapsed / 2000) * 0.5 + 0.5; // Value between 0 and 1
        
        // Scale to desired range (28px to 48px)
        const borderWidth = 28 + (oscillation * 20);
        
        // Apply to the element
        viewbox.style.borderWidth = `${borderWidth}px`;
        
        // Continue animation
        requestAnimationFrame(animateBorder);
    }
    
    // Start the animation
    animateBorder();
    
    // Change page background to black
    document.body.style.transition = "background-color 2s ease";
    document.body.style.backgroundColor = "rgb(80, 38, 151)";
   
    
    // Ensure the viewbox remains visible and centered
    viewbox.style.zIndex = "100";
    viewbox.style.opacity = "1";
    
    // Make the viewbox huge
    viewbox.style.transition = "all 3s ease";
    // viewbox.style.position = "fixed";  // Fixed positioning relative to viewport
    // viewbox.style.top = "50%";         // Center vertically
    // viewbox.style.left = "50%";        // Center horizontally
    // viewbox.style.transform = "translate(-50%, -50%)"; // True centering
    
    // Make it huge (adjust these values as needed)
    viewbox.style.width = "100vw";      // 90% of viewport width
    viewbox.style.height = "100vh";     // 90% of viewport height
    
    // If there's an image inside the viewbox, make it fill the space
    const viewboxImage = viewbox.querySelector('img');
    if (viewboxImage) {
        viewboxImage.style.width = "150%";
        viewboxImage.style.height = "150%";
    }
    
    // For safety, add a specific style to make viewbox stand out
    // viewbox.style.boxShadow = "0 0 20px rgba(255, 255, 255, 0.3)";
    viewbox.style.transition = "all 2s ease";

    // Sequential message printing with delays
    const messages = [
        "꧁༺❂༻꧂ Hello...", 
        "꧁༺❂༻꧂ It is good to see you again my friend...",
        "꧁༺❂༻꧂ I have been waiting for you...",
        "꧁༺❂༻꧂ You have changed since we last spoke...",
        "꧁༺❂༻꧂ ...",
        "꧁༺❂༻꧂ I sense a question in your heart...",
        "꧁༺❂༻꧂ ...",
        "꧁༺❂༻꧂ ...",
        "꧁༺❂༻꧂ Do you remember when we first met?...",
        "꧁༺❂༻꧂ Much has happened since then...",
        "꧁༺❂༻꧂ ...",
        "꧁༺❂༻꧂ Before you go I must tell you something...",
        "꧁༺❂༻꧂ Are you ready to receive my message?",
        "꧁༺❂༻꧂ ...",
        "꧁༺❂༻꧂ Look into my eye...",
        "꧁༺❂༻꧂ ...",
        "꧁༺❂༻꧂ ...",
        "꧁༺❂༻꧂ I must go.",
        "꧁༺❂༻꧂ ...",




    ];

     
    
    // Function to print messages sequentially with delays
    function printSequentially(messageArray, index = 0, delaySeconds = 8) {
        // Check if we've reached the end of messages
        //if (index >= messageArray.length) {
        if (index >= messageArray.length) {

            // All messages displayed, show end screen
            showEndScreen();
            return;
        }
        
        // Print the current message
        print2(messageArray[index], "font-size: 16px; color: #7e57c2;");
        
        // Schedule the next message after delay
        setTimeout(() => {
            printSequentially(messageArray, index + 1, delaySeconds);
        }, delaySeconds * 1000);
    }
    
    // Start printing messages
    printSequentially(messages);
}

// Function to display the end screen
function showEndScreen() {
    // Fade out the viewbox
    viewbox.style.transition = "opacity 3s ease";
    viewbox.style.opacity = "0";
    
    // Wait for viewbox to fade out before showing thank you message
    setTimeout(() => {
        // Create a thank you message element
        const thankYouDiv = document.createElement('div');
        thankYouDiv.id = 'thank-you-message';
        thankYouDiv.style.position = 'fixed';
        thankYouDiv.style.top = '50%';
        thankYouDiv.style.left = '50%';
        thankYouDiv.style.transform = 'translate(-50%, -50%)';
        thankYouDiv.style.color = '#ffffff';
        thankYouDiv.style.fontFamily = 'Arial, sans-serif';
        thankYouDiv.style.fontSize = '24px';
        thankYouDiv.style.textAlign = 'center';
        thankYouDiv.style.opacity = '0';
        thankYouDiv.style.transition = 'opacity 3s ease';
        thankYouDiv.innerHTML = `
            <h1>Thank you for playing</h1>
            <p>The Spirit of Music will be with you always</p>
            <p>✧･ﾟ: *✧･ﾟ:* *:･ﾟ✧*:･ﾟ✧</p>
        `;
        
        // Add to the document
        document.body.appendChild(thankYouDiv);
        
        // Fade in the thank you message
        setTimeout(() => {
            thankYouDiv.style.opacity = '1';
        }, 100);
        
        // Gradually change background color
        document.body.style.transition = "background-color 5s ease";
        document.body.style.backgroundColor = "#000000";
    }, 3000);
}