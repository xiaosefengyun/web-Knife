// The GetQueryString function retrieves the corresponding param value in the url.
function GetQueryString(name) {  
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');  
    var r = window.location.search.substr(1).match(reg);
    var context = '';  
    if (r != null)  
         context = r[2];  
    reg = null;  
    r = null;  
    return context == null || context == '' || context == 'undefined' ? '' : context;  
}