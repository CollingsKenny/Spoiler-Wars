var nonoWords = ['Star Wars', 'Star wars', 'star wars', 'Last Jedi', 'Last jedi', 'last Jedi', 'jedi', 'Jedi', 'Snoke', 'Kylo', 'carrie fisher', 'Carrie Fisher', 'Carrie', 'Fisher', 'Leia', 'leia', 'Luke', 'Ren '];
var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];
        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var bad = false;
            for(var k = 0; k < nonoWords.length; k++ ) {
                if( text.includes(nonoWords[k])) {
                    bad = true;
                    break;
                }
            }
            if(bad) {
                console.log("*wars notif: Broke because of: ", nonoWords[k], " in the text: ", text);
                element.style.backgroundColor = '#000';
                element.style.color = '#000';
            }
        }
        
    }
}