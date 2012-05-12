$(document).ready(function() {
    var html = "";
    for(var i = 0; i < sets.length; i++) {
	var set = sets[i];
	html += "<p><input type='checkbox' name='ss' id='" + set.id + "' />"
	    + "<label for='" + set.id + "'>"
	    + set.id + "</label></p>";
    }
    $("#set_list").html(html);
});

function switchState(state) {
    if(state == 'select_set') {
	$("#intro").css("display", "none");
	$("#select_set").css("display", "block");
	$("#view_set").css("display", "none");
    }
    else if(state == 'view_set') {
	WorkingSet.init(showSelectedSets());
	$("#intro").css("display", "none");
	$("#select_set").css("display", "none");
	$("#view_set").css("display", "block");
    }
    else {
	$("#intro").css("display", "block");
	$("#select_set").css("display", "none");
	$("#view_set").css("display", "none");
    }
}

function showSelectedSets() {
    var temp = [];
    for(var i = 0; i < sets.length; i++) {
	var set = sets[i];
	for(var j = 0; j < set.items.length; j++) {
	    if(set.id != "erlang-mode" && set.id != "Minibuffer") continue;
	    var item = set.items[j];
	    var nItem = item.slice(0);
	    nItem.unshift(set.id);
	    temp.push(nItem);
	}
    }

    return shuffle(temp);
}

function shuffle(arr) {
    var source = arr.slice(0);
    var res = [];
    while(source.length) {
	var index = parseInt(Math.random() * source.length);
	res.push(source[index]);
	source.splice(index, 1);
    }
    return res;
}