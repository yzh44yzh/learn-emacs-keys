$(document).ready(function() {
    var html = "";
    for(var i = 0; i < sets.length; i++) {
	var set = sets[i];
	html += "<p><input type='checkbox' id='ch_" + set.id + "' />"
	    + "<label for='ch_" + set.id + "'>"
	    + set.id + " (" + set.items.length + ")</label></p>";
    }
    $("#set_list").html(html);
});

function switchState(state, keyFirst) {
    if(state == 'select_set') {
	$("#intro").css("display", "none");
	$("#select_set").css("display", "block");
	$("#view_set").css("display", "none");
    }
    else if(state == 'view_set') {
	WorkingSet.init(getSelectedSets(), keyFirst);
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

function getSelectedSets() {
    var temp = [];
    for(var i = 0; i < sets.length; i++) {
	var set = sets[i];
	if(! $("#ch_" + set.id).attr("checked") ) continue;
	for(var j = 0; j < set.items.length; j++) {
	    var item = set.items[j];
	    var nItem = item.slice(0);
	    nItem.unshift(set.id);
	    temp.push(nItem);
	}
    }
    
    if(temp.length == 0) {
	$("#ch_" + sets[0].id).attr("checked", "checked");
	return getSelectedSets();
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