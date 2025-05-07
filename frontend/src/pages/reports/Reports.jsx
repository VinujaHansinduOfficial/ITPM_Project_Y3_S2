import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import html2pdf from 'html2pdf.js';
import './reports.css';

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [printDone, setPrintDone] = useState(false);
  const [printMessage, setPrintMessage] = useState('');
  const reportRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/reports');
        const data = await res.json();
        setReports(data);
      } catch (err) {
        console.error('Failed to fetch reports:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  useEffect(() => {
    if (reports.length > 0) {
      setTimeout(() => {
        window.print();
      }, 500);
    }
  }, [reports]);

  useEffect(() => {
    const handleAfterPrint = () => {
      setPrintDone(true);
      setPrintMessage('🖨️ Printing completed successfully!');
    };

    window.addEventListener('afterprint', handleAfterPrint);
    return () => {
      window.removeEventListener('afterprint', handleAfterPrint);
    };
  }, []);

  const handleDownloadPDF = () => {
    const element = reportRef.current;
    const opt = {
      margin: 0.5,
      filename: 'Reports.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="reports-container">
      <h2>Reports</h2>

      {loading ? (
        <p>Loading reports...</p>
      ) : reports.length === 0 ? (
        <p>No reports available.</p>
      ) : (
        <div ref={reportRef}>
          {reports.map((report) => (
            <div key={report._id} className="report-card">
              <h3>{report.title}</h3>
              <p>{report.content}</p>
              <small>{new Date(report.date).toLocaleDateString()}</small>
            </div>
          ))}
        </div>
      )}

      {printDone && (
        <div className="print-feedback">
          <p className="success-message">{printMessage}</p>
          <button onClick={handleDownloadPDF}>Download as PDF</button>
          <button onClick={() => navigate('/')}>Back to Home</button>
        </div>
      )}
    </div>
  );
};

export default Reports;
