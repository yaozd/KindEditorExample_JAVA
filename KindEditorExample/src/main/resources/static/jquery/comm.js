var editor;
KindEditor.ready(function(K) {
    editor = K.create('textarea[name="Introduce"]', {
        uploadJson : '/kindEditor/uploadFile',//上传图片
        fileManagerJson : 'file_manager',//文件管理--图片空间的管理
        allowFileManager : false,//true或false，true时显示浏览服务器图片功能。
        afterBlur: function () { this.sync(); }//数据同步
    });
    K('#image1').click(function() {
        editor.loadPlugin('image', function() {
            editor.plugin.imageDialog({
                imageUrl : K('#ProductImage').val(),
                clickFn : function(url, title, width, height, border, align) {
                    K('#ProductImage').val(url);
                    editor.hideDialog();
                }
            });
        });
    });
});