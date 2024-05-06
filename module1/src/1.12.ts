{

    //

    // nullable type /Never type /Unknown type

    const searchName = (value: string | null) => {
        if ( value ) {
            console.log("Searching");
        } else {
            console.log("There is nothing to search");
        }
    }

    searchName(null)

 


    //Unknown typeof


    const getSpeedInMeterPerSecond = (value: unknown) => {
        
        if ( typeof value === "number") {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }

      else  if (typeof value === "string") {

            const [result, unit] = value.split(" ");
            const ParseFloatResult = parseFloat(result)

            const convertedSpeed = (ParseFloatResult * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);

        }

        else {
            console.log("Wrong Input");
        }
    }

    // getSpeedInMeterPerSecond(`1000 kmh^-1`)
    getSpeedInMeterPerSecond(null)

    //



    // Never type


    const throwError = (msg: string ) : never => {
        throw new Error(msg);
        
    }

    throwError("Muskil se error hu giya")


}