
fetch('./json/navigation.json') 
  .then(response => response.json())
  .then(data => {
    const nav = document.getElementById('nav_bar'); 


    for (const item of data) {
      const link = document.createElement('a');
      link.href = item.href;
      link.classList.add('block', 'mt-4', 'lg:inline-block', 'lg:mt-0', 'text-white', 'hover:text-white', 'mr-4');
      link.textContent = item.text; 

      nav.appendChild(link);
    }
  })
  .catch(error => {
    console.error('Error fetching navigation data:', error);
  });
  