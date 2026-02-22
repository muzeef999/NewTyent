"use client";

import Image from "next/image";

const DetailComparison = () => {
  const products = [
    {
      id: 1,
      name: "TYENT NMP-5",
      price: 168000,
      generates: "7 Water types",
      plates: 5,
      orp: -850,
      warranty: "3 years on Machine & 15 years on plates.",
      image: "/detailcomparison/nmp5.png",
      highlight: true,
    },
    {
      id: 2,
      name: "KANGEN Jr4",
      price: 218000,
      generates: "5 Water types",
      plates: 4,
      orp: -450,
      warranty: "3 years on Machine",
      image: "/detailcomparison/jr4.png",
      highlight: false,
    },
    {
      id: 3,
      name: "TYENT NMP-7",
      price: 205000,
      generates: "7 Water types",
      plates: 7,
      orp: -950,
      warranty: "3 years on Machine & 15 years on plates.",
      image: "/detailcomparison/nmp5.png",
      highlight: true,
    },
    {
      id: 4,
      name: "KANGEN SD501DX",
      price: 310000,
      generates: "5 Water types",
      plates: 7,
      orp: -631,
      warranty: "5 years on Machine",
      image: "/detailcomparison/sd501dx.png",
      highlight: false,
    },
    {
      id: 5,
      name: "TYENT NMP-9",
      price: 238000,
      generates: "7 Water types",
      plates: 9,
      orp: -1050,
      warranty: "3 years on Machine & 15 years on plates.",
      image: "/detailcomparison/nmp9.png",
      highlight: true,
    },
    {
      id: 6,
      name: "KANGEN K8",
      price: 345000,
      generates: "5 Water types",
      plates: 8,
      orp: -722,
      warranty: "5 years on Machine",
      image: "/detailcomparison/k8.png",
      highlight: false,
    },
    {
      id: 7,
      name: "TYENT NMP-11",
      price: 273000,
      generates: "7 Water types",
      plates: 11,
      orp: -1150,
      warranty: "3 years on Machine & 15 years on plates.",
      image: "/detailcomparison/nmp9.png",
      highlight: true,
    },
    {
      id: 8,
      name: "KANGEN SUPER SD501",
      price: 378000,
      generates: "5 Water types",
      plates: 12,
      orp: -800,
      warranty: "5 years on Machine",
      image: "/detailcomparison/super501.png",
      highlight: false,
    },
  ];

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN").format(price);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold">
        Detailed Product Comparison
      </h2>

      <div className="row">
        {products.map((product) => (
          <div
            key={product.id}
            className="col-md-6 col-lg-3 mb-4"
          >
            <div
              className={`card h-100 shadow-sm ${
                product.highlight ? "border-success" : ""
              }`}
            >
              <div className="text-center p-3">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={220}
                  height={220}
                  className="img-fluid"
                />
              </div>

              <div className="card-body">
                <h6 className="fw-bold text-center">
                  {product.name}
                </h6>

                <ul className="list-group list-group-flush mt-3">
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Price</span>
                    <span className="fw-bold">
                      ₹{formatPrice(product.price)}/-
                    </span>
                  </li>

                  <li className="list-group-item d-flex justify-content-between">
                    <span>Generates</span>
                    <span>{product.generates}</span>
                  </li>

                  <li className="list-group-item d-flex justify-content-between">
                    <span>Plates</span>
                    <span>{product.plates}</span>
                  </li>

                  <li className="list-group-item d-flex justify-content-between">
                    <span>ORP</span>
                    <span>{product.orp}</span>
                  </li>

                  <li className="list-group-item">
                    <strong>Warranty:</strong>
                    <div className="small text-muted mt-1">
                      {product.warranty}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailComparison;