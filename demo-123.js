  log("Loading and initializing sqlite3 module...");
  if(globalThis.window!==globalThis) /*worker thread*/{
    /*
      If sqlite3.js is in a directory other than this script, in order
      to get sqlite3.js to resolve sqlite3.wasm properly, we have to
      explicitly tell it where sqlite3.js is being loaded from. We do
      that by passing the `sqlite3.dir=theDirName` URL argument to
      _this_ script. That URL argument will be seen by the JS/WASM
      loader and it will adjust the sqlite3.wasm path accordingly. If
      sqlite3.js/.wasm are in the same directory as this script then
      that's not needed.

      URL arguments passed as part of the filename via importScripts()
      are simply lost, and such scripts see the globalThis.location of
      _this_ script.
    */
    let sqlite3Js = 'sqlite3.js';
    const urlParams = new URL(globalThis.location.href).searchParams;
    if(urlParams.has('sqlite3.dir')){
      sqlite3Js = urlParams.get('sqlite3.dir') + '/' + sqlite3Js;
    }
    importScripts(sqlite3Js);
  }
  globalThis.sqlite3InitModule({
    /* We can redirect any stdout/stderr from the module like so, but
       note that doing so makes use of Emscripten-isms, not
       well-defined sqlite APIs. */
    print: log,
    printErr: error
  }).then(function(sqlite3){
    //console.log('sqlite3 =',sqlite3);
    log("Done initializing. Running demo...");
    try {
      demo1(sqlite3);
    }catch(e){
      error("Exception:",e.message);
    }
  });
})();
