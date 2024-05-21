import PropTypes from "prop-types";

function BookCard(props) {
    const { book } = props
    const url = "http://localhost:8000/api/books";

const rent = async () => {
    const response = await fetch(url + "/" + book.id + "/rent", {
        method: "POST",
        headers: {
            "Accept": "application/json"
        }
    });
    if (response.ok){
        alert("Sikeres foglalás");
    }else {
        const data = await response.json();
        alert(data.message);
    }
}

    return (
        <div className="col card">
            <div className="card-body">
                <h2>{book.title}</h2>
                <p>Kiadási év: {book.publish_year}
                <br />
                Hossz: {book.page_count} oldal</p>
                <img className="img-fluid" src={"szerzok/" + book.author + ".jpg"} alt={book.author} />
                <button className="btn btn-success" style={{width: "100%"}} onClick={() => rent()}>Kölcsönzés</button>
            </div>
        </div>
    );
};
    
    BookCard.propTypes = {
    book: PropTypes.object.isRequired
    };

export default BookCard;