import React from 'react'

const DummyTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>John Doe</td>
          <td>30</td>
          <td>USA</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jane Smith</td>
          <td>28</td>
          <td>Canada</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Michael Johnson</td>
          <td>35</td>
          <td>UK</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Emily Davis</td>
          <td>25</td>
          <td>Australia</td>
        </tr>
      </tbody>
    </table>
  )
}

export default DummyTable