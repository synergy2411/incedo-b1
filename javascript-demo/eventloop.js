

// program starts

function shoudlContinue(){
    // Check for any Async task
    var pendingOperation = [];
    var pendingFileIO = [];
    var pendingNetworkCall = [];

    return pendingFileIO | pendingNetworkCall | pendingOperation;
}

while(shouldContinue()){
    // next cycle - all async tasks takes place
}

// program terminates