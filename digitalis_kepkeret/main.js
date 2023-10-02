import './style.css'

function image_width()
{
  let kepszelesseg = document.getElementById('image_width').value;
  document.getElementById('image').style.width = kepszelesseg+'px';
}

function default_img()
{
  document.getElementById('image').src = 'public/cat_img.jpeg';
  //https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Imgur_logo.svg/330px-Imgur_logo.svg.png
}

function img_border()
{
  let border = document.getElementById('border_width').value;
  let color = document.getElementById('color').value;
  document.getElementById('image').style.border = 'solid';
  document.getElementById('image').style.borderColor = color;
  document.getElementById('image').style.borderWidth = border+'px';
}


function click(e)
{
  let url = document.getElementById('url');
  
  image_width();
  default_img();
  if(url.value == '')
  {
    default_img();
  }
  else
  {
    let image = document.getElementById('image');
    image.src = url.value;
  } 
  img_border();
}

function themechange()
{
  let hatter = document.getElementById('themechange');
  document.body.classList.toggle('dark');
}

function init()
{
//document.getElementById('url').addEventListener('click', click);
document.getElementById('themechange').addEventListener('click', themechange);
document.getElementById('url').addEventListener('input', click);
}

addEventListener('DOMContentLoaded', init);