import { color } from "framer-motion";
import React from "react"; 
import { Col, Row, Table } from "react-bootstrap";

const PriceComp = () => {
  const tableData = [
    {
      title: "TYENT NMP-5",
      bgColor: "#c3e6fa",
      color: "#008ac7",
      details: [
        { label: "Price:", value: "168,000/-" },
        { label: "Generates:", value: "7 Water types" },
        { label: "Plates:", value: "5" },
        { label: "ORP:", value: "-850" },
        { label: "Warranty:", value: "3 yr & 15 yr on plates" },
      ],
    },
    {
      title: "ENAGIC KANGEN Jr4",
      bgColor: "#d9dbda",
      color: "#000",
      details: [
        { label: "Price:", value: "218,000/-" },
        { label: "Generates:", value: "5 Water types" },
        { label: "Plates:", value: "4" },
        { label: "ORP:", value: "-450" },
        { label: "Warranty:", value: "5 years" },
      ],
    },
    {
      title: "TYENT NMP-7",
      bgColor: "#c3e6fa",
      color: "#008ac7",
      details: [
        { label: "Price:", value: "205,000/-" },
        { label: "Generates:", value: "7 Water types" },
        { label: "Plates:", value: "7" },
        { label: "ORP:", value: "-950" },
        { label: "Warranty:", value: "3 yr & 15 yr on plates" },
      ],
    },
    {
      title: "ENAGIC KANGEN SD501",
      bgColor: "#d9dbda",
      color: "#000",
      details: [
        { label: "Price:", value: "277,000/-" },
        { label: "Generates:", value: "5 Water types" },
        { label: "Plates:", value: "7" },
        { label: "ORP:", value: "-631" },
        { label: "Warranty:", value: "5 years" },
      ],
    },
    {
      title: "TYENT NMP-9",
      bgColor: "#c3e6fa",
      color: "#008ac7",
      details: [
        { label: "Price:", value: "238,000/-" },
        { label: "Generates:", value: "7 Water types" },
        { label: "Plates:", value: "9" },
        { label: "ORP:", value: "-1050" },
        { label: "Warranty:", value: "3 yr & 15 yr on plates" },
      ],
    },
    {
      title: "ENAGIC KANGEN K8",
      bgColor: "#d9dbda",
      color: "#000",
      details: [
        { label: "Price:", value: "345,000/-" },
        { label: "Generates:", value: "5 Water types" },
        { label: "Plates:", value: "8" },
        { label: "ORP:", value: "-722" },
        { label: "Warranty:", value: "5 years" },
      ],
    },
    {
      title: "TYENT NMP-11",
      bgColor: "#c3e6fa",
      color: "#008ac7",
      details: [
        { label: "Price:", value: "272,000/-" },
        { label: "Generates:", value: "7 Water types" },
        { label: "Plates:", value: "11" },
        { label: "ORP:", value: "-1150" },
        { label: "Warranty:", value: "3 yr & 15 yr on plates" },
      ],
    },
    {
      title: "ENAGIC KANGEN SUPER SD501",
      bgColor: "#d9dbda",
      color: "#000",
      details: [
        { label: "Price:", value: "378,000/-" },
        { label: "Generates:", value: "5 Water types" },
        { label: "Plates:", value: "12" },
        { label: "ORP:", value: "-800" },
        { label: "Warranty:", value: "5 years" },
      ],
    },
    
  ];

  return (
    <div className="price-comp">
     <br/>
      <Row>
        {tableData.map((data, index) => (
          <Col
            xs={12}
            md={6}
            key={index}
            className="d-flex align-items-center justify-content-center text-center"
          >
            <Table 
              bordered 
              hover 
              className="custom-table"
              style={{
                borderRadius: "4px", 
                overflow: "hidden", 
                backgroundColor:'#FFF'
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      color: data.color,
                    }}
                    colSpan="2"
                  >
                    <b>{data.title}</b>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.details.map((detail, idx) => (
                  <tr key={idx}>
                    <td style={{ color:data.color, textAlign:'start' }}>{detail.label}</td> {/* Blue heading color */}
                    <td style={{textAlign:'start'}}>{detail.value}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PriceComp;
