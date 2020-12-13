window.onload = function() {
    $(function() {
        let svg = document.getElementsByTagName('svg');
        let svg4 = document.querySelectorAll('.img_svg_wellpack path');
        let svg5 = document.querySelectorAll('.img_svg_vue path');
        for (let i = 0; i < svg.length; i++) {
            svg[i].onmousemove = function() {
                svg[i].style.fill = "var(--color-" + i + ")";
                if (i == 4) {
                    for (let j = 0; j < 2; j++) {
                        svg4[j].style.transition = "all .3s";
                        svg4[j].style.fill = "var(--color-4-" + j + ")";
                    }
                }
                if (i == 5) {
                    for (let x = 0; x < 2; x++) {
                        svg5[x].style.transition = "all .3s";
                        svg5[x].style.fill = "var(--color-5-" + x + ")";
                    }
                }
            }
            svg[i].onmouseout = function() {
                svg[i].style.fill = "rgb(80, 80, 80)";
                for (let j = 0; j < 2; j++) {
                    svg4[j].style.fill = "rgb(80, 80, 80)";
                    svg5[j].style.fill = "rgb(80, 80, 80)"
                }
            }
        }
    })
}