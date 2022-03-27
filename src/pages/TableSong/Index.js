const TableSong = () => {
  return (
    <table className="w-full">
      <tr>
        <th className="border-b border-gray-800 text-left px-2 py-3">#</th>
        <th className="border-b border-gray-800 text-left px-2 py-3">Title</th>
        <th className="border-b border-gray-800 text-left px-2 py-3">Album</th>
        <th className="border-b border-gray-800 text-left px-2 py-3">
          Date Add
        </th>
      </tr>
      <tr>
        <td className="px-2 py-3">1</td>
        <td className="px-2 py-3">Dante Sparks</td>
        <td className="px-2 py-3">Italy</td>
      </tr>
    </table>
  );
};

export default TableSong;
