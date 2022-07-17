import Button from "./Button";

function Pagination({ fn, total, current }) {
  let pages = new Array(total).fill(0).map((item, index) => {
    // finish code with Button
    // it should be 1,2,3....n pages
    return (
    <Button A={fn} disabled={current==index+1}>{index+1}</Button>
    )
    
    
  });

  return total !== 0 && pages;
}
export default Pagination;
