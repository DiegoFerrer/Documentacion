const singleThread = () => {
    const c = console.log,
    p = process

    c(p)
}


module.exports = singleThread

// EL PROCESO DE NODE

c(`ID del proceso....${p.pid}`)
c(`Titulo....${p.title}`)
c(`Directorio de Node....${p.execPath}`)
c(`Directori actual....${p.cwd()}`)
c(`Version de node....${p.version}`)
c(`Versiones Dependencias....${p.versions}`)
c(`Plataforma(S.O)....${p.platform}`)
c(`Arquitectura(S.O)....${p.arch}`)
c(`Tiempo activo de node....${p.uptime()}`)
c(`Argumentos del proceso....${p.argv}`)