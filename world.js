fetch('./json/worlds.json') 
  .then(response => response.json())
  .then(data => {
    const worldSection = document.getElementById('World_Section');

    
    for (const item of data) {
      const div = document.createElement('div');
      div.classList.add('border', 'border-white', 'rounded-md', 'b-1', 'w-72', 'm-2', 'bg-white');

      const anchor = document.createElement('a');
      anchor.href = item.url;

      const image = document.createElement('img');
      image.classList.add('rounded-md','tobig');
      image.src = item.world;
      image.alt = 'Dragon Flag ' + item.num;
      image.width = 300;

      anchor.appendChild(image);
      div.appendChild(anchor);
      worldSection.appendChild(div);
    }

    //console.log(data); 
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });