const bubbleSort = (array) => {
    let swapsPerformed;
    do {
        swapsPerformed = false
        for (let i = 0; i <= array.length; i++) {

            if (array[i] > array[i + 1]) {
                // swap      
                let k = array[i];
                array[i] = array[i + 1];
                array[i + 1] = k;
                swapsPerformed = true;
            }
        }
    } while (swapsPerformed)
    
    return array;   
}

export default bubbleSort;