document.addEventListener('DOMContentLoaded', function() {
    const loadingElement = document.getElementById('loading');
    const contentElement = document.getElementById('content');

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            loadingElement.style.display = 'none';
            contentElement.style.display = 'block';

            data.items.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.className = 'item';
                
                const titleElement = document.createElement('h3');
                titleElement.textContent = item.title;
                itemElement.appendChild(titleElement);

                const descriptionElement = document.createElement('p');
                descriptionElement.textContent = item.description;
                itemElement.appendChild(descriptionElement);

                contentElement.appendChild(itemElement);
            });
        })
        .catch(error => {
            loadingElement.textContent = 'Failed to load content';
            console.error('Error fetching data:', error);
        });
});
