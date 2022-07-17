import { useEffect, useState } from "react";
import fakeFetch from "../../utils/fakeFetch";
import Pagination from "../common/Pagination";
import Filters from "./Filters";
import UserCard from "./UserCard";

function Users() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(false);

  const [page, setPage] = useState(1);
  const [asc ,setAsc]=useState("asc");
  const [limit ,setLimit]=useState(5)
  // let A=fakeFetch({})
  // A .then((el)=>{
  //   console.log(el)
  // })

  const getdata = () => {
    setLoad(true);
   
    let A = fakeFetch({page,asc,limit});
    A.then((el) => {
      //console.log(el.data);
      setData(el.data);
      setLoad(false);
      setError(false);
    }) .catch((el)=>{
      setError(true);
     })
  };
  useEffect(() => {
    getdata();
  }, [page,asc,limit]);
  const handleclick=()=>{
    setPage(page+1);
    console.log("kundan")
  }

  return (
    <div>
      {
      
      load?<div data-testid="loading-indicator">...loading</div>
      :error?<div data-testid="error-indicator">Error: Something went wrong</div>
     :(
      <div>
      {data.map((item)=>(
        <UserCard key={item.id} name={item.name} avatar={item.avatar}/>
      ))}
       
      
      {/* <UserCard data={data.data}/> */}
      <Filters />
      <Pagination fn={handleclick} current={page} total={10}/>
      </div>
     )
     }
      
    
    </div>
      
  );
      
}

export default Users;
