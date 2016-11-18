var _kindEditor_;
KindEditor.ready(function(K) {
    _kindEditor_ = K.create('#kindEditorContent', {
        uploadJson : '/kindEditor/uploadFile',//上传图片
        allowFileManager : false,//true或false，true时显示浏览服务器图片功能。
        afterBlur: function () { this.sync(); }//数据同步
    });
});