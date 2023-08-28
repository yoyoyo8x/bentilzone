import Swal from "sweetalert2";


function PopupDelete (){
    Swal.fire({
    title: 'Do you want to detele this?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Yes',
    denyButtonText: `No`,
    }).then((result) => {
    if (result.isConfirmed) {
        Swal.fire('Deleted!', '', 'success')
    } 
    })
}
export default PopupDelete;