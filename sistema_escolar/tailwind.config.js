module.exports = {
  content: [
    "./core/templates/**/*.html",
    "./templates/**/*.html",
    "./**/*.js",
    "./**/*.jsx",
    "./**/*.ts",
    "./**/*.tsx",
  ],
  safelist: [
    // Paleta completa de slate para casos dinámicos
    'bg-slate-50',
    'bg-slate-100',
    'bg-slate-200',
    'bg-slate-300',
    'bg-slate-400',
    'bg-slate-500',
    'bg-slate-600',
    'bg-slate-700',
    'bg-slate-800',
    'bg-slate-900',
    // Ejemplos con opacidad en la sintaxis moderna
    'bg-white/10',
    'bg-black/20',
    'border-white/30',
    'backdrop-blur-md',
  ],
  theme: {
    extend: {
      // Si quieres extender colores o agregar extras, acá va
      colors: {
        // Ejemplo de extensión:
        slate: {
          950: '#0f172a',
        },
      },
    },
  },
  plugins: [],
};
