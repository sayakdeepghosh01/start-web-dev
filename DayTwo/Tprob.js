function printPattern(rows) {
    for (let i = rows; i >= 1; i--){
        let row = '';

        //1st 
        for (let j = 1; j <= i; j++){
            row += '*';
        }
//row
        console.log(row);
    }
    
    for (let i = 1; i <= rows; i++){
        let row = '';

        // 2nd
        for (let j = 1; j <= i; j++){
            row += '*';
        }
//row
        console.log(row);
    }
}

printPattern(6);
