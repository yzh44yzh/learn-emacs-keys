WorkingSet = {};
WorkingSet._data = [];
WorkingSet._current = 0;

WorkingSet.init = function(data) {
    this._data = data;
    this._current = 0;
    this._render();
}

WorkingSet.next = function() {
    this._current ++;
    if(this._current < this._data.length) this._render();
}

WorkingSet.flip = function() {
}

WorkingSet.remind = function() {
}

WorkingSet._render = function() {
    var item = this._data[this._current];
    $("#set_title").html(item[0]);
    $("#num_items").html((this._current + 1) + "/" + this._data.length);
    $("#info_1").html(item[1]);
    $("#info_2").html("");
}