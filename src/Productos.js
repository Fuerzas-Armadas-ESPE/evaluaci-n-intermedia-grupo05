import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Table } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import ProductCard from './productCard';

function Productos() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const { data, error } = await supabase.from('Tema').select('*').limit(10);
      if (error) throw error;
      if (data != null) {
        setProducts(data);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  function printProductData() {
    const printWindow = window.open('', '_blank');
    // ... (your existing printing logic)
  }

  return (
    <div className="bg-light" style={{ minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <Navbar>
        <Container>
          {/* Navbar content */}
        </Container>
      </Navbar>

      <Container className="my-4">
        <Table bordered hover responsive className="bg-white shadow">
          <thead className="bg-primary text-light">
            <tr>
              <th>Tarea</th>
              <th>Descripción</th>
              <th>Tema</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Productos;
