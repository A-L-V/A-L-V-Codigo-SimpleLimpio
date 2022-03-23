/*
    Nos permite teletransportar los componentes a otro nodo HTML

*/


ReactDOM.createPortal(
    <App/>,
    document.getElementById('modal')
)

//En una funcion extra
function Modal({children}){
    return ReactDOM.createPortal(
        children,
        document.getElementById('modal')
    );
}
export {Modal}