$("#fileupload").wrap("<form id='myupload' action='action.php'method='post' enctype='multipart/form-data'></form>");
$(function(){
    $("#fileupload").wrap("<form id='_myUpload_' action='/filePlugin/uploadFile?dir=image'method='post' enctype='multipart/form-data'></form>");
    $("#fileupload").change(function(){
        var fileUploadUrl=$('#uploadFileUrl');
        $("#_myUpload_").ajaxSubmit({
            dataType:  'json', //数据格式为json
            success:function(data){
                if(data)
                {
                    if(data.error==0)
                    {
                        alert(data.url);
                        fileUploadUrl.val(data.url);
                        return;
                    }
                    alert(data.message)
                    return;
                }
                alert("--上传失败---")
                return;
            },
            error:function(xhr){
                alert(xhr.responseText);
            }
        });
    });
});