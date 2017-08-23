<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<title>Demo</title>
</head>
<body>
<div class="body">
	<a href="#" class="body"><img src="img/page20.jpg" alt="" usemap="#Map">
    <map id="CribMap" name="Map">
      <area shape="rect" coords="248,320,1717,426" href="./page21.html">
    </map>
	</a>
</div>
<script>
    adjust();  

    var timeout = null;//onresize触发次数过多，设置定时器  
    window.onresize = function () {  
        clearTimeout(timeout);  
        timeout = setTimeout(function () { window.location.reload(); }, 100);//页面大小变化，重新加载页面以刷新MAP  
    }  

    //获取MAP中元素属性  
    function adjust() {  
        var map = document.getElementById("CribMap");  
        var element = map.childNodes;  
        var itemNumber = element.length / 2;  
        for (var i = 0; i < itemNumber - 1; i++) {  
            var item = 2 * i + 1;  
            var oldCoords = element[item].coords;  
            var newcoords = adjustPosition(oldCoords);  
            element[item].setAttribute("coords", newcoords);  
        }  
        var test = element;  
    }  

    //调整MAP中坐标  
    function adjustPosition(position) {  
        var pageWidth = document.body.clientWidth;//获取页面宽度  
        var pageHeith = document.body.clientHeight;//获取页面高度  

        var imageWidth = 1920;
        // <span style="white-space:pre">    </span>//图片的长宽  
        var imageHeigth = 1080;

        var each = position.split(",");  
        //获取每个坐标点  
        for (var i = 0; i < each.length; i++) {  
            each[i] = Math.round(parseInt(each[i]) * pageWidth / imageWidth).toString();//x坐标  
            i++;  
            each[i] = Math.round(parseInt(each[i]) * pageHeith / imageHeigth).toString();//y坐标  
        }  
        //生成新的坐标点  
        var newPosition = "";  
        for (var i = 0; i < each.length; i++) {  
            newPosition += each[i];  
            if (i < each.length - 1) {  
                newPosition += ",";  
            }  
        }  
        return newPosition;  
    }  
</script>
</body>
</html>