import CourseCard from '@/components/courses/CourseCard'

function CourseList({ cursos, onEliminar, onToggleActivo }) {
  if (cursos.length === 0) {
    return (
      <div className="text-center text-gray-400 py-16 bg-white rounded-xl shadow-md">
        <p className="text-5xl mb-4">📚</p>
        <p className="text-base font-medium">No hay cursos registrados.</p>
        <p className="text-sm mt-1">¡Agrega el primero usando el formulario!</p>
      </div>
    )
  }

  return (
    <section>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Lista de Cursos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cursos.map((curso) => (
          <CourseCard
            key={curso.id}
            curso={curso}
            onEliminar={onEliminar}
            onToggleActivo={onToggleActivo}
          />
        ))}
      </div>
    </section>
  )
}

export default CourseList
