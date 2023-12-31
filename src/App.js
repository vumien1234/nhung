import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    birthdate: '',
    gender: '',
  });
  const [submittedData, setSubmittedData] = useState([]); // Store submitted data as an array of objects
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setSubmittedData([...submittedData, formData]); // Add the current form data to the submittedData array
    setFormData({ name: '', birthdate: '', gender: '' }); // Clear the form after submission
  };

  return (
    <div>
      <style>
        {`
          table {
            border-collapse: collapse;
            margin: 0 auto;
            text-align: center;
            width: 100%;
          }

          .container {
            width: 500px;
            margin: auto;
            border: 1px solid #ccc;
            border-radius: 10px;
            padding: 20px;
            background-color: #eee;
          }

          input {
            width: 100%;
          }

          th, td {
            border: 1px solid #000;
            padding: 8px;
            text-align: center;
          }
        `}
      </style>
      <div className='container'>
        <div>
          <table>
            <tr>
              <th><strong>STT</strong></th>
              <th>Nhiệt độ</th>
              <th>Độ ẩm</th>
            </tr>
            <tr>
              <td>1</td>
              <td>30</td>
              <td>65</td>
            </tr>
            <tr>
              <td>2</td>
              <td>31</td>
              <td>66</td>
            </tr>
            <tr>
              <td>3</td>
              <td>32</td>
              <td>67</td>
            </tr>
          </table>
        </div>
        <div className='form'>
          <form onSubmit={handleSubmit}>
            <h3>Họ Tên <input type='text' name='name' value={formData.name} onChange={handleInputChange} /></h3>
            <h3>Ngày sinh <input type='date' name='birthdate' value={formData.birthdate} onChange={handleInputChange} /></h3>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h3>Giới tính:</h3>
              <label>
                Nam <input type='radio' name='gender' value='Nam' checked={formData.gender === 'Nam'} onChange={handleInputChange} />
              </label>
              <label>
                Nữ <input type='radio' name='gender' value='Nữ' checked={formData.gender === 'Nữ'} onChange={handleInputChange} />
              </label>
            </div>
            <button type='submit' style={{ backgroundColor: 'green', color: '#fff' }}>Lưu thông tin</button>
          </form>
        </div>
        <div style={{marginTop:'10px'}}>
          {submitted && (
            <table>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Họ Tên</th>
                  <th>Ngày sinh</th>
                  <th>Giới tính</th>
                </tr>
              </thead>
              <tbody>
                {submittedData.map((data, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.name}</td>
                    <td>{data.birthdate}</td>
                    <td>{data.gender}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
