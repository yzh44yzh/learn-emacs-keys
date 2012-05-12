$(document).ready(function() {
    WorkingSet.init(showSelectedSets());
});

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