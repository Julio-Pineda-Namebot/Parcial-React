const MODALIDAD_STYLES = {
  Presencial: 'bg-success-100 text-success-700',
  Virtual:    'bg-brand-100 text-brand-700',
  Híbrido:    'bg-brand-200 text-brand-900',
}

function CourseCard({ curso, onEliminar, onToggleActivo }) {
  const { id, nombre, descripcion, duracion, modalidad, precio, activo } = curso

  return (
    <div
      className={`rounded-xl shadow-md p-5 flex flex-col gap-3 transition-colors ${
        activo ? 'bg-white' : 'bg-inactive'
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-base font-semibold text-gray-900 leading-tight">{nombre}</h3>
        <span
          className={`text-xs px-2 py-1 rounded-full font-medium whitespace-nowrap ${
            MODALIDAD_STYLES[modalidad] ?? 'bg-gray-100 text-gray-600'
          }`}
        >
          {modalidad}
        </span>
      </div>

      <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">{descripcion}</p>

      <div className="flex gap-4 text-sm text-gray-700">
        <span>
          <i className="fa-solid fa-clock"></i>{' '}
          {duracion}
        </span>
        <span>
          <i className="fa-solid fa-money-bill"></i>{' '}
          S/ {parseFloat(precio).toFixed(2)}
        </span>
      </div>

      <span
        className={`text-xs font-medium w-fit px-2 py-0.5 rounded-full ${
          activo
            ? 'bg-success-100 text-success-700'
            : 'bg-inactive text-gray-500'
        }`}
      >
        {activo ? '● Activo' : '● Inactivo'}
      </span>

      <div className="flex gap-2 mt-auto pt-3 border-t border-gray-200">
        <button
          onClick={() => onToggleActivo(id)}
          className={`flex-1 text-xs py-1.5 rounded-full font-medium transition-colors cursor-pointer ${
            activo
              ? 'bg-warning-100 text-warning-700 hover:bg-warning-200'
              : 'bg-success-100 text-success-700 hover:bg-success-200'
          }`}
        >
          {activo ? 'Desactivar' : 'Activar'}
        </button>
        <button
          onClick={() => onEliminar(id)}
          className="flex-1 text-xs py-1.5 rounded-full font-medium bg-danger-100 text-danger-700 hover:bg-danger-200 transition-colors cursor-pointer"
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default CourseCard
