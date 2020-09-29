function createLeaf(){
    const sec = document.getElementById('section');
    const leaf = document.createElement('img');

    var size = Math.random() * 50;

    leaf.style.width = 100 + size + 'px';
    leaf.style.height = 100 + size + 'px';
    leaf.style.top = Math.random() * innerHeight + 'px';
    leaf.style.left = Math.random() * innerWidth + 'px';
    leaf.setAttribute("src", "assets/leaves/leaves" + Math.floor((Math.random() * 4) + 1) .toString() + ".png");
    leaf.setAttribute("class","bgLeaf");

    sec.appendChild(leaf);

    setTimeout(() => {
       leaf.remove(); 
    }, 8000);
}
setInterval(createLeaf, 150);