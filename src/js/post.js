document.addEventListener('DOMContentLoaded', function() {
    const accessToken = 'eb26aca4d9mshd90707cbd932003p19e5d1jsn828ed433e767';
    const username = 'mystic_nailss__'; // Cambia esto al nombre de usuario del perfil que desees

    fetch(`https://instagram-scraper-api2.p.rapidapi.com/v1.2/posts?username_or_id_or_url=${username}`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'instagram-scraper-api2.p.rapidapi.com',
            'X-RapidAPI-Key': accessToken
        }
    })
    .then(response => response.json())
    .then(data => {
        const feed = document.getElementById('instagram-feed');
        data.forEach(post => {
            if (post.media_url) {
                const img = document.createElement('img');
                img.src = post.media_url;
                img.alt = post.caption || 'Instagram Image';
                img.classList.add('instagram-image');
                feed.appendChild(img);
            }
        });
    })
    .catch(error => console.error('Error fetching Instagram data:', error));
});
