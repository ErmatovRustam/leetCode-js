var isValid = function(s) {
    let counter = 0;
    let length = s.length;
    while(counter <= length){
        if(s.includes("()")){
            s = s.replaceAll("()", "")
        }
        if(s.includes("{}")){
            s = s.replaceAll("{}", "")
        }
        if(s.includes("[]")){
            s = s.replaceAll("[]", "")
        }

        counter++;
    }
    return s.length === 0;
};