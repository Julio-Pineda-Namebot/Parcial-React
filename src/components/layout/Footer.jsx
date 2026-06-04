function Footer() {
  return (
    <footer className="bg-footer-bg text-white">
      <div className="max-w-6xl mx-auto px-6 border-t border-footer-border">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-6 text-sm">
          <span className="font-bold text-base tracking-widest uppercase">
            <img src="/src/assets/favicon.png"
              alt="Logo"
              className="h-12 w-full"
            />
            Academia XYZ
          </span>

          <div className="text-footer-muted text-center leading-relaxed">
            <p>Plataforma de Gestión de Cursos</p>
            <p>Ica, Perú</p>
          </div>

          <span className="text-footer-muted">
            © {new Date().getFullYear()} Academia XYZ. Todos los derechos reservados
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
