import React, { useState } from 'react';
import { useAuth } from '../controllers/useAuth';
import { useNavigate, Link } from 'react-router-dom';

/**
 * Pantalla de inicio de sesión.
 *
 * [Fase 5 — Guía de atención] La línea decorativa bajo el <h1>
 * (border-b-4 border-navy w-16 mx-auto mt-2 mb-6) ancla visualmente
 * la jerarquía de la pantalla: el ojo sigue la línea desde el título
 * hacia el formulario. Esto aplica el principio de movimiento implícito
 * (líneas dirigen la atención hacia donde apuntan — Lidwell et al., 2003).
 * La línea corta (w-16 = 64px) centrada bajo un título largo crea
 * contraste de escala que refuerza el peso del título sin añadir texto.
 */
const LoginView: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await signIn(email, password);

    if (error) {
      setError('Las credenciales proporcionadas son incorrectas. Por favor, verifique su correo y contraseña.');
      setLoading(false);
    } else {
      navigate('/');
    }
  };

  return (
    <main className="flex justify-center items-center min-h-screen p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-sky-100">
      <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-xl shadow-navy/5 w-full max-w-[440px] border border-navy/5 animate-in zoom-in-95 duration-300">

        {/*
          [Fase 1 — Tamaño] text-2xl font-black = nivel H1, el elemento
          de mayor tamaño de la pantalla → jerarquía visual clara.
          [Fase 5 — Guía de atención] La línea decorativa (border-b-4
          border-navy w-16 mx-auto) actúa como ancla visual: dirige
          la mirada desde el título hacia el formulario de abajo.
          El color navy en la línea es consistente con el sistema de
          colores L1 (#003366), reforzando que es un elemento primario.
        */}
        <div className="text-center mb-8">
          <h1 className="mt-0 mb-3 text-navy font-black text-2xl uppercase tracking-tight">
            Inicio de Sesión
          </h1>
          {/* Línea ancla — señal de dirección hacia el formulario */}
          <div className="w-16 h-1 bg-navy rounded-full mx-auto mb-3" aria-hidden="true" />
          <p className="text-slate-500 text-sm font-medium italic">
            Bienvenido ingrese sus datos.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="flex flex-col gap-2">
            {/* [Fase 3 — Contraste] text-slate-700 ratio 8:1 ✓ */}
            <label htmlFor="email" className="text-sm font-bold text-slate-700">
              Correo Electrónico
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-3 border border-slate-200 rounded-lg text-base transition-all focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/5"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingrese su dirección de correo"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm font-bold text-slate-700">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              className="w-full p-3 border border-slate-200 rounded-lg text-base transition-all focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/5"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingrese su contraseña"
              required
            />
          </div>

          {error && (
            <div
              className="text-red-600 bg-red-50 p-3 rounded-lg text-sm border border-red-100 font-medium"
              role="alert"
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full p-3.5 bg-navy text-white border-none rounded-xl text-base font-black cursor-pointer transition-all hover:bg-navy-light disabled:bg-slate-300 disabled:cursor-not-allowed shadow-lg shadow-navy/20 active:scale-[0.98]"
          >
            {loading ? 'Validando...' : 'Acceder al Sistema'}
          </button>
        </form>

        <p className="text-center mt-8 text-sm text-slate-500 font-medium">
          ¿No dispone de una cuenta?{' '}
          <Link to="/register" className="text-navy font-bold no-underline hover:underline ml-1">
            Solicitar Registro
          </Link>
        </p>
      </div>
    </main>
  );
};

export default LoginView;