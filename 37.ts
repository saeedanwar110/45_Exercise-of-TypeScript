/* Modify the make_shirt() function so that shirts are large by default, with a message that reads 
I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any 
size with a different message. */


function make_shirt(label:string, size:String = "large"){
    console.log(`I have orderd for shirt of ${size} size, and message '${label}' will be written on it.`);
    }
    make_shirt("I Love Typescript.")


    function make_shirt2(size:string, label:String = "The Cool Day"){
        console.log(`I have orderd for shirt of ${size} size, and message '${label}' will be written on it.`);
        }
        make_shirt2("Large with half arms")

            // making shirts large with half arms
        function make_shirt3(size:string, label:String = "The Cool Day"){
            console.log(`I have orderd for shirt of ${size} size, and message '${label}' will be written on it.`);
            }
            make_shirt3("Medium")

            // making shirts os any size
            function make_shirt4(label:string, size:String = "Any" ){
                console.log(`I have orderd for shirt of ${size} size, and message '${label}' will be written on it.`);
                }
                make_shirt4("Am I a Cool ?")