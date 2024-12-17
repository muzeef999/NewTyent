import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="page_404">
      <Container>
        <Row className="justify-content-center">
          <Col sm={12} className="text-center">
            {/* Lottie Animation */}
               
            

            {/* Error Content */}
            <div className="content_box_404">
              <h3 className="h2">Oops! Page Not Found</h3>
              <p>The page you're looking for doesn't exist or has been moved.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
