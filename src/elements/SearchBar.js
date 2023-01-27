import sweetAlert from 'sweetalert2';





function SearchBar() {


    const Search = e => {
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value.trim();
        
       


        if(keyword.length === 0) {
            sweetAlert.fire({
                title: 'Error',
                        text: 'Debes escribir algo',
                        icon: 'error',
                        confirmButtonText: 'Ok'
              })
        } else if (keyword.length < 4) {    
            sweetAlert.fire({
                title: 'Error',
                        text: 'Debes escribir al menos 4 caracteres',
                        icon: 'error',
                        confirmButtonText: 'Ok'
              })
        } else {
            e.currentTarget.keyword.value = "";
            window.location.href = `/results?keyword=${keyword}`
        }
        
    }

    return(
    <form onSubmit={Search} className="d-flex align-items-center">
        <label className="form-label mb-0 mx-2">
            <input className="form-control" type="text" name="keyword" placeholder="Search..." />
        </label>
        <button className="btn btn-success" type="submit"> Buscar </button>
    </form>
    )
}

export default SearchBar

