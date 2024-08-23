function div_img() {
  var d_ = document.getElementById('img_');
  var names = document.getElementById('names');
  var notforsale = document.getElementById('nfs');
  var notforsale1 = document.getElementById('nfs1');
  var legendCardpower = document.getElementById('atk');
  var legendCarddef = document.getElementById('def');
  var legendCardcri = document.getElementById('cri');
  var skilltext = document.getElementById('p-skill');


  names.style.position = 'relative';
  names.style.top = '-0.8rem';
  notforsale.style.bottom = '10px';
  notforsale1.style.bottom = '10px';
  legendCardpower.style.left = '-20px';
  legendCarddef.style.left = '-20px';
  legendCardcri.style.left = '-30px';
  legendCarddef.style.transform = '0 ,-10px';
  legendCardcri.style.transform = '0 ,-10px';
  skilltext.style.top = '-10px';


  d_.style.border = '0';

  var fileName = prompt('Please Enter File Name');
  html2canvas(d_, { scale: 6.665, backgroundColor: null }).then(function(canvas) {
      var image = new Image();
      image.src = canvas.toDataURL();

      var link = document.createElement('a');
      link.href = image.src;
      link.download = `${fileName}.png`;
      link.click();

      d_.style.border = '';
      
      // คืนค่าการเลื่อนตำแหน่งของ 'names' กลับสู่ปกติ
      names.style.top = '';
      notforsale.style.bottom = '';
  notforsale1.style.bottom = '';
  legendCardpower.style.left = '';
  legendCarddef.style.left = '';
  legendCardcri.style.left = '';
  legendCarddef.style.transform = '';
  legendCardcri.style.transform = '';
  //skilltext.style.top = '';

  });
}

document.getElementById('exp').addEventListener('click', div_img);
