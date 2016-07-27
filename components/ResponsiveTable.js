import React from 'react';
import {Table} from 'react-bootstrap';

class ResponsiveTable extends React.Component {
  render() {
    return (
      <Table responsive>
        <thead>
          <tr>
            <th>#ID</th>
            <th>Customer</th>
            <th>Manager</th>
            <th>City</th>
            <th>State</th>
            <th>Email</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default ResponsiveTable;
