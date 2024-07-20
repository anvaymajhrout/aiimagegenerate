document.getElementById('generateButton').addEventListener('click', async function() {
    const apiKey = 'plsenterapikeyhere'; 
    const url = 'https://api.openai.com/v1/images/generations';

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            prompt: 'a futuristic cityscape with neon lights',
            n: 1,
            size: '1024x1024'
        })
    });

    const data = await response.json();
    const imageUrl = data.data[0].url;

    document.getElementById('aiImage').src = imageUrl;
});
