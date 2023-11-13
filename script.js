const apiKey = '09UtpwWlEXDaYu0rwuPIa4W2VS2szvbRHeRd4M5d'; 
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        
        const title = data.title;
        const imageUrl = data.url;
        const explanation = data.explanation;
        const pictureUrl = data.url;

       
        document.getElementById('apod-title').textContent = title;
        document.getElementById('apod-image').src = imageUrl;
        document.getElementById('apod-explanation').textContent = explanation;

        
        const sourceLink = document.getElementById('url');
        sourceLink.href = pictureUrl;
        sourceLink.textContent = 'View Source';
    })
    .catch((error) => {
        console.error('Error fetching APOD:', error);
    });

