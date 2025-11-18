import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import SEOHead from '../../components/seo/SEOHead';

const ContactoPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contacto - José Sousa Preparador de Justicia",
    "description": "Contacta con José Sousa para resolver dudas sobre oposiciones de justicia. Consulta gratuita disponible.",
    "url": `${import.meta.env.VITE_SITE_URL || "https://example.com"}/contacto`,
    "mainEntity": {
      "@type": "Person",
      "name": "José Sousa",
      "jobTitle": "Preparador de Oposiciones de Justicia y Gestor Procesal",
      "worksFor": {
        "@type": "Organization",
        "name": "Oposiciones Justicia Sousa"
      },
      "email": "info@josesousa.es"
    }
  };

  return (
    <div className="w-full bg-white text-gray-900">
      <SEOHead
        title="Contacto | José Sousa - Preparador de Oposiciones Justicia"
        description="¿Tienes dudas sobre oposiciones de Auxilio Judicial, Tramitación o Gestión Procesal? Contacta con José Sousa para una consulta personalizada."
        structuredData={structuredData}
      />

      <Header />

      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Contacta con Nosotros
        </h1>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Rellena el siguiente formulario y nos pondremos en contacto contigo lo antes posible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* FORMULARIO */}
          <div className="p-6 rounded-2xl border border-gray-200 shadow-sm bg-white">
            <h2 className="text-2xl font-semibold mb-6">Formulario de Contacto</h2>

            <form
              className="grid grid-cols-1 gap-4"
              onSubmit={async (e) => {
                e.preventDefault();

                const form = e.currentTarget;

                const data = {
                  nombre_completo: (form as any)["nombre_completo"].value,
                  email: (form as any)["email"].value,
                  telefono: (form as any)["telefono"].value,
                  oposicion: (form as any)["oposicion"].value,
                  mensaje: (form as any)["mensaje"].value,
                };

                try {
                  const response = await fetch(
                    "https://hook.eu2.make.com/of9qggp1fh5axl6okphhylmsuapu88ds",
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(data),
                    }
                  );

                  if (!response.ok) {
                    alert("Hubo un error al enviar el formulario. Inténtalo más tarde.");
                    return;
                  }

                  alert("Formulario enviado correctamente. ¡Gracias por contactarnos!");
                  form.reset();
                } catch (error) {
                  console.error("Error al enviar:", error);
                  alert("No se pudo conectar con el servidor. Inténtalo más tarde.");
                }
              }}
            >

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  name="nombre_completo"
                  required
                  className="w-full p-3 mt-1 border rounded-xl focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full p-3 mt-1 border rounded-xl focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="telefono"
                  className="w-full p-3 mt-1 border rounded-xl focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Oposición de interés
                </label>
                <select
                  name="oposicion"
                  className="w-full p-3 mt-1 border rounded-xl focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="Auxilio Judicial">Auxilio Judicial</option>
                  <option value="Tramitación Procesal">Tramitación Procesal</option>
                  <option value="Gestión Procesal">Gestión Procesal</option>
                  <option value="No estoy seguro/a">No estoy seguro/a</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <textarea
                  name="mensaje"
                  maxLength={500}
                  className="w-full p-3 mt-1 border rounded-xl h-28 resize-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl mt-4 transition"
              >
                Enviar mensaje
              </button>

            </form>
          </div>

          {/* INFORMACIÓN LATERAL */}
          <div className="space-y-6 p-6 rounded-2xl bg-gray-50 border border-gray-200">
            <h2 className="text-2xl font-semibold">¿Por qué contactar con nosotros?</h2>
            <p className="text-gray-700">
              Resolveremos cualquier duda sobre las oposiciones de Auxilio Judicial,
              Tramitación Procesal o Gestión Procesal.
            </p>

            <p className="text-gray-700">
              Te ayudaremos a elegir la oposición adecuada, conocer requisitos,
              temarios, plazos y cómo empezar a preparar tu futuro laboral.
            </p>

            <div className="mt-4 p-4 bg-white border rounded-xl shadow-sm">
              <p className="font-semibold text-lg text-indigo-600">
                ¿Sabías que más del 70% de nuestros alumnos aprueban?
              </p>
              <p className="text-gray-700 mt-2">
                Nuestro 70% de tasa de éxito habla por sí solo. Ofrecemos seguimiento personalizado 
                para maximizar tus posibilidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactoPage;
