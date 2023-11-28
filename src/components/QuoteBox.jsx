import "./styles/QuotesBox.css";

const QuoteBox = ({ handleChangeQuote, quote }) => {
  return (
    <section className="quoteBox">

      <section className="container">
      <h1>Fortune Cookies</h1>
        <article>{quote.phrase}</article>
        <button onClick={handleChangeQuote}>Try luck</button>
      </section>

      <footer>Fuente: {quote.author}</footer>
    </section>
  );
};
export default QuoteBox;
