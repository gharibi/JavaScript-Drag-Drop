var dragStart = function (e) {
    try {
        e.dataTransfer.setData('text/plain', e.target.id);
    } catch (ex) {
        e.dataTransfer.setData('Text', e.target.id);
    }
};

var cancel = function (e) {
    if (e.preventDefault) e.preventDefault();
    if (e.stopPropagation) e.stopPropagation();
    return false;
};

var dropeed = function (e) {
    var id;

    cancel(e);

    try {
        id = e.dataTransfer.getData('text/plain');
    } catch (ex) {
        id = e.dataTransfer.getData('Text');
    }

    e.target.appendChild(document.querySelector('#' + id));
};

var img = document.querySelector('#snapshot');
img.addEventListener('dragstart', dragStart, false);

var targets = document.querySelectorAll('[data-role="drag-drop-target"]');
[].forEach.call(targets, function (target) {
    target.addEventListener('drop', dropeed, false);
    target.addEventListener('dragenter', cancel, false);
    target.addEventListener('dragover', cancel, false);
});