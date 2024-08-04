const apiKey = '09UtpwWlEXDaYu0rwuPIa4W2VS2szvbRHeRd4M5d'; 
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        const title = data.title;
        const mediaType = data.media_type;
        const imageUrl = data.url;
        const explanation = data.explanation;

        document.getElementById('apod-title').textContent = title;
        document.getElementById('apod-explanation').textContent = explanation;

        const imageContainer = document.getElementById('image-container');
        imageContainer.innerHTML = ''; 

        if (mediaType === 'image') {
            const img = document.createElement('img');
            img.id = 'apod-image';
            img.src = imageUrl;
            img.alt = 'NASA APOD';
            img.style.width = '50%';
            imageContainer.appendChild(img);
        } else if (mediaType === 'video') {
            const video = document.createElement('iframe');
            video.src = imageUrl;
            video.width = '560';
            video.height = '315';
            video.frameBorder = '0';
            video.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            video.allowFullscreen = true;
            imageContainer.appendChild(video);
        }

        const sourceLink = document.getElementById('url');
        sourceLink.href = imageUrl;
        sourceLink.textContent = 'View Source';
    })
    .catch((error) => {
        console.error('Error fetching APOD:', error);
    });
