export function dot(weights, inputs){
    let result = new Array(weights.length);
    for(let i = 0;i < weights.length; i++){

        for(let j = 0; j < weights[i].length; j++){

            if(!result[i]){
                result[i] = 0;
            }

            result[i] += weights[i][j] * inputs[j];

        }

    }
    return result;
}

export function plus2Matrix(arr1,arr2){

    let result = new Array(arr1.length);

    for(let i = 0 ; i < arr1.length; i++){

        result[i] = arr1[i] + arr2[i];

    }
    
    return result;

}

export function dotBatch(weights, inputs){
    let result = [];
    if(weights[0].length == inputs[0].length){
        for(let input of inputs){
            result.push(dot(weights,input));
        }
    }
    return result;
}

export function random(min, max){
    let different = max*1.0 - min;
    return (Math.random() * different + min);
}

// param: 
// layers: number of hidden layers
// numOfNodes : array of number of node for each layer
export function initNetwork(layers, numOfNodes, randMin, randMax){

}