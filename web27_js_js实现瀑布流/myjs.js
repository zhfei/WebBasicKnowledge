window.onload = function () {
    imgLocation('container','div_box')

    //模拟网络返回数据
    var imgData={'data':[{'src':'phone0.jpg'},{'src':'phone1.jpg'},{'src':'phone4.jpg'},{'src':'phone5.jpg'},{'src':'phone8.jpg'},{'src':'phone9.jpg'},]}
    window.onscroll=function () {
        if (checkIsToLoading()){
            var parent_ele = document.getElementById('container')
            for(var i=0; i<imgData.data.length; i++) {
                var div_box = document.createElement('div')
                div_box.className='div_box'
                parent_ele.appendChild(div_box)

                var div_image = document.createElement('div_image')
                div_image.className='div_image'
                div_box.appendChild(div_image)

                var img = document.createElement('img')
                img.src='images/'+imgData.data[i].src
                div_image.appendChild(img)
            }
            //新加入元素后，重新对元素进行排布
            imgLocation('container','div_box')
        }
    }
}

//实现上拉无限加载
function checkIsToLoading() {
    var parent_ele = document.getElementById('container')
    var child_eles = getAllChildEle(parent_ele,'div_box')
    //获取最后一个元素距离上边界的一个偏移
    var last_ele_offsetTop = child_eles[child_eles.length -1].offsetTop
    //向上滚动的距离
    var scroll_offsetTop = document.documentElement.scrollTop||document.body.scrollTop
    //当前屏幕看到的高度
    var page_height = document.documentElement.clientHeight||document.body.clientHeight

    if (scroll_offsetTop + page_height > last_ele_offsetTop) {
        return true
    }
    console.log(scroll_offsetTop+':'+page_height+":"+last_ele_offsetTop)
}


//将瀑布流中的每个image进行定位，不再随着屏幕拉伸而改变
function imgLocation(parentnode_idstring,classstring) {
    var parentNode = document.getElementById(parentnode_idstring)
    var child_eles = getAllChildEle(parentNode,classstring)
    // console.log('元素个数：'+child_eles)
    var screenW = document.documentElement.offsetWidth
    var ele_w = child_eles[0].offsetWidth
    var ele_count = Math.floor(screenW/ele_w)

    //将父节点的宽度固定化
    parentNode.style.cssText='width:'+ele_w*ele_count+'px'+'; margin:0px auto'

    var heightArr = []
    for (var i = 0; i<child_eles.length; i++) {
        if (i < ele_count) {
            heightArr.push(child_eles[i].offsetHeight)
        } else {
            var minValue = Math.min.apply(null,heightArr)
            var minIndex = getMinHeightArrIndex(heightArr,minValue)

            var minEle = child_eles[minIndex]
            child_eles[i].style.position='absolute'
            child_eles[i].style.top=heightArr[minIndex]+'px';
            child_eles[i].style.left=minEle.offsetLeft+'px'
            //累加维护的高度列数组
            heightArr[minIndex] = heightArr[minIndex]+child_eles[i].offsetHeight

        }
    }
}

function getMinHeightArrIndex(heightArr, minValue) {
    for (var i = 0;i<heightArr.length;i++) {
        if (heightArr[i]==minValue){
            return i;
        }
    }
}

function getAllChildEle(parentnode_ele,classstring) {
    var contentArr = []
    var allcontent = parentnode_ele.getElementsByTagName("*")
    for(var i=0;i< allcontent.length;i++){
        var sub_ele = allcontent[i]
        if (sub_ele.className==classstring){
            contentArr.push(sub_ele)
        }
    }
    return contentArr

}