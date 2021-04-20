function showData(data) {
    document.getElementById('formInfo').innerHTML = JSON.stringify(data, null, 4)
}

function submitData() {
    const data = {}
    /**
     * Get the form elemnt 
     * Get the data in the form elemnt and assign
     * them to data.
     * Refer to Redme
    */


    //Do not change teh code after this line
    showData(data)
    return false
}