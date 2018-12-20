$(function () {
    $('#sucaihuo').fullpage({
        // sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90', '#ccc']
        afterLoad:function(anchorLink,index){
            if(index===2){
                // console.log('22');
                $(".resume>li").addClass("lis");
                return;
            }
            $(".resume>li").removeClass("lis");
            if(index===3){
                // console.log('22');
                $(".project1>li").addClass("lid");
                return;
            }
            $(".project1>li").removeClass("lid");
        }
    });
});