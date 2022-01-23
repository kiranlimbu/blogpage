/*
useEffect(() => {
  const cards = cardData.filter((card) => card.category === category);

  if (cards.length > 50) {
    setLoadLimit(cards.slice(0, 50));
  } else {
    setLoadLimit(cards);
  }
}, [category]);

// Pagination helper functions
// data that will be displayed next
const nextDisplay = loadLimit.slice(
  totalDisplayed,
  totalDisplayed + displayLimit
);

const totalPages = Math.ceil(loadLimit.length / displayLimit);

const onPageChange = ({ selected }) => {
  setCurrentPage(selected);
};

{
  totalPages > 1 && (
    <ReactPaginate
      previousLabel="Previous"
      nextLabel="Next"
      pageCount={totalPages}
      onPageChange={onPageChange}
      containerClassName={"paginationButtons"}
      previousLinkClassName={"nextButtons"}
      disabledClassName={"paginationDisabled"}
      activeClassName={"paginationActive"}
    />
  );
}
*/
