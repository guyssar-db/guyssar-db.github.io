fetch('./chaos/chaos.json') 
  .then(response => response.json())
  .then(data => {
    const LegendSection = document.getElementById('chaos_World');

    
    for (const item of data) {
      const div = document.createElement('div');
      div.classList.add('border', 'border-white', 'rounded-md', 'b-1', 'w-72', 'm-2', 'bg-white');

      const anchor = document.createElement('a');

      const image = document.createElement('img');
      image.classList.add('rounded-md','tobig');
      image.src = item.img;
      image.alt = '';
      image.width = 300;

      anchor.appendChild(image);
      div.appendChild(anchor);
      LegendSection.appendChild(div);
    }

    //console.log(data); 
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });