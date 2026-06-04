import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-8xl font-bold text-brand-200 mb-2">404</h1>
      <p className="text-xl font-semibold text-gray-800 mb-2">Página no encontrada</p>
      <p className="text-gray-500 text-sm mb-8">La ruta que buscas no existe.</p>
      <Link
        to="/"
        className="bg-brand-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-brand-800 transition-colors"
      >
        Volver al Inicio
      </Link>
    </div>
  )
}

export default NotFoundPage
