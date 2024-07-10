import { Link } from "react-router-dom";
import "./Resources.css";

export default function Resources() {
  return (
    <div className="resources-table-container">
      <Link to="/">
        <p className="back-from-icons">&larr; back</p>
      </Link>
      <table>
        <thead>
          <tr>
            <th>Icon</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Search</td>
            <td>
              <a target="_blank" href="https://icons8.com/icon/59878/search">
                Search icon by Icons8
              </a>
            </td>
          </tr>
          <tr>
            <td>Logo</td>
            <td>
              <a target="_blank" rel="noreferrer" href="http://www.freepik.com">
                Designed by Mudassir101 / Freepik
              </a>
            </td>
          </tr>
          <tr>
            <td>Pencil, Bin</td>
            <td>
              <a target="_blank" rel="noreferrer" href="http://www.freepik.com">
                Designed by pikisuperstar / Freepik
              </a>
            </td>
          </tr>
          <tr>
            <td>Close</td>
            <td>
              <a
                target="_blank"
                href="https://www.flaticon.com/free-icons/close"
                title="close icons"
              >
                Close icons created by Pixel perfect - Flaticon
              </a>
            </td>
          </tr>
          <tr>
            <td>User</td>
            <td>
              <a
                target="_blank"
                href="https://www.flaticon.com/free-icons/user"
                title="user icons"
              >
                User icons created by Becris - Flaticon
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
