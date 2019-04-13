class GlobalState {
    name = 'GlobalState';

    version = '0.0.1';

}


export const globalState = (function(){
    alert('globalState is created');
    return new GlobalState();
})();