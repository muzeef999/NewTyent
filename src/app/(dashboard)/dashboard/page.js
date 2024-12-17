"use client"
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import dynamic from 'next/dynamic';
const BlogPostModal = dynamic(() => import('../compoents/BlogPost'), { ssr: false });

const Page = () => {

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      <h1>Dashboard</h1>
      <Button variant="primary" onClick={handleShow}>
        Create Blog Post
      </Button>

      
      {/* Modal */}
      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Blog Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <BlogPostModal />
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Page
