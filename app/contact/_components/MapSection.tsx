'use client'
import { motion } from 'framer-motion'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'

const center: L.LatLngExpression = [-1.2864, 36.8172]

export function MapSection() {
  return (
    <section className="section" id="map">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading-2 mb-4">Find Us</h2>
          <p className="text-secondary-600">
            Visit our main office in Nairobi CBD
          </p>
        </motion.div>

        <motion.div
          className="rounded-lg overflow-hidden shadow-soft"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ height: '500px' }}
        >
          <MapContainer
            center={center}
            zoom={16}
            scrollWheelZoom={false}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={center}>
              <Popup>Main Office</Popup>
            </Marker>
          </MapContainer>
        </motion.div>

        <motion.div
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="card">
            <h3 className="font-bold mb-2">Main Office</h3>
            <p className="text-secondary-600">
              Kimathi Street, Nairobi CBD<br />
              P.O. Box 12345-00100<br />
              Nairobi, Kenya
            </p>
          </div>
          <div className="card">
            <h3 className="font-bold mb-2">Warehouse</h3>
            <p className="text-secondary-600">
              Industrial Area<br />
              Enterprise Road<br />
              Nairobi, Kenya
            </p>
          </div>
          <div className="card">
            <h3 className="font-bold mb-2">Service Center</h3>
            <p className="text-secondary-600">
              Mombasa Road<br />
              Next to JKIA<br />
              Nairobi, Kenya
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}