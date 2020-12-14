window.onload = function() {
    $(function() {
        //
        let svg = document.getElementsByTagName('svg');
        let svg4 = document.querySelectorAll('.img_svg_wellpack path');
        let svg5 = document.querySelectorAll('.img_svg_vue path');
        for (let i = 0; i < svg.length; i++) {
            svg[i].onmousemove = function() {
                // svg[i].style.transition = "all .4s ease-in-out";
                svg[i].style.fill = "var(--color-" + i + ")";
                /* x偏移量 | y偏移量 | 阴影模糊半径 | 阴影扩散半径 | 阴影颜色 */
                svg[i].style.boxShadow = "0px 0px 20px .1px var(--color-" + i + ")";

                if (i == 4) {
                    for (let j = 0; j < 2; j++) {
                        svg4[j].style.transition = "all .3s";
                        svg4[j].style.fill = "var(--color-4-" + j + ")";
                        svg[i].style.boxShadow = "0px 0px 20px .1px var(--color-4-0)";
                    }
                }
                if (i == 5) {
                    for (let x = 0; x < 2; x++) {
                        svg5[x].style.transition = "all .3s";
                        svg5[x].style.fill = "var(--color-5-" + x + ")";
                        svg[i].style.boxShadow = "0px 0px 20px 0.1px var(--color-5-0)";
                    }
                }
            }

            svg[i].onmouseout = function() {
                svg[i].style.fill = "rgb(80, 80, 80)";
                svg[i].style.boxShadow = "";
                for (let j = 0; j < 2; j++) {
                    svg4[j].style.fill = "rgb(80, 80, 80)";
                    svg5[j].style.fill = "rgb(80, 80, 80)";

                }
            }

        }
    })
}