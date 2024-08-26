function TableDisplay({ data }) {
  const satInfo = (props) => {
    return props.map((data, id) => 
      <tr key = {id}>
        <td>{data.name}</td>
        <td>{data.type}</td>
        <td>{data.launchDate}</td>
        <td>{data.operational ? 'Satelite Active' : 'Satelite Inactive'}</td>
      </tr>
  );
  }
  return <tbody>{satInfo(data)}</tbody>
}

const Table = ({ sat }) => {

  return (
    <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Type of Satelite</th>
       <th>Launch Date</th>
       <th>Status</th>
     </tr>
     </thead>
      <TableDisplay data={sat}/>
   </table>
  );
};

export default Table;