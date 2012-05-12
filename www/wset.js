WorkingSet = {};
WorkingSet._data = [];
WorkingSet._current = 0;
WorkingSet._showKey = true;

WorkingSet.init = function(data) {
    this._data = data;
    this._current = 0;
    this._showKey = true;
    this._render();
}

WorkingSet.next = function() {
    this._current ++;
    this._showKey = true;
    if(this._current < this._data.length) this._render();
}

WorkingSet.flip = function() {
    this._showKey = !this._showKey;
    this._render();
}

WorkingSet.remind = function() {
}

WorkingSet._render = function() {
    var item = this._data[this._current];
    $("#set_title").html(item[0]);
    $("#num_items").html((this._current + 1) + "/" + this._data.length);
    
    if(this._showKey) {
	$("#info_key").html(item[1]);
	$("#info_fun").html("");
	$("#info_comment").html("");
    }
    else {
	$("#info_key").html("");
	$("#info_fun").html(item[2]);
	$("#info_comment").html(item.length > 3 ? item[3] : "");
    }
}