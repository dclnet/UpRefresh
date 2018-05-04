function toggleClass(element, name) {
    var classes = element.getAttribute('class');
    if (classes) {
        if (classes.indexOf(name) === -1) {
            element.setAttribute('class', classes + ' ' + name);
        } else {
            classes = classes.replace(new RegExp("((^"+name+"$)|(^"+name+"\s{1,})|(\s{1,}"+name+"$)|(\s{1,}"+name+"\s{1,}))", 'g'), ' ').trim();
            element.setAttribute('class', classes);
        }
    } else {
        element.setAttribute('class', name);
    }
}
function load() {
    var c = document.body;
    toggleClass(c, 'loading');
    setTimeout(function(){
        var list = document.querySelector('#list');
        var len = list.children.length;
        var frag = document.createDocumentFragment();
        for(var i = 0; i < 100; i++) {
            var li = document.createElement('li');
            var txt = document.createTextNode('Hello,world~ ' + (len+i+1));
            li.appendChild(txt);
            frag.appendChild(li);
        }
        list.appendChild(frag);
        toggleClass(c, 'loading');
    }, 500);
}