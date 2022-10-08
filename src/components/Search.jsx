import PropTypes from "prop-types";

const Search = ({ submit }) => {
  return (
    <div className="mt-5">
      <form onSubmit={submit} className="input-group mb-3">
        <input
          className="form-control mt-4"
          type="text"
          name="searchInput"
          placeholder="Buscar..."
        />
        <input
          type="submit"
          value="Buscar"
          className="btn btn-outline-secondary mt-4"
        />
      </form>
    </div>
  );
};

Search.propTypes = {
  submit: PropTypes.func,
};

export default Search;
