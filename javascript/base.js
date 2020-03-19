var activePage = document.getElementById("idpage").textContent;


function addFooter() {
  if (activePage == "Welcome") {
  document.getElementById("stdfooter").innerHTML = "\
<table>\
  <tr>\
    <th><a href=\"html/about.html\">About</a></th>\
    <th><a href=\"html/blog.html\">Blog</a></th>\
    <th><a href=\"html/stuff.html\">Stuff</a></th>\
  </tr>\
  <tr>\
    <td>A Link 1</td>\
    <td>B Link 1</td>\
    <td>S Link 1</td>\
  </tr>\
  <tr>\
    <td>A Link 2</td>\
    <td>B Link 2</td>\
    <td>S Link 2</td>\
  </tr>\
  <tr>\
    <td>A Link 3</td>\
    <td>B Link 3</td>\
    <td>S Link 3</td>\
  </tr>\
</table>\
<p>MIT License Copyright (c) 2020 Jakob Nacanaynay</p>";
  } else {
     document.getElementById("stdfooter").innerHTML = "\
<table>\
  <tr>\
    <th><a href=\"about.html\">About</a></th>\
    <th><a href=\"blog.html\">Blog</a></th>\
    <th><a href=\"stuff.html\">Stuff</a></th>\
  </tr>\
  <tr>\
    <td>A Link 1</td>\
    <td>B Link 1</td>\
    <td>S Link 1</td>\
  </tr>\
  <tr>\
    <td>A Link 2</td>\
    <td>B Link 2</td>\
    <td>S Link 2</td>\
  </tr>\
  <tr>\
    <td>A Link 3</td>\
    <td>B Link 3</td>\
    <td>S Link 3</td>\
  </tr>\
</table>\
<p>MIT License Copyright (c) 2020 Jakob Nacanaynay</p>"; 
  }
}

window.onload = function onLoad() {
  addFooter();
}

