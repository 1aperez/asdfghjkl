//type your code inside this function
function TorrentFile(){

//first function
function numberOfPackets(fileSize){
    
    return fileSize/50
}




//second function
    function buildTorrentPacketArray(numberOfPackets){
        let list=[];
            
        for(let i=0; i < numberOfPackets; i++){
            list [i]= 1;
        }
    return list
    }
}

//main test methods
console.log(numberOfPackets(1000))
console.log(buildTorrentPacketArray(20))