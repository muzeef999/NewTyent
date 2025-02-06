import { useEffect, useState } from "react";
import { Table, Container, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";

const LeadDashboard = () => {
  const [leads, setLeads] = useState([]);
  const [filteredLeads, setFilteredLeads] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(new Date());

  useEffect(() => {
    fetch("http://localhost:3000/api/lead")
      .then((res) => res.json())
      .then((data) => {
        setLeads(data);
        filterLeadsByMonth(data, selectedMonth);
      })
      .catch((err) => console.error("Error fetching leads:", err));
  }, []);

  useEffect(() => {
    filterLeadsByMonth(leads, selectedMonth);
  }, [selectedMonth, leads]);

  const filterLeadsByMonth = (leads, month) => {
    const monthString = month.toLocaleString("default", { month: "long", year: "numeric" });

    const stats = {};
    leads.forEach((lead) => {
      const { assignedTo, status, createdAt } = lead;
      if (!assignedTo) return;

      const leadMonth = new Date(createdAt).toLocaleString("default", { month: "long", year: "numeric" });
      if (leadMonth !== monthString) return;

      if (!stats[assignedTo]) {
        stats[assignedTo] = { assigned: 0, completed: 0 };
      }

      stats[assignedTo].assigned += 1;
      if (status === "Completed") stats[assignedTo].completed += 1;
    });

    const sortedStats = Object.entries(stats).map(([manager, data]) => ({
      manager,
      assigned: data.assigned,
      completed: data.completed,
    }));

    setFilteredLeads(sortedStats);
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Monthly Lead Performance</h2>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <Form.Label><strong>Select Month:</strong></Form.Label>
        <DatePicker
          selected={selectedMonth}
          onChange={(date) => setSelectedMonth(date)}
          dateFormat="MM/yyyy"
          showMonthYearPicker
          className="form-control w-100"
        />
      </div>

      <Table striped bordered hover responsive>
        <thead className="table-dark text-center">
          <tr>
            <th>Manager Name</th>
            <th>Leads Assigned</th>
            <th>Leads Completed</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {filteredLeads.length > 0 ? (
            filteredLeads.map(({ manager, assigned, completed }) => (
              <tr key={manager}>
                <td>{manager}</td>
                <td>{assigned}</td>
                <td>{completed}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-muted">No leads found for this month.</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default LeadDashboard;
