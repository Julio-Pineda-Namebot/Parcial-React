import { useState } from 'react'

const INITIAL_FORM = {
  nombre: '',
  descripcion: '',
  duracion: '',
  modalidad: '',
  precio: '',
}

function CourseForm({ onAgregar }) {
  const [form, setForm] = useState(INITIAL_FORM)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (Object.values(form).some((v) => !String(v).trim())) {
      setError('Todos los campos son obligatorios.')
      return
    }
    onAgregar(form)
    setForm(INITIAL_FORM)
    setError('')
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Datos del Curso</h2>

      {error && (
        <p className="text-danger-600 text-sm mb-4 bg-danger-50 border border-danger-200 rounded-lg px-3 py-2">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Nombre del curso"
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Duración</label>
          <input
            type="text"
            name="duracion"
            value={form.duracion}
            onChange={handleChange}
            placeholder="Ej. 40 horas"
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600"
          />
        </div>

        <div className="flex flex-col gap-1 md:col-span-2">
          <label className="text-sm font-medium text-gray-700">Descripción</label>
          <textarea
            name="descripcion"
            value={form.descripcion}
            onChange={handleChange}
            rows={3}
            placeholder="Descripción del curso"
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600 resize-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Modalidad</label>
          <select
            name="modalidad"
            value={form.modalidad}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600 bg-white"
          >
            <option value="">Selecciona modalidad</option>
            <option value="Presencial">Presencial</option>
            <option value="Virtual">Virtual</option>
            <option value="Híbrido">Híbrido</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Precio (S/)</label>
          <input
            type="number"
            name="precio"
            value={form.precio}
            onChange={handleChange}
            placeholder="0.00"
            min="0"
            step="0.01"
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600"
          />
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="bg-brand-700 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-brand-800 transition-colors cursor-pointer"
          >
            Guardar Curso
          </button>
        </div>
      </form>
    </div>
  )
}

export default CourseForm
