window.onload = function() {
    $(function() {
        let ebook_content = document.querySelectorAll('.info .content')
        for (let i = 0; i < ebook_content.length; i++) {
            ebook_content[i].style.backgroundImage = "url(imgs/" + i + ".png)";
            ebook_content[i].style.transition = "all .4";
            ebook_content[i].onmouseover = function(event) {
                ebook_content[i].style.backgroundImage = "none";
                ebook_content[i].style.backgroundColor = "rgb(52, 55, 78)";
            }
            ebook_content[i].onmouseout = function(event) {
                ebook_content[i].style.backgroundImage = "url(imgs/" + i + ".png)";
                ebook_content[i].style.backgroundColor = "";
            }
        }
    })
}